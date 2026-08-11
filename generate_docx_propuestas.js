const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } = require('docx');
const fs = require('fs');

async function buildDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1700, // ~3cm
              bottom: 850, // ~1.5cm
              left: 1700, // ~3cm
              right: 850, // ~1.5cm
            },
          },
        },
        children: [
          // PORTADA
          new Paragraph({ alignment: AlignmentType.CENTER, heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: 'PLAN DE TRABAJO', bold: true, size: 28 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con Recursos Actuales y Proyección con Incorporación de Recursos', bold: true, size: 22 })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '"Fortaleciendo la gestión del Departamento mediante la organización, el desarrollo de las personas, la estandarización de procesos y la innovación tecnológica al servicio de la Municipalidad."', italics: true, size: 22 })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ children: [new TextRun({ text: 'Postulante: ', bold: true }), new TextRun('Guido Cassulo')] }),
          new Paragraph({ children: [new TextRun({ text: 'Cargo actual: ', bold: true }), new TextRun('Analista Programador / Personal de Software')] }),
          new Paragraph({ children: [new TextRun({ text: 'Legajo: ', bold: true }), new TextRun('[Completar Legajo]')] }),
          new Paragraph({ children: [] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Mar del Plata – Julio 2026', italics: true })] }),
          new Paragraph({ children: [] }),

          // 1. INTRODUCCIÓN
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '1. INTRODUCCIÓN', bold: true })] }),
          new Paragraph({ children: [new TextRun('El presente proyecto tiene como finalidad realizar un diagnóstico integral del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, identificar las problemáticas que afectan su funcionamiento y presentar propuestas concretas para optimizar su funcionamiento y de esta manera mejorar la calidad del servicio brindado a las dependencias municipales y por lo tanto, también al ciudadano.')] }),
          new Paragraph({ children: [new TextRun('El Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software constituye un área estratégica dentro de la Subsecretaría de Gobierno Digital y Mejora de Procesos, siendo responsable de diseñar, desarrollar, mantener e implementar las soluciones informáticas que respaldan la actividad diaria de la Municipalidad de General Pueyrredon.')] }),
          new Paragraph({ children: [new TextRun('Su función excede el desarrollo de aplicaciones informáticas. El Departamento interviene en el relevamiento y análisis de requerimientos funcionales, la planificación y coordinación de proyectos, la definición de estándares de desarrollo, la evaluación de nuevas tecnologías, el control técnico de proveedores externos, la integración entre sistemas municipales y el mantenimiento evolutivo de aplicaciones críticas para el funcionamiento de la Administración.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura del Departamento debe desempeñar un rol integrador que va más allá de la coordinación técnica de proyectos. Su responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando las condiciones organizacionales que permitan al equipo desarrollar software de manera previsible, colaborativa y sostenible, promoviendo la integración entre personas, la reutilización del conocimiento, la adopción responsable de nuevas tecnologías y la mejora permanente de los procedimientos internos, con decisiones tecnológicas alineadas a los objetivos institucionales del Municipio.')] }),
          new Paragraph({ children: [new TextRun('La propuesta reconoce que el Departamento desarrolla su actividad en un entorno dinámico, caracterizado por la coexistencia de sistemas de distinta antigüedad, múltiples requerimientos simultáneos, recursos limitados y una creciente demanda de soluciones digitales por parte de las distintas dependencias municipales. Frente a esta realidad, la respuesta no puede limitarse a incorporar nuevas herramientas tecnológicas sin antes fortalecer la organización del trabajo, establecer criterios comunes y consolidar una cultura de mejora continua.')] }),
          new Paragraph({ children: [new TextRun('En consecuencia, este Plan de Trabajo propone un modelo de gestión que combina liderazgo participativo, organización por procesos, gobierno técnico, gestión del conocimiento e innovación tecnológica, diferenciando claramente aquellas acciones implementables con los recursos actuales de aquellas que requieren inversión presupuestaria, con el objetivo de consolidar un Departamento capaz de responder a las necesidades presentes y garantizar la continuidad y sostenibilidad de sus sistemas más allá de las personas o los cambios de gestión.')] }),
          new Paragraph({ children: [new TextRun('Por ello, el presente Plan propone una estrategia articulada en cinco pilares fundamentales:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('Fortalecimiento del capital humano y del trabajo colaborativo.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('Gestión y preservación del conocimiento institucional.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('Estandarización de procesos y gobierno técnico.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('Mejora continua e innovación tecnológica.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('Planificación estratégica orientada a resultados.')] }),
          new Paragraph({ children: [new TextRun('A partir de estos ejes se desarrolla el diagnóstico de la situación actual y se presentan propuestas de mejora diferenciadas entre las que pueden implementarse con los recursos existentes y las que requieren inversión futura.')] }),
          new Paragraph({ children: [] }),

          // 2. DIAGNÓSTICO INSTITUCIONAL
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '2. DIAGNÓSTICO INSTITUCIONAL', bold: true })] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.1 Situación actual del Departamento', bold: true })] }),
          new Paragraph({ children: [new TextRun('El Departamento cuenta con un equipo con experiencia técnica y conocimiento de los procesos municipales, y dispone de herramientas de trabajo instaladas. Al mismo tiempo, enfrenta desafíos concretos en la gestión del conocimiento, la estandarización de sus procedimientos y la coordinación entre sus distintos grupos de trabajo, a lo que se suma una recepción dispar ante la incorporación de nuevas herramientas de desarrollo.')] }),
          new Paragraph({ children: [new TextRun('En los últimos años la demanda de soluciones informáticas ha crecido de manera sostenida, tanto por el avance de la transformación digital como por la incorporación permanente de nuevas necesidades funcionales provenientes de las distintas áreas municipales. Este crecimiento ha permitido ampliar el alcance del Departamento, pero también ha incrementado la complejidad de su gestión.')] }),
          new Paragraph({ children: [new TextRun('Actualmente conviven aplicaciones desarrolladas en distintos momentos históricos, utilizando tecnologías diversas y respondiendo a necesidades organizacionales diferentes. A ello se suma la atención simultánea de requerimientos evolutivos, mantenimiento correctivo, proyectos nuevos, asistencia técnica a usuarios y coordinación con proveedores externos.')] }),
          new Paragraph({ children: [new TextRun('Este contexto requiere fortalecer la organización interna, promover el trabajo colaborativo y establecer procedimientos comunes. El diagnóstico que se presenta a continuación permite identificar las fortalezas sobre las cuales construir una estrategia de mejora, así como las debilidades y oportunidades cuya adecuada gestión contribuirá al fortalecimiento institucional del área.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.2 Análisis FODA', bold: true })] }),
          
          // FORTALEZAS
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Fortalezas', bold: true })] }),
          new Paragraph({ children: [new TextRun({ text: '• Capital humano con alto conocimiento del negocio municipal: ', bold: true }), new TextRun('El Departamento cuenta con agentes que poseen una valiosa experiencia en el funcionamiento de la Administración Pública Municipal, combinando conocimientos tecnológicos con una profunda comprensión de los procedimientos administrativos, la normativa vigente y las necesidades particulares de las distintas áreas usuarias. Este conocimiento constituye uno de los principales activos institucionales y representa una base sólida para impulsar procesos de mejora e innovación.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Compromiso y capacidad de adaptación: ', bold: true }), new TextRun('A pesar del incremento permanente de requerimientos y de la coexistencia de sistemas con distintos niveles de complejidad tecnológica, el equipo ha demostrado capacidad para sostener la continuidad operativa de los servicios informáticos municipales, adaptándose a nuevos desafíos y prioridades institucionales.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Experiencia acumulada en múltiples tecnologías: ', bold: true }), new TextRun('La evolución histórica de los sistemas municipales ha permitido que el Departamento adquiera experiencia sobre diferentes plataformas, lenguajes y herramientas de desarrollo, generando un importante capital técnico que facilita la evolución gradual de las aplicaciones existentes.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Infraestructura y herramientas disponibles: ', bold: true }), new TextRun('El Departamento dispone de repositorios en GitLab para versionado, plataforma Redmine para gestión de proyectos, ambientes diferenciados de Desarrollo, Prueba y Producción, y equipamiento básico adecuado, constituyendo una base previa sólida para implementar mejoras organizacionales.')] }),
          new Paragraph({ children: [] }),

          // OPORTUNIDADES
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Oportunidades', bold: true })] }),
          new Paragraph({ children: [new TextRun({ text: '• Consolidación del proceso de transformación digital: ', bold: true }), new TextRun('La creciente incorporación de herramientas digitales en la Administración Pública representa una oportunidad para fortalecer el rol estratégico del Departamento como impulsor de la modernización institucional.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Adopción asistida de Inteligencia Artificial: ', bold: true }), new TextRun('La integración de herramientas asistidas por IA en los entornos de desarrollo (IDEs) permite acelerar la codificación, automatizar tareas repetitivas de documentación y elevar la productividad técnica del equipo dentro de un marco de uso seguro.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Implementación de marcos ágiles híbridos: ', bold: true }), new TextRun('La incorporación de metodologías ágiles adaptadas al contexto del Departamento (ciclos cortos de desarrollo para proyectos nuevos y gestión de flujo continuo para el mantenimiento) representa una oportunidad de mejora a costo cero, permitiendo optimizar la planificación, la comunicación interna y la clarificación de prioridades entre equipos.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión política favorable y capacitaciones accesibles: ', bold: true }), new TextRun('La intención de las autoridades de optimizar el área, sumada a la amplia oferta de formación técnica online y la posibilidad de organizar talleres internos, representa una oportunidad concreta para actualizar competencias del equipo sin impacto presupuestario.')] }),
          new Paragraph({ children: [] }),

          // DEBILIDADES
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Debilidades', bold: true })] }),
          new Paragraph({ children: [new TextRun({ text: '• Concentración del conocimiento: ', bold: true }), new TextRun('Una parte significativa del conocimiento funcional y técnico de determinados sistemas críticos se encuentra concentrada en un número reducido de agentes, lo que incrementa el riesgo operacional, dificulta la planificación de tareas, genera cuellos de botella y limita la flexibilidad del Departamento para reasignar recursos ante licencias del personal, imprevistos o prioridades institucionales.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Ausencia de procedimientos homogéneos: ', bold: true }), new TextRun('Si bien existen buenas prácticas individuales, actualmente no todos los proyectos siguen criterios comunes respecto de documentación, planificación, estimación, arquitectura, pruebas o seguimiento, generando variabilidad en la calidad del código, dificultando la incorporación de nuevos agentes, reduciendo la reutilización del trabajo existente y encareciendo el mantenimiento a largo plazo.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Resistencia a la adopción de tecnologías modernas: ', bold: true }), new TextRun('Una parte del equipo, particularmente agentes con experiencia en plataformas como WebForms, muestra resistencia a adoptar alternativas más modernas como .NET, React o Angular, lo que limita la capacidad del Departamento para modernizar sus aplicaciones y dificulta la distribución de tareas en proyectos que requieren tecnologías actualizadas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión fragmentada de proyectos: ', bold: true }), new TextRun('El seguimiento de proyectos se realiza utilizando diferentes herramientas y metodologías, lo que dificulta obtener una visión integral de la carga de trabajo del Departamento, impide conocer su capacidad operativa real, dificulta la priorización transparente de solicitudes entre Secretarías y genera desajustes en las estimaciones de tiempos de entrega.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Comunicación y coordinación entre equipos: ', bold: true }), new TextRun('La distribución física del personal en distintas dependencias limita la circulación oportuna de información, favoreciendo el aislamiento en silos informáticos, incrementando el riesgo de desarrollar soluciones o módulos duplicados y resintiendo la cohesión y sentido de pertenencia a un equipo único.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Dependencia del mantenimiento reactivo: ', bold: true }), new TextRun('La atención permanente de incidencias y requerimientos urgentes reduce el tiempo disponible para actividades de planificación y mejora continua, consumiendo la capacidad técnica en emergencias cotidianas e impidiendo dedicar tiempo a la documentación, la deuda técnica y la modernización planificada de sistemas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión del conocimiento insuficiente: ', bold: true }), new TextRun('La documentación técnica, funcional y de arquitectura presenta distintos niveles de desarrollo según el proyecto, lo que aumenta la dependencia del conocimiento tácito individual, encarece la curva de aprendizaje y pone en riesgo la continuidad de los aplicativos frente a licencias, traslados o bajas de personal.')] }),
          new Paragraph({ children: [] }),

          // AMENAZAS
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Amenazas', bold: true })] }),
          new Paragraph({ children: [new TextRun({ text: '• Incremento sostenido de la demanda e indefinición de áreas usuarias: ', bold: true }), new TextRun('La demanda creciente sumada a dilaciones o falta de certeza por parte de las dependencias solicitantes al definir circuitos administrativos puede superar la capacidad operativa si no se formaliza un circuito único de demandas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Obsolescencia e integración con sistemas legacy: ', bold: true }), new TextRun('La coexistencia de aplicaciones sobre tecnologías antiguas que carecen de APIs unificadas incrementa el riesgo operativo y dificulta su integración con nuevos desarrollos web o móviles.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Riesgo de dependencia técnica sobre proveedores externos: ', bold: true }), new TextRun('La entrega de soluciones por terceros sin un canal fluido de comunicación técnica ni una contraparte municipal que participe activamente del seguimiento puede generar dependencia total del proveedor y pérdida del conocimiento institucional, derivando en mayores costos de mantenimiento e imposibilitando el desarrollo soberano ante una terminación temprana de la contratación.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Requerimientos normativos e imprevistos de gestión: ', bold: true }), new TextRun('El surgimiento de necesidades imprevistas derivadas de cambios normativos o resoluciones urgentes puede forzar la reorganización del cronograma establecido.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Resistencia al liderazgo e inercia organizacional: ', bold: true }), new TextRun('La prolongada falta de una conducción formal en el Departamento puede generar inercia inicial a la hora de adoptar nuevas pautas organizativas y estándares técnicos.')] }),
          new Paragraph({ children: [] }),

          // 2.3 CONCLUSIÓN DEL DIAGNÓSTICO
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.3 Conclusión del diagnóstico', bold: true })] }),
          new Paragraph({ children: [new TextRun('Del análisis realizado surge que el principal desafío del Departamento no radica exclusivamente en la incorporación de nuevas tecnologías, sino en fortalecer su capacidad organizacional para gestionar de manera eficiente el conocimiento, coordinar los recursos disponibles y establecer procedimientos comunes que permitan responder con mayor previsibilidad a las necesidades de la Administración Municipal.')] }),
          new Paragraph({ children: [new TextRun('En consecuencia, la propuesta prioriza la consolidación de un modelo de gestión orientado a las personas, la mejora de los procesos y la planificación estratégica del trabajo, utilizando la innovación tecnológica como un medio para potenciar la capacidad institucional del Departamento y no como un fin en sí mismo.')] }),
          new Paragraph({ children: [] }),

          // 3. PROPUESTA DE MEJORA CON RECURSOS ACTUALES (COSTO $0)
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '3. PROPUESTA DE MEJORA CON RECURSOS ACTUALES (COSTO $0)', bold: true })] }),
          new Paragraph({ children: [new TextRun({ text: 'La primera responsabilidad de una Jefatura consiste en optimizar los recursos existentes antes de requerir nuevas incorporaciones presupuestarias. En consecuencia, las acciones propuestas en esta etapa priorizan la reorganización del trabajo, la estandarización de los procedimientos y el fortalecimiento de la coordinación interna, aprovechando plenamente la infraestructura tecnológica y el capital humano actualmente disponibles.', italics: true })] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.1 Estandarización de Procesos y Gobierno Técnico de Código', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para resolver la variabilidad en la calidad del software y facilitar la incorporación de agentes en distintos proyectos, se implementarán criterios técnicos unificados:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Template de Arquitectura Base Municipal: ', bold: true }), new TextRun('Se definirá e institucionalizará un template de arquitectura de software en capas (separación de interfaz de usuario, lógica de negocio, servicios de integración y capa de datos) de uso obligatorio para todo desarrollo nuevo. Esto garantizará que las aplicaciones mantengan una estructura homogénea, segura y fácil de auditar.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Guías de Estilo y Nomenclatura de Código: ', bold: true }), new TextRun('Se formalizarán pautas de codificación común para los lenguajes y marcos de trabajo vigentes en el Municipio, reduciendo la deuda técnica y facilitando la legibilidad del código entre pares.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Revisiones de Código entre Pares (Peer Reviews en GitLab): ', bold: true }), new TextRun('Ningún código se integrará a las ramas principales de producción sin una revisión técnica cruzada realizada por otro desarrollador del Departamento, asegurando el control de calidad previo a los despliegues.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Seguridad desde la Concepción (Security by Design): ', bold: true }), new TextRun('Implementación de controles estrictos de seguridad en la gestión de credenciales, autenticación de usuarios, sanitización de entradas y protección de datos personales de los ciudadanos en todos los desarrollos.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.2 Gestión del Conocimiento y Preservación Institucional', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para eliminar el riesgo operacional que genera la concentración del conocimiento en personas individuales y garantizar la continuidad ante licencias o imprevistos:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Asignación de Referentes Secundarios (Shadowing): ', bold: true }), new TextRun('Cada sistema crítico del Municipio contará con un Referente Secundario designado. El agente acompañará al desarrollador principal en tareas evolutivas y correctivas periódicas, adquiriendo el conocimiento operativo necesario para resolver contingencias sin requerir modificaciones en el escalafón.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Estándar de Documentación Mínima y Útil (Definition of Done): ', bold: true }), new TextRun('Se fijará como requisito obligatorio para dar por finalizado un proyecto o requerimiento la entrega del Diagrama de Entidad-Relación, la descripción de las APIs de integración y el Manual de Despliegue. La documentación dejará de ser una tarea secundaria para integrarse al circuito habitual de desarrollo.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.3 Cartera Única de Proyectos y Articulación con Áreas Usuarias', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para ordenar la demanda creciente de las distintas Secretarías y eliminar la gestión fragmentada de requerimientos:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Centralización en Redmine: ', bold: true }), new TextRun('Se consolidará la plataforma Redmine como el único canal oficial de registro, priorización y seguimiento de desarrollos y mantenimientos, otorgando visibilidad completa de la carga operativa real del Departamento.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Circuito Unificado de Demandas y Matriz de Priorización: ', bold: true }), new TextRun('Las solicitudes provenientes de las dependencias municipales se evaluarán bajo criterios objetivos (criticidad operativa, impacto en el ciudadano, requerimiento normativo y factibilidad técnica), evitando la dispersión de esfuerzos en requerimientos no convalidados.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Liderazgo Colaborativo y Células de Trabajo: ', bold: true }), new TextRun('La Jefatura asumirá un rol de Scrum Master Global, actuando como filtro de demandas ante las Secretarías y facilitando la coordinación permanente entre los equipos distribuidos en las dos sedes físicas.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.4 Gobierno Técnico sobre Proveedores Externos', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para proteger la soberanía tecnológica municipal y evitar la dependencia exclusiva de empresas contratadas:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Auditoría de Entregables y Pruebas de Aceptación: ', bold: true }), new TextRun('La Jefatura establecerá un protocolo de recepción técnica obligatoria previo a la firma del acta de conformidad de cualquier desarrollo o servicio tercerizado.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Retención de Código Fuente y Propiedad Institucional: ', bold: true }), new TextRun('Exigencia innegociable de la entrega del código fuente versionado, la documentación técnica completa y los scripts de base de datos, garantizando que el Municipio conserve el control absoluto y la capacidad de mantener los sistemas ante cualquier finalización de contrato.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.5 Protocolo de Adopción Responsable de Inteligencia Artificial', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para acelerar los tiempos de desarrollo sin comprometer la seguridad de la información:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'IA Asistida en Entornos de Desarrollo (IDEs): ', bold: true }), new TextRun('Se regulará el uso de asistentes de código (como GitHub Copilot o herramientas equivalentes) para la generación de código repetitivo, refactorización y elaboración de pruebas unitarias.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Protocolo de Protección de Datos Sensibles: ', bold: true }), new TextRun('Quedará estrictamente prohibido introducir credenciales, claves de conexión a bases de datos, lógica crítica de seguridad o datos personales de ciudadanos en asistentes basados en la nube pública.')] }),
          new Paragraph({ children: [] }),

          // 4. PROPUESTA DE MEJORA CON INCORPORACIÓN DE RECURSOS
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '4. PROPUESTA DE MEJORA CON INCORPORACIÓN DE RECURSOS (PLAN PROYECTADO PRESUPUESTADO)', bold: true })] }),
          new Paragraph({ children: [new TextRun('Para potenciar la capacidad instalada y consolidar un modelo de gestión tecnológico de vanguardia a mediano y largo plazo, se proyectan las siguientes iniciativas sujetas a disponibilidad presupuestaria:')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '4.1 Plataforma Automatizada de Análisis Estático de Código y Deuda Técnica', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Implementación de herramientas de auditoría automática (ej. SonarQube): ', bold: true }), new TextRun('Adquisición e integración de licencias corporativas en el pipeline de GitLab para auditar de forma automática la calidad del código, detectar vulnerabilidades de seguridad y medir la deuda técnica antes de cada pase a producción.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '4.2 Entornos Corporativos de IA e Infraestructura de Contenerización', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Licencias Oficiales de IA en Entornos Privados: ', bold: true }), new TextRun('Adquisición de suscripciones institucionales de asistentes de IA integradas a los IDEs con garantías de privacidad empresarial (donde el código municipal no sea utilizado para el entrenamiento de modelos de terceros).')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Infraestructura de Contenerización (Docker / Kubernetes): ', bold: true }), new TextRun('Inversión en sinergia con la Dirección de Redes para empaquetar aplicaciones en contenedores estandarizados, agilizando los despliegues y garantizando la portabilidad de los sistemas entre servidores.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '4.3 Plan de Capacitación Técnica Especializada y Desarrollo del Equipo', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Formación Profesional Externa: ', bold: true }), new TextRun('Financiamiento de cursos y certificaciones oficiales para el personal técnico en Arquitectura de Software, Seguridad Informática, APIs RESTful y tecnologías modernas (.NET Core, React, Angular).')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Reacondicionamiento de Equipamiento Colaborativo: ', bold: true }), new TextRun('Adquisición de periféricos (auriculares con micrófono, webcams y monitores dobles) para optimizar la comunicación entre las sedes físicas y facilitar el trabajo remoto o híbrido.')] }),
          new Paragraph({ children: [] }),

          // 5. ESTRATEGIA DE IMPLEMENTACIÓN, ROADMAP Y KPIs
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '5. ESTRATEGIA DE IMPLEMENTACIÓN, ROADMAP Y MATRIZ DE INDICADORES (KPIs)', bold: true })] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.1 Hoja de Ruta por Etapas (Roadmap Ágil)', bold: true })] }),
          new Paragraph({ children: [new TextRun('La ejecución del Plan de Trabajo se organizará en tres etapas consecutivas de implementación gradual:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa I – Conocer y Ordenar (Sprints 1 a 4 / Meses 1-2): ', bold: true }), new TextRun('Relevamiento de competencias del personal, inventario completo de sistemas, consolidación de la Cartera Única en Redmine y asignación de Referentes Secundarios en aplicaciones críticas.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa II – Integrar y Estandarizar (Sprints 5 a 12 / Meses 3-6): ', bold: true }), new TextRun('Institucionalización del Template de Arquitectura Base, reuniones de coordinación transversal entre sedes, aplicación de guías de estilo, inicio de peer reviews en GitLab y protocolo de gobierno técnico de proveedores.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa III – Consolidar y Evaluar (Sprints 13+ / Meses 7-12): ', bold: true }), new TextRun('Medición de KPIs, consolidación de buenas prácticas, evaluación de proyectos de contenerización y desarrollo del plan proyectado con presupuesto.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Proceso Permanente – Mejora Continua: ', bold: true }), new TextRun('Auditorías periódicas de procedimientos, actualización de capacitaciones y evaluación de innovaciones tecnológicas.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.2 Cuadro Resumen de Implementación', bold: true })] }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Etapa', bold: true })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Acción Clave', bold: true })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Resultado Esperado', bold: true })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Etapa I: Organización', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Cartera Única en Redmine y asignación de Referentes')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Visibilidad total de la demanda y eliminación de puntos únicos de falla')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Etapa II: Estandarización', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Obligatoriedad del Template Base y Peer Review en GitLab')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Código homogéneo, seguro y soberanía sobre desarrollos de terceros')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Etapa III: Consolidación', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Medición de KPIs y proyectos de contenerización')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Procesos previsibles, reducción de deuda técnica y alta satisfacción')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Proceso Permanente', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Capacitación continua e IA asistida regulada')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Actualización tecnológica constante y eficiencia en la gestión pública')] })] }),
                ],
              }),
            ],
          }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.3 Matriz de Indicadores Clave de Gestión (KPIs)', bold: true })] }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: 25, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Categoría', bold: true })] })] }),
                  new TableCell({ width: { size: 40, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Indicador de Gestión', bold: true })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Meta Estratégica', bold: true })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Riesgo Operacional', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('% de Sistemas Críticos con Referente Secundario Asignado')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('100% de cobertura para eliminar puntos únicos de falla (SPOF).')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Documentación', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('% de Sistemas con Documentación Mínima Útil (Definition of Done)')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('100% de los proyectos nuevos y mantenimientos mayores documentados.')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Estandarización', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('% de Desarrollos Nuevos bajo el Template de Arquitectura Base')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('100% de alineación a los patrones institucionales.')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Eficiencia Procesal', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Lead Time de Desarrollo (Tiempo desde aprobación hasta producción)')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Reducción sostenida de los tiempos de entrega mediante sprints ágiles.')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Calidad de Software', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Tasa de Defectos Reportados en Post-Producción')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('Minimizar incidencias mediante revisiones de código cruzadas (Peer Reviews).')] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Control de Terceros', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('% de Desarrollos de Proveedores con Recepción Técnica Aprobada')] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun('100% de cumplimiento en entrega de código fuente y documentación.')] })] }),
                ],
              }),
            ],
          }),
          new Paragraph({ children: [] }),

          // 6. ESTRUCTURA Y MATRIZ DINÁMICA DE TRABAJO (DECRETO N° 2250/98)
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '6. ESTRUCTURA Y MATRIZ DINÁMICA DE TRABAJO (DECRETO N° 2250/98)', bold: true })] }),
          new Paragraph({ children: [new TextRun('Aprovechando la estructura organizativa vigente del Grupo Ocupacional Computación (Decreto N° 2250/98), se articulan las responsabilidades técnicas del Departamento sin solicitar nuevos cargos ni generar costo presupuestario:')] }),
          new Paragraph({ children: [new TextRun({ text: '1. Liderazgo Técnico y Arquitectura (Analistas y Especialistas Senior - Clase XI): ', bold: true }), new TextRun('Diseño de la arquitectura base municipal, análisis funcional complejo, mentoría en capacitación cruzada, gobierno técnico de proveedores y supervisión de estándares de código.')] }),
          new Paragraph({ children: [new TextRun({ text: '2. Desarrollo Funcional (Analistas Programadores Semi-Senior y Programadores - Clases X e IX): ', bold: true }), new TextRun('Codificación de lógica de negocio, construcción de interfaces web/móviles y solución de incidencias bajo las guías de estilo institucionales.')] }),
          new Paragraph({ children: [new TextRun({ text: '3. Innovación, Integración y Transferencia (Roles Transversales Rotativos): ', bold: true }), new TextRun('Asignaciones dinámicas para acompañar como Referentes Secundarios, investigar integraciones entre sistemas y empaquetar aplicaciones en contenedores.')] }),
          new Paragraph({ children: [] }),

          // 7. CONCLUSIONES
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '7. CONCLUSIONES', bold: true })] }),
          new Paragraph({ children: [new TextRun('La modernización tecnológica de la Municipalidad de General Pueyrredon requiere un Departamento de Software ordenado, previsible y sostenible, capaz de trascender a las personas y a los cambios de gestión política.')] }),
          new Paragraph({ children: [new TextRun('Al implementar un modelo de gestión participativo con la Jefatura en un rol activo de Scrum Master Global y Gestor, establecer el uso obligatorio de la arquitectura base municipal, instituir la figura de los Referentes Secundarios y aplicar un estricto Gobierno Técnico sobre Proveedores, se resuelven los problemas históricos de desarticulación, multitarea caótica y conocimiento concentrado.')] }),
          new Paragraph({ children: [new TextRun('Esta propuesta nace desde adentro del Departamento: no es una visión externa de lo que debería mejorarse, sino el resultado del conocimiento acumulado en el trabajo cotidiano, en el análisis de sus procesos y en la identificación concreta de lo que frena el desarrollo institucional del área. Por eso sus iniciativas son realizables, sus tiempos son reales y sus resultados son medibles.')] }),
          new Paragraph({ children: [new TextRun('La tecnología es una herramienta al servicio de la gestión pública. El verdadero desafío del Departamento no consiste únicamente en desarrollar software, sino en aportar soluciones que mejoren la eficiencia administrativa, fortalezcan la continuidad institucional y generen valor para toda la ciudadanía. Ese será el criterio rector de la gestión.')] }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('D:/proyecto/Plan_Trabajo_Jefatura_Software_Version_Director_Propuestas.docx', buffer);
  console.log('✅ DOCX generado correctamente: Plan_Trabajo_Jefatura_Software_Version_Director_Propuestas.docx');
}

buildDocx().catch(err => {
  console.error('Error generando DOCX:', err);
  process.exit(1);
});
