/**
 * Generador definitivo y limpio de Proyecto Guido en Primera Persona.
 * Toma el original "Proyecto Guido.docx", preserva el 100% de los estilos y estructura XML,
 * y aplica las correcciones a primera persona con total coherencia gramatical.
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const ORIG_FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido.docx');
const OUT_FILE = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona.docx');
const OUT_FILE_V2 = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');

// Mapeo de párrafos a reemplazar: índice -> nuevo texto
const PARAGRAPH_REPLACEMENTS = {
  12: `El presente proyecto realiza un diagnóstico integral del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, identifica sus problemáticas y presenta propuestas concretas que implementaré para optimizar su funcionamiento, mejorando la calidad del servicio brindado a las dependencias municipales y al ciudadano.`,

  15: `Como Jefe de Departamento, desempeñaré un rol integrador que trascienda la coordinación técnica. Mi responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando condiciones para desarrollar software de manera previsible, colaborativa y sostenible. En este marco, promoveré la integración humana, la reutilización del conocimiento y la adopción responsable de nuevas tecnologías, consolidando la optimización de los procedimientos organizacionales como la columna vertebral que asegure que el código no solo funcione, sino que sea escalable, seguro y responda a las necesidades de las diferentes gestiones, presente y futura, alineando decisiones tecnológicas a los objetivos institucionales y al régimen administrativo.`,

  17: `En consecuencia, este Plan propone una estrategia en dos etapas consecutivas que llevaré adelante: la optimización con los recursos actuales y la proyección con incorporación de recursos para cuando la Administración disponga de partidas de inversión tecnológica, mediante líneas de adquisición escalables.`,

  59: `En consecuencia, mi propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (IDEs) y la adopción de arquitecturas de referencia, para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.`,

  61: `El ejercicio de mi Jefatura del Departamento requiere combinar capacidades técnicas con habilidades de conducción, planificación y coordinación. En consecuencia, mis decisiones organizacionales y técnicas se sustentarán sobre principios de gestión que otorgarán coherencia a las acciones del Departamento.`,

  63: `Promoveré un ambiente de trabajo participativo y transparente, donde la comunicación fluida, el intercambio de conocimientos y la construcción colectiva de soluciones sean el eje de la cultura organizacional. Mi función consistirá en facilitar el trabajo de los equipos, remover obstáculos operativos y generar las condiciones para que cada integrante pueda desarrollar su potencial profesional.`,

  64: `Para consolidar esta visión de conducción humana y estratégica, me apoyaré en tres pilares de gestión de personas:`,

  65: `• Delegación y autonomía responsable: Descentralizaré la toma de decisiones operativas, confiando tareas de relevamiento, arquitectura y liderazgo técnico a los perfiles de mayor experiencia, evitando convertirme en un cuello de botella administrativo.`,

  66: `• Motivación, participación y reconocimiento: Fomentaré el involucramiento activo del personal en las decisiones de diseño e innovación tecnológica, reconociendo públicamente el valor de la experiencia acumulada y la trayectoria del personal municipal.`,

  67: `• Comunicación transparente y gestión constructiva del clima laboral: La resistencia al cambio o la inercia organizacional no las abordaré como problemas de conducta individual, sino como procesos naturales de transición que gestionaré mediante el diálogo, la capacitación, la fundamentación técnica de las nuevas pautas y el acompañamiento constante.`,

  70: `El crecimiento sostenido del Departamento exige que los procedimientos organizacionales constituyan la columna vertebral del área, asegurando que el código no solo funcione en la coyuntura, sino que sea técnicamente escalable, seguro frente a vulnerabilidades y sostenible a lo largo del tiempo. Estableceré que toda actividad recurrente se respalde en estándares claros que garanticen previsibilidad y respuesta efectiva ante las demandas de la gestión presente y futura.`,

  72: `El conocimiento generado durante el desarrollo y mantenimiento de los sistemas constituye un activo estratégico de la Municipalidad. Por ello, impulsaré mecanismos que favorezcan la documentación, la transferencia de conocimientos y la capacitación interna, procurando que la información crítica permanezca en la organización.`,

  74: `Revisaré periódicamente los procedimientos, metodologías y herramientas para identificar oportunidades de mejora sobre la base de evidencias objetivas, indicadores de gestión y resultados observables.`,

  76: `Antes de adoptar una herramienta, metodología o plataforma tecnológica evaluaré aspectos tales como compatibilidad con la arquitectura existente, sostenibilidad en el tiempo, costos de implementación, impacto sobre los procesos, requerimientos de capacitación y seguridad de la información.`,

  78: `El Departamento presta servicios a las distintas áreas municipales y, de manera indirecta, a toda la comunidad. Priorizaré el valor que los sistemas aportan a los procesos administrativos, sustentando mis decisiones en un diálogo permanente y una definición clara de prioridades.`,

  80: `Apoyaré la planificación y administración del Departamento en información objetiva proveniente de indicadores que midan la capacidad operativa, la evolución de proyectos y los cuellos de botella.`,

  94: `En consecuencia, propongo un plan de optimización basado en líneas de acción prioritarias, todas ellas implementables con los recursos actualmente disponibles y alineadas con las funciones asignadas a la Jefatura del Departamento.`,

  100: `Implementaré un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en Redmine. Mi planificación distinguirá el mantenimiento continuo de los nuevos desarrollos, aplicando metodologías ágiles híbridas y adaptadas a la Administración Pública sin imponer esquemas rígidos.`,

  117: `Implementaré un programa de gestión del conocimiento asignando gradualmente Referentes Secundarios en los sistemas críticos, promoviendo la transferencia técnica cruzada y estableciendo documentación mínima obligatoria.`,

  133: `Impulsaré la institucionalización de una Arquitectura Base y de un conjunto de estándares comunes que orienten el desarrollo de todos los nuevos sistemas municipales. Mi objetivo no consiste en restringir la innovación tecnológica sino en garantizar que todos los proyectos compartan criterios comunes de organización, seguridad, documentación y mantenimiento.`,

  148: `Institucionalizaré un procedimiento único para el relevamiento, análisis y priorización de requerimientos, actuando como nexo entre las áreas usuarias y el equipo técnico.`,

  166: `Ejerceré un rol de conducción técnica durante todo el ciclo de contratación, asegurando que las soluciones externas se integren adecuadamente al ecosistema tecnológico municipal. Para ello, asignaré al seguimiento de cada proyecto a uno o más agentes del Departamento con experiencia en la temática funcional involucrada, quienes participarán en las etapas de relevamiento, validación y seguimiento técnico, complementando el conocimiento tecnológico del proveedor con el conocimiento de los procesos administrativos municipales.`,

  183: `Gestionaré la innovación con criterio institucional, promoviendo tecnologías vigentes con soporte activo. Adoptaré la Inteligencia Artificial como herramienta de asistencia en los entornos de desarrollo (IDE) para agilizar codificación, detección de errores y documentación, bajo pautas de uso seguro que resguarden la información municipal. La transición será gradual y acompañada por mentoreo interno.`,

  200: `Institucionalizaré un esquema permanente de coordinación transversal aprovechando las herramientas institucionales ya disponibles. Mi objetivo es garantizar que todos los integrantes del Departamento compartan información sobre proyectos en curso, dificultades detectadas y prioridades institucionales, independientemente de su ubicación física.`,

  216: `Sin modificar la estructura escalafonaria vigente ni requerir recursos presupuestarios adicionales, organizaré el trabajo asignando las responsabilidades de análisis, relevamiento funcional y coordinación técnica considerando la experiencia acumulada por cada agente y su conocimiento práctico del funcionamiento municipal.`,

  326: `Implementaré las propuestas de manera progresiva, procurando incorporar las mejoras al funcionamiento habitual del Departamento sin afectar la continuidad de los servicios que presta.`,

  327: `Las líneas de acción no requieren una implementación simultánea. Determinaré el orden de incorporación según la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obtenidos.`,

  331: `Realizaré un relevamiento operativo del Departamento que comprenderá: la cartera de proyectos y requerimientos, sistemas críticos, distribución del conocimiento, experiencia del personal, estado de documentación, integraciones entre sistemas y capacidad operativa disponible.`,

  332: `A partir de esta información estableceré las prioridades de intervención, los riesgos operativos y las primeras medidas a implementar, contando con una visión objetiva para avanzar sobre las restantes líneas de mejora.`,

  336: `Entre las medidas que incorporaré, de acuerdo con las prioridades que determine, se encuentran:`,

  346: `La implementación contará con un seguimiento permanente para verificar resultados, identificar dificultades y ajustar las acciones previstas. Redefiniré prioridades, redistribuiré recursos o modificaré el orden de ejecución cuando la situación del área lo requiera.`,

  353: `Realizaré un monitoreo sistemático de la gestión mediante indicadores clave en las herramientas institucionales de gestión de proyectos y en las distintas líneas de trabajo:`,

  368: `Cuando una medida no alcance los resultados esperados o se detecten cuellos de botella, revisaré los procedimientos para redefinir prioridades, redistribuir responsabilidades o reforzar la capacitación interna, manteniendo la planificación como una herramienta viva de gestión.`,

  374: `Mi rol como Jefe de Departamento será conducir este proceso promoviendo el trabajo colaborativo, la planificación estratégica y la mejora continua, procurando que las decisiones técnicas acompañen las necesidades organizacionales y contribuyan al fortalecimiento de la gestión pública.`,

  376: `En este sentido, mi propuesta busca consolidar la optimización de los procedimientos organizacionales como la columna vertebral del Departamento, asegurando que el código no solo funcione, sino que sea escalable, seguro y responda de manera sostenida a las exigencias de las diferentes gestiones, presente y futura, preservando el conocimiento institucional y generando valor permanente para la Administración Municipal y la comunidad.`
};

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function rebuild() {
  const origData = fs.readFileSync(ORIG_FILE);
  const zip = await JSZip.loadAsync(origData);
  let xml = await zip.file('word/document.xml').async('string');

  const pRegex = /<w:p([ >][\s\S]*?<\/w:p>)/g;
  let match;
  let pIndex = 0;
  let modifiedCount = 0;

  // Let's replace paragraph by paragraph
  const newXml = xml.replace(pRegex, (fullPara) => {
    const currentIdx = pIndex++;
    if (PARAGRAPH_REPLACEMENTS[currentIdx]) {
      const newText = PARAGRAPH_REPLACEMENTS[currentIdx];
      
      // Extract <w:pPr>...</w:pPr> if present
      const pPrMatch = fullPara.match(/<w:pPr>[\s\S]*?<\/w:pPr>/);
      const pPr = pPrMatch ? pPrMatch[0] : '';
      
      // Extract first <w:rPr>...</w:rPr> if present
      const rPrMatch = fullPara.match(/<w:rPr>[\s\S]*?<\/w:rPr>/);
      const rPr = rPrMatch ? rPrMatch[0] : '';
      
      // Extract paragraph start tag attributes (rsidR, rsidRDefault, rsidP)
      const startTagMatch = fullPara.match(/<w:p([^>]*)>/);
      const attrs = startTagMatch ? startTagMatch[1] : '';
      
      // Construct clean paragraph with exact formatting properties
      const constructedPara = `<w:p${attrs}>${pPr}<w:r>${rPr}<w:t xml:space="preserve">${escapeXml(newText)}</w:t></w:r></w:p>`;
      
      modifiedCount++;
      console.log(`✓ [${currentIdx}] Reemplazado párrafo`);
      return constructedPara;
    }
    return fullPara;
  });

  console.log(`\nTotal de párrafos modificados: ${modifiedCount}`);

  zip.file('word/document.xml', newXml);
  const outBuf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  fs.writeFileSync(OUT_FILE, outBuf);
  console.log('✅ Guardado en:', OUT_FILE);

  try {
    fs.writeFileSync(OUT_FILE_V2, outBuf);
    console.log('✅ Guardado en:', OUT_FILE_V2);
  } catch (e) {
    console.log('Nota: v2 estaba abierto o bloqueado por Word, pero el archivo principal se guardó.');
  }
}

rebuild().catch(console.error);
