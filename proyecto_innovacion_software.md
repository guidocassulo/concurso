# PLAN DE TRABAJO
**Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con recursos actuales y Proyección con incorporación de Recursos.**

## 1. Abordaje
El presente plan de trabajo se estructura en torno a una premisa fundamental: el Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software no debe limitarse a ser una "fábrica de código", sino que debe consolidarse como un motor estratégico para la modernización del municipio. Atendiendo al perfil del cargo, el abordaje central es **optimizar los procedimientos organizacionales** para que se transformen en la columna vertebral del departamento. Esta estructuración es el paso ineludible para asegurar que el software municipal trascienda la mera funcionalidad operativa y pase a ser intrínsecamente **escalable, seguro y capaz de responder con agilidad a las necesidades de las diferentes gestiones, tanto presentes como futuras.**

## 2. Introducción
El Departamento se encuentra ante el desafío de administrar un ecosistema heterogéneo que combina sistemas obsoletos (*legacy*) con tecnologías modernas, contando con recursos humanos muy limitados. Para responder a las demandas institucionales actuales, la Jefatura debe orquestar estos recursos con visión estratégica. El plan se divide metodológicamente en un diagnóstico inicial (FODA), la definición de objetivos, un plan de optimización utilizando exclusivamente los recursos actuales (centrado en procedimientos ágiles y estandarización), y finalmente, una proyección basada en la incorporación de recursos tecnológicos y estratégicos.

## 3. Diagnóstico (Análisis FODA)
Para que los procedimientos organizacionales sean efectivos, es necesario comprender la radiografía exacta del ecosistema de software municipal en la actualidad.

### Fortalezas
*   **Conocimiento del negocio:** El equipo actual comprende íntimamente los procesos, circuitos administrativos y regulaciones de la Municipalidad.
*   **Sistemas Core en funcionamiento:** Existen bases de datos operativas e infraestructura funcional sobre la cual se puede construir.

### Debilidades
*   **Desintegración Arquitectónica y Tecnológica:** Coexistencia caótica de sistemas *legacy* (Webforms con SQL 2005) y stacks modernos (.NET, React, Angular, PHP, PostgreSQL). Aunque existe un *template* de arquitectura base, su uso no es obligatorio ni unificado, lo que complica innecesariamente los circuitos de publicación.
*   **Multitarea Extrema y Cuellos de Botella:** Ante una dotación de personal muy limitada frente a la alta demanda municipal, resulta imposible mantener equipos de trabajo fijos. El personal se encuentra fragmentado transversalmente, con agentes manteniendo simultáneamente múltiples sistemas *legacy* de diversas dependencias y participando a la vez en desarrollos nuevos. Estos saltos de contexto constantes merman la productividad y generan un escenario de alto riesgo donde el soporte de áreas críticas enteras depende del conocimiento exclusivo de una sola persona (*Single Point of Failure*).
*   **Aislamiento Físico y Duplicación de Esfuerzos:** El personal está dividido en dos oficinas incomunicadas operativamente (experimentados vs. nuevos). Esto genera que los desarrollos se "pisen", reescribiendo funcionalidades en lugar de intercomunicar sistemas y rescatar datos.
*   **Estimación y Seguimiento Caóticos:** Uso fragmentado de herramientas (algunos usan Redmine, otros Gantts en Excel sin actualizar el avance, otros nada).
*   **Falta de Documentación Apropiada:** Los sistemas carecen de manuales técnicos o diccionarios de datos, agravando la dependencia de programadores específicos.
*   **Despliegues Inconsistentes y Dependencia Externa:** Los proyectos nuevos se *dockerizan*, pero los *legacy* dependen al 100% de la intervención manual de los administradores de redes para actualizar entornos.
*   **Falta de Herramientas Corporativas de IA:** El uso de asistentes en los IDEs queda a criterio y gasto personal del trabajador, sin licencias oficiales.
*   **Pruebas de Software Reactivas:** Al no existir roles dedicados exclusivamente al *testing* en el organigrama, la verificación de fallos depende del propio desarrollador o suele ocurrir tarde en el ciclo (directamente reportado por el usuario en post-producción).

### Oportunidades
*   **Adopción de marcos de trabajo ágiles:** Existe una tendencia global comprobada en metodologías que pueden aplicarse sin costo monetario para ordenar el flujo de trabajo.
*   **Herramientas Open Source:** Disponibilidad de herramientas de control de versiones y despliegue que pueden adoptarse libremente.

### Amenazas
*   **Nuevas demandas institucionales rápidas:** Las necesidades de gestión cambian a una velocidad mayor de la que el actual modelo de desarrollo caótico puede soportar orgánicamente.
*   **Vulnerabilidades de ciberseguridad:** Los ataques a entidades públicas requieren que el código nazca seguro y estandarizado.

## 4. Objetivos
*   **Garantizar código seguro, escalable y responsivo:** Estandarizar la arquitectura y automatizar reglas de calidad.
*   **Unificar operativamente al personal:** Desarticular el aislamiento físico y mitigar los cuellos de botella mediante *cross-training* estratégico.
*   **Optimizar el seguimiento de proyectos:** Instaurar metodologías ágiles adaptativas y una herramienta única institucional de gestión.
*   **Facilitar la labor de Infraestructura/Redes:** Entregar paquetes de software estandarizados para agilizar los pases a producción.

## 5. Propuestas de mejoras sin presupuesto (Optimización con recursos actuales)
Estas iniciativas conformarán la nueva "columna vertebral" organizacional. Se pueden implementar de manera inmediata reorganizando el capital humano y procedimental existente:

1.  **Implementación de Agilidad Adaptativa (Kanban + Iteraciones Cortas):** Dado que la escasa dotación de personal imposibilita mantener equipos ágiles fijos y puros, se aplicará un modelo híbrido realista: *Kanban* para ordenar el mantenimiento continuo y los "incendios" de los sistemas *legacy*, e iteraciones cortas para los desarrollos nuevos.
    *   **El Jefe de Departamento como *Scrum Master* Global:** Para garantizar el éxito de este modelo ágil, la Jefatura asumirá activamente el rol transversal de todas las células. Su función central será mantener una visión macro del portafolio para destrabar impedimentos, asegurar la comunicación entre oficinas y, fundamentalmente, **actuar como filtro coordinador para evitar el desarrollo de funcionalidades duplicadas o innecesarias**.
    *   **Identificación Clara del "Product Owner":** El área de software no debe definir ni adivinar las urgencias del negocio. El rol de *Product Owner* recaerá de forma directa e intransferible en el usuario solicitante o referente del área que requiere el sistema (jefaturas o empleados especializados). Serán ellos los encargados de priorizar su propio *Backlog* de necesidades.
    *   **Ceremonias Oficiales y Estimación Formal:** Se instaurará una *Planning* periódica para **estimar formalmente** el trabajo y *Dailies* (reuniones de sincronización de 15 minutos) para detectar bloqueos en agentes que comparten múltiples proyectos.
    *   **Artefactos Transparentes y Herramienta Única de Trazabilidad:** Todo requerimiento ingresará como una *User Story* priorizada. Para erradicar el caos de los Excel desactualizados, **se unificará el seguimiento en una única plataforma institucional obligatoria** (ej. Redmine).
2.  **Integración Operativa y Canales de Comunicación Abierta:** Entendiendo que la distribución del personal en dos oficinas distintas (experimentados y nuevos) se mantendrá físicamente, se desarticulará por completo el aislamiento *operativo*. Se establecerán canales de comunicación constante y transversal entre ambas partes (mediante las ceremonias ágiles y la herramienta de trazabilidad). Esto garantizará la transferencia de conocimiento de los perfiles de mayor jerarquía (*Clase XI*) hacia los nuevos desarrolladores, evitando el re-trabajo, los desarrollos duplicados y los cuellos de botella por falta de información. 
3.  **Asignación Dinámica por Fase de Proyecto:** Ante la imposibilidad de tener equipos fijos, se organizará al personal mediante una matriz dinámica. Por ejemplo, en desarrollos nuevos, los perfiles con mayor conocimiento del negocio se enfocarán en el análisis funcional, derivando la construcción pura al resto del equipo para mitigar el salto de contexto.
4.  **Estandarización de Código y Aseguramiento de Calidad:** Ante la falta actual de herramientas de revisión automatizada y la imposibilidad de realizar revisiones de código cruzadas exhaustivas por escasez de tiempo, la calidad se asegurará **reforzando las buenas prácticas de programación**. Se definirán y difundirán guías de estilo claras (convenciones de código) de cumplimiento obligatorio para todo el equipo. Esto evitará el código desordenado y garantizará que cualquier desarrollador pueda intervenir en el código de otro, sin necesidad de sobrecargar a los perfiles Senior con auditorías manuales línea por línea.
5.  **Unificación de Arquitecturas y "Congelamiento Legacy":** Se establecerá como norma inquebrantable el uso del *template* de arquitectura base ya desarrollado en la Municipalidad. Además, ningún proyecto nuevo podrá ser iniciado en tecnologías obsoletas (ej. Webforms/SQL 2005).
6.  **Criterios de "Terminado" (Definition of Done):** Un requerimiento solo estará listo para ser derivado formalmente a Redes/SysAdmin cuando cumpla: funcionalidad probada, alineación con la arquitectura exigida, y **documentación técnica exhaustiva obligatoria**.

## 6. Propuestas de mejoras con presupuesto (Proyección con incorporación de Recursos)
Para llevar al departamento al próximo nivel tecnológico, se planifica la inversión escalonada en:

1.  **Herramientas Tecnológicas y Licencias:**
    *   **Licencias Corporativas de IA para IDEs (ej. GitHub Copilot/Tabnine):** Provisión oficial de tokens pagados por el municipio para estandarizar una práctica que hoy es informal, aumentando drásticamente la productividad.
    *   **Sistemas Centralizados de Estandarización de Código:** Licencias para herramientas de control de calidad (ej. SonarQube) que automaticen la verificación de las reglas de arquitectura y alerten sobre código mal formateado.
    *   **Migración a Contenedores (Sinergia con Redes/SysAdmin):** Asignación de recursos y tiempo para migrar paulatinamente el software *legacy* hacia entornos *Dockerizados*, entregando aplicaciones estandarizadas que agilicen los despliegues de Infraestructura.
2.  **Capacitación Continua:**
    *   Cursos formales en Arquitecturas Limpias (*Clean Architecture*) y Patrones de Diseño para todo el plantel técnico.

## 7. Implementación y Gestión
La gestión del departamento se centralizará a través de la herramienta de trazabilidad institucional obligatoria (Redmine u otra). A través de sus tableros de control, el Jefe de Departamento monitorizará el estado de las iteraciones de desarrollo nuevo y el tablero Kanban de mantenimiento *legacy*, garantizando que ningún agente supere su capacidad operativa y que las Secretarías externas reciban visibilidad del estado de sus peticiones.

## 8. Evaluación y Control
El éxito de la nueva estructura organizacional se medirá mediante indicadores objetivos analizados retrospectivamente:
*   **Lead Time de Desarrollo:** Tiempo transcurrido desde que el *Product Owner* (Secretaría) solicita una mejora hasta que el código es liberado para su despliegue.
*   **Tasa de Defectos:** Cantidad de errores detectados post-entrega vs. volumen de código nuevo generado (con objetivo de reducción gracias a las reglas automatizadas).
*   **Cumplimiento Arquitectónico:** Control de la cantidad de proyectos que logran encuadrarse dentro del *template* de arquitectura base.

## 9. Sectores del Departamento
Para dar respuesta operativa sin requerir contrataciones externas, la matriz dinámica del departamento dividirá las tareas aprovechando el *Grupo Ocupacional Computación* vigente:
1.  **Liderazgo Técnico y Arquitectura (*Analistas y Especialistas Senior - Clase XI*):** Encargados de definir la arquitectura base, actuar como mentores técnicos y realizar análisis funcionales complejos.
2.  **Desarrollo Funcional (*Analistas Programadores Semi Senior y Programadores - Clases X e IX*):** Enfocados en la codificación y lógica de negocio bajo las reglas automatizadas de calidad estipuladas.
3.  **Innovación e Integración (Transversal):** Asignaciones rotativas dedicadas a migrar sistemas *legacy* a contenedores (Docker) e investigar integraciones para interoperabilidad.

## 10. Conclusiones
La modernización del Municipio requiere sistemas de información robustos que perduren en el tiempo, sin importar los cambios de gestión. Al establecer procedimientos organizacionales ágiles, estandarizar la arquitectura de software y focalizar el control a través de un Jefe de Departamento con rol activo de orquestador (*Scrum Master* Global), se desarticularán los aislamientos operativos y cuellos de botella actuales. El Departamento de Gestión, Desarrollo e Innovación de Software dejará de actuar de forma reactiva, convirtiéndose en un área altamente comunicada y lista para potenciar la escalabilidad municipal.
