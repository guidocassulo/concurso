const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType } = require('docx');
const fs = require('fs');

async function buildDocx() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Arial',
            size: 22, // 11pt
          },
          paragraph: {
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              line: 259, // ~1.15 line spacing
              after: 100, // 5pt space after
            },
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1701, // 3cm
              bottom: 850, // 1.5cm
              left: 1701, // 3cm
              right: 850, // 1.5cm
            },
          },
        },
        children: [
          // PORTADA / ENCABEZADO
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'MUNICIPALIDAD DE GENERAL PUEYRREDON', bold: true, size: 24, font: 'Arial' })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'SECRETARÍA DE PARTICIPACIÓN CIUDADANA Y DESCENTRALIZACIÓN', bold: true, size: 20, font: 'Arial' })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'SUBSECRETARÍA DE GOBIERNO DIGITAL Y MEJORA DE PROCESOS', bold: true, size: 20, font: 'Arial' })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Concurso Interno de Oposición y Antecedentes', bold: true, size: 22, font: 'Arial' })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Cargo: Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software', bold: true, size: 22, font: 'Arial' })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C.F. 1-31-00-01 – Nº de Orden 6733', italics: true, size: 20, font: 'Arial' })] }),
          new Paragraph({ children: [] }),

          // TÍTULO DEL PLAN
          new Paragraph({ alignment: AlignmentType.CENTER, heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: 'PLAN DE TRABAJO', bold: true, size: 28, font: 'Arial' })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con Recursos Actuales y Proyección con Incorporación de Recursos', bold: true, size: 22, font: 'Arial' })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '"Fortaleciendo la gestión del Departamento mediante la organización, el desarrollo de las personas, la estandarización de procesos y la innovación tecnológica al servicio de la Municipalidad."', italics: true, size: 22, font: 'Arial' })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ children: [new TextRun({ text: 'Postulante: ', bold: true, font: 'Arial' }), new TextRun({ text: 'Guido Cassulo', font: 'Arial' })] }),
          new Paragraph({ children: [new TextRun({ text: 'Cargo actual: ', bold: true, font: 'Arial' }), new TextRun({ text: 'Analista Programador / Personal de Software', font: 'Arial' })] }),
          new Paragraph({ children: [new TextRun({ text: 'Legajo: ', bold: true, font: 'Arial' }), new TextRun({ text: '[Completar Legajo]', font: 'Arial' })] }),
          new Paragraph({ children: [] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Mar del Plata – Julio 2026', italics: true, font: 'Arial' })] }),
          new Paragraph({ children: [] }),

          // 1. INTRODUCCIÓN
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '1. INTRODUCCIÓN', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('El presente proyecto tiene como finalidad realizar un diagnóstico integral del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software, identificar las problemáticas que afectan su funcionamiento y presentar propuestas concretas para optimizar su funcionamiento y de esta manera mejorar la calidad del servicio brindado a las dependencias municipales y por lo tanto, también al ciudadano.')] }),
          new Paragraph({ children: [new TextRun('El Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software constituye un área estratégica dentro de la Subsecretaría de Gobierno Digital y Mejora de Procesos, siendo responsable de diseñar, desarrollar, mantener e implementar las soluciones informáticas que respaldan la actividad diaria de la Municipalidad de General Pueyrredon.')] }),
          new Paragraph({ children: [new TextRun('Su función excede el desarrollo de aplicaciones informáticas. El Departamento interviene en el relevamiento y análisis de requerimientos funcionales, la planificación y coordinación de proyectos, la definición de estándares de desarrollo, la evaluación de nuevas tecnologías, el control técnico de proveedores externos, la integración entre sistemas municipales, la intervención en el sitio Web de la Municipalidad y el mantenimiento evolutivo de aplicaciones críticas para el funcionamiento de la Administración.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura del Departamento debe desempeñar un rol integrador que va más allá de la coordinación técnica de proyectos. Su responsabilidad central consiste en combinar conocimientos técnicos con planificación, conducción de equipos y administración de recursos, generando las condiciones organizacionales que permitan al equipo desarrollar software de manera previsible, colaborativa y sostenible, promoviendo la integración entre personas, la reutilización del conocimiento, la adopción responsable de nuevas tecnologías y la mejora permanente de los procedimientos internos, con decisiones tecnológicas alineadas a los objetivos institucionales del Municipio y cumpliendo con las exigencias del régimen administrativo (Ley Orgánica de las Municipalidades, Ley 14656, RAFAM, GDE y Decreto N° 2250/98).')] }),
          new Paragraph({ children: [new TextRun('La propuesta reconoce que el Departamento desarrolla su actividad en un entorno dinámico, caracterizado por la coexistencia de sistemas de distinta antigüedad, múltiples requerimientos simultáneos, recursos limitados y una creciente demanda de soluciones digitales por parte de las distintas dependencias municipales. Frente a esta realidad, la respuesta no puede limitarse a solicitar mayores recursos, sino a fortalecer la organización del trabajo con los recursos actuales, establecer criterios comunes y consolidar una cultura de mejora continua.')] }),
          new Paragraph({ children: [new TextRun('En consecuencia, este Plan de Trabajo propone una estrategia integral articulada en dos etapas consecutivas: por un lado, una propuesta de mejora basada en la optimización de los recursos actuales (sin presupuesto adicional, $0 costo), y por otro lado, una proyección con incorporación de recursos para cuando la Administración disponga de partidas de inversión tecnológica, sin fijar montos estáticos sino líneas de adquisición escalables.')] }),
          new Paragraph({ children: [new TextRun('Por ello, el presente Plan propone una estrategia articulada en cinco pilares fundamentales:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Fortalecimiento del capital humano y del trabajo colaborativo.', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Gestión y preservación del conocimiento institucional.', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Estandarización de procesos y gobierno técnico.', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Mejora continua e innovación tecnológica con recursos propios.', bold: true })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Planificación estratégica orientada a resultados.', bold: true })] }),
          new Paragraph({ children: [new TextRun('A partir de estos ejes se desarrolla el diagnóstico de la situación actual y se presentan propuestas de mejora diferenciadas entre las que pueden implementarse con los recursos existentes y las que proyectan incorporación de inversión futura.')] }),
          new Paragraph({ children: [] }),

          // 2. DIAGNÓSTICO INSTITUCIONAL
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '2. DIAGNÓSTICO INSTITUCIONAL', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.1 Situación actual del Departamento', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El Departamento cuenta con un equipo con experiencia técnica y conocimiento de los procesos municipales, y dispone de herramientas de trabajo instaladas. Al mismo tiempo, enfrenta desafíos concretos en la gestión del conocimiento, la estandarización de sus procedimientos y la coordinación entre sus distintos grupos de trabajo, a lo que se suma una recepción dispar ante la incorporación de nuevas herramientas de desarrollo.')] }),
          new Paragraph({ children: [new TextRun('En los últimos años la demanda de soluciones informáticas ha crecido de manera sostenida, tanto por el avance de la transformación digital como por la incorporación permanente de nuevas necesidades funcionales provenientes de las distintas áreas municipales. Este crecimiento ha permitido ampliar el alcance del Departamento, pero también ha incrementado la complejidad de su gestión.')] }),
          new Paragraph({ children: [new TextRun('Actualmente conviven aplicaciones desarrolladas en distintos momentos históricos, utilizando tecnologías diversas y respondiendo a necesidades organizacionales diferentes. A ello se suma la atención simultánea de requerimientos evolutivos, mantenimiento correctivo, proyectos nuevos, asistencia técnica a usuarios y coordinación con proveedores externos.')] }),
          new Paragraph({ children: [new TextRun('Este contexto requiere fortalecer la organización interna, promover el trabajo colaborativo y establecer procedimientos comunes. El diagnóstico que se presenta a continuación permite identificar las fortalezas sobre las cuales construir una estrategia de mejora, así como las debilidades y oportunidades cuya adecuada gestión contribuirá al fortalecimiento institucional del área.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.2 Análisis FODA', bold: true, font: 'Arial', size: 24 })] }),
          
          // FORTALEZAS
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Fortalezas', bold: true, font: 'Arial', size: 22 })] }),
          new Paragraph({ children: [new TextRun({ text: '• Capital humano con alto conocimiento del negocio municipal: ', bold: true }), new TextRun('El Departamento cuenta con agentes que poseen una valiosa experiencia en el funcionamiento de la Administración Pública Municipal, combinando conocimientos tecnológicos con una profunda comprensión de los procedimientos administrativos, la normativa vigente y las necesidades particulares de las distintas áreas usuarias. Este conocimiento constituye uno de los principales activos institucionales y representa una base sólida para impulsar procesos de mejora e innovación.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Compromiso y capacidad de adaptación: ', bold: true }), new TextRun('A pesar del incremento permanente de requerimientos y de la coexistencia de sistemas con distintos niveles de complejidad tecnológica, el equipo ha demostrado capacidad para sostener la continuidad operativa de los servicios informáticos municipales, adaptándose a nuevos desafíos y prioridades institucionales.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Experiencia acumulada en múltiples tecnologías: ', bold: true }), new TextRun('La evolución histórica de los sistemas municipales ha permitido que el Departamento adquiera experiencia sobre diferentes plataformas, lenguajes y herramientas de desarrollo, generando un importante capital técnico que facilita la evolución gradual de las aplicaciones existentes.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Infraestructura y herramientas disponibles: ', bold: true }), new TextRun('El Departamento dispone de repositorios en GitLab para versionado, plataforma Redmine para gestión de proyectos, ambientes diferenciados de Desarrollo, Prueba y Producción, y equipamiento básico adecuado, constituyendo una base previa sólida para implementar mejoras organizacionales.')] }),
          new Paragraph({ children: [] }),

          // OPORTUNIDADES
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Oportunidades', bold: true, font: 'Arial', size: 22 })] }),
          new Paragraph({ children: [new TextRun({ text: '• Consolidación del proceso de transformación digital: ', bold: true }), new TextRun('La creciente incorporación de herramientas digitales en la Administración Pública representa una oportunidad para fortalecer el rol estratégico del Departamento como impulsor de la modernización institucional.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Adopción asistida de Inteligencia Artificial: ', bold: true }), new TextRun('La integración de herramientas asistidas por IA en los entornos de desarrollo (IDEs) permite acelerar la codificación, automatizar tareas repetitivas de documentación y elevar la productividad técnica del equipo dentro de un marco de uso seguro.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Implementación de marcos ágiles híbridos: ', bold: true }), new TextRun('La incorporación de metodologías ágiles adaptadas al contexto del Departamento (ciclos cortos de desarrollo para proyectos nuevos y gestión de flujo continuo para el mantenimiento) representa una oportunidad de mejora a costo cero, permitiendo optimizar la planificación, la comunicación interna y la clarificación de prioridades entre equipos.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión política favorable y capacitaciones accesibles: ', bold: true }), new TextRun('La intención de las autoridades de optimizar el área, sumada a la amplia oferta de formación técnica online y la posibilidad de organizar talleres internos, representa una oportunidad concreta para actualizar competencias del equipo sin impacto presupuestario.')] }),
          new Paragraph({ children: [] }),

          // DEBILIDADES
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Debilidades', bold: true, font: 'Arial', size: 22 })] }),
          new Paragraph({ children: [new TextRun({ text: '• Concentración del conocimiento: ', bold: true }), new TextRun('Una parte significativa del conocimiento funcional y técnico de determinados sistemas críticos se encuentra concentrada en un número reducido de agentes, lo que incrementa el riesgo operacional, dificulta la planificación de tareas, genera cuellos de botella y limita la flexibilidad del Departamento para reasignar recursos ante licencias del personal, imprevistos o prioridades institucionales.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Ausencia de procedimientos homogéneos: ', bold: true }), new TextRun('Si bien existen buenas prácticas individuales, actualmente no todos los proyectos siguen criterios comunes respecto de documentación, planificación, estimación, arquitectura, pruebas o seguimiento, generando variabilidad en la calidad del código, dificultando la incorporación de nuevos agentes, reduciendo la reutilización del trabajo existente y encareciendo el mantenimiento a largo plazo.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Resistencia a la adopción de tecnologías modernas: ', bold: true }), new TextRun('Una parte del equipo, particularmente agentes con experiencia en plataformas como WebForms, muestra resistencia a adoptar alternativas más modernas como .NET, React o Angular, lo que limita la capacidad del Departamento para modernizar sus aplicaciones y dificulta la distribución de tareas en proyectos que requieren tecnologías actualizadas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión fragmentada de proyectos: ', bold: true }), new TextRun('El seguimiento de proyectos se realiza utilizando diferentes herramientas y metodologías, lo que dificulta obtener una visión integral de la carga de trabajo del Departamento, impide conocer su capacidad operativa real, dificulta la priorización transparente de solicitudes entre Secretarías y genera desajustes en las estimaciones de tiempos de entrega.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Comunicación y coordinación entre equipos: ', bold: true }), new TextRun('La distribución física del personal en distintas dependencias limita la circulación oportuna de información, favoreciendo el aislamiento en silos informáticos, incrementando el riesgo de desarrollar soluciones o módulos duplicados y resintiendo la cohesión y sentido de pertenencia a un equipo único.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Dependencia del mantenimiento reactivo: ', bold: true }), new TextRun('La atención permanente de incidencias y requerimientos urgentes reduce el tiempo disponible para actividades de planificación y mejora continua, consumiendo la capacidad técnica en emergencias cotidianas e impidiendo dedicar tiempo a la documentación, la deuda técnica y la modernización planificada de sistemas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Gestión del conocimiento insuficiente: ', bold: true }), new TextRun('La documentación técnica, funcional y de arquitectura presenta distintos niveles de desarrollo según el proyecto, lo que aumenta la dependencia del conocimiento tácito individual, encarece la curva de aprendizaje y pone en riesgo la continuidad de los aplicativos frente a licencias, traslados o bajas de personal.')] }),
          new Paragraph({ children: [] }),

          // AMENAZAS
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: 'Amenazas', bold: true, font: 'Arial', size: 22 })] }),
          new Paragraph({ children: [new TextRun({ text: '• Incremento sostenido de la demanda e indefinición de áreas usuarias: ', bold: true }), new TextRun('La demanda creciente sumada a dilaciones o falta de certeza por parte de las dependencias solicitantes al definir circuitos administrativos puede superar la capacidad operativa si no se formaliza un circuito único de demandas.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Obsolescencia e integración con sistemas legacy: ', bold: true }), new TextRun('La coexistencia de aplicaciones sobre tecnologías antiguas que carecen de APIs unificadas incrementa el riesgo operativo y dificulta su integración con nuevos desarrollos web o móviles.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Riesgo de dependencia técnica sobre proveedores externos: ', bold: true }), new TextRun('La entrega de soluciones por terceros sin un canal fluido de comunicación técnica ni una contraparte municipal que participe activamente del seguimiento puede generar dependencia total del proveedor y pérdida del conocimiento institucional, derivando en mayores costos de mantenimiento e imposibilitando el desarrollo soberano ante una terminación temprana de la contratación.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Requerimientos normativos e imprevistos de gestión: ', bold: true }), new TextRun('El surgimiento de necesidades imprevistas derivadas de cambios normativos o resoluciones urgentes puede forzar la reorganización del cronograma establecido.')] }),
          new Paragraph({ children: [new TextRun({ text: '• Resistencia al liderazgo e inercia organizacional: ', bold: true }), new TextRun('La prolongada falta de una conducción formal en el Departamento puede generar inercia inicial a la hora de adoptar nuevas pautas organizativas y estándares técnicos.')] }),
          new Paragraph({ children: [] }),

          // 2.3 CONCLUSIÓN DEL DIAGNÓSTICO
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '2.3 Conclusión del diagnóstico', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Del análisis realizado surge que el desafío central del Departamento radica en fortalecer su capacidad organizacional para gestionar el conocimiento, coordinar el equipo y establecer procedimientos comunes que otorguen previsibilidad al desarrollo de software municipal.')] }),
          new Paragraph({ children: [new TextRun('En consecuencia, la propuesta prioriza consolidar un modelo de gestión orientado a las personas y los procesos, aprovechando las oportunidades de modernización identificadas en el diagnóstico —como la incorporación asistida de herramientas de Inteligencia Artificial en los entornos de desarrollo (IDEs) y la adopción de arquitecturas de referencia— para elevar la productividad del equipo, optimizar la documentación y garantizar la calidad y sostenibilidad de los sistemas institucionales.')] }),
          new Paragraph({ children: [] }),

          // 3. PRINCIPIOS DE GESTIÓN
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '3. PRINCIPIOS DE GESTIÓN', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('El ejercicio de la Jefatura del Departamento requiere combinar capacidades técnicas con habilidades de conducción, planificación y coordinación. En consecuencia, las decisiones organizacionales y técnicas deberán sustentarse sobre principios de gestión que otorguen coherencia a las acciones del Departamento.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.1 Liderazgo basado en la colaboración', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La conducción del Departamento deberá promover un ambiente de trabajo participativo, donde la comunicación, el intercambio de conocimientos y la construcción colectiva de soluciones sean parte de la cultura organizacional. La función de la Jefatura consistirá en facilitar el trabajo de los equipos, remover obstáculos, promover acuerdos y generar las condiciones necesarias para que cada integrante pueda desarrollar sus capacidades profesionales.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.2 Gestión orientada a procesos', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El crecimiento sostenido del Departamento hace necesario reducir la dependencia de prácticas individuales y avanzar hacia procedimientos institucionales homogéneos. Toda actividad recurrente deberá encontrarse respaldada por procedimientos claros que permitan garantizar continuidad, previsibilidad y calidad, simplificando el trabajo cotidiano y asegurando la continuidad operativa.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.3 Gestión del conocimiento institucional', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El conocimiento generado durante el desarrollo y mantenimiento de los sistemas constituye un activo estratégico de la Municipalidad. Por ello, la Jefatura impulsará mecanismos que favorezcan la documentación, la transferencia de conocimientos y la capacitación interna, procurando que la información crítica permanezca en la organización.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.4 Mejora continua', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Los procedimientos, metodologías y herramientas deberán revisarse periódicamente para identificar oportunidades de mejora sobre la base de evidencias objetivas, indicadores de gestión y resultados observables.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.5 Innovación responsable', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Antes de adoptar una herramienta, metodología o plataforma tecnológica se evaluarán aspectos tales como compatibilidad con la arquitectura existente, sostenibilidad en el tiempo, costos de implementación, impacto sobre los procesos, requerimientos de capacitación y seguridad de la información.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.6 Orientación al servicio', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El Departamento presta servicios a las distintas áreas municipales y, de manera indirecta, a toda la comunidad. Las decisiones deberán priorizar el valor que los sistemas aportan a los procesos administrativos, sustentándose en un diálogo permanente y una definición clara de prioridades.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '3.7 Decisiones basadas en evidencia', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La planificación y administración del Departamento deberá apoyarse en información objetiva proveniente de indicadores que midan la capacidad operativa, la evolución de proyectos y los cuellos de botella.')] }),
          new Paragraph({ children: [] }),

          // 4. OBJETIVOS
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '4. OBJETIVOS', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '4.1 Objetivo General', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Fortalecer la capacidad institucional del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software mediante un modelo de gestión orientado a las personas, la organización de los procesos, la estandarización técnica y la mejora continua, asegurando el desarrollo de soluciones tecnológicas sostenibles, seguras y alineadas con los objetivos estratégicos de la Municipalidad de General Pueyrredon.')] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '4.2 Objetivos Específicos', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun({ text: '1. Fortalecer la organización interna:', bold: true }), new TextRun(' Promover una estructura colaborativa basada en planificación, comunicación transversal entre oficinas y liderazgo activo de la Jefatura.')] }),
          new Paragraph({ children: [new TextRun({ text: '2. Preservar el conocimiento institucional:', bold: true }), new TextRun(' Eliminar puntos únicos de falla mediante la asignación de Referentes Secundarios y documentación sistemática.')] }),
          new Paragraph({ children: [new TextRun({ text: '3. Estandarizar procesos y código:', bold: true }), new TextRun(' Institucionalizar la obligatoriedad del template de Arquitectura Base Municipal y guías de buenas prácticas.')] }),
          new Paragraph({ children: [new TextRun({ text: '4. Optimizar la gestión de proyectos:', bold: true }), new TextRun(' Consolidar una Cartera Única de Proyectos gestionada homogéneamente en Redmine.')] }),
          new Paragraph({ children: [new TextRun({ text: '5. Consolidar el Gobierno Técnico:', bold: true }), new TextRun(' Establecer protocolos de auditoría y recepción técnica para desarrollos internos y de proveedores externos.')] }),
          new Paragraph({ children: [new TextRun({ text: '6. Promover la innovación tecnológica responsable:', bold: true }), new TextRun(' Regular el uso asistido de Inteligencia Artificial garantizando la seguridad de los datos municipales.')] }),
          new Paragraph({ children: [new TextRun({ text: '7. Fortalecer la articulación institucional:', bold: true }), new TextRun(' Mejorar los canales de relevamiento, validación y gestión de expectativas con las áreas usuarias.')] }),
          new Paragraph({ children: [] }),

          // 5. PROPUESTA DE MEJORA Y OPTIMIZACIÓN CON RECURSOS ACTUALES (ESCENARIO SIN PRESUPUESTO - $0)
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '5. PROPUESTA DE MEJORA Y OPTIMIZACIÓN CON RECURSOS ACTUALES (ESCENARIO SIN PRESUPUESTO - COSTO $0)', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('La principal fortaleza del Departamento radica en el conocimiento técnico y funcional de su personal. Sin embargo, el diagnóstico realizado evidencia que gran parte de las dificultades actuales no responden exclusivamente a limitaciones tecnológicas o presupuestarias, sino a aspectos vinculados con la organización del trabajo, la coordinación entre equipos, la gestión del conocimiento y la ausencia de procedimientos institucionalizados.')] }),
          new Paragraph({ children: [new TextRun('En este contexto, se propone una estrategia de mejora basada exclusivamente en la optimización de los recursos actualmente disponibles, priorizando acciones que puedan implementarse sin requerir modificaciones en la estructura orgánica ni incorporaciones inmediatas de personal ni partidas presupuestarias adicionales ($0 costo). El objetivo es fortalecer el funcionamiento del Departamento mediante la definición de procesos comunes, la mejora de la planificación, la estandarización técnica y una conducción activa por parte de la Jefatura, dando cumplimiento a los deberes administrativos (40 hs semanales de dedicación, gestión de personal, bienes de la dependencia y anteproyecto presupuestario anual).')] }),
          new Paragraph({ children: [new TextRun('Las medidas que se desarrollan a continuación responden directamente a las debilidades identificadas en el diagnóstico y se orientan a mejorar la capacidad del Departamento para desarrollar, mantener e integrar sistemas informáticos de forma eficiente, segura y sostenible.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.1 Organización y planificación del trabajo', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El Departamento desarrolla simultáneamente actividades de mantenimiento de sistemas existentes, atención de incidencias, asistencia técnica a distintas áreas municipales, consultas directas de datos específicos para usuarios y desarrollo de nuevos proyectos. Esta diversidad de tareas, sumada a la cantidad limitada de recursos humanos disponibles, provoca frecuentes cambios de prioridades, interrupciones constantes y dificultades para planificar el trabajo de manera ordenada.')] }),
          new Paragraph({ children: [new TextRun('La propuesta consiste en establecer un modelo común de planificación que permita organizar las actividades del Departamento sin incrementar la carga administrativa sobre los equipos de desarrollo. La planificación deberá contemplar dos tipos de trabajo claramente diferenciados. Por un lado, las tareas vinculadas al mantenimiento evolutivo y correctivo de sistemas existentes, que requieren una atención continua y capacidad de respuesta frente a incidencias. Por otro, los nuevos desarrollos, que demandan una planificación más estructurada, con objetivos definidos y seguimiento periódico.')] }),
          new Paragraph({ children: [new TextRun('Para responder adecuadamente a ambas realidades, la Jefatura impulsará un modelo de gestión flexible que combine herramientas de planificación visual para las tareas continuas con ciclos breves de planificación para los proyectos de desarrollo, evitando la aplicación rígida de metodologías que no se adapten al contexto municipal.')] }),
          new Paragraph({ children: [new TextRun('La responsabilidad de la Jefatura será coordinar este proceso, evaluar periódicamente la capacidad operativa del Departamento, establecer prioridades institucionales y redistribuir recursos cuando las necesidades del servicio así lo requieran. Asimismo, todas las iniciativas deberán registrarse en una herramienta común de seguimiento que permita conocer en todo momento el estado de cada proyecto, los responsables asignados, las tareas pendientes y las dificultades detectadas.')] }),
          new Paragraph({ children: [new TextRun('La disponibilidad de información centralizada facilitará la toma de decisiones, permitirá identificar sobrecargas de trabajo y brindará una visión integral de la capacidad operativa del Departamento.')] }),
          new Paragraph({ children: [new TextRun('Con esta medida se espera mejorar la previsibilidad de los proyectos, optimizar la utilización de los recursos existentes y reducir la necesidad de reorganizaciones permanentes derivadas de la falta de planificación.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.2 Gestión de requerimientos y priorización institucional', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Una de las funciones asignadas al Departamento consiste en relevar, analizar y transformar las necesidades de las distintas dependencias municipales en soluciones informáticas que aporten valor a la gestión. Para cumplir adecuadamente esta función resulta imprescindible establecer un procedimiento uniforme para la recepción, análisis y priorización de requerimientos, abarcando también las solicitudes de consultas específicas de información en bases de datos no disponibles directamente en los aplicativos del usuario.')] }),
          new Paragraph({ children: [new TextRun('Actualmente las solicitudes pueden originarse por diferentes canales y con distintos niveles de definición, lo que dificulta evaluar su alcance, estimar el esfuerzo requerido y establecer prioridades objetivas.')] }),
          new Paragraph({ children: [new TextRun('Se propone institucionalizar un procedimiento de gestión de requerimientos que permita registrar cada solicitud desde su ingreso, analizar su viabilidad técnica y funcional, determinar el impacto esperado y definir conjuntamente con el área solicitante su prioridad de implementación.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura tendrá un rol central en este proceso, actuando como articulador entre las necesidades de las áreas usuarias y la capacidad operativa del Departamento. Su función no consistirá únicamente en asignar tareas, sino también en garantizar que los recursos disponibles se orienten hacia aquellas iniciativas que generen mayor beneficio institucional.')] }),
          new Paragraph({ children: [new TextRun('Durante el análisis de cada requerimiento se verificará, además, la existencia de soluciones similares dentro del ecosistema de aplicaciones municipales, promoviendo la reutilización de componentes y evitando el desarrollo de funcionalidades duplicadas.')] }),
          new Paragraph({ children: [new TextRun('La incorporación de este procedimiento permitirá mejorar la calidad del relevamiento funcional, optimizar la planificación de los proyectos y fortalecer la relación entre el Departamento y las distintas áreas municipales.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.3 Coordinación entre equipos y fortalecimiento de la comunicación interna', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El Departamento desarrolla sus actividades a través de equipos distribuidos físicamente en distintas dependencias. Si bien esta organización responde a necesidades operativas, también genera dificultades para mantener una comunicación fluida entre los agentes, compartir información sobre los proyectos en curso y coordinar acciones entre los distintos grupos de trabajo.')] }),
          new Paragraph({ children: [new TextRun('La falta de mecanismos formales de comunicación favorece la aparición de "silos de información", donde el conocimiento sobre determinados sistemas o desarrollos permanece dentro de un grupo reducido de personas. Esta situación dificulta la colaboración entre equipos, incrementa el riesgo de duplicar esfuerzos y limita la capacidad del Departamento para responder de manera coordinada ante nuevas demandas.')] }),
          new Paragraph({ children: [new TextRun('Con el objetivo de fortalecer el trabajo colaborativo, se propone institucionalizar un esquema permanente de coordinación entre las distintas dependencias del Departamento. La Jefatura será responsable de promover espacios periódicos de intercambio que permitan conocer el estado de los proyectos, identificar dificultades comunes, compartir experiencias y detectar oportunidades de colaboración entre los equipos.')] }),
          new Paragraph({ children: [new TextRun('Estas reuniones deberán ser breves, con una agenda previamente definida y orientadas exclusivamente a la coordinación operativa, evitando generar instancias burocráticas que resten tiempo al desarrollo de las actividades técnicas.')] }),
          new Paragraph({ children: [new TextRun('Como complemento, toda la información vinculada a los proyectos deberá mantenerse actualizada en las herramientas institucionales de seguimiento, permitiendo que cualquier integrante del Departamento pueda conocer el estado general de las iniciativas, los responsables asignados y las tareas pendientes.')] }),
          new Paragraph({ children: [new TextRun('La mejora de la comunicación interna permitirá optimizar la utilización de los recursos disponibles, reducir la duplicación de desarrollos y fortalecer el sentido de pertenencia del equipo, promoviendo una visión compartida de los objetivos institucionales.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.4 Gestión del conocimiento y continuidad operativa', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Uno de los principales riesgos identificados durante el diagnóstico es la concentración del conocimiento técnico y funcional en un número reducido de agentes. La existencia de sistemas cuya operación depende exclusivamente de una persona incrementa significativamente la vulnerabilidad del Departamento frente a licencias prolongadas, cambios de funciones, jubilaciones o cualquier circunstancia que impida la disponibilidad del referente principal.')] }),
          new Paragraph({ children: [new TextRun('La continuidad de los servicios informáticos constituye una responsabilidad institucional que no puede depender del conocimiento individual de un único agente. Por este motivo, resulta necesario implementar mecanismos que permitan distribuir progresivamente el conocimiento entre los integrantes del equipo y reducir los puntos únicos de falla.')] }),
          new Paragraph({ children: [new TextRun('Se propone incorporar la figura del Referente Secundario, entendida como un mecanismo de transferencia de conocimiento y no como una modificación de la estructura jerárquica del Departamento. Cada sistema considerado crítico contará con un agente que acompañará al responsable principal en las tareas de análisis, mantenimiento y evolución del aplicativo. Este acompañamiento tendrá como finalidad adquirir conocimiento funcional y técnico suficiente para intervenir ante situaciones de contingencia y colaborar en futuras tareas de desarrollo.')] }),
          new Paragraph({ children: [new TextRun('La implementación se realizará de manera gradual, priorizando aquellos sistemas cuyo impacto institucional sea mayor y procurando equilibrar la carga de trabajo entre los distintos integrantes del Departamento. El proceso comprenderá actividades de observación, participación progresiva en tareas de mantenimiento, revisión conjunta de desarrollos, elaboración de documentación complementaria y reuniones periódicas de transferencia de conocimiento.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura deberá supervisar este proceso, definiendo las prioridades, asignando los referentes correspondientes y evaluando periódicamente el grado de cobertura alcanzado sobre los distintos sistemas municipales.')] }),
          new Paragraph({ children: [new TextRun('La implementación de esta medida permitirá disminuir el riesgo operativo asociado a la dependencia de personas específicas, mejorar la capacidad de respuesta frente a contingencias y favorecer el crecimiento profesional de los integrantes del Departamento mediante una capacitación continua basada en la experiencia práctica. Asimismo, la existencia de referentes secundarios facilitará la redistribución de tareas cuando las necesidades operativas lo requieran, otorgando mayor flexibilidad a la planificación y fortalecimiento de la resiliencia organizacional del área.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.5 Estandarización del desarrollo, Modelo Único de Datos y Arquitectura Base Institucional', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La coexistencia de aplicaciones desarrolladas en distintos momentos, utilizando tecnologías, criterios de diseño y convenciones de programación diferentes, constituye una de las principales causas del incremento de la complejidad técnica del ecosistema de sistemas municipales. La ausencia de estándares comunes dificulta la incorporación de nuevos desarrolladores a los proyectos existentes, incrementa los tiempos de mantenimiento y provoca diferencias significativas en la calidad y estructura del software desarrollado.')] }),
          new Paragraph({ children: [new TextRun('Con el propósito de revertir esta situación, se propone consolidar una Arquitectura Base Institucional que establezca criterios comunes para todos los nuevos desarrollos y para aquellas refactorizaciones que, por su alcance, justifiquen su adopción. La Arquitectura Base deberá contemplar aspectos vinculados con la organización de las soluciones, separación de responsabilidades, acceso a datos, seguridad, manejo de errores, autenticación, registro de eventos, configuración y demás componentes transversales utilizados por las aplicaciones municipales.')] }),
          new Paragraph({ children: [new TextRun('Como elemento central de esta estandarización, la Jefatura velará por analizar y mantener el Modelo Único de Datos que dé soporte a toda la información municipal sin permitir redundancias, verificando y asegurando la adecuación de todos los aplicativos a dicho modelo relacional unificado.')] }),
          new Paragraph({ children: [new TextRun('La responsabilidad de la Jefatura consistirá en impulsar su utilización, promover su actualización permanente y evaluar las excepciones que pudieran justificarse por razones técnicas debidamente fundamentadas. La adopción de estándares comunes no deberá interpretarse como una limitación a la innovación tecnológica, sino como un mecanismo para garantizar que la evolución del software municipal se produzca de manera ordenada, sostenible y compatible con la estrategia tecnológica del Municipio.')] }),
          new Paragraph({ children: [new TextRun('Además de la arquitectura, se elaborarán guías institucionales de buenas prácticas de programación que establezcan criterios mínimos para la escritura de código, nomenclatura, documentación, control de versiones, manejo de excepciones, pruebas y revisión técnica. La existencia de estas pautas permitirá disminuir diferencias entre proyectos, facilitar la rotación de desarrolladores y mejorar la calidad general de las aplicaciones desarrolladas por el Departamento.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.6 Gestión de la calidad del software, sitio Web e integración institucional', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La calidad del software desarrollado por el Departamento no depende únicamente de la capacidad técnica de los desarrolladores, sino también de la existencia de procedimientos que permitan asegurar resultados consistentes, facilitar el mantenimiento futuro y preservar el conocimiento institucional. Asimismo, el Departamento debe intervenir activamente en el diseño e integración del sitio Web oficial de la Municipalidad con los distintos sistemas e iteraciones informáticas municipales.')] }),
          new Paragraph({ children: [new TextRun('Con el propósito de fortalecer la calidad de los desarrollos y garantizar la continuidad operativa, se propone establecer una política institucional de documentación mínima obligatoria para todos los sistemas desarrollados o modificados por el Departamento. Esta documentación no deberá transformarse en un requisito burocrático, sino en una herramienta de gestión que permita comprender rápidamente el funcionamiento general de cada aplicación y facilite su evolución a lo largo del tiempo.')] }),
          new Paragraph({ children: [new TextRun('Como criterio mínimo, cada sistema deberá contar con información relativa a:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('objetivo funcional del sistema;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('área responsable;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('responsables técnicos;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('arquitectura general de la solución;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('modelo de datos utilizado (sin redundancias);')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('dependencias con otros sistemas y portal Web municipal;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('procedimientos de instalación y despliegue;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('mecanismos de autenticación y autorizaciones;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('interfaces de integración y APIs;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('historial de cambios relevantes.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura deberá promover el cumplimiento de estos criterios como parte natural del proceso de desarrollo, incorporando la documentación dentro de las tareas habituales de cada proyecto y verificando periódicamente su actualización.')] }),
          new Paragraph({ children: [new TextRun('Del mismo modo, se establecerán procedimientos básicos de revisión técnica antes de la puesta en producción de modificaciones relevantes, procurando verificar el cumplimiento de los estándares definidos por el Departamento, la consistencia de las implementaciones y la correcta integración con los sistemas existentes.')] }),
          new Paragraph({ children: [new TextRun('Estas acciones permitirán mejorar la calidad del software desarrollado, facilitar el mantenimiento evolutivo y preservar el conocimiento técnico generado por el Departamento, reduciendo los riesgos asociados a la rotación del personal y a la evolución tecnológica de los sistemas.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.7 Gobierno técnico de proveedores externos y elaboración de pliegos', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('Las funciones asignadas al Departamento comprenden no sólo el desarrollo interno de sistemas informáticos, sino también la participación activa en aquellos proyectos ejecutados por proveedores externos contratados por la Municipalidad. En estos casos, la responsabilidad del Departamento trasciende el seguimiento administrativo de los contratos, comprendiendo la intervención en la definición de los requerimientos funcionales, de implantación y contractuales en los pliegos de licitación, la verificación técnica de las soluciones desarrolladas y la protección del patrimonio tecnológico institucional.')] }),
          new Paragraph({ children: [new TextRun('La contratación de un proveedor externo no implica delegar la responsabilidad sobre la calidad técnica del software incorporado al ecosistema municipal. Por el contrario, corresponde al Departamento ejercer un rol de conducción técnica que asegure que las soluciones adquiridas respondan a los estándares definidos por la organización y puedan mantenerse adecuadamente durante todo su ciclo de vida.')] }),
          new Paragraph({ children: [new TextRun('En este marco, se propone institucionalizar un procedimiento de Gobierno Técnico de Proveedores que abarque todas las etapas del proceso de contratación e implementación. Durante la elaboración de especificaciones técnicas y pliegos de contratación, el Departamento participará en la definición de los requerimientos funcionales, técnicos y contractuales necesarios para garantizar que los productos adquiridos resulten compatibles con la arquitectura tecnológica municipal.')] }),
          new Paragraph({ children: [new TextRun('Durante la etapa de desarrollo se promoverán instancias periódicas de seguimiento técnico que permitan verificar el avance de los trabajos, detectar tempranamente desvíos respecto de las especificaciones acordadas y asegurar el cumplimiento de los estándares definidos por el Departamento.')] }),
          new Paragraph({ children: [new TextRun('Finalmente, previo a la recepción definitiva de cualquier sistema desarrollado por terceros, deberá verificarse el cumplimiento de un conjunto mínimo de condiciones técnicas, entre ellas:')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('entrega completa del código fuente;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('documentación técnica actualizada;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('modelos de datos;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('manuales de instalación y administración;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('manuales de usuario cuando correspondan;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('procedimientos de despliegue;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('evidencias de pruebas realizadas;')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun('cumplimiento de estándares de seguridad e integración.')] }),
          new Paragraph({ children: [new TextRun('La recepción técnica favorable constituirá un requisito previo para la aceptación definitiva de los desarrollos contratados. Asimismo, cuando los contratos contemplen servicios de mantenimiento, la Jefatura coordinará la relación técnica entre las áreas usuarias y los proveedores, supervisando el cumplimiento de los niveles de servicio acordados, administrando la gestión de incidencias y verificando la calidad de las soluciones implementadas.')] }),
          new Paragraph({ children: [new TextRun('La aplicación de este procedimiento permitirá fortalecer el control institucional sobre las soluciones desarrolladas por terceros, garantizar la disponibilidad futura del conocimiento técnico y preservar la capacidad del Municipio para evolucionar sus sistemas independientemente del proveedor que haya intervenido en su desarrollo.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '5.8 Innovación tecnológica y utilización responsable de Inteligencia Artificial', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La innovación constituye una función permanente del Departamento y debe orientarse a mejorar la capacidad institucional para responder a las necesidades presentes y futuras de la Administración Municipal. Sin embargo, la incorporación de nuevas tecnologías debe realizarse mediante un proceso de evaluación técnica que considere no sólo las ventajas potenciales de cada herramienta, sino también su impacto sobre la organización, la disponibilidad de recursos para su mantenimiento y su compatibilidad con la estrategia tecnológica del Municipio.')] }),
          new Paragraph({ children: [new TextRun('En consecuencia, la innovación no deberá entenderse como la adopción permanente de nuevas plataformas o lenguajes de programación, sino como la capacidad del Departamento para identificar oportunidades de mejora que generen beneficios concretos para la gestión pública.')] }),
          new Paragraph({ children: [new TextRun('Dentro de este contexto, las herramientas basadas en Inteligencia Artificial representan una oportunidad significativa para incrementar la productividad de los equipos de desarrollo, reducir tiempos dedicados a tareas repetitivas y facilitar actividades de documentación, análisis y asistencia en programación. Su incorporación deberá realizarse de manera gradual y bajo criterios institucionales claramente definidos.')] }),
          new Paragraph({ children: [new TextRun('En una primera etapa se promoverá la capacitación del personal en el uso responsable de estas herramientas, estableciendo lineamientos que garanticen la protección de la información municipal y eviten la exposición de datos sensibles o credenciales institucionales en servicios externos. Asimismo, se promoverá que toda información generada mediante herramientas de Inteligencia Artificial sea revisada y validada por los profesionales responsables antes de su incorporación a los sistemas municipales, manteniendo siempre el criterio técnico y la responsabilidad profesional como elementos centrales del proceso de desarrollo.')] }),
          new Paragraph({ children: [new TextRun('La experiencia obtenida permitirá evaluar, en una etapa posterior, la conveniencia de incorporar soluciones corporativas administradas por el Municipio que ofrezcan mayores garantías de seguridad, privacidad y administración centralizada.')] }),
          new Paragraph({ children: [new TextRun('Paralelamente, la Jefatura impulsará una evaluación continua de nuevas tecnologías, metodologías y herramientas de desarrollo, promoviendo su adopción únicamente cuando se encuentren debidamente justificadas desde el punto de vista técnico, organizacional y económico. De esta manera, la innovación dejará de depender de iniciativas individuales para convertirse en una política institucional planificada, alineada con las necesidades estratégicas de la Municipalidad y orientada a fortalecer la capacidad del Departamento para brindar soluciones tecnológicas de calidad.')] }),
          new Paragraph({ children: [] }),

          // 6. PROYECCIÓN CON INCORPORACIÓN DE RECURSOS (ESCENARIO CON PRESUPUESTO - LARGO Y MEDIANO PLAZO) - DESARROLLADO EXTENSAMENTE
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '6. PROYECCIÓN CON INCORPORACIÓN DE RECURSOS (ESCENARIO CON PRESUPUESTO - MEDIANO Y LARGO PLAZO)', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('La optimización de los recursos actuales constituye el paso obligatorio previo a cualquier solicitud presupuestaria. Sin embargo, para acompañar de manera sostenible el proceso de transformación digital de la Municipalidad de General Pueyrredon, resulta necesario proyectar una Hoja de Ruta de incorporación gradual de recursos tecnológicos y de formación especializada.')] }),
          new Paragraph({ children: [new TextRun('Esta proyección no se sustenta en montos presupuestarios fijos ni estáticos, sino en ejes de inversión modulares y escalables que podrán ejecutarse en la medida en que la Administración Municipal disponga de partidas financieras o financiamiento externo. A continuación se desarrollan las propuestas de mejora que requieren inversión tecnológica suplementaria.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '6.1 Adopción de Licencias Corporativas Oficiales de IA y Entornos Privados', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('El uso asistido de Inteligencia Artificial en el desarrollo de software ha demostrado elevados índices de productividad en la generación de código, refactorización y documentación automatizada. No obstante, la utilización de versiones gratuitas o públicas presenta limitaciones de procesamiento y potenciales riesgos de resguardo de datos si no se cuenta con plataformas administradas centralmente.')] }),
          new Paragraph({ children: [new TextRun('Se propone proyectar la incorporación de licencias corporativas oficiales (ej. GitHub Copilot Enterprise, OpenAI Enterprise o similares) integradas directamente a los entornos de desarrollo (IDEs) de los programadores, bajo un contrato de tenant privado donde los modelos no se entrenen con el código municipal.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura administrará la asignación centralizada de licencias, supervisará las métricas de adopción técnica y velará por el cumplimiento de los protocolos de seguridad de la información.')] }),
          new Paragraph({ children: [new TextRun('Con esta inversión se proyecta un incremento sustancial en la velocidad de entrega de los proyectos, la automatización de la documentación técnica y un resguardo absoluto del patrimonio de software municipal.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '6.2 Plataforma Automatizada de Análisis Estático de Calidad y Deuda Técnica (SonarQube)', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La revisión manual entre pares (peer review) en GitLab es una práctica altamente efectiva en el escenario de $0 presupuesto, pero resulta limitada a la hora de auditar volumen masivo de código o detectar vulnerabilidades complejas de ciberseguridad escondidas en librerías de terceros.')] }),
          new Paragraph({ children: [new TextRun('Se propone la adquisición e implementación de un servidor dedicado con una plataforma de análisis estático de código (ej. SonarQube Enterprise), integrada de forma automatizada a los pipelines de integración continua (CI/CD) de GitLab. Cada commit o solicitud de fusión de código será escaneado en tiempo real, evaluando deuda técnica, mantenibilidad, cobertura de pruebas y vulnerabilidades de acuerdo a estándares internacionales OWASP.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura definirá los umbrales de calidad (Quality Gates) obligatorios que deberá superar el software para autorizar su pasaje a producción, analizando los reportes periódicos para planificar refactorizaciones de sistemas legados.')] }),
          new Paragraph({ children: [new TextRun('La adopción de esta plataforma garantizará la entrega de código libre de fallas de seguridad críticas y una reducción drástica en la tasa de defectos reportados por usuarios en producción.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '6.3 Contenerización de Aplicaciones e Infraestructura Escotada (Docker / Kubernetes)', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La coexistencia de aplicaciones sobre distintos servidores físicos o virtuales genera frecuentes inconsistencias entre los entornos de desarrollo, prueba y producción, encareciendo el mantenimiento y dificultando la puesta en producción rápida de nuevos aplicativos.')] }),
          new Paragraph({ children: [new TextRun('Se proyecta la incorporación de infraestructura y licencias necesarias para implementar un esquema de contenerización estandarizada mediante Docker y orquestación con Kubernetes/Rancher, en coordinación directa con el área de Infraestructura y Redes. Cada sistema municipal se desplegará dentro de su propio contenedor aislado con todas sus dependencias preconfiguradas.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura coordinará el plan de migración gradual de los sistemas hacia arquitecturas de contenedores y capacitará al personal en la gestión y empaquetamiento de imágenes de software.')] }),
          new Paragraph({ children: [new TextRun('La contenerización eliminará definitivamente las fallas por diferencias de servidor, agilizará los despliegues a minutos sin interrupción del servicio y optimizará el uso de la infraestructura tecnológica del Municipio.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '6.4 Programa Formal de Capacitación Técnica Externa Especializada', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La formación técnica continua resulta indispensable en un área de desarrollo de software. Si bien la nivelación interna entre agentes es la base del escenario con recursos actuales, existen temáticas avanzadas de arquitectura y seguridad que requieren capacitación dictada por instituciones especializadas.')] }),
          new Paragraph({ children: [new TextRun('Se propone elaborar un programa anual presupuestado de capacitación externa acreditada, enfocado en cursos y certificaciones profesionales sobre Clean Architecture, patrones de diseño de microservicios, seguridad en APIs RESTful, administración de bases de datos relacionales a gran escala y marcos ágiles avanzadas.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura priorizará la asignación de las capacitaciones sobre la base de la Matriz de Competencias del Departamento, elevando los requerimientos al anteproyecto de presupuesto anual y exigiendo que los agentes capacitados realicen talleres de transferencia interna para el resto del equipo.')] }),
          new Paragraph({ children: [new TextRun('Este programa asegurará la actualización profesional del personal, la adopción de prácticas de desarrollo de estándar internacional y un elevado incentivo para el crecimiento dentro de la carrera municipal.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '6.5 Equipamiento Tecnológico para Trabajo Colaborativo y Comunicación Remota', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ children: [new TextRun('La dispersión del personal en distintas dependencias físicas exige contar con herramientas de comunicación fluidas que eviten el aislamiento y permitan coordinar reuniones inter-oficinas sin necesidad de traslados permanentes.')] }),
          new Paragraph({ children: [new TextRun('Se proyecta la adquisición de equipamiento periférico adecuado (cámaras web HD, auriculares de alta fidelidad con cancelación de ruido, dobles monitores para desarrollo) y la adecuación de un espacio con pantalla y sistema de videoconferencia para las reuniones de equipo entre ambas sedes.')] }),
          new Paragraph({ children: [new TextRun('La Jefatura mantendrá actualizado el cargo patrimonial de los elementos asignados a la dependencia, velando por su correcto uso, conservación y distribución estratégica según las necesidades operativas de cada puesto.')] }),
          new Paragraph({ children: [new TextRun('Con este equipamiento se garantizará la fluidez de las reuniones periódicas de sincronización, mejorando la colaboración y eliminando las barreras de distancia entre los grupos de trabajo.')] }),
          new Paragraph({ children: [] }),

          // 7. ESTRATEGIA DE IMPLEMENTACIÓN Y ROADMAP POR ETAPAS
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '7. ESTRATEGIA DE IMPLEMENTACIÓN Y ROADMAP POR ETAPAS', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '7.1 Fases de la Hoja de Ruta Ágil', bold: true, font: 'Arial', size: 24 })] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa I – Conocer y Ordenar (Sprints 1 a 4): ', bold: true }), new TextRun('Relevamiento de competencias, inventario de sistemas, conformación de la Cartera Única en Redmine y asignación de Referentes Secundarios.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa II – Integrar y Estandarizar (Sprints 5 a 12): ', bold: true }), new TextRun('Reuniones transversales inter-oficinas, difusión de guías de buenas prácticas, obligatoriedad del template de arquitectura y gobierno técnico de proveedores.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Etapa III – Consolidar y Evaluar (Sprints 13+): ', bold: true }), new TextRun('Medición de KPIs, revisiones de código en GitLab y evaluación de proyectos de contenerización.')] }),
          new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: 'Proceso Permanente – Mejora Continua: ', bold: true }), new TextRun('Auditorías periódicas de procedimientos, actualización de capacitaciones y evaluación de innovaciones.')] }),
          new Paragraph({ children: [] }),

          new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: '7.2 Cuadro Resumen de Implementación', bold: true, font: 'Arial', size: 24 })] }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Etapa', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Objetivo Principal', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Resultado Esperado', bold: true, font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Organización (Etapa I)', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Conocer e inventariar el Departamento', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Inventario completo de sistemas y Matriz de Competencias', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Estandarización (Etapa II)', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Unificar procedimientos y arquitectura', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Procesos homogéneos y guías instituidas', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Consolidación (Etapa III)', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Reducir riesgos operacionales', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Conocimiento distribuido (Referentes Secundarios) y KPIs', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Innovación (Permanente)', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Evolución tecnológica y adopción de IA', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Mayor productividad y soluciones sostenibles', font: 'Arial' })] })] }),
                ],
              }),
            ],
          }),
          new Paragraph({ children: [] }),

          // 8. MATRIZ DE INDICADORES DE EVALUACIÓN Y GESTIÓN (KPIs)
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '8. MATRIZ DE INDICADORES DE EVALUACIÓN Y GESTIÓN (KPIs)', bold: true, font: 'Arial', size: 28 })] }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: 25, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Categoría', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ width: { size: 40, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Indicador de Gestión', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [new TextRun({ text: 'Objetivo Estratégico', bold: true, font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Riesgo Operacional', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '% de Sistemas Críticos con Referente Secundario Asignado', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Tender al 100% para eliminar los Single Points of Failure.', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Documentación', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '% de Sistemas con Documentación Mínima Útil', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Garantizar la retención y transferencia del conocimiento.', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Estandarización', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '% de Proyectos Nuevos alineados a la Arquitectura Base', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Garantizar código homogéneo, mantenible y escalable.', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Eficiencia Procesal', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Lead Time de Desarrollo (Solicitud ➔ Puesta en Producción)', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Reducir tiempos de entrega mediante priorización ágil.', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Calidad de Entrega', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Tasa de Defectos Reportados en Post-Producción', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Minimizar fallas mediante buenas prácticas y peer review.', font: 'Arial' })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Control de Terceros', bold: true, font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '% de Desarrollos Externos con Recepción Técnica Aprobada', font: 'Arial' })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Asegurar entrega de código fuente y soberanía técnica.', font: 'Arial' })] })] }),
                ],
              }),
            ],
          }),
          new Paragraph({ children: [] }),

          // 9. SECTORES DEL DEPARTAMENTO (MATRIZ DINÁMICA DE TRABAJO)
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '9. SECTORES DEL DEPARTAMENTO (MATRIZ DINÁMICA DE TRABAJO)', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('Aprovechando la estructura vigente del Grupo Ocupacional Computación (Decreto N° 2250/98) sin solicitar nuevos cargos en el escalafón:')] }),
          new Paragraph({ children: [new TextRun({ text: '1. Liderazgo Técnico y Arquitectura (Analistas y Especialistas Senior - Clase XI): ', bold: true }), new TextRun('Diseño de arquitectura base, análisis funcional complejo, mentoría en capacitación cruzada y supervisión de estándares.')] }),
          new Paragraph({ children: [new TextRun({ text: '2. Desarrollo Funcional (Analistas Programadores Semi-Senior y Programadores - Clases X e IX): ', bold: true }), new TextRun('Codificación de lógica de negocio, construcción de interfaces y solución de incidencias bajo las guías de estilo.')] }),
          new Paragraph({ children: [new TextRun({ text: '3. Innovación, Integración y Transferencia (Roles Transversales Rotativos): ', bold: true }), new TextRun('Asignaciones dinámicas para acompañar como Referentes Secundarios, investigar integraciones y empaquetar software en contenedores.')] }),
          new Paragraph({ children: [] }),

          // 10. CONCLUSIONES
          new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: '10. CONCLUSIONES', bold: true, font: 'Arial', size: 28 })] }),
          new Paragraph({ children: [new TextRun('La modernización tecnológica de la Municipalidad de General Pueyrredon requiere un Departamento de Software ordenado, previsible y sostenible, capaz de trascender a las personas y a los cambios de gestión política.')] }),
          new Paragraph({ children: [new TextRun('Al implementar un marco de agilidad adaptativa con la Jefatura en un rol activo de Scrum Master Global y Gestor Gerencial, establecer el uso obligatorio de la arquitectura base municipal, instituir la figura de los Referentes Secundarios y aplicar un estricto Gobierno Técnico sobre Proveedores, se resuelven los problemas históricos de desarticulación, multitarea caótica y conocimiento concentrado.')] }),
          new Paragraph({ children: [new TextRun('Esta propuesta demuestra cómo es posible transformar la realidad actual mediante el uso inteligente de los recursos disponibles (Escenario REAL $0) y trazar un camino presupuestario sólido para incorporar innovación tecnológica de manera modular y no atada a montos fijos (Escenario IDEAL), asegurando que el patrimonio de software del Municipio sea seguro, duradero y de calidad.')] }),
          new Paragraph({ children: [new TextRun('La tecnología constituye una herramienta al servicio de la gestión pública. En consecuencia, el verdadero desafío del Departamento no consiste únicamente en desarrollar software, sino en aportar soluciones que mejoren la eficiencia administrativa, fortalezcan la continuidad institucional y generen valor para toda la ciudadanía. Ese será el criterio rector que orientará la gestión propuesta.')] }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('D:/proyecto/Plan_Trabajo_Jefatura_Software_Version_Director.docx', buffer);
  console.log('✅ DOCX re-generado exitosamente: Sección 5 (Sin Presupuesto) y Sección 6 (Con Presupuesto) ambas ampliamente desarrolladas sin duplicar ejes ni fijar montos estáticos.');
}

buildDocx().catch(err => {
  console.error('Error generando DOCX:', err);
  process.exit(1);
});
