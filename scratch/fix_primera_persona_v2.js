/**
 * Toma "Proyecto Guido.docx" y reemplaza la redacción a primera persona,
 * SIN modificar el formato/estilo XML en absoluto.
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

// Reemplazos de texto: [original, primera_persona]
// Solo se modifican fragmentos que cambian de tercera a primera persona
const REPLACEMENTS = [

  // === SECCIÓN 1 - INTRODUCCIÓN ===
  [
    `El presente proyecto realiza un diagnóstico integral del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, identifica sus problemáticas y presenta propuestas concretas para optimizar su funcionamiento, mejorando la calidad del servicio brindado a las dependencias municipales y al ciudadano.`,
    `El presente proyecto realiza un diagnóstico integral del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, identifica sus problemáticas y presenta propuestas concretas que implementaré para optimizar su funcionamiento, mejorando la calidad del servicio brindado a las dependencias municipales y al ciudadano.`
  ],
  [
    `La Jefatura debe desempeñar un rol integrador que trascienda la coordinación técnica. Su responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando condiciones para desarrollar software de manera previsible, colaborativa y sostenible. En este marco, promoverá la integración humana, la reutilización del conocimiento y la adopción responsable de nuevas tecnologías, consolidando la optimización de los procedimientos organizacionales como la columna vertebral que asegure que el código no solo funcione, sino que sea escalable, seguro y responda a las necesidades de las diferentes gestiones, presente y futura, alineando decisiones tecnológicas a los objetivos institucionales y al régimen administrativo.`,
    `Como Jefe de Departamento, desempeñaré un rol integrador que trascienda la coordinación técnica. Mi responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando condiciones para desarrollar software de manera previsible, colaborativa y sostenible. En este marco, promoveré la integración humana, la reutilización del conocimiento y la adopción responsable de nuevas tecnologías, consolidando la optimización de los procedimientos organizacionales como la columna vertebral que asegure que el código no solo funcione, sino que sea escalable, seguro y responda a las necesidades de las diferentes gestiones, presente y futura, alineando decisiones tecnológicas a los objetivos institucionales y al régimen administrativo.`
  ],
  [
    `En consecuencia, este Plan propone una estrategia en dos etapas consecutivas: la optimización con los recursos actuales y la proyección con incorporación de recursos para cuando la Administración disponga de partidas de inversión tecnológica, mediante líneas de adquisición escalables.`,
    `En consecuencia, este Plan propone una estrategia en dos etapas consecutivas que llevaré adelante: la optimización con los recursos actuales y la proyección con incorporación de recursos para cuando la Administración disponga de partidas de inversión tecnológica, mediante líneas de adquisición escalables.`
  ],

  // === SECCIÓN 2.3 - CONCLUSIÓN DEL DIAGNÓSTICO ===
  [
    `En consecuencia, la propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (IDEs) y la adopción de arquitecturas de referencia, para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.`,
    `En consecuencia, mi propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (IDEs) y la adopción de arquitecturas de referencia, para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.`
  ],

  // === SECCIÓN 3 - PRINCIPIOS DE GESTIÓN ===
  [
    `El ejercicio de la Jefatura del Departamento requiere combinar capacidades técnicas con habilidades de conducción, planificación y coordinación. En consecuencia, las decisiones organizacionales y técnicas deberán sustentarse sobre principios de gestión que otorguen coherencia a las acciones del Departamento.`,
    `El ejercicio de mi Jefatura del Departamento requiere combinar capacidades técnicas con habilidades de conducción, planificación y coordinación. En consecuencia, mis decisiones organizacionales y técnicas se sustentarán sobre los siguientes principios de gestión que otorgarán coherencia a las acciones del Departamento.`
  ],
  [
    `La conducción del Departamento promoverá un ambiente de trabajo participativo y transparente, donde la comunicación fluida, el intercambio de conocimientos y la construcción colectiva de soluciones sean el eje de la cultura organizacional. La función de la Jefatura consistirá en facilitar el trabajo de los equipos, remover obstáculos operativos y generar las condiciones para que cada integrante pueda desarrollar su potencial profesional.`,
    `Promoveré un ambiente de trabajo participativo y transparente, donde la comunicación fluida, el intercambio de conocimientos y la construcción colectiva de soluciones sean el eje de la cultura organizacional. Mi función consistirá en facilitar el trabajo de los equipos, remover obstáculos operativos y generar las condiciones para que cada integrante pueda desarrollar su potencial profesional.`
  ],
  [
    `Para consolidar esta visión de conducción humana y estratégica, la Jefatura se apoyará en tres pilares de gestión de personas:`,
    `Para consolidar esta visión de conducción humana y estratégica, me apoyaré en tres pilares de gestión de personas:`
  ],
  [
    `• Delegación y autonomía responsable: Se descentralizará la toma de decisiones operativas, confiando tareas de relevamiento, arquitectura y liderazgo técnico a los perfiles de mayor experiencia, evitando que la Jefatura se transforme en un cuello de botella administrativo.`,
    `• Delegación y autonomía responsable: Descentralizaré la toma de decisiones operativas, confiando tareas de relevamiento, arquitectura y liderazgo técnico a los perfiles de mayor experiencia, evitando convertirme en un cuello de botella administrativo.`
  ],
  [
    `• Motivación, participación y reconocimiento: Se fomentará el involucramiento activo del personal en las decisiones de diseño e innovación tecnológica, reconociendo públicamente el valor de la experiencia acumulada y la trayectoria del personal municipal.`,
    `• Motivación, participación y reconocimiento: Fomentaré el involucramiento activo del personal en las decisiones de diseño e innovación tecnológica, reconociendo públicamente el valor de la experiencia acumulada y la trayectoria del personal municipal.`
  ],
  [
    `• Comunicación transparente y gestión constructiva del clima laboral: La resistencia al cambio o la inercia organizacional no se abordarán como problemas de conducta individual, sino como procesos naturales de transición que la Jefatura debe gestionar mediante el diálogo, la capacitación, la fundamentación técnica de las nuevas pautas y el acompañamiento constante.`,
    `• Comunicación transparente y gestión constructiva del clima laboral: La resistencia al cambio o la inercia organizacional no las abordaré como problemas de conducta individual, sino como procesos naturales de transición que gestionaré mediante el diálogo, la capacitación, la fundamentación técnica de las nuevas pautas y el acompañamiento constante.`
  ],
  [
    `El crecimiento sostenido del Departamento exige que los procedimientos organizacionales constituyan la columna vertebral del área, asegurando que el código no solo funcione en la coyuntura, sino que sea técnicamente escalable, seguro frente a vulnerabilidades y sostenible a lo largo del tiempo. Toda actividad recurrente deberá respaldarse en estándares claros que garanticen previsibilidad y respuesta efectiva ante las demandas de la gestión presente y futura.`,
    `El crecimiento sostenido del Departamento exige que los procedimientos organizacionales constituyan la columna vertebral del área, asegurando que el código no solo funcione en la coyuntura, sino que sea técnicamente escalable, seguro frente a vulnerabilidades y sostenible a lo largo del tiempo. Estableceré que toda actividad recurrente se respalde en estándares claros que garanticen previsibilidad y respuesta efectiva ante las demandas de la gestión presente y futura.`
  ],
  [
    `El conocimiento generado durante el desarrollo y mantenimiento de los sistemas constituye un activo estratégico de la Municipalidad. Por ello, la Jefatura impulsará mecanismos que favorezcan la documentación, la transferencia de conocimientos y la capacitación interna, procurando que la información crítica permanezca en la organización.`,
    `El conocimiento generado durante el desarrollo y mantenimiento de los sistemas constituye un activo estratégico de la Municipalidad. Por ello, impulsaré mecanismos que favorezcan la documentación, la transferencia de conocimientos y la capacitación interna, procurando que la información crítica permanezca en la organización.`
  ],
  [
    `Los procedimientos, metodologías y herramientas deberán revisarse periódicamente para identificar oportunidades de mejora sobre la base de evidencias objetivas, indicadores de gestión y resultados observables.`,
    `Revisaré periódicamente los procedimientos, metodologías y herramientas para identificar oportunidades de mejora sobre la base de evidencias objetivas, indicadores de gestión y resultados observables.`
  ],
  [
    `Antes de adoptar una herramienta, metodología o plataforma tecnológica se evaluarán aspectos tales como compatibilidad con la arquitectura existente, sostenibilidad en el tiempo, costos de implementación, impacto sobre los procesos, requerimientos de capacitación y seguridad de la información.`,
    `Antes de adoptar una herramienta, metodología o plataforma tecnológica evaluaré aspectos tales como compatibilidad con la arquitectura existente, sostenibilidad en el tiempo, costos de implementación, impacto sobre los procesos, requerimientos de capacitación y seguridad de la información.`
  ],
  [
    `El Departamento presta servicios a las distintas áreas municipales y, de manera indirecta, a toda la comunidad. Las decisiones deberán priorizar el valor que los sistemas aportan a los procesos administrativos, sustentándose en un diálogo permanente y una definición clara de prioridades.`,
    `El Departamento presta servicios a las distintas áreas municipales y, de manera indirecta, a toda la comunidad. Priorizaré el valor que los sistemas aportan a los procesos administrativos, sustentando mis decisiones en un diálogo permanente y una definición clara de prioridades.`
  ],
  [
    `La planificación y administración del Departamento deberá apoyarse en información objetiva proveniente de indicadores que midan la capacidad operativa, la evolución de proyectos y los cuellos de botella.`,
    `Apoyaré la planificación y administración del Departamento en información objetiva proveniente de indicadores que midan la capacidad operativa, la evolución de proyectos y los cuellos de botella.`
  ],

  // === SECCIÓN 5 - PROPUESTA CON RECURSOS ACTUALES ===
  [
    `La Jefatura implementará un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en Redmine. La planificación distinguirá el mantenimiento continuo de los nuevos desarrollos, aplicando metodologías ágiles híbridas y adaptadas a la Administración Pública sin imponer esquemas rígidos.`,
    `Implementaré un modelo único de organización para centralizar todas las solicitudes en una cartera común administrada en Redmine. Mi planificación distinguirá el mantenimiento continuo de los nuevos desarrollos, aplicando metodologías ágiles híbridas y adaptadas a la Administración Pública sin imponer esquemas rígidos.`
  ],
  [
    `Se implementará un programa de gestión del conocimiento asignando gradualmente Referentes Secundarios en los sistemas críticos, promoviendo la transferencia técnica cruzada y estableciendo documentación mínima obligatoria.`,
    `Implementaré un programa de gestión del conocimiento asignando gradualmente Referentes Secundarios en los sistemas críticos, promoviendo la transferencia técnica cruzada y estableciendo documentación mínima obligatoria.`
  ],
  [
    `La Jefatura impulsará la institucionalización de una Arquitectura Base y de un conjunto de estándares comunes que orienten el desarrollo de todos los nuevos sistemas municipales.El objetivo no consiste en restringir la innovación tecnológica sino en garantizar que todos los proyectos compartan criterios comunes de organización, seguridad, documentación y mantenimiento.`,
    `Impulsaré la institucionalización de una Arquitectura Base y de un conjunto de estándares comunes que orienten el desarrollo de todos los nuevos sistemas municipales. Mi objetivo no consiste en restringir la innovación tecnológica sino en garantizar que todos los proyectos compartan criterios comunes de organización, seguridad, documentación y mantenimiento.`
  ],
  [
    `Se institucionalizará un procedimiento único para el relevamiento, análisis y priorización de requerimientos, fortaleciendo el rol de la Jefatura como nexo entre las áreas usuarias y el equipo técnico.`,
    `Institucionalizaré un procedimiento único para el relevamiento, análisis y priorización de requerimientos, actuando como nexo entre las áreas usuarias y el equipo técnico.`
  ],
  [
    `La Jefatura ejercerá un rol de conducción técnica durante todo el ciclo de contratación, asegurando que las soluciones externas se integren adecuadamente al ecosistema tecnológico municipal. Para ello, asignará al seguimiento de cada proyecto a uno o más agentes del Departamento con experiencia en la temática funcional involucrada, quienes participarán en las etapas de relevamiento, validación y seguimiento técnico, complementando el conocimiento tecnológico del proveedor con el conocimiento de los procesos administrativos municipales.`,
    `Ejerceré un rol de conducción técnica durante todo el ciclo de contratación, asegurando que las soluciones externas se integren adecuadamente al ecosistema tecnológico municipal. Para ello, asignaré al seguimiento de cada proyecto a uno o más agentes del Departamento con experiencia en la temática funcional involucrada, quienes participarán en las etapas de relevamiento, validación y seguimiento técnico, complementando el conocimiento tecnológico del proveedor con el conocimiento de los procesos administrativos municipales.`
  ],
  [
    `La innovación se gestionará con criterio institucional, promoviendo tecnologías vigentes con soporte activo. Se adoptará la Inteligencia Artificial como herramienta de asistencia en los entornos de desarrollo (IDE) para agilizar codificación, detección de errores y documentación, bajo pautas de uso seguro que resguarden la información municipal. La transición será gradual y acompañada por mentoreo interno.`,
    `Gestionaré la innovación con criterio institucional, promoviendo tecnologías vigentes con soporte activo. Adoptaré la Inteligencia Artificial como herramienta de asistencia en los entornos de desarrollo (IDE) para agilizar codificación, detección de errores y documentación, bajo pautas de uso seguro que resguarden la información municipal. La transición será gradual y acompañada por mentoreo interno.`
  ],
  [
    `La Jefatura institucionalizará un esquema permanente de coordinación transversal aprovechando las herramientas institucionales ya disponibles. El objetivo es garantizar que todos los integrantes del Departamento compartan información sobre proyectos en curso, dificultades detectadas y prioridades institucionales, independientemente de su ubicación física.`,
    `Institucionalizaré un esquema permanente de coordinación transversal aprovechando las herramientas institucionales ya disponibles. Mi objetivo es garantizar que todos los integrantes del Departamento compartan información sobre proyectos en curso, dificultades detectadas y prioridades institucionales, independientemente de su ubicación física.`
  ],
  [
    `Sin modificar la estructura escalafonaria vigente ni requerir recursos presupuestarios adicionales, la organización del trabajo asignará las responsabilidades de análisis, relevamiento funcional y coordinación técnica considerando la experiencia acumulada por cada agente y su conocimiento práctico del funcionamiento municipal.`,
    `Sin modificar la estructura escalafonaria vigente ni requerir recursos presupuestarios adicionales, organizaré el trabajo asignando las responsabilidades de análisis, relevamiento funcional y coordinación técnica considerando la experiencia acumulada por cada agente y su conocimiento práctico del funcionamiento municipal.`
  ],

  // === SECCIÓN 7 - IMPLEMENTACIÓN ===
  [
    `Las líneas de acción no requieren una implementación simultánea. La Jefatura determinará el orden de incorporación según la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obtenidos`,
    `Las líneas de acción no requieren una implementación simultánea. Determinaré el orden de incorporación según la criticidad de los sistemas, las prioridades institucionales, la capacidad operativa y los resultados obtenidos`
  ],
  [
    `Entre las medidas que podrán incorporarse, de acuerdo con las prioridades determinadas por la Jefatura, se encuentran:`,
    `Entre las medidas que incorporaré, de acuerdo con las prioridades que determine, se encuentran:`
  ],
  [
    `La implementación contará con un seguimiento permanente para verificar resultados, identificar dificultades y ajustar las acciones previstas. La Jefatura podrá redefinir prioridades, redistribuir recursos o modificar el orden de ejecución cuando la situación del área lo requiera.`,
    `La implementación contará con un seguimiento permanente para verificar resultados, identificar dificultades y ajustar las acciones previstas. Redefiniré prioridades, redistribuiré recursos o modificaré el orden de ejecución cuando la situación del área lo requiera.`
  ],

  // === SECCIÓN 8 - EVALUACIÓN ===
  [
    `La Jefatura realizará un monitoreo sistemático de la gestión mediante indicadores clave en las herramientas institucionales de gestión de proyectos y en las distintas líneas de trabajo:`,
    `Realizaré un monitoreo sistemático de la gestión mediante indicadores clave en las herramientas institucionales de gestión de proyectos y en las distintas líneas de trabajo:`
  ],
  [
    `Cuando una medida no alcance los resultados esperados o se detecten cuellos de botella, la Jefatura revisará procedimientos, redefinirá prioridades, redistribuirá responsabilidades o reforzará la capacitación interna, manteniendo la planificación como una herramienta viva de gestión.`,
    `Cuando una medida no alcance los resultados esperados o se detecten cuellos de botella, revisaré procedimientos, redefiniré prioridades, redistribuiré responsabilidades o reforzaré la capacitación interna, manteniendo la planificación como una herramienta viva de gestión.`
  ],

  // === SECCIÓN 9 - CONCLUSIONES ===
  [
    `El rol de la Jefatura será conducir este proceso promoviendo el trabajo colaborativo, la planificación estratégica y la mejora continua, procurando que las decisiones técnicas acompañen las necesidades organizacionales y contribuyan al fortalecimiento de la gestión pública.`,
    `Mi rol como Jefe de Departamento será conducir este proceso promoviendo el trabajo colaborativo, la planificación estratégica y la mejora continua, procurando que las decisiones técnicas acompañen las necesidades organizacionales y contribuyan al fortalecimiento de la gestión pública.`
  ],
  [
    `En este sentido, la propuesta presentada busca consolidar la optimización de los procedimientos organizacionales como la columna vertebral del Departamento, asegurando que el código no solo funcione, sino que sea escalable, seguro y responda de manera sostenida a las exigencias de las diferentes gestiones, presente y futura, preservando el conocimiento institucional y generando valor permanente para la Administración Municipal y la comunidad.`,
    `En este sentido, mi propuesta busca consolidar la optimización de los procedimientos organizacionales como la columna vertebral del Departamento, asegurando que el código no solo funcione, sino que sea escalable, seguro y responda de manera sostenida a las exigencias de las diferentes gestiones, presente y futura, preservando el conocimiento institucional y generando valor permanente para la Administración Municipal y la comunidad.`
  ],
];

async function main() {
  const srcPath = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido.docx');
  const origData = fs.readFileSync(srcPath);
  const origZip = await JSZip.loadAsync(origData);

  let docXml = await origZip.file('word/document.xml').async('string');

  let replacedCount = 0;
  let notFound = [];

  for (const [original, replacement] of REPLACEMENTS) {
    if (original === replacement) continue;

    // Escape special XML chars for search
    const escapedOrig = original
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const escapedRepl = replacement
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (docXml.includes(escapedOrig)) {
      docXml = docXml.replace(escapedOrig, escapedRepl);
      replacedCount++;
      console.log('✓', original.substring(0, 70) + '...');
    } else if (docXml.includes(original)) {
      docXml = docXml.replace(original, replacement);
      replacedCount++;
      console.log('✓ (raw)', original.substring(0, 70) + '...');
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

  // Guardar en la carpeta del proyecto
  origZip.file('word/document.xml', docXml);
  const newDocx = await origZip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  const outPath = path.join(__dirname, '..', 'proyecto prueba', 'Proyecto Guido - Primera Persona v2.docx');
  fs.writeFileSync(outPath, newDocx);
  console.log('\n✅ Guardado en:', outPath);
}

main().catch(console.error);
