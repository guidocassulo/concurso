const fs = require('fs');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  PageBreak,
  Header,
  Footer,
  PageNumber
} = require('docx');

function h1(text) {
  return new Paragraph({
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text, bold: true, size: 24, color: '1A365D' })]
  });
}
function h2(text) {
  return new Paragraph({
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, size: 22, color: '2B6CB0' })]
  });
}
function h3(text, color = '2D3748') {
  return new Paragraph({
    spacing: { before: 140, after: 60 },
    children: [new TextRun({ text, bold: true, size: 21, color })]
  });
}
function p(text, boldPrefix = '') {
  const children = [];
  if (boldPrefix) {
    children.push(new TextRun({ text: boldPrefix, bold: true, size: 21, color: '1A202C' }));
  }
  children.push(new TextRun({ text, size: 21, color: '2D3748' }));
  return new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { line: 276, after: 120 },
    children
  });
}
function bullet(text, boldPrefix = '') {
  const children = [];
  if (boldPrefix) {
    children.push(new TextRun({ text: boldPrefix, bold: true, size: 21, color: '1A202C' }));
  }
  children.push(new TextRun({ text, size: 21, color: '2D3748' }));
  return new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { line: 260, after: 80 },
    bullet: { level: 0 },
    children
  });
}

const docChildren = [
  // PORTADA
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 300, after: 100 },
    children: [new TextRun({ text: 'MUNICIPALIDAD DE GENERAL PUEYRREDON', bold: true, size: 24, color: '1A365D' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    children: [new TextRun({ text: 'SECRETARÍA DE PARTICIPACIÓN CIUDADANA Y DESCENTRALIZACIÓN', bold: true, size: 20, color: '2B6CB0' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 300 },
    children: [new TextRun({ text: 'SUBSECRETARÍA DE GOBIERNO DIGITAL Y MEJORA DE PROCESOS', bold: true, size: 18, color: '4A5568' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text: 'CONCURSO INTERNO DE OPOSICIÓN Y ANTECEDENTES', bold: true, size: 22, color: '1A202C' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 500 },
    children: [new TextRun({ text: 'Cargo: Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software', bold: true, size: 24, color: '2B6CB0' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 150 },
    children: [new TextRun({ text: 'PLAN DE TRABAJO Y PROYECTO DE GESTIÓN', bold: true, size: 30, color: '1A365D' })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 600 },
    children: [new TextRun({ text: 'Diagnóstico Integral, Propuesta Estratégica y Plan de Acción para la Conducción del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software:\nOptimización con Recursos Actuales y Proyección con Recursos Potenciados', size: 20, italics: true, color: '4A5568' })]
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 600, after: 100 },
    children: [new TextRun({ text: 'Postulante: ', bold: true, size: 22 }), new TextRun({ text: 'Guido Emmanuel Cassulo', size: 22 })]
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 100 },
    children: [new TextRun({ text: 'Cargo actual: ', bold: true, size: 22 }), new TextRun({ text: 'Soporte Semi Senior (Desarrollador de Software)', size: 22 })]
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 100 },
    children: [new TextRun({ text: 'Legajo N°: ', bold: true, size: 22 }), new TextRun({ text: '36484', size: 22 })]
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 300 },
    children: [new TextRun({ text: 'Mar del Plata — Agosto de 2026', italics: true, size: 20, color: '718096' })]
  }),
  new Paragraph({ children: [new PageBreak()] }),

  // ÍNDICE
  new Paragraph({
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: 'ÍNDICE GENERAL', bold: true, size: 26, color: '1A365D' })]
  }),
  p('1. INTRODUCCIÓN Y VISIÓN DE LA JEFATURA'),
  p('2. DIAGNÓSTICO INSTITUCIONAL Y OPERATIVO'),
  p('   2.1 Situación actual y operativa del Departamento'),
  p('   2.2 Matriz de Análisis FODA'),
  p('   2.3 Conclusión del diagnóstico y visión de liderazgo'),
  p('3. PRINCIPIOS DE MI GESTIÓN AL FRENTE DEL DEPARTAMENTO'),
  p('   3.1 Liderazgo colaborativo, motivación y desarrollo humano'),
  p('   3.2 Gestión orientada a procesos y estandarización'),
  p('   3.3 Soberanía y preservación del conocimiento institucional'),
  p('   3.4 Cultura de mejora continua y aseguramiento de la calidad'),
  p('   3.5 Innovación tecnológica responsable y sustentable'),
  p('   3.6 Vocación de servicio y orientación al usuario municipal'),
  p('   3.7 Toma de decisiones basada en métricas y evidencia'),
  p('4. OBJETIVOS ESTRATÉGICOS DE MI GESTIÓN'),
  p('5. PROPUESTA DE MEJORA Y ACCIÓN CON RECURSOS ACTUALES (SIN PRESUPUESTO ADICIONAL)'),
  p('   5.1 Organización, planificación y centralización de la demanda en Redmine'),
  p('   5.2 Plan de preservación del conocimiento y designación de Referentes Secundarios'),
  p('   5.3 Arquitectura Base Institucional y estandarización técnica'),
  p('   5.4 Gestión formal de requerimientos y relación con las áreas usuarias'),
  p('   5.5 Gobierno técnico y control de calidad sobre proveedores externos'),
  p('   5.6 Adopción de innovación tecnológica y asistencia de Inteligencia Artificial'),
  p('   5.7 Coordinación transversal y sinergia entre equipos distribuidos'),
  p('   5.8 Optimización de roles según experiencia acumulada y mentoría'),
  p('6. PROYECCIÓN CON INCORPORACIÓN DE RECURSOS POTENCIADOS (CON PRESUPUESTO)'),
  p('   6.1 Incorporación de herramientas profesionales de desarrollo'),
  p('   6.2 Programa permanente de capacitación técnica y habilidades blandas'),
  p('   6.3 Modernización de plataformas y migración de sistemas legacy'),
  p('   6.4 Plataformas avanzadas para el trabajo colaborativo'),
  p('   6.5 Tableros ejecutivos y analítica de gestión'),
  p('   6.6 Fortalecimiento gradual de la dotación y especialización funcional'),
  p('7. IMPLEMENTACIÓN, PUESTA EN MARCHA Y GESTIÓN OPERATIVA'),
  p('   7.1 Fase 1: Relevamiento inicial y puesta en marcha (Meses 1 a 2)'),
  p('   7.2 Fase 2: Consolidación y estandarización técnica (Meses 3 a 6)'),
  p('   7.3 Fase 3: Mejora continua y proyección estratégica (Mes 6 en adelante)'),
  p('8. EVALUACIÓN DE DESEMPEÑO, INDICADORES Y CLIMA LABORAL'),
  p('   8.1 Indicadores cuantitativos y métricas de gestión'),
  p('   8.2 Evaluación cualitativa, feedback interno y clima organizacional'),
  p('   8.3 Ciclo de retroalimentación y ajuste continuo'),
  p('9. CONCLUSIONES Y COMPROMISO DE GESTIÓN'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 1
  h1('1. INTRODUCCIÓN Y VISIÓN DE LA JEFATURA'),
  p('En el marco del presente Concurso Interno de Oposición y Antecedentes para la cobertura del cargo de Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, presento mi Plan de Trabajo y Proyecto de Gestión Integral. Este documento expone el diagnóstico operativo, funcional y humano del área, elaborado a partir de mi experiencia cotidiana y desempeño como desarrollador en la Municipalidad de General Pueyrredon, y define el programa estratégico de transformaciones que implementaré al frente de la Jefatura para optimizar los servicios digitales que nuestra Administración brinda a las dependencias municipales y a toda la comunidad.'),
  p('El Departamento constituye una pieza estratégica fundamental dentro de la Subsecretaría de Gobierno Digital y Mejora de Procesos (dependiente de la Secretaría de Participación Ciudadana y Descentralización). Sobre nuestra área recae la alta responsabilidad de diseñar, programar, implementar, asegurar y evolucionar las soluciones informáticas que sustentan la gestión pública municipal. Desde mi perspectiva, la función de la Jefatura va mucho más allá de la supervisión técnica: implica un rol de liderazgo transformador que debe armonizar la solvencia tecnológica con la planificación rigurosa, la conducción empática de personas y la administración eficiente y transparente de los recursos del Estado.'),
  p('Como Jefe de Departamento, asumo el compromiso de liderar la gestión del área con una visión integradora: promoveré el trabajo colaborativo, resguardaré el conocimiento institucional como patrimonio público y consolidaré procedimientos organizacionales que funcionen como la columna vertebral de nuestra labor. De esta manera, aseguraré que las aplicaciones no solo resuelvan requerimientos puntuales, sino que sean escalables, seguras, interoperables y sostenibles a lo largo del tiempo, respondiendo con idoneidad tanto a las necesidades de la gestión actual como a los desafíos de las futuras administraciones.'),
  p('El Departamento opera en un contexto de creciente complejidad técnica y organizativa: conviven sistemas de diversa antigüedad y arquitectura, una demanda exponencial de digitalización por parte de las distintas secretarías municipales y recursos que exigen una administración sumamente criteriosa. Ante esta realidad, mi premisa fundamental de gestión no consiste en supeditar los resultados a la obtención inmediata de mayores partidas presupuestarias, sino en demostrar capacidad directiva: propongo una estrategia en dos etapas consecutivas, comenzando por la optimización y reordenamiento integral con los recursos y herramientas actualmente disponibles, para luego proyectar inversiones tecnológicas escalables cuando la Administración disponga de partidas presupuestarias.'),
  p('Mi proyecto de gestión se asienta sobre cinco pilares estratégicos:'),
  bullet('Fortalecimiento del capital humano, el clima laboral y la cultura de colaboración activa.'),
  bullet('Soberanía técnica, resguardo y democratización del conocimiento institucional.'),
  bullet('Estandarización de procesos, arquitectura de software y aseguramiento continuo de la calidad.'),
  bullet('Innovación tecnológica responsable y mejora continua con recursos propios.'),
  bullet('Planificación estratégica orientada a resultados medibles, transparencia y vocación de servicio.'),
  new Paragraph({ children: [new PageBreak()] })
];
// CAPÍTULO 2
docChildren.push(
  h1('2. DIAGNÓSTICO INSTITUCIONAL Y OPERATIVO'),
  h2('2.1 Situación actual y operativa del Departamento'),
  p('A partir de mi inserción en el equipo de desarrollo y del análisis pormenorizado del funcionamiento cotidiano de la dependencia, he constatado que el Departamento cuenta con un cuerpo técnico con un profundo entendimiento de la lógica funcional del Municipio y gran experiencia acumulada en múltiples tecnologías (.NET, C#, ASP.NET, Angular, React, bases de datos relacionales SQL Server y PostgreSQL). Sin embargo, he detectado falencias organizativas y metodológicas que obstaculizan su pleno rendimiento: una marcada concentración del conocimiento en personas determinadas, ausencia de guías formales de arquitectura, disparidad de canales para la recepción de requerimientos, escasa documentación técnica viva y una falta de articulación sistemática entre programadores que prestan servicios en diferentes dependencias.'),
  p('El impulso constante hacia la digitalización ha generado un flujo continuo y creciente de solicitudes provenientes de diversas secretarías y entes descentralizados. Al no haberse consolidado históricamente un protocolo único y vinculante de ingreso y priorización de la demanda, el Departamento se ha visto forzado a operar bajo una modalidad primordialmente reactiva, atendiendo urgencias coyunturales y postergando la planificación estratégica y la modernización de los sistemas troncales. Como Jefe de Departamento, intervendré de forma decidida y estructurada sobre estos procesos para restituir el orden y la previsibilidad operativa.'),
  h2('2.2 Matriz de Análisis FODA'),
  p('Con el propósito de fundamentar con rigor técnico y metodológico mi plan de acción, he confeccionado el siguiente diagnóstico FODA:'),
  h3('FORTALEZAS', '16A34A'),
  bullet('Capital humano con profundo conocimiento del dominio municipal: Los agentes dominan las normativas, los circuitos administrativos y las particularidades operativas de las distintas áreas de la Comuna.'),
  bullet('Compromiso técnico y capacidad resolutiva: Demostrada aptitud para dar respuesta a incidencias complejas y garantizar la continuidad operativa de sistemas neurálgicos ante contingencias.'),
  bullet('Diversidad y dominio de tecnologías consolidadas: Experiencia sólida en desarrollo backend, frontend y motores de bases de datos relacionales.'),
  bullet('Infraestructura de desarrollo disponible: Disponibilidad de repositorios en GitLab para el control de versiones y entornos de trabajo que pueden ser optimizados de inmediato.'),
  h3('OPORTUNIDADES', '2563EB'),
  bullet('Marco institucional favorable a la modernización: Firme decisión política de avanzar en la digitalización integral de los servicios públicos municipales y despapelización administrativa.'),
  bullet('Integración asistida de Inteligencia Artificial: Posibilidad concreta de adoptar herramientas de IA para optimizar la codificación, acelerar la generación de pruebas unitarias y automatizar la documentación.'),
  bullet('Adopción de marcos de trabajo ágiles (Scrum / Kanban adaptados): Oportunidad de estructurar el trabajo en ciclos iterativos que garanticen entregas de valor tempranas y transparentes.'),
  bullet('Capacitación continua a costo cero: Amplia oferta de formación mediante el Instituto de Capacitación Municipal (ICM) y plataformas abiertas de especialización técnica.'),
  h3('DEBILIDADES', 'DC2626'),
  bullet('Concentración crítica del conocimiento: Sistemas y módulos esenciales son dominados por un único agente, generando un grave riesgo de continuidad ante ausencias, licencias o contingencias.'),
  bullet('Falta de estandarización en arquitectura y estilo de código: Coexistencia de patrones disímiles, prácticas heterogéneas y ausencia de guías institucionales de buenas prácticas.'),
  bullet('Dispersión y canales informales de solicitud: Ingreso de pedidos vía telefónica, mensajes o notas informales sin registro ni tipificación centralizada.'),
  bullet('Fragmentación y aislamiento de equipos: Falta de instancias regulares de coordinación técnica entre desarrolladores asignados a distintas sedes físicas.'),
  bullet('Predominio del mantenimiento correctivo: Destino predominante del tiempo de desarrollo a subsanar fallas urgentes en lugar de innovar y planificar.'),
  h3('AMENAZAS', 'D97706'),
  bullet('Sobredemanda e indefinición de alcance por las áreas usuarias: Proliferación de solicitudes simultáneas con requerimientos ambiguos o mutables.'),
  bullet('Obsolescencia técnica y deuda tecnológica en sistemas legacy: Riesgos de compatibilidad y seguridad derivados de tecnologías que han cumplido su ciclo.'),
  bullet('Dependencia técnica de proveedores externos: Contrataciones de software donde el Municipio no ejerce el control exhaustivo del código fuente y su arquitectura.'),
  bullet('Urgencias normativas e imprevistos de gestión: Exigencia de desarrollos intempestivos que desarticulan la planificación si no existen criterios claros de prioridad.'),
  h2('2.3 Conclusión del diagnóstico y visión de liderazgo'),
  p('El diagnóstico demuestra con claridad que la solución a los desafíos del Departamento no requiere erogaciones extraordinarias inmediatas, sino un liderazgo firme, cercano y técnicamente calificado que reorganice los flujos de trabajo, democratice el conocimiento, establezca estándares comunes y motive al equipo humano. Como Jefe del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, asumo la responsabilidad plena de conducir esta transformación organizativa y técnica.'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 3
  h1('3. PRINCIPIOS DE MI GESTIÓN AL FRENTE DEL DEPARTAMENTO'),
  p('Mi conducción al frente del área se guiará por siete principios directivos irrenunciables:'),
  h2('3.1 Liderazgo colaborativo, motivación y desarrollo humano'),
  p('Ejerceré un liderazgo abierto, participativo y de puertas abiertas. Entiendo que los logros de un área de tecnología dependen de la motivación, el bienestar y el reconocimiento de sus integrantes. Promoveré la delegación responsable, otorgando autonomía técnica a los desarrolladores dentro de los marcos establecidos. Fomentaré una cultura de reconocimiento al esfuerzo y abordaré de manera preventiva cualquier situación de desgaste o desmotivación mediante el diálogo sincero y el acompañamiento constante.'),
  h2('3.2 Gestión orientada a procesos y estandarización'),
  p('Institucionalizaré procesos claros, predecibles y documentados para cada etapa del ciclo de vida del software (relevamiento, diseño, desarrollo, aseguramiento de calidad, despliegue y mantenimiento). La calidad del software municipal no dependerá de voluntades aisladas, sino de procedimientos organizacionales estandarizados.'),
  h2('3.3 Soberanía y preservación del conocimiento institucional'),
  p('El software, las bases de datos y el conocimiento funcional de las aplicaciones son activos estratégicos del Partido de General Pueyrredon. Erradicaré el personalismo técnico asegurando que toda solución cuente con documentación completa, código respaldado en repositorios centrales y referentes alternativos capacitados.'),
  h2('3.4 Cultura de mejora continua y aseguramiento de la calidad'),
  p('Implementaré revisiones obligatorias entre pares (code reviews), pruebas funcionales y de regresión sistematizadas, y reuniones de retrospectiva post-lanzamiento para capitalizar lecciones aprendidas y elevar continuamente la calidad de nuestros productos.'),
  h2('3.5 Innovación tecnológica responsable y sustentable'),
  p('Impulsaré la adopción de tecnologías de vanguardia (asistencia con IA, arquitecturas de microservicios, frameworks modernos) bajo criterios de pertinencia, seguridad de la información, madurez tecnológica y capacidad de absorción por parte del equipo.'),
  h2('3.6 Vocación de servicio y orientación al usuario municipal'),
  p('El software público debe estar al servicio de las personas. Promoveré en todo el equipo una actitud de empatía, escucha activa y colaboración estrecha con las dependencias municipales que utilizan nuestras aplicaciones, facilitando su labor y optimizando la atención al ciudadano.'),
  h2('3.7 Toma de decisiones basada en métricas y evidencia'),
  p('Conduciré el Departamento apoyándome en datos e indicadores objetivos: tiempos de ciclo, volumen de requerimientos atendidos, estabilidad de versiones en producción y grado de cumplimiento de cronogramas.'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 4
  h1('4. OBJETIVOS ESTRATÉGICOS DE MI GESTIÓN'),
  p('Durante mi ejercicio al frente de la Jefatura, me comprometo al cumplimiento de los siguientes objetivos estratégicos:'),
  bullet('1. Centralizar el 100% de la demanda en Redmine: Canalizar todas las solicitudes de nuevos desarrollos, mejoras evolutivas e incidencias a través del sistema oficial Redmine, garantizando visibilidad y trazabilidad absoluta.'),
  bullet('2. Implementar la Arquitectura Base Institucional: Definir y poner en producción plantillas y estándares oficiales de desarrollo en .NET, Angular, React y PostgreSQL/SQL Server.'),
  bullet('3. Eliminar los puntos únicos de falla operativa: Asignar y formar Referentes Secundarios en el 100% de los sistemas municipales críticos para resguardar la continuidad operativa.'),
  bullet('4. Ejercer el 100% del control técnico sobre proveedores externos: Fiscalizar pliegos, auditar entregas de código fuente y exigir pruebas de calidad previas a la aceptación final de cualquier desarrollo tercerizado.'),
  bullet('5. Institucionalizar el protocolo de relevamiento funcional: Formalizar la Ficha de Requerimiento y la validación conjunta de casos de uso con las áreas requirentes antes de iniciar la programación.'),
  bullet('6. Incorporar asistencia de Inteligencia Artificial y automatización de pruebas: Integrar herramientas de IA para optimizar la productividad del equipo y elevar la cobertura de testing.'),
  bullet('7. Fortalecer la sinergia transversal del equipo: Implementar reuniones quincenales de sincronización técnica entre programadores de sedes centrales y descentralizadas.'),
  bullet('8. Articular un plan permanente de formación profesional: Gestionar junto al ICM y plataformas especializadas capacitaciones técnicas y talleres de habilidades de gestión.'),
  new Paragraph({ children: [new PageBreak()] })
);
// CAPÍTULO 5
docChildren.push(
  h1('5. PROPUESTA DE MEJORA Y ACCIÓN CON RECURSOS ACTUALES (SIN PRESUPUESTO ADICIONAL)'),
  p('Como demostración de capacidad directiva y optimización de los recursos públicos existentes, pondré en ejecución inmediata las siguientes ocho líneas de acción:'),
  h2('5.1 Organización, planificación y centralización de la demanda en Redmine'),
  p('La recepción desordenada de solicitudes a través de vías informales (mensajes personales, llamadas o correos no clasificados) provoca superposición de esfuerzos, falta de estimación y desatención de prioridades estratégicas.', 'Problema detectado: '),
  p('Estableceré con carácter obligatorio que todo requerimiento sea registrado en la plataforma Redmine. Clasificaré las peticiones por tipología (Nuevo Sistema, Mejora Evolutiva, Mantenimiento Correctivo, Asistencia Técnica) y estimaremos las horas de labor. Conduciré reuniones quincenales de planificación donde revisaremos el backlog, asignaremos prioridades en acuerdo con la Superioridad y equilibraremos las cargas de trabajo entre los agentes.', 'Propuesta y conducción: '),
  p('Previsibilidad en los plazos de entrega, erradicación de tareas  invisibles y trazabilidad total del esfuerzo técnico del Departamento.', 'Resultado esperado: '),
  h2('5.2 Plan de preservación del conocimiento y designación de Referentes Secundarios'),
  p('Sistemas neurálgicos dependen del conocimiento exclusivo de un solo programador, lo que genera una fragilidad operativa inadmisible ante ausencias o licencias.', 'Problema detectado: '),
  p('Pondré en marcha un Programa de Resguardo del Conocimiento Institucional. Cada sistema crítico contará formalmente con un Referente Primario y un Referente Secundario. Estableceré sesiones semanales de transferencia técnica y mentoreo práctico, exigiendo la confección de documentación técnica mínima (diagramas de componentes, diccionario de datos y manuales de despliegue en repositorios).', 'Propuesta y conducción: '),
  p('Eliminación del riesgo operativo, cobertura garantizada los 365 días del año y enriquecimiento profesional de todo el cuerpo técnico.', 'Resultado esperado: '),
  h2('5.3 Arquitectura Base Institucional y estandarización técnica'),
  p('Diversidad de criterios y estructuras en las aplicaciones existentes, lo que encarece el mantenimiento y dificulta la colaboración entre programadores.', 'Problema detectado: '),
  p('Diseñaré e implementaré la Arquitectura Base Institucional, definiendo plantillas modelo de proyectos (backend desacoplado con APIs RESTful documentadas en Swagger, frontend modular responsivo en Angular/React y acceso a datos optimizado). Estableceré guías de estilo de código y la obligación de realizar revisiones cruzadas (Merge Requests en GitLab) antes de integrar cambios al entorno de producción.', 'Propuesta y conducción: '),
  p('Sistemas modulares, robustos y homogéneos, disminución drástica de incidentes y fácil integración para cualquier miembro del equipo.', 'Resultado esperado: '),
  h2('5.4 Gestión formal de requerimientos y relación con las áreas usuarias'),
  p('Requerimientos poco especificados que conducen a desajustes funcionales, quejas de usuarios y permanentes modificaciones sobre la marcha.', 'Problema detectado: '),
  p('Implantaré el Protocolo de Relevamiento Funcional mediante la Ficha de Requerimiento. Antes de escribir una sola línea de código, realizaremos entrevistas con el área solicitante, redactaremos los casos de uso y criterios de aceptación, y requeriremos la firma de conformidad del funcionario responsable.', 'Propuesta y conducción: '),
  p('Alineación exacta entre las expectativas del usuario y la solución informática entregada, reduciendo a cero el retrabajo.', 'Resultado esperado: '),
  h2('5.5 Gobierno técnico y control de calidad sobre proveedores externos'),
  p('Adquisición o contratación de soluciones a terceros sin auditoría técnica interna, derivando en dependencia de proveedores y sistemas inaccesibles.', 'Problema detectado: '),
  p('Asumiré la fiscalización técnica directa de los contratos de software. Participaremos activamente en la formulación de los Pliegos de Especificaciones Técnicas (PET), exigiendo estándares de arquitectura, entrega de código fuente íntegro, suite de pruebas unitarias y manuales de instalación. No se emitirá certificado de conformidad definitiva sin una auditoría de código realizada por el Departamento.', 'Propuesta y conducción: '),
  p('Plena soberanía tecnológica, resguardo del patrimonio municipal y capacidad plena del Departamento para mantener los sistemas en el futuro.', 'Resultado esperado: '),
  h2('5.6 Adopción de innovación tecnológica y asistencia de Inteligencia Artificial'),
  p('Aprovechamiento dispar y desregulado de herramientas de IA sin lineamientos institucionales ni garantías de seguridad de datos.', 'Problema detectado: '),
  p('Reglamentaré e impulsaré el uso asistido de Inteligencia Artificial para tareas de alta demanda de tiempo: generación de esqueletos de código, diseño de pruebas automatizadas, optimización de consultas SQL y refactorización. Estableceré pautas claras para asegurar la absoluta confidencialidad de la información municipal.', 'Propuesta y conducción: '),
  p('Incremento sustancial de la productividad del equipo y modernización de las prácticas de desarrollo.', 'Resultado esperado: '),
  h2('5.7 Coordinación transversal y sinergia entre equipos distribuidos'),
  p('Desconexión operativa entre programadores que desempeñan funciones en dependencias descentralizadas respecto a la sede central.', 'Problema detectado: '),
  p('Institucionalizaré reuniones técnicas de sincronización quincenal (presenciales y mediante videoconferencia), estableciendo canales de comunicación técnica fluidos y articulando estrechamente con el Departamento de Soporte y la Dirección de Infraestructura.', 'Propuesta y conducción: '),
  p('Consolidación del sentido de equipo, intercambio continuo de experiencias y resolución ágil de bloqueos técnicos.', 'Resultado esperado: '),
  h2('5.8 Optimización de roles según experiencia acumulada y mentoría'),
  p('Falta de un esquema formal de roles que aproveche al máximo el perfil y la trayectoria de cada desarrollador.', 'Problema detectado: '),
  p('Reorganizaré la asignación de funciones: los agentes con mayor trayectoria asumirán responsabilidades de arquitectura, análisis de casos complejos y mentoría; mientras que los perfiles ágiles liderarán la programación web y diseño de interfaces. Esto permitirá el crecimiento guiado de todo el plantel.', 'Propuesta y conducción: '),
  p('Motivación del personal, aprovechamiento óptimo de talentos y fortalecimiento del clima de trabajo.', 'Resultado esperado: '),
  new Paragraph({ children: [new PageBreak()] })
);
// CAPÍTULO 6, 7, 8, 9
docChildren.push(
  // CAPÍTULO 6
  h1('6. PROYECCIÓN CON INCORPORACIÓN DE RECURSOS POTENCIADOS (CON PRESUPUESTO)'),
  p('En una segunda fase, y conforme la Administración Municipal disponga de partidas de inversión o financiamiento para modernización, impulsaré los siguientes proyectos de inversión tecnológica:'),
  h2('6.1 Incorporación de herramientas profesionales de desarrollo'),
  p('Propondré la adquisición de licencias para entornos de desarrollo avanzados, analizadores estáticos de código y seguridad (SonarQube) y servidores dedicados para integración y despliegue continuo (CI/CD), automatizando la compilación y prueba de aplicaciones.'),
  h2('6.2 Programa permanente de capacitación técnica y habilidades blandas'),
  p('Gestionaré con la Dirección de Personal y el Instituto de Capacitación Municipal (ICM) programas de certificación oficial en tecnologías Cloud, seguridad en aplicaciones, bases de datos relacionales avanzadas, liderazgo y comunicación asertiva para el equipo.'),
  h2('6.3 Modernización de plataformas y migración de sistemas legacy'),
  p('Diseñaré un plan de migración paulatina de sistemas legados hacia arquitecturas modernas y desacopladas basadas en APIs, eliminando componentes obsoletos y garantizando la compatibilidad con el ecosistema digital del Municipio.'),
  h2('6.4 Plataformas avanzadas para el trabajo colaborativo'),
  p('Implementación de repositorios corporativos de documentación técnica y wikis institucionales que faciliten la consulta centralizada de especificaciones funcionales.'),
  h2('6.5 Tableros ejecutivos y analítica de gestión'),
  p('Desarrollo de tableros de control en tiempo real (dashboards ejecutivos) para que las autoridades de la Subsecretaría y de la Secretaría cuenten con visibilidad gráfica instantánea sobre el avance de los proyectos y la demanda atendida.'),
  h2('6.6 Fortalecimiento gradual de la dotación y especialización funcional'),
  p('Planificación de futuras incorporaciones de perfiles especializados en Análisis Funcional / QA (aseguramiento de calidad) y Desarrollo Web para ampliar la capacidad de respuesta del Departamento.'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 7
  h1('7. IMPLEMENTACIÓN, PUESTA EN MARCHA Y GESTIÓN OPERATIVA'),
  p('La ejecución de este Plan de Trabajo se llevará a cabo a través de tres fases progresivas:'),
  h2('7.1 Fase 1: Relevamiento inicial y puesta en marcha (Meses 1 a 2)'),
  p('Al asumir formalmente la Jefatura, llevaré a cabo un relevamiento completo de todos los sistemas en producción, su estado técnico y sus responsables. Migraremos la totalidad de las solicitudes abiertas a Redmine, designaremos formalmente los Referentes Secundarios para cada sistema crítico y publicaremos las primeras guías de Arquitectura Base en GitLab.'),
  h2('7.2 Fase 2: Consolidación y estandarización técnica (Meses 3 a 6)'),
  p('Pondremos en régimen permanente las revisiones de código entre pares, el protocolo de relevamiento con áreas usuarias y el control de calidad sobre proveedores externos. Iniciaremos los talleres de transferencia de conocimientos y la adopción reglada de herramientas de IA asistida.'),
  h2('7.3 Fase 3: Mejora continua y proyección estratégica (Mes 6 en adelante)'),
  p('Consolidaremos el monitoreo de indicadores de desempeño, elaboraremos informes ejecutivos periódicos para las autoridades y formularemos los proyectos de inversión tecnológica para las previsiones presupuestarias anuales.'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 8
  h1('8. EVALUACIÓN DE DESEMPEÑO, INDICADORES Y CLIMA LABORAL'),
  p('Como Jefe de Departamento, evaluaré sistemáticamente la gestión mediante una combinación equilibrada de métricas cuantitativas y cualitativas:'),
  h2('8.1 Indicadores cuantitativos y métricas de gestión'),
  bullet('Cobertura de la demanda: 100% de proyectos y solicitudes canalizados y gestionados en Redmine.'),
  bullet('Mitigación del riesgo operativo: 100% de los sistemas críticos con Referente Secundario activo y documentación técnica actualizada.'),
  bullet('Estabilidad del software: Reducción del 50% en las incidencias reportadas post-despliegue en producción.'),
  bullet('Fiscalización de proveedores: 100% de recepciones de software externo con acta técnica, código fuente y pruebas verificadas.'),
  bullet('Cumplimiento de plazos: Nivel de adherencia a los cronogramas comprometidos en las Fichas de Requerimiento.'),
  h2('8.2 Evaluación cualitativa, feedback interno y clima organizacional'),
  p('Mantendré reuniones periódicas individuales y grupales para evaluar el clima laboral, escuchar inquietudes, relevar necesidades de capacitación y fortalecer el compromiso y compañerismo en el equipo.'),
  h2('8.3 Ciclo de retroalimentación y ajuste continuo'),
  p('Utilizaremos los datos de rendimiento y las devoluciones de las áreas usuarias para perfeccionar continuamente los procedimientos del Departamento, asegurando una gestión flexible y orientada a la excelencia.'),
  new Paragraph({ children: [new PageBreak()] }),

  // CAPÍTULO 9
  h1('9. CONCLUSIONES Y COMPROMISO DE GESTIÓN'),
  p('El Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software es un motor clave para la modernización de la Municipalidad de General Pueyrredon. Mi Plan de Trabajo brinda una respuesta estructurada, realista y profundamente profesional a las necesidades del área, fundamentada en la optimización de los recursos actuales mediante el ordenamiento de procesos, la estandarización técnica, la preservación del conocimiento institucional y un liderazgo humano y motivador.'),
  p('Como Jefe de Departamento, asumo el compromiso inquebrantable de conducir esta etapa con máxima dedicación, solvencia técnica y vocación de servicio público. Garantizaré que las soluciones informáticas de nuestra Comuna sean seguras, robustas y de vanguardia, facilitando la tarea diaria de todos los trabajadores municipales y brindando servicios ágiles, transparentes y eficientes a los vecinos del Partido de General Pueyrredon.'),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 800 },
    children: [
      new TextRun({ text: '___________________________________\n', color: '718096' }),
      new TextRun({ text: 'Guido Emmanuel Cassulo\n', bold: true, size: 22, color: '1A365D' }),
      new TextRun({ text: 'Postulante a Jefe de Departamento\nLegajo N° 36484\nMunicipalidad de General Pueyrredon', size: 20, color: '4A5568' }),
    ],
  })
);

async function run() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: 'Calibri', size: 21, color: '2D3748' },
          paragraph: { spacing: { line: 276, after: 120 } },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: 'Plan de Trabajo — Jefatura de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software',
                    size: 16,
                    color: '718096',
                    italics: true,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: 'Postulante: Guido Cassulo (Leg. 36484)  |  Página ', size: 16, color: '718096' }),
                  new TextRun({ children: [PageNumber.CURRENT], size: 16, color: '718096' }),
                  new TextRun({ text: ' de ', size: 16, color: '718096' }),
                  new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: '718096' }),
                ],
              }),
            ],
          }),
        },
        children: docChildren,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('d:/proyecto/Proyecto_Guido_Cassulo_Jefe.docx', buffer);
  fs.writeFileSync('d:/proyecto/proyecto prueba/Proyecto Guido - Primera Persona.docx', buffer);
  fs.writeFileSync('d:/proyecto/proyecto prueba/Proyecto Guido.docx', buffer);
  console.log('DOCX generated and saved in all locations!');
}

run().catch(err => console.error(err));
