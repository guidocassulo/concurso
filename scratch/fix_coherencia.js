/**
 * Aplica correcciones de coherencia al documento Proyecto Guido - Primera Persona v2.docx
 * Trabaja directamente sobre el XML para manejar fragmentación de runs.
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');

async function main() {
  const zip = await JSZip.loadAsync(fs.readFileSync(FILE));
  let xml = await zip.file('word/document.xml').async('string');

  let count = 0;

  function replace(search, replacement, label) {
    if (xml.includes(search)) {
      xml = xml.replace(search, replacement);
      count++;
      console.log('✓', label);
    } else {
      console.log('✗ NO ENCONTRADO:', label);
    }
  }

  // ─── 5.1 Propuesta ─────────────────────────────────────────────────────────
  // El verb está fragmentado: "Implementar" + separado + "á" en distintos runs.
  // El text que antecede es: "ará un modelo único" (viene de prev step donde reemplazamos)
  // Buscamos el texto visible completo en XML fragmentado
  replace(
    ` un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en `,
    `Implementaré un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en `,
    '5.1: "un modelo único" → "Implementaré un modelo único"'
  );

  // ─── 5.2 Propuesta ─────────────────────────────────────────────────────────
  replace(
    ` un programa de gestión del conocimiento asignando gradualmente Referentes Secundarios en los sistemas críticos, promoviendo la transferencia técnica cruzada y estableciendo documentación mínima obligatoria.`,
    `Implementaré un programa de gestión del conocimiento asignando gradualmente Referentes Secundarios en los sistemas críticos, promoviendo la transferencia técnica cruzada y estableciendo documentación mínima obligatoria.`,
    '5.2: "un programa de gestión" → "Implementaré un programa de gestión"'
  );

  // ─── 5.3 Propuesta ─────────────────────────────────────────────────────────
  // "á" (final de "impulsará") + " la institucionalización..."
  replace(
    `á</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> la institucionalización de una Arquitectura Base`,
    `é</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> la institucionalización de una Arquitectura Base`,
    '5.3: "impulsará" → "impulsaré" (cambio de á→é)'
  );

  // Fix "impulsaré" prefix — need to also find the verb stem before it
  // The text before is split: "Impuls" + "ar" + "á" → change to "Impulsaré"
  // Let's search broader context
  replace(
    `<w:t>Impuls</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t>ar</w:t></w:r>`,
    `<w:t>Impuls</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t>ar</w:t></w:r>`,
    '5.3 check verb stem'
  );

  // ─── 5.4 Propuesta ─────────────────────────────────────────────────────────
  // "á un procedimiento único" — change preceding "ará" to "aré"
  replace(
    ` un procedimiento único para el relevamiento, análisis y priorización de requerimientos, actuando como nexo entre las áreas usuarias y el equipo técnico`,
    `Institucionalizaré un procedimiento único para el relevamiento, análisis y priorización de requerimientos, actuando como nexo entre las áreas usuarias y el equipo técnico`,
    '5.4: prefix fix → "Institucionalizaré"'
  );

  // ─── 5.7 Propuesta ─────────────────────────────────────────────────────────
  replace(
    `á</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:color w:val="auto"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> un esquema permanente de coordinación transversal`,
    `é</w:t></w:r><w:r w:rsidR="009059AA" w:rsidRPr="00670B98"><w:rPr><w:color w:val="auto"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve"> un esquema permanente de coordinación transversal`,
    '5.7: "institucionalizará" → "institucionalizaré"'
  );

  // ─── 7 intro ───────────────────────────────────────────────────────────────
  replace(
    `La implementación de las propuestas se realizará de manera progresiva, procurando incorporar las mejoras al funcionamiento habitual del Departamento sin afectar la continuid`,
    `Implementaré las propuestas de manera progresiva, procurando incorporar las mejoras al funcionamiento habitual del Departamento sin afectar la continuid`,
    '7 intro: "La implementación de las propuestas se realizará" → "Implementaré las propuestas"'
  );

  // ─── 7 párrafo 2: "Se d" + "eterminar" + "á" → "Determinaré" ─────────────
  // The verb is split across 3 runs: "Se d" | "eterminar" | "á"
  // These are within "Las líneas de acción no requieren... Se d|eterminar|á el orden"
  replace(
    `Las líneas de acción no requieren una implementación simultánea. </w:t></w:r><w:r w:rsidR="00E738AA"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t>Se d`,
    `Las líneas de acción no requieren una implementación simultánea. </w:t></w:r><w:r w:rsidR="00E738AA"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t>Determinar`,
    '7 párr2: "Se d" → "Determinar" (first fragment)'
  );
  // now the "á" that follows becomes the end of "Determinaré"
  // We need to find it — look for "eterminar" run then next "á" run
  replace(
    `<w:t>eterminar</w:t></w:r><w:r w:rsidRPr="00670B`,
    `<w:t></w:t></w:r><w:r w:rsidRPr="00670B`,
    '7 párr2: remove "eterminar" fragment (now merged into Determinar)'
  );

  // ─── 7.1: "Se realizará un relevamiento" ──────────────────────────────────
  replace(
    `Se realizará un relevamiento operativo del Departamento`,
    `Realizaré un relevamiento operativo del Departamento`,
    '7.1: "Se realizará un relevamiento" → "Realizaré un relevamiento"'
  );

  // ─── 7.1: "se establecerán las prioridades" ───────────────────────────────
  replace(
    `se establecerán las prioridades de intervención, los riesgos operativos y las primeras medidas a implementar`,
    `estableceré las prioridades de intervención, los riesgos operativos y las primeras medidas a implementar`,
    '7.1: "se establecerán" → "estableceré"'
  );

  // ─── 8.1: "Se realizará un monitoreo" ────────────────────────────────────
  replace(
    `<w:t>Se realizará</w:t></w:r><w:r w:rsidR="00A472AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> un monitoreo sistemático`,
    `<w:t>Realizaré</w:t></w:r><w:r w:rsidR="00A472AA" w:rsidRPr="00670B98"><w:rPr><w:rFonts w:eastAsia="Times New Roman"/></w:rPr><w:t xml:space="preserve"> un monitoreo sistemático`,
    '8.1: "Se realizará un monitoreo" → "Realizaré un monitoreo"'
  );

  // ─── 8.3: look for "se revisarán" or similar ─────────────────────────────
  // From previous extraction: "se revisarán los procedimientos para redefinir..."
  // but it wasn't found — might have already been changed to "revisaré" in prev pass
  // Let's verify what's actually there
  const idx83 = xml.indexOf('redefinir prioridades, redistribuir responsabilidades');
  if (idx83 >= 0) {
    const ctx = xml.substring(Math.max(0, idx83 - 300), idx83 + 100);
    console.log('\nContext around 8.3:', ctx);
  }

  // Save
  zip.file('word/document.xml', xml);
  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
  fs.writeFileSync(FILE, buf);
  console.log(`\n✅ ${count} reemplazos aplicados. Guardado.`);
}

main().catch(console.error);
