const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v3.docx');

async function main() {
  const zip = await JSZip.loadAsync(fs.readFileSync(FILE));
  let xml = await zip.file('word/document.xml').async('string');
  let count = 0;

  // ── 5.7: remove the stray 'Se institucionalizar\u00e1' run that precedes 'Institucionalizar\u00e9 un esquema'
  // The paragraph for 5.7 has the run: <w:r><w:rPr>...</w:rPr><w:t>Se institucionalizar\u00e1</w:t></w:r>
  // followed by another run containing 'Institucionalizar\u00e9 un esquema permanente'
  const stray57_text = 'Se institucionalizar\u00e1</w:t></w:r>';
  const confirm57_next = 'Institucionalizar\u00e9 un esquema permanente';

  const idx57 = xml.indexOf(stray57_text);
  if (idx57 >= 0) {
    const afterIdx = xml.indexOf(confirm57_next, idx57);
    if (afterIdx >= 0 && afterIdx - idx57 < 600) {
      // find the opening <w:r> of this run
      const rOpen = xml.lastIndexOf('<w:r>', idx57);
      const rClose = idx57 + stray57_text.length; // points just after </w:r>
      xml = xml.substring(0, rOpen) + xml.substring(rClose);
      count++;
      console.log('\u2713 5.7: removed stray run');
    } else {
      console.log('\u2717 5.7: stray run not isolatable');
    }
  } else {
    console.log('\u2717 5.7: stray text not found');
  }

  // ── 8.3: 'se revisar\u00e1n los' + ' procedimientos' (split across 2 runs) \u2192 'revisar\u00e9 los procedimientos'
  const old83 = '<w:t>se revisar\u00e1n los</w:t></w:r><w:r w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> procedimientos';
  const new83 = '<w:t>revisar\u00e9 los</w:t></w:r><w:r w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> procedimientos';
  if (xml.includes(old83)) {
    xml = xml.replace(old83, new83);
    count++;
    console.log('\u2713 8.3: se revisar\u00e1n \u2192 revisar\u00e9');
  } else {
    console.log('\u2717 8.3: exact fragment not found - checking alt forms...');
    // Alternative: maybe 'se revisar\u00e1n' is in one w:t
    if (xml.includes('se revisar\u00e1n los procedimientos')) {
      xml = xml.replace('se revisar\u00e1n los procedimientos', 'revisar\u00e9 los procedimientos');
      count++;
      console.log('\u2713 8.3 alt: done');
    }
  }

  // ── Also fix 5.4: the old 'Se institucionalizar\u00e1' still prefixes the Institucionalizar\u00e9 for 5.4
  // From the output we see: "Se institucionalizará</w:t></w:r>" then "Institucionalizaré un procedimiento único"
  // That first occurrence was already handled above (we removed it)
  // But let's check if there is another occurrence for 5.4
  const check54 = xml.indexOf('Se institucionalizar\u00e1</w:t>');
  if (check54 >= 0) {
    const ctx54 = xml.substring(check54, check54 + 400).replace(/<[^>]+>/g, '').trim().substring(0, 150);
    console.log('5.4 still has Se institucionalizar\u00e1:', ctx54);
    // Remove it too
    const rOpen54 = xml.lastIndexOf('<w:r>', check54);
    const rClose54 = check54 + ('Se institucionalizar\u00e1</w:t></w:r>'.length);
    xml = xml.substring(0, rOpen54) + xml.substring(rClose54);
    count++;
    console.log('\u2713 5.4: removed second stray run');
  }

  // ── 5.3: check if there's still 'Impuls' + separate verb fragment leftover
  // The result should now be 'Impuls' + 'ar' + '\u00e9 la institucionalizaci\u00f3n'
  // Let's verify the text renders correctly
  const impulsIdx = xml.indexOf('Impuls');
  if (impulsIdx >= 0) {
    const ctx = xml.substring(impulsIdx, impulsIdx + 300).replace(/<[^>]+>/g, '');
    console.log('5.3 Impuls context (text only):', ctx.substring(0, 100));
  }

  zip.file('word/document.xml', xml);
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 } });
  fs.writeFileSync(FILE, buf);
  console.log('\n\u2705', count, 'correcciones finales aplicadas. Archivo actualizado.');
}

main().catch(console.error);
