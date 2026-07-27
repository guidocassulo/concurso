# PLAN DE TRABAJO
**Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con recursos actuales y Proyección con incorporación de Recursos.**

---

## 1. Abordaje
El presente plan de trabajo se estructura en torno a una premisa fundamental: el Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software no debe limitarse a actuar como una "fábrica de código" reactiva, sino consolidarse como el motor estratégico para la modernización de la gestión municipal. 

Atendiendo al perfil del cargo concursado, el abordaje central radica en **optimizar los procedimientos organizacionales** para transformarlos en la columna vertebral del departamento. Esta estructuración procedimental es el paso ineludible para asegurar que el software municipal trascienda la mera funcionalidad operativa y pase a ser intrínsecamente **escalable, seguro y capaz de responder con agilidad a las necesidades de las diferentes gestiones, tanto presentes como futuras.**

---

## 2. Introducción
El Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software se encuentra integrado orgánicamente dentro de la **Subsecretaría de Gobierno Digital y Mejora de Procesos**, dependiente de la **Secretaría de Participación Ciudadana y Descentralización** de la Municipalidad de General Pueyrredon (C.F. 1-31-00-01, N° de Orden 6733). Su ubicación en la estructura municipal lo posiciona como el área técnica responsable de posibilitar la transformación digital y soportar operativamente a la totalidad de las Secretarías y dependencias comunales.

La misión institucional del Departamento es **diseñar, construir, mantener, integrar y evolucionar las soluciones de software y aplicaciones municipales**, garantizando la continuidad operativa de los servicios, la soberanía sobre el patrimonio informático del Municipio, la protección de los datos de la ciudadanía y la adopción con sentido de innovaciones tecnológicas para responder con agilidad a las demandas de las gestiones presentes y futuras.

De acuerdo con la normativa municipal que rige la estructura orgánica y el nomenclador de funciones del área (citada en la bibliografía oficial del concurso), el Departamento tiene encomendadas las siguientes funciones primarias:
*   **Relevamiento y Análisis de Necesidades:** Relevar, analizar y sistematizar los requerimientos informáticos y funcionales de las distintas dependencias de la administración municipal.
*   **Planificación y Desarrollo de Software:** Planificar, diseñar, codificar, implementar y mantener los sistemas de software, bases de datos y aplicaciones móviles de uso institucional.
*   **Modelos de Desarrollo y Documentación:** Definir y homogenizar los modelos de ciclo de vida de desarrollo de software, dictando pautas de documentación técnica, diccionarios de datos y manuales operativos.
*   **Estándares Técnicos y Calidad:** Establecer y auditar los estándares de codificación, el uso del *template* de arquitectura base municipal, las pautas de *testing* y la seguridad desde la etapa de análisis (*Security by Design*).
*   **Investigación, Evaluación e Innovación:** Investigar, evaluar e institucionalizar de manera fundamentada nuevas tecnologías, lenguajes de programación, herramientas de desarrollo, marcos ágiles e Inteligencia Artificial.
*   **Control y Recepción Técnica de Software Tercerizado:** Participar activamente en el seguimiento técnico, control de entregables, pruebas de aceptación y recepción de código fuente de las soluciones desarrolladas por proveedores externos.
*   **Interoperabilidad e Integración:** Garantizar la integración, reutilización de componentes y comunicación entre los diferentes sistemas municipales para evitar silos aislados de información.

Para cumplir con estas funciones normativas frente a la realidad operativa del sector, el presente Plan de Trabajo parte de un diagnóstico exhaustivo de la situación actual y se articula en torno al tema oficial del concurso, estructurándose en un Diagnóstico Integral (FODA), la formulación de Objetivos, la Propuesta de Mejora y Optimización con Recursos Actuales (SIN PRESUPUESTO - Plan Realista), la Proyección con Incorporación de Recursos (CON PRESUPUESTO - Plan Proyectado), y los mecanismos de Implementación, Gestión e Indicadores de Evaluación.

---

## 3. Diagnóstico (Análisis FODA)

### Fortalezas

• Personal Técnico Capacitado:
El Departamento dispone de un plantel técnico capacitado que pueden realizar tareas de relevamiento analítico, desarrollo y testing de aplicaciones además de conocer las normativas, circuitos administrativos, trámites y reglas operativas de la administración pública local.

• Disponibilidad de medios:
Se cuenta con el suficiente mobiliario y herramientas técnicas para llevar a cabo la Misión y Funciones del Departamento.

### Debilidades

• Fragmentación Tecnológica:
Coexistencia caótica de tecnologías obsoletas y sin soporte actual (WebForms con SQL 2005) junto a tecnologías modernas (.NET, React, Angular, PHP, PostgreSQL).

• Falta de una Arquitectura Base Estandarizada:
Ausencia de una arquitectura base de cumplimiento obligatorio a modo de "template" para uniformar las aplicaciones y de esta forma facilitar el desarrollo de los sistemas y la rotación de programadores entre distintos sistemas.

• Multitarea Extrema y Conocimiento Concentrado:
La escasa dotación frente a la alta demanda obliga al personal a atender simultáneamente emergencias de sistemas antiguos de diversas áreas y desarrollos nuevos. Esto genera saltos de contextos constantes y un alto riesgo operativo: la existencia de sistemas críticos que dependen del conocimiento exclusivo de una sola persona.

• Aislamiento Operativo entre Dependencias:
La distribución física del personal en dos oficinas distintas y sin un agente que coordine ambas, genera descoordinación, aislamiento en silos de información y el riesgo de desarrollar funcionalidades duplicadas por falta de comunicación.

• Estimación y Seguimiento Caóticos:
Uso fragmentado de herramientas para documentar el avance de los proyectos (algunos agentes usan Redmine, otros planillas desactualizadas en Excel o registros informales), impidiendo conocer la capacidad operativa real del departamento.

• Documentación Inexistente o Desigual:
Falta de manuales de relevamiento, técnicos o registros de arquitectura, profundizando la dependencia de programadores específicos.

• Pruebas de Software Reactivas:
Al no existir el rol de QA (Quality Assurance) ni herramientas de testeo estandarizadas, la verificación de errores depende de los propios desarrolladores o de los usuarios de los aplicativos.

• Resistencia al cambio:
Algunos agentes se rehúsan a aprender nuevas tecnologías y mejorar las formas de desarrollo, insistiendo en utilizar lenguajes o arquitecturas obsoletas, generando conflictos en la optimización de las bases de datos.

### Oportunidades

• Adopción de Inteligencia Artificial para Agilizar la Producción:
Oportunidad de incorporar herramientas asistidas por IA (asistentes en los IDEs) para acelerar la codificación, automatizar tareas repetitivas de documentación, y aumentar la productividad general del departamento.

• Adopción de Marcos Ágiles Híbridos:
Implementación de metodologías ágiles adaptadas a la realidad municipal a costo cero para mejorar y agilizar los procesos de desarrollo.

• Estandarización mediante la Arquitectura Base:
Implementar una arquitectura base a modo de “template” como norma obligatoria para todos los desarrollos y de esa manera unificar las metodologías y mantener una coherencia en las tecnologías utilizadas.

• Gestión Política favorable:
La gestión actual tiene intención de optimizar y modernizar las funciones del Departamento.

• Capacitaciones disponibles y accesibles:
Hay una gran cantidad de ofertas de capacitaciones técnicas tanto de nuevas tecnologías, metodologías ágiles e IDEs de inteligencia artificial que pueden ser aprovechadas para mejorar las tareas del área.

### Amenazas

• Falta de una óptima integración entre sistemas legacy y nuevos aplicativos:
Algunos sistemas duplican funciones debido a la imposibilidad de integrar la forma en que acceden a las bases de datos más antiguas con nuevos aplicativos, generando duplicación de funciones al no haber APIs o sistemas que unifiquen la consumición de estos datos.

---

## 4. Objetivos

### 4.1. Objetivo General
Fortalecer la capacidad institucional del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software mediante una organización basada en equipos colaborativos, conocimiento compartido, procedimientos estandarizados y gobierno técnico, asegurando que el software municipal sea seguro, escalable y sostenible en el tiempo.

### 4.2. Objetivos Específicos
1. Estructurar un modelo de gestión ágil adaptativo (Kanban + Iteraciones) liderado activamente por la Jefatura.
2. Eliminar los puntos únicos de falla (*Single Point of Failure*) mediante la asignación de **Referentes Secundarios** en todos los sistemas críticos.
3. Desarticular el aislamiento operativo entre las oficinas físicas a través de canales de comunicación abierta y herramientas colaborativas.
4. Institucionalizar el uso obligatorio del *template* de arquitectura base municipal y guías de buenas prácticas de programación.
5. Establecer un protocolo estricto de **Gobierno Técnico de Proveedores Externos** para garantizar la soberanía del código y la documentación.
6. Regular el uso de Inteligencia Artificial mediante pautas de seguridad (escenario real) y proyectar licencias corporativas (escenario ideal).

---

## 5. Propuesta de Mejora y Optimización con Recursos Actuales (SIN PRESUPUESTO - Plan Realista)
Esta sección constituye el corazón operativo del plan a corto plazo. Agrupa todas las iniciativas procedimentales y organizacionales que se implementarán **utilizando exclusivamente el capital humano y las herramientas existentes (Costo $0)**, transformando los procedimientos en la columna vertebral del departamento:

### 1. Implementación de Agilidad Adaptativa y Liderazgo Híbrido de la Jefatura
*   **Modelo Híbrido (Kanban + Iteraciones Cortas):** Se aplicará *Kanban* para ordenar el mantenimiento continuo e incidencias de sistemas *legacy*, e *iteraciones cortas* (Sprints) para nuevos desarrollos. No se impondrá Scrum de forma rígida a todo el personal.
*   **El Jefe de Departamento como *Scrum Master Global* y Gestor Gerencial:** La Jefatura asumirá un doble rol activo:
    *   *Como Scrum Master Global:* Orquestará operativamente las células, destrabará bloqueos diarios, facilitará la comunicación entre las dos oficinas físicas y **actuará como filtro coordinador para evitar el desarrollo de funcionalidades duplicadas**.
    *   *Como Gestor Gerencial:* Evaluará el rendimiento global del departamento, medirá la capacidad operativa en Redmine y garantizará la alineación estratégica con las autoridades.
*   **El "Product Owner" Institucional:** El rol de *Product Owner* recaerá en los referentes o jefaturas de las Secretarías usuarias solicitantes, quienes serán responsables de priorizar su propio *Backlog* de necesidades.

### 2. Integración Operativa y Mitigación de Riesgos (Referentes Secundarios)
*   **Comunicación Abierta entre Oficinas:** Se mantendrá la distribución física en dos dependencias, pero se erradicará el aislamiento *operativo* mediante ceremonias ágiles conjuntas (Dailies de 15 min, Plannings) y uso unificado de repositorios.
*   **Asignación Dinámica y "Referentes Secundarios":** Para terminar con la dependencia de una sola persona en sistemas críticos, se implementará la figura del *Referente Secundario*. Mediante la asignación dinámica por fases (*shadowing* y capacitación cruzada), un programador acompañará al referente principal en tareas de mantenimiento y análisis, logrando la transferencia práctica del conocimiento sin tocar el escalafón.

### 3. Estandarización de Código y Buenas Prácticas (Sin Herramientas Automatizadas)
*   Dado que actualmente no se cuenta con herramientas de revisión automatizada y la revisión manual cruzada entre pares sobrecargaría a los programadores Senior, la calidad se asegurará **definiendo y exigiendo buenas prácticas de programación y guías de estilo obligatorias**.
*   **Obligatoriedad del Template de Arquitectura Base:** Se establecerá como norma inquebrantable que todo nuevo desarrollo o refactorización relevante deba construirse sobre la arquitectura base desarrollada en la Municipalidad. Ningún desarrollo nuevo podrá iniciarse en tecnologías obsoletas (*Congelamiento Legacy*).

### 4. Control y Recepción Técnica de Software Tercerizado
*   La contratación externa de software no debe significar la pérdida de control técnico por parte del departamento. Se establecerán pautas procedimentales donde todo proveedor deba:
    *   Alinear su desarrollo a los estándares de arquitectura del Municipio.
    *   Entregar obligatoriamente código fuente, manuales técnicos y diccionarios de datos actualizados.
    *   Someterse a pruebas de recepción validadas por el personal técnico del Departamento antes de la aceptación final.

### 5. Pautas para el Uso e Integración de Inteligencia Artificial para Agilizar la Producción
*   Para aprovechar el potencial de la IA en la aceleración de desarrollos sin comprometer la seguridad institucional:
    *   Se guiará al equipo en el uso de herramientas de IA como asistentes de código para optimizar tiempos de desarrollo y documentación.
    *   Se fijará la pauta clara de no introducir datos personales de ciudadanos ni credenciales sensibles en servicios públicos de IA.

---

## 6. Proyección con Incorporación de Recursos (CON PRESUPUESTO - Plan Proyectado a Mediano/Largo Plazo)
Esta sección contempla la evolución tecnológica y la innovación del departamento a través de una inversión presupuestaria escalonada y justificada en necesidades concretas:

### 1. Herramientas Tecnológicas y Licencias Corporativas
*   **Licencias Corporativas de IA para IDEs (ej. GitHub Copilot / Tabnine):** Adquisición de licencias corporativas oficiales administradas por el Municipio, garantizando entornos seguros, privados y con tokens oficiales para aumentar drásticamente la productividad del equipo.
*   **Plataformas de Control Automático de Calidad (ej. SonarQube):** Adquisición de licencias para herramientas de análisis estático que verifiquen automáticamente el cumplimiento de las guías de estilo y detecten deudas técnicas o vulnerabilidades antes de la entrega.
*   **Migración e Infraestructura en Contenedores (Docker):** Asignación de presupuesto y tiempo operativo para migrar paulatinamente sistemas *legacy* hacia entornos *Dockerizados*. Esto facilitará la labor del Departamento de Infraestructura/Redes (encargado exclusivo de los despliegues y DevOps), entregándoles paquetes estandarizados.

### 2. Capacitación Continua Formal
*   Financiamiento de cursos de formación profesional en **Arquitecturas Limpias (*Clean Architecture*)**, Patrones de Diseño, Microservicios y APIs REST.

### 3. Equipamiento para Trabajo Colaborativo Inter-Oficinas
*   Provisión de insumos informáticos básicos no cuantitativos: adquisición de **webcams y auriculares con micrófono** para los puestos de trabajo, facilitando las reuniones virtuales de coordinación entre las dos oficinas físicas y las áreas usuarias.

---

## 7. Implementación y Gestión (Hoja de Ruta por Etapas)

La transformación del departamento se ejecutará bajo un marco de **adopción progresiva (Roadmap Ágil)** estructurado en 3 etapas principales y un proceso permanente:

```
[Etapa I: Conocer y Ordenar] ➔ [Etapa II: Integrar y Estandarizar] ➔ [Etapa III: Consolidar e Innovar] ➔ [Proceso Permanente]
```

*   **Etapa I – Conocer y Ordenar (Sprints 1 a 4):**
    *   Relevamiento de competencias y consolidación del Inventario de Sistemas.
    *   Conformación de la Cartera Única de Proyectos (evaluación previa de reutilización antes de crear código nuevo).
    *   Unificación del seguimiento obligatorio en Redmine y asignación de los primeros *Referentes Secundarios*.
*   **Etapa II – Integrar y Estandarizar (Sprints 5 a 12):**
    *   Puesta en marcha de las reuniones de coordinación transversal entre ambas oficinas.
    *   Difusión y exigencia obligatoria de las Guías de Buenas Prácticas y del Template de Arquitectura Base.
    *   Implementación del protocolo de Gobierno Técnico de Proveedores Externos.
*   **Etapa III – Consolidar y Evaluar (Sprints 13+):**
    *   Evaluación de los indicadores de riesgo operacional.
    *   Paso a producción de aplicaciones dockerizadas en sinergia con el área de Redes.
    *   Implementación gradual de revisiones de código cruzadas (*peer review*) en GitLab para cambios críticos.
*   **Proceso Permanente – Mejora Continua e Innovación:**
    *   Revisión periódica de procedimientos, actualización de capacitaciones y evaluación fundamentada de nuevas tecnologías (IA corporativa y automatización).

---

## 8. Evaluación y Control (Matriz Unificada de Indicadores)

El éxito de la propuesta se evaluará mediante una combinación de **Métricas Ejecutivas de Proceso** y **Métricas de Reducción de Riesgo Institucional**:

| Categoría | Indicador de Gestión | Objetivo Estratégico |
| :--- | :--- | :--- |
| **Riesgo Operacional** | % de Sistemas Críticos con Referente Secundario Asignado | Tender al 100% para eliminar los *Single Points of Failure*. |
| **Documentación** | % de Sistemas con Documentación Técnica Mínima | Garantizar la continuidad operativa y retención del conocimiento. |
| **Estandarización** | % de Proyectos Nuevos alineados a la Arquitectura Base | Garantizar código escalable, mantenible y homogéneo. |
| **Eficiencia Procesal**| *Lead Time* de Desarrollo (Solicitud ➔ Entrega a Redes) | Reducir los tiempos de entrega mediante priorización ágil. |
| **Calidad de Entrega** | Tasa de Defectos Reportados en Post-Producción | Reducir fallas mediante el cumplimiento de buenas prácticas. |
| **Control de Terceros** | % de Desarrollos Externos con Recepción Técnica Aprobada | Asegurar la entrega de código fuente y documentación por proveedores. |
| **Uso de IA** | Evaluación e Integración de Herramientas de IA | Aumentar la productividad del departamento resguardando los datos. |

---

## 9. Sectores del Departamento (Matriz Dinámica de Trabajo)

Aprovechando la estructura del *Grupo Ocupacional Computación* vigente (sin solicitar la creación de nuevos cargos en el escalafón), el flujo operativo se organizará dinámicamente:

1.  **Liderazgo Técnico y Arquitectura (*Analistas y Especialistas Senior - Clase XI*):** Encargados del diseño de arquitectura base, análisis funcional complejo, mentoría en la capacitación cruzada y supervisión de los estándares técnicos.
2.  **Desarrollo Funcional (*Analistas Programadores Semi-Senior y Programadores - Clases X e IX*):** Enfocados en la codificación de lógica de negocio, construcción de interfaces y corrección de incidencias, operando bajo las guías de estilo estipuladas.
3.  **Innovación, Integración y Transferencia (Roles Transversales Rotativos):** Asignaciones dinámicas para acompañar como *Referentes Secundarios*, investigar integraciones entre sistemas y empaquetar software en contenedores Docker.

---

## 10. Conclusiones
La modernización tecnológica de la Municipalidad requiere un departamento de software ordenado, previsible y sostenible, capaz de trascender a las personas y a los cambios de gestión política.

Al implementar un marco de agilidad adaptativa con la Jefatura en un rol activo de **Scrum Master Global y Gestor**, establecer el uso obligatorio de la arquitectura base, instituir la figura de los *Referentes Secundarios* y aplicar un estricto *Gobierno Técnico sobre Proveedores*, se resolverán los problemas históricos de desarticulación, multitarea caótica y conocimiento concentrado.

Esta propuesta demuestra cómo es posible transformar la realidad actual con el uso inteligente de los recursos disponibles (Escenario REAL) y trazar un camino presupuestario sólido para incorporar innovación tecnológica (Escenario IDEAL), asegurando que el código no solo funcione, sino que constituya un activo institucional escalable, seguro y duradero para toda la comunidad.
