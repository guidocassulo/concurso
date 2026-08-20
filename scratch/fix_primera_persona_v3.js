/**
 * Reemplazos quirúrgicos en el XML de Proyecto Guido.docx
 * Para los casos donde el texto está dividido por w:proofErr o entre múltiples runs.
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

// Reemplazos XML directos (búsqueda y reemplazo en el XML crudo)
// Cada par es [buscar_en_xml, reemplazar_en_xml]
const XML_REPLACEMENTS = [

  // 1. "La Jefatura debe desempeñar..." - texto continuo, buscar sin escaping
  [
    `La Jefatura debe desempeñar un rol integrador que trascienda la coordinación técnica. Su responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando condiciones para desarrollar software de manera previsible, colaborativa y sostenible. En este marco, promoverá la integración humana, la reutilización del conocimiento y la adopción responsable de nuevas tecnologías, consolidando la optimización de los procedimientos organizacionales como la columna vertebral que asegure que el código no solo funcione, sino que sea escalable, seguro y responda a las necesidades de las diferentes gestiones, presente y futura, alineando decisiones tecnológicas a los objetivos institucionales y al régimen administrativo.`,
    `Como Jefe de Departamento, desempeñaré un rol integrador que trascienda la coordinación técnica. Mi responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando condiciones para desarrollar software de manera previsible, colaborativa y sostenible. En este marco, promoveré la integración humana, la reutilización del conocimiento y la adopción responsable de nuevas tecnologías, consolidando la optimización de los procedimientos organizacionales como la columna vertebral que asegure que el código no solo funcione, sino que sea escalable, seguro y responda a las necesidades de las diferentes gestiones, presente y futura, alineando decisiones tecnológicas a los objetivos institucionales y al régimen administrativo.`
  ],

  // 2. "En consecuencia, la propuesta prioriza..." - fragmentado por <w:proofErr> en "IDEs"
  [
    `En consecuencia, la propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (</w:t></w:r><w:proofErr w:type="spellStart"/><w:r><w:t>IDEs</w:t></w:r><w:proofErr w:type="spellEnd"/><w:r><w:t>) y la adopción de arquitecturas de referencia, para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.`,
    `En consecuencia, mi propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (</w:t></w:r><w:proofErr w:type="spellStart"/><w:r><w:t>IDEs</w:t></w:r><w:proofErr w:type="spellEnd"/><w:r><w:t>) y la adopción de arquitecturas de referencia, para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.`
  ],

  // 3. "La Jefatura implementará..." - fragmentado por <w:proofErr> en "Redmine"
  [
    `La Jefatura implementará un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en `,
    `Implementaré un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en `
  ],
  // (La segunda parte "La planificación distinguirá..." continúa en otro run)
  [
    `. La planificación distinguirá el mantenimiento continuo de los nuevos desarrollos, aplicando metodologías ágiles híbridas y adaptadas a la Administración Pública sin imponer esquemas rígidos.`,
    `. Mi planificación distinguirá el mantenimiento continuo de los nuevos desarrollos, aplicando metodologías ágiles híbridas y adaptadas a la Administración Pública sin imponer esquemas rígidos.`
  ],

  // 4. "La Jefatura impulsará la institucionalización..."
  [
    `La Jefatura impulsará la institucionalización de una Arquitectura Base y de un conjunto de estándares comunes que orienten el desarrollo de todos los nuevos sistemas municipales.`,
    `Impulsaré la institucionalización de una Arquitectura Base y de un conjunto de estándares comunes que orienten el desarrollo de todos los nuevos sistemas municipales.`
  ],
  [
    `El objetivo no consiste en restringir la innovación tecnológica sino en garantizar que todos los proyectos compartan criterios comunes de organización, seguridad, documentación y mantenimiento.`,
    `Mi objetivo no consiste en restringir la innovación tecnológica sino en garantizar que todos los proyectos compartan criterios comunes de organización, seguridad, documentación y mantenimiento.`
  ],

  // 5. "Se institucionalizará un procedimiento único..."
  [
    `Se institucionalizará un procedimiento único para el relevamiento, análisis y priorización de requerimientos, fortaleciendo el rol de la Jefatura como nexo entre las áreas usuarias y el equipo técnico`,
    `Institucionalizaré un procedimiento único para el relevamiento, análisis y priorización de requerimientos, actuando como nexo entre las áreas usuarias y el equipo técnico`
  ],

  // 6. "La innovación se gestionará..." - fragmentado por <w:proofErr> en "mentoreo"
  [
    `La innovación se gestionará con criterio institucional, promoviendo tecnologías vigentes con soporte activo. Se adoptará la Inteligencia Artificial como herramienta de asistencia en los entornos de desarrollo (IDE) para agilizar codificación, detección de errores y documentación, bajo pautas de uso seguro que resguarden la información municipal. La transición será gradual y acompañada por `,
    `Gestionaré la innovación con criterio institucional, promoviendo tecnologías vigentes con soporte activo. Adoptaré la Inteligencia Artificial como herramienta de asistencia en los entornos de desarrollo (IDE) para agilizar codificación, detección de errores y documentación, bajo pautas de uso seguro que resguarden la información municipal. La transición será gradual y acompañada por `
  ],

  // 7. "Sin modificar la estructura escalafonaria..." - fragmentado por <w:proofErr>
  [
    `Sin modificar la estructura `,
    `Sin modificar la estructura `  // Esta parte queda igual
  ],
  // El texto que sigue al proofErr:
  [
    ` vigente ni requerir recursos presupuestarios adicionales, la organización del trabajo asignará las responsabilidades de análisis, relevamiento funcional y coordinación técnica considerando la experiencia acumulada por cada agente y su conocimiento práctico del funcionamiento municipal.`,
    ` vigente ni requerir recursos presupuestarios adicionales, organizaré el trabajo asignando las responsabilidades de análisis, relevamiento funcional y coordinación técnica considerando la experiencia acumulada por cada agente y su conocimiento práctico del funcionamiento municipal.`
  ],

  // 8. "Las líneas de acción... La Jefatura determinará..." - fragmentado
  [
    `Las líneas de acción no requieren una implementación simultánea. La Jefatura determinará el orden de incorporación según la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obten`,
    `Las líneas de acción no requieren una implementación simultánea. Determinaré el orden de incorporación según la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obten`
  ],

  // 9. "La implementación contará... La Jefatura podrá..." - fragmentado
  [
    `La implementación contará con un seguimiento permanente para verificar resultados, identificar dificultades y ajustar las acciones previstas. La Jefatura podrá redefinir prioridades, redistribuir recursos o modificar el orden de ejecución cuando la `,
    `La implementación contará con un seguimiento permanente para verificar resultados, identificar dificultades y ajustar las acciones previstas. Redefiniré prioridades, redistribuiré recursos o modificaré el orden de ejecución cuando la `
  ],
];

async function main() {
  // Leer el archivo YA PARCIALMENTE MODIFICADO (v2)
  const srcPath = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');
  const origData = fs.readFileSync(srcPath);
  const zip = await JSZip.loadAsync(origData);

  let docXml = await zip.file('word/document.xml').async('string');

  let replacedCount = 0;
  let notFound = [];

  for (const [original, replacement] of XML_REPLACEMENTS) {
    if (original === replacement) continue;

    if (docXml.includes(original)) {
      docXml = docXml.replace(original, replacement);
      replacedCount++;
      console.log('✓', original.substring(0, 70));
    } else {
      notFound.push(original.substring(0, 80));
    }
  }

  console.log('\n=== RESULTADOS ===');
  console.log('Reemplazados:', replacedCount);
  if (notFound.length > 0) {
    console.log('\nNO encontrados:', notFound.length);
    notFound.forEach(t => console.log('  ✗', t));
  }

  zip.file('word/document.xml', docXml);
  const newDocx = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  const outPath = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');
  fs.writeFileSync(outPath, newDocx);
  console.log('\n✅ Guardado en:', outPath);
}

main().catch(console.error);
