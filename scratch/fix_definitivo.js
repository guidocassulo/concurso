/**
 * Corrección definitiva: eliminar runs con "Se" sobrantes que anteceden a verbos en primera persona.
 * Los problemas son del tipo: <w:r>...<w:t>Se implementará</w:t></w:r><w:r>...<w:t>Implementaré un...</w:t></w:r>
 */
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v3.docx');

async function main() {
  const zip = await JSZip.loadAsync(fs.readFileSync(FILE));
  let xml = await zip.file('word/document.xml').async('string');
  let count = 0;

  function removePrecedingRun(textInRun, confirmNext, label) {
    // Find a run whose <w:t> content is textInRun, followed by confirmNext text somewhere close by
    // Remove the entire <w:r>...</w:r> block
    const tOpen = `<w:t>${textInRun}</w:t>`;
    const idx = xml.indexOf(tOpen);
    if (idx < 0) {
      console.log('\u2717 Not found:', label, '| text:', textInRun.substring(0,40));
      return;
    }
    const afterIdx = xml.indexOf(confirmNext, idx);
    if (afterIdx < 0 || afterIdx - idx > 800) {
      console.log('\u2717 Confirm not nearby:', label, '| confirm:', confirmNext.substring(0,40));
      return;
    }
    // Find opening <w:r> before idx
    const rOpen = xml.lastIndexOf('<w:r', idx);
    const rClose = xml.indexOf('</w:r>', idx) + '</w:r>'.length;
    xml = xml.substring(0, rOpen) + xml.substring(rClose);
    count++;
    console.log('\u2713', label);
  }

  function removeRunWithText(textInRun, label) {
    const tOpen = `<w:t>${textInRun}</w:t>`;
    const idx = xml.indexOf(tOpen);
    if (idx < 0) {
      // Try xml:space version
      const alt = `<w:t xml:space="preserve">${textInRun}</w:t>`;
      const idx2 = xml.indexOf(alt);
      if (idx2 < 0) { console.log('\u2717 Not found:', label); return; }
      const rOpen2 = xml.lastIndexOf('<w:r', idx2);
      const rClose2 = xml.indexOf('</w:r>', idx2) + '</w:r>'.length;
      xml = xml.substring(0, rOpen2) + xml.substring(rClose2);
      count++;
      console.log('\u2713', label, '(xml:space variant)');
      return;
    }
    const rOpen = xml.lastIndexOf('<w:r', idx);
    const rClose = xml.indexOf('</w:r>', idx) + '</w:r>'.length;
    xml = xml.substring(0, rOpen) + xml.substring(rClose);
    count++;
    console.log('\u2713', label);
  }

  // ── Párr.100: 5.1 — Remove run with 'Se Implementará' that precedes 'Implementaré'
  removeRunWithText('Se Implementar\u00e1', '5.1 remove Se Implementar\u00e1');

  // ── Párr.117: 5.2 — Remove run with 'Se implementará' that precedes 'Implementaré'
  removeRunWithText('Se implementar\u00e1', '5.2 remove Se implementar\u00e1');

  // ── Párr.200: 5.7 — Remove run with 'Se institucionalizar' (or similar fragment)
  // It renders as 'Se institucionalizaré' — the Se is in a separate run
  // Find the run before 'Institucionaliz' that is in the same paragraph
  // The run with 'Se institucionaliz' precedes 'aré un esquema' or 'Institucionalizaré'
  {
    const confirm57 = 'Institucionalizar\u00e9 un esquema permanente';
    const idx = xml.indexOf(confirm57);
    if (idx >= 0) {
      // find preceding runs within ~600 chars
      const segment = xml.substring(Math.max(0, idx - 600), idx);
      const seIdx = segment.lastIndexOf('Se institucionaliz');
      if (seIdx >= 0) {
        const absSeIdx = Math.max(0, idx - 600) + seIdx;
        const rOpen = xml.lastIndexOf('<w:r', absSeIdx);
        const rClose = xml.indexOf('</w:r>', absSeIdx) + '</w:r>'.length;
        const removedText = xml.substring(rOpen, rClose).replace(/<[^>]+>/g,'');
        xml = xml.substring(0, rOpen) + xml.substring(rClose);
        count++;
        console.log('\u2713 5.7 remove Se institucionaliz run, text was:', removedText.substring(0,60));
      } else {
        console.log('\u2717 5.7: no Se institucionaliz before confirm in segment');
      }
    } else {
      console.log('\u2717 5.7: confirm not found');
    }
  }

  // ── Párr.15: check if there's still 'La Jefatura debe desempeñar'
  {
    const p15 = 'La Jefatura debe desempe\u00f1ar';
    const idx = xml.indexOf(p15);
    if (idx >= 0) {
      console.log('\u26a0\ufe0f Párr.15 still has:', xml.substring(idx, idx+100).replace(/<[^>]+>/g,'').substring(0,80));
      // This was supposed to be changed to 'Como Jefe de Departamento, desempeñaré'
      // Replace directly
      xml = xml.replace(p15, 'Como Jefe de Departamento, desempe\u00f1ar\u00e9');
      count++;
      console.log('\u2713 Párr.15: La Jefatura \u2192 Como Jefe');
    }
  }

  // ── Párr.61: 'El ejercicio de la Jefatura' — intro of sec.3 still uses Jefatura at start
  {
    const p61 = 'El ejercicio de la Jefatura del Departamento requiere combinar capacidades t\u00e9cnicas';
    const idx = xml.indexOf(p61);
    if (idx >= 0) {
      xml = xml.replace(p61, 'El ejercicio de mi Jefatura del Departamento requiere combinar capacidades t\u00e9cnicas');
      count++;
      console.log('\u2713 Párr.61: la Jefatura \u2192 mi Jefatura');
    } else {
      console.log('\u2717 Párr.61: not found or already fixed');
    }
  }

  // ── Párr. 3.3: 'se impulsará' leftover (sec.3.3 used 'la Jefatura impulsará → impulsaré' but now shows 'se impulsar\u00e9')
  {
    // Check for 'se impulsar\u00e9' or similar
    const seImp = xml.indexOf('Se impulsar\u00e9');
    if (seImp >= 0) {
      const ctx = xml.substring(seImp, seImp+200).replace(/<[^>]+>/g,'');
      console.log('\u26a0\ufe0f Se impulsaré found:', ctx.substring(0,80));
      // Find the run before
      const rOpen = xml.lastIndexOf('<w:r', seImp);
      const rClose = xml.indexOf('</w:r>', seImp) + '</w:r>'.length;
      const removedTxt = xml.substring(rOpen, rClose).replace(/<[^>]+>/g,'');
      // Only remove if it's just 'Se ' prefix
      if (removedTxt.trim() === 'Se impulsar\u00e9') {
        // Change to 'Impulsar\u00e9'
        xml = xml.replace('Se impulsar\u00e9', 'Impulsar\u00e9');
        count++;
        console.log('\u2713 Se impulsaré \u2192 Impulsaré');
      }
    }

    // Also check 'se impulsar' in general
    if (xml.includes(' impulsar\u00e9 la institucionalizaci\u00f3n')) {
      xml = xml.replace(' impulsar\u00e9 la institucionalizaci\u00f3n', 'Impulsar\u00e9 la institucionalizaci\u00f3n');
      count++;
      console.log('\u2713 impulsar\u00e9 (lowercase start) \u2192 Impulsar\u00e9');
    }
  }

  // Verify 8.3 is ok
  if (xml.includes('revisar\u00e9 los procedimientos')) {
    console.log('\u2713 8.3 OK: revisar\u00e9 los procedimientos');
  } else if (xml.includes('se revisar\u00e1n')) {
    console.log('\u26a0\ufe0f 8.3 STILL: se revisarán');
  }

  zip.file('word/document.xml', xml);
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 } });
  fs.writeFileSync(FILE, buf);
  console.log('\n\u2705', count, 'correcciones aplicadas.');
}

main().catch(console.error);
