/**
 * Este script toma el documento original (Plan_Trabajo_Concurso_Jefatura_Software.docx)
 * y reemplaza los textos cambiando la redacción a primera persona,
 * SIN modificar el formato XML.
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

// Tabla de reemplazos: texto original → texto en primera persona
// Solo se reemplazan los textos que cambian redacción
const REPLACEMENTS = [
  // === SECCIÓN 1 - ABORDAJE ===
  [
    `El presente plan de trabajo se estructura en torno a una premisa fundamental: el Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software no debe limitarse a actuar como una "fábrica de código" reactiva, sino consolidarse como el motor estratégico para la modernización de la gestión municipal.`,
    `El presente plan de trabajo se estructura en torno a una premisa fundamental: el Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software no debe limitarse a actuar como una "fábrica de código" reactiva, sino consolidarse como el motor estratégico para la modernización de la gestión municipal.`
  ],
  [
    `Atendiendo al perfil del cargo concursado, el abordaje central radica en **optimizar los procedimientos organizacionales** para transformarlos en la columna vertebral del departamento. Esta estructuración procedimental es el paso ineludible para asegurar que el software municipal trascienda la mera funcionalidad operativa y pase a ser intrínsecamente **escalable, seguro y capaz de responder con agilidad a las necesidades de las diferentes gestiones, tanto presentes como futuras.**`,
    `Mi abordaje central radica en **optimizar los procedimientos organizacionales** para transformarlos en la columna vertebral del departamento. Esta estructuración procedimental es el paso ineludible para asegurar que el software municipal trascienda la mera funcionalidad operativa y pase a ser intrínsecamente **escalable, seguro y capaz de responder con agilidad a las necesidades de las diferentes gestiones, tanto presentes como futuras.**`
  ],
  // === SECCIÓN 2 - INTRODUCCIÓN ===
  [
    `Para cumplir con estas funciones normativas frente a la realidad operativa del sector, el presente Plan de Trabajo parte de un diagnóstico exhaustivo de la situación actual y se articula en torno al tema oficial del concurso, estructurándose en un Diagnóstico Integral (FODA), la formulación de Objetivos, la Propuesta de Mejora y Optimización con Recursos Actuales (SIN PRESUPUESTO - Plan Realista), la Proyección con Incorporación de Recursos (CON PRESUPUESTO - Plan Proyectado), y los mecanismos de Implementación, Gestión e Indicadores de Evaluación.`,
    `Para cumplir con estas funciones normativas, mi Plan de Trabajo parte de un diagnóstico exhaustivo de la situación actual y se articula en torno al tema oficial del concurso, estructurándose en un Diagnóstico Integral (FODA), la formulación de Objetivos, la Propuesta de Mejora y Optimización con Recursos Actuales (SIN PRESUPUESTO - Plan Realista), la Proyección con Incorporación de Recursos (CON PRESUPUESTO - Plan Proyectado), y los mecanismos de Implementación, Gestión e Indicadores de Evaluación.`
  ],
  // === SECCIÓN 4 - OBJETIVOS ===
  [
    `Fortalecer la capacidad institucional del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software mediante una organización basada en equipos colaborativos, conocimiento compartido, procedimientos estandarizados y gobierno técnico, asegurando que el software municipal sea seguro, escalable y sostenible en el tiempo.`,
    `Mi objetivo general es fortalecer la capacidad institucional del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software mediante una organización basada en equipos colaborativos, conocimiento compartido, procedimientos estandarizados y gobierno técnico, asegurando que el software municipal sea seguro, escalable y sostenible en el tiempo.`
  ],
  // === SECCIÓN 5 - PROPUESTA SIN PRESUPUESTO ===
  [
    `Esta sección constituye el corazón operativo del plan a corto plazo. Agrupa todas las iniciativas procedimentales y organizacionales que se implementarán **utilizando exclusivamente el capital humano y las herramientas existentes (Costo $0)**, transformando los procedimientos en la columna vertebral del departamento:`,
    `Esta sección constituye el corazón operativo de mi plan a corto plazo. Agrupa todas las iniciativas procedimentales y organizacionales que implementaré **utilizando exclusivamente el capital humano y las herramientas existentes (Costo $0)**, transformando los procedimientos en la columna vertebral del departamento:`
  ],
  [
    `**Modelo Híbrido (Kanban + Iteraciones Cortas):** Se aplicará *Kanban* para ordenar el mantenimiento continuo e incidencias de sistemas *legacy*, e *iteraciones cortas* (Sprints) para nuevos desarrollos. No se impondrá Scrum de forma rígida a todo el personal.`,
    `**Modelo Híbrido (Kanban + Iteraciones Cortas):** Aplicaré *Kanban* para ordenar el mantenimiento continuo e incidencias de sistemas *legacy*, e *iteraciones cortas* (Sprints) para nuevos desarrollos. No impondré Scrum de forma rígida a todo el personal.`
  ],
  [
    `**El Jefe de Departamento como *Scrum Master Global* y Gestor Gerencial:** La Jefatura asumirá un doble rol activo:`,
    `**Mi rol como *Scrum Master Global* y Gestor Gerencial:** Asumiré un doble rol activo:`
  ],
  [
    `*Como Scrum Master Global:* Orquestará operativamente las células, destrabará bloqueos diarios, facilitará la comunicación entre las dos oficinas físicas y **actuará como filtro coordinador para evitar el desarrollo de funcionalidades duplicadas**.`,
    `*Como Scrum Master Global:* Orquestaré operativamente las células, destrabaré bloqueos diarios, facilitaré la comunicación entre las dos oficinas físicas y **actuaré como filtro coordinador para evitar el desarrollo de funcionalidades duplicadas**.`
  ],
  [
    `*Como Gestor Gerencial:* Evaluará el rendimiento global del departamento, medirá la capacidad operativa en Redmine y garantizará la alineación estratégica con las autoridades.`,
    `*Como Gestor Gerencial:* Evaluaré el rendimiento global del departamento, mediré la capacidad operativa en Redmine y garantizaré la alineación estratégica con las autoridades.`
  ],
  [
    `**El "Product Owner" Institucional:** El rol de *Product Owner* recaerá en los referentes o jefaturas de las Secretarías usuarias solicitantes, quienes serán responsables de priorizar su propio *Backlog* de necesidades.`,
    `**El "Product Owner" Institucional:** El rol de *Product Owner* recaerá en los referentes o jefaturas de las Secretarías usuarias solicitantes, quienes serán responsables de priorizar su propio *Backlog* de necesidades.`
  ],
  [
    `**Comunicación Abierta entre Oficinas:** Se mantendrá la distribución física en dos dependencias, pero se erradicará el aislamiento *operativo* mediante ceremonias ágiles conjuntas (Dailies de 15 min, Plannings) y uso unificado de repositorios.`,
    `**Comunicación Abierta entre Oficinas:** Mantendré la distribución física en dos dependencias, pero erradicaré el aislamiento *operativo* mediante ceremonias ágiles conjuntas (Dailies de 15 min, Plannings) y uso unificado de repositorios.`
  ],
  [
    `**Asignación Dinámica y "Referentes Secundarios":** Para terminar con la dependencia de una sola persona en sistemas críticos, se implementará la figura del *Referente Secundario*. Mediante la asignación dinámica por fases (*shadowing* y capacitación cruzada), un programador acompañará al referente principal en tareas de mantenimiento y análisis, logrando la transferencia práctica del conocimiento sin tocar el escalafón.`,
    `**Asignación Dinámica y "Referentes Secundarios":** Para terminar con la dependencia de una sola persona en sistemas críticos, implementaré la figura del *Referente Secundario*. Mediante la asignación dinámica por fases (*shadowing* y capacitación cruzada), un programador acompañará al referente principal en tareas de mantenimiento y análisis, logrando la transferencia práctica del conocimiento sin tocar el escalafón.`
  ],
  [
    `Dado que actualmente no se cuenta con herramientas de revisión automatizada y la revisión manual cruzada entre pares sobrecargaría a los programadores Senior, la calidad se asegurará **definiendo y exigiendo buenas prácticas de programación y guías de estilo obligatorias**.`,
    `Dado que actualmente no se cuenta con herramientas de revisión automatizada y la revisión manual cruzada entre pares sobrecargaría a los programadores Senior, aseguraré la calidad **definiendo y exigiendo buenas prácticas de programación y guías de estilo obligatorias**.`
  ],
  [
    `**Obligatoriedad del Template de Arquitectura Base:** Se establecerá como norma inquebrantable que todo nuevo desarrollo o refactorización relevante deba construirse sobre la arquitectura base desarrollada en la Municipalidad. Ningún desarrollo nuevo podrá iniciarse en tecnologías obsoletas (*Congelamiento Legacy*).`,
    `**Obligatoriedad del Template de Arquitectura Base:** Estableceré como norma inquebrantable que todo nuevo desarrollo o refactorización relevante deba construirse sobre la arquitectura base desarrollada en la Municipalidad. Ningún desarrollo nuevo podrá iniciarse en tecnologías obsoletas (*Congelamiento Legacy*).`
  ],
  [
    `La contratación externa de software no debe significar la pérdida de control técnico por parte del departamento. Se establecerán pautas procedimentales donde todo proveedor deba:`,
    `La contratación externa de software no significará la pérdida de control técnico por parte del departamento. Estableceré pautas procedimentales donde todo proveedor deba:`
  ],
  [
    `Se guiará al equipo en el uso de herramientas de IA como asistentes de código para optimizar tiempos de desarrollo y documentación.`,
    `Guiaré al equipo en el uso de herramientas de IA como asistentes de código para optimizar tiempos de desarrollo y documentación.`
  ],
  [
    `Se fijará la pauta clara de no introducir datos personales de ciudadanos ni credenciales sensibles en servicios públicos de IA.`,
    `Fijaré la pauta clara de no introducir datos personales de ciudadanos ni credenciales sensibles en servicios públicos de IA.`
  ],
  // === SECCIÓN 6 - CON PRESUPUESTO ===
  [
    `Esta sección contempla la evolución tecnológica y la innovación del departamento a través de una inversión presupuestaria escalonada y justificada en necesidades concretas:`,
    `Esta sección contempla la evolución tecnológica e innovación que impulsaré en el departamento a través de una inversión presupuestaria escalonada y justificada en necesidades concretas:`
  ],
  // === SECCIÓN 7 - IMPLEMENTACIÓN ===
  [
    `La transformación del departamento se ejecutará bajo un marco de **adopción progresiva (Roadmap Ágil)** estructurado en 3 etapas principales y un proceso permanente:`,
    `La transformación del departamento la llevaré a cabo bajo un marco de **adopción progresiva (Roadmap Ágil)** estructurado en 3 etapas principales y un proceso permanente:`
  ],
  // === SECCIÓN 10 - CONCLUSIONES ===
  [
    `La modernización tecnológica de la Municipalidad requiere un departamento de software ordenado, previsible y sostenible, capaz de trascender a las personas y a los cambios de gestión política.`,
    `La modernización tecnológica de la Municipalidad requiere un departamento de software ordenado, previsible y sostenible, capaz de trascender a las personas y a los cambios de gestión política.`
  ],
  [
    `Al implementar un marco de agilidad adaptativa con la Jefatura en un rol activo de **Scrum Master Global y Gestor**, establecer el uso obligatorio de la arquitectura base, instituir la figura de los *Referentes Secundarios* y aplicar un estricto *Gobierno Técnico sobre Proveedores*, se resolverán los problemas históricos de desarticulación, multitarea caótica y conocimiento concentrado.`,
    `Al asumir la Jefatura con un rol activo de **Scrum Master Global y Gestor**, estableceré el uso obligatorio de la arquitectura base, instituiré la figura de los *Referentes Secundarios* y aplicaré un estricto *Gobierno Técnico sobre Proveedores*, resolviendo los problemas históricos de desarticulación, multitarea caótica y conocimiento concentrado.`
  ],
  [
    `Esta propuesta demuestra cómo es posible transformar la realidad actual con el uso inteligente de los recursos disponibles (Escenario REAL) y trazar un camino presupuestario sólido para incorporar innovación tecnológica (Escenario IDEAL), asegurando que el código no solo funcione, sino que constituya un activo institucional escalable, seguro y duradero para toda la comunidad.`,
    `Esta propuesta demuestra cómo planeo transformar la realidad actual con el uso inteligente de los recursos disponibles (Escenario REAL) y trazar un camino presupuestario sólido para incorporar innovación tecnológica (Escenario IDEAL), asegurando que el código no solo funcione, sino que constituya un activo institucional escalable, seguro y duradero para toda la comunidad.`
  ],
  // Legajo placeholder
  [
    `[Completar Legajo]`,
    `36484`
  ],
];

async function main() {
  const origData = fs.readFileSync(path.join(__dirname, '..', 'Plan_Trabajo_Concurso_Jefatura_Software.docx'));
  const origZip = await JSZip.loadAsync(origData);
  
  let docXml = await origZip.file('word/document.xml').async('string');
  
  // Extract text from w:t tags, apply replacements, and put back
  // Strategy: find each w:t content and apply text replacements
  let replacedCount = 0;
  
  for (const [original, replacement] of REPLACEMENTS) {
    if (original === replacement) continue; // Skip no-op replacements
    
    // Escape for use in the XML (the text is inside <w:t> tags)
    // The XML text content may have & encoded as &amp; etc.
    const escapedOrig = original
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const escapedReplacement = replacement
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    if (docXml.includes(escapedOrig)) {
      docXml = docXml.replace(escapedOrig, escapedReplacement);
      replacedCount++;
      console.log('✓ Replaced:', original.substring(0, 60) + '...');
    } else {
      console.log('✗ NOT FOUND:', original.substring(0, 80));
    }
  }
  
  console.log('\nTotal replacements:', replacedCount);
  
  // Also check for raw text (unescaped in XML)
  for (const [original, replacement] of REPLACEMENTS) {
    if (original === replacement) continue;
    if (docXml.includes(original) && original !== replacement) {
      docXml = docXml.replace(original, replacement);
      replacedCount++;
      console.log('✓ Replaced (raw):', original.substring(0, 60));
    }
  }
  
  // Update the zip with modified XML
  origZip.file('word/document.xml', docXml);
  
  // Generate the new docx
  const newDocxBuffer = await origZip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
  
  const outputPath = path.join(__dirname, '..', 'Proyecto_Guido_Cassulo_Primera_Persona_v2.docx');
  fs.writeFileSync(outputPath, newDocxBuffer);
  console.log('\nSaved to:', outputPath);
}

main().catch(console.error);
