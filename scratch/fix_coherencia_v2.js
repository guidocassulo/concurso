const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');
const OUT  = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v3.docx');

async function main() {
  const zip = await JSZip.loadAsync(fs.readFileSync(FILE));
  let xml = await zip.file('word/document.xml').async('string');
  let count = 0;

  function rep(s, r, label) {
    if (xml.includes(s)) {
      xml = xml.replace(s, r);
      count++;
      console.log('✓', label);
    } else {
      console.log('✗ NO ENCONTRADO:', label);
    }
  }

  // ─── 5.1 Propuesta ─────────────────────────────────────────────────────────
  rep(
    ' un modelo \u00fanico de organizaci\u00f3n para centralizar todas las solicitudes en una cartera com\u00fan administrada en ',
    'Implementar\u00e9 un modelo \u00fanico de organizaci\u00f3n para centralizar todas las solicitudes en una cartera com\u00fan administrada en ',
    '5.1 propuesta'
  );

  // ─── 5.2 Propuesta ─────────────────────────────────────────────────────────
  rep(
    ' un programa de gesti\u00f3n del conocimiento asignando gradualmente Referentes Secundarios en los sistemas cr\u00edticos, promoviendo la transferencia t\u00e9cnica cruzada y estableciendo documentaci\u00f3n m\u00ednima obligatoria.',
    'Implementar\u00e9 un programa de gesti\u00f3n del conocimiento asignando gradualmente Referentes Secundarios en los sistemas cr\u00edticos, promoviendo la transferencia t\u00e9cnica cruzada y estableciendo documentaci\u00f3n m\u00ednima obligatoria.',
    '5.2 propuesta'
  );

  // ─── 5.3 Propuesta: impulsará → impulsaré ──────────────────────────────────
  // The á is in a separate run just before the " la institucionalización" run
  // Pattern: ...>á</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr>...(Arial)...<w:t xml:space="preserve"> la institucionalización...
  rep(
    '\u00e1</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> la institucionalizaci\u00f3n de una Arquitectura Base',
    '\u00e9</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> la institucionalizaci\u00f3n de una Arquitectura Base',
    '5.3 impulsar\u00e1 \u2192 impulsar\u00e9'
  );

  // ─── 5.4 Propuesta ─────────────────────────────────────────────────────────
  rep(
    ' un procedimiento \u00fanico para el relevamiento, an\u00e1lisis y priorizaci\u00f3n de requerimientos, actuando como nexo entre las \u00e1reas usuarias y el equipo t\u00e9cnico',
    'Institucionalizar\u00e9 un procedimiento \u00fanico para el relevamiento, an\u00e1lisis y priorizaci\u00f3n de requerimientos, actuando como nexo entre las \u00e1reas usuarias y el equipo t\u00e9cnico',
    '5.4 propuesta'
  );

  // ─── 5.7 Propuesta: institucionalizará → institucionalizaré ────────────────
  // Pattern: ...>á</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:color w:val="auto"/>...<w:t xml:space="preserve"> un esquema permanente...
  rep(
    '\u00e1</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:color w:val="auto"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> un esquema permanente de coordinaci\u00f3n transversal',
    '\u00e9</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:color w:val="auto"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> un esquema permanente de coordinaci\u00f3n transversal',
    '5.7 institucionalizar\u00e1 \u2192 institucionalizar\u00e9'
  );

  // ─── 7 intro ───────────────────────────────────────────────────────────────
  rep(
    'La implementaci\u00f3n de las propuestas se realizar\u00e1 de manera progresiva, procurando incorporar las mejoras al funcionamiento habitual del Departamento sin afectar la continuid',
    'Implementar\u00e9 las propuestas de manera progresiva, procurando incorporar las mejoras al funcionamiento habitual del Departamento sin afectar la continuid',
    '7 intro'
  );

  // ─── 7 párr2 — "Se d" fragment → "Determinaré el orden..." ────────────────
  // Original fragmented: "Se d" + "eterminar" + "á" + "el orden..."
  // We need to replace "Se d" start and collapse the fragments
  // Find the full fragment after "simultánea. "
  const seD = 'Las l\u00edneas de acci\u00f3n no requieren una implementaci\u00f3n simult\u00e1nea. </w:t></w:r><w:r w:rsidR="00E738AA"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t>Se d';
  if (xml.includes(seD)) {
    // Find what follows "Se d" — need to collapse all the sub-runs into one "Determinaré"
    const idx = xml.indexOf(seD);
    const endMarker = 'el orden de incorporaci\u00f3n seg\u00fan la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obten';
    const endIdx = xml.indexOf(endMarker, idx);
    if (endIdx >= 0) {
      const fragment = xml.substring(idx + seD.length, endIdx);
      console.log('Fragment between Se d and "el orden":', fragment.substring(0, 200));
      // Replace the whole block
      const fullSearch = seD + fragment + endMarker;
      const fullReplace = 'Las l\u00edneas de acci\u00f3n no requieren una implementaci\u00f3n simult\u00e1nea. </w:t></w:r><w:r w:rsidR="00E738AA"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve">Determinar\u00e9 ' + endMarker;
      if (xml.includes(fullSearch)) {
        xml = xml.replace(fullSearch, fullReplace);
        count++;
        console.log('\u2713 7 p\u00e1rr2: Se determinar\u00e1 \u2192 Determinar\u00e9');
      } else {
        console.log('\u2717 7 p\u00e1rr2: full fragment not found');
      }
    }
  } else {
    console.log('\u2717 7 p\u00e1rr2: anchor not found');
  }

  // ─── 7.1 ───────────────────────────────────────────────────────────────────
  rep(
    'Se realizar\u00e1 un relevamiento operativo del Departamento',
    'Realizar\u00e9 un relevamiento operativo del Departamento',
    '7.1 realizar\u00e9 relevamiento'
  );

  rep(
    'se establecer\u00e1n las prioridades de intervenci\u00f3n, los riesgos operativos y las primeras medidas a implementar',
    'establecer\u00e9 las prioridades de intervenci\u00f3n, los riesgos operativos y las primeras medidas a implementar',
    '7.1 establecer\u00e9'
  );

  // ─── 8.1 ───────────────────────────────────────────────────────────────────
  rep(
    '<w:t>Se realizar\u00e1</w:t></w:r><w:r w:rsidR="00A472AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> un monitoreo sistem\u00e1tico',
    '<w:t>Realizar\u00e9</w:t></w:r><w:r w:rsidR="00A472AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> un monitoreo sistem\u00e1tico',
    '8.1 realizar\u00e9 monitoreo'
  );

  // ─── 8.3 — check what's actually there ─────────────────────────────────────
  const idx83 = xml.indexOf('redefinir prioridades, redistribuir responsabilidades');
  if (idx83 >= 0) {
    const ctx = xml.substring(Math.max(0, idx83 - 400), idx83 + 10);
    // Extract only text
    const textOnly = ctx.replace(/<[^>]+>/g, '').trim().slice(-200);
    console.log('\n8.3 text context:', textOnly);
  }

  rep(
    'se revisar\u00e1n los procedimientos para redefinir',
    'revisar\u00e9 los procedimientos para redefinir',
    '8.3 revisar\u00e9'
  );

  // Save
  zip.file('word/document.xml', xml);
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 } });
  fs.writeFileSync(OUT, buf);
  console.log('\n\u2705', count, 'correcciones aplicadas.');
  console.log('Guardado:', OUT);
}

main().catch(console.error);
