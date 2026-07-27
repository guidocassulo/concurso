# PLAN DE TRABAJO
**Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con recursos actuales y Proyección con incorporación de Recursos.**

---

## 1. Abordaje
El presente plan de trabajo se estructura en torno a una premisa fundamental: el Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software no debe limitarse a actuar como una "fábrica de código" reactiva, sino consolidarse como el motor estratégico para la modernización de la gestión municipal. 

Atendiendo al perfil del cargo concursado, el abordaje central radica en **optimizar los procedimientos organizacionales** para transformarlos en la columna vertebral del departamento. Esta estructuración procedimental es el paso ineludible para asegurar que el software municipal trascienda la mera funcionalidad operativa y pase a ser intrínsecamente **escalable, seguro y capaz de responder con agilidad a las necesidades de las diferentes gestiones, tanto presentes como futuras.**

---

## 2. Introducción
El Departamento enfrenta el desafío de administrar un ecosistema tecnológico heterogéneo que combina aplicaciones heredadas (*legacy*) con soluciones modernas, operando con una dotación de personal acotada y distribuida en distintas dependencias físicas. Para dar respuesta a las crecientes demandas de digitalización municipal, la Jefatura debe orquestar estos recursos con una visión gerencial y pragmática.

El plan se divide metodológicamente en:
1. **Un Diagnóstico Integral (FODA):** Identificación de fortalezas, cuellos de botella y deudas técnicas reales.
2. **Definición de Objetivos Estratégicos:** Alineados a la gobernanza del software municipal.
3. **Propuestas de Optimización con Recursos Actuales (Escenario REAL - Costo $0):** Centradas en la agilidad adaptativa, estandarización de arquitectura y buenas prácticas.
4. **Proyección con Incorporación de Recursos (Escenario IDEAL - Con Presupuesto):** Inversión escalonada en herramientas tecnológicas, capacitación formal y licencias.
5. **Modelo de Gestión, Implementación por Etapas e Indicadores:** Hoja de ruta por fases y métricas de riesgo operacional.

---

## 3. Diagnóstico (Análisis FODA)

### Fortalezas
*   **Conocimiento Profundo del Negocio Municipal:** El personal posee un dominio valioso de las normativas, circuitos administrativos, trámites y reglas operativas de la administración pública local.
*   **Bases Tecnológicas e Iniciativas Existentes:** Existencia de herramientas consolidadas (repositorios en GitLab, seguimiento en Redmine, entornos dockerizados en ciertos proyectos) y el desarrollo interno de un *template* de arquitectura base en evolución.

### Debilidades
*   **Fragmentación Tecnológica y Desintegración Arquitectónica:** Coexistencia caótica de tecnologías obsoletas (WebForms con SQL 2005) junto a tecnologías modernas (.NET, React, Angular, PHP, PostgreSQL). Aunque existe un *template* de arquitectura base, su uso no ha sido obligatorio ni uniforme.
*   **Multitarea Extrema y Conocimiento Concentrado (*Single Point of Failure*):** La escasa dotación frente a la alta demanda obliga al personal a atender simultáneamente emergencias *legacy* de diversas áreas y desarrollos nuevos. Esto genera saltos de contexto constantes y un alto riesgo operativo: la existencia de sistemas críticos que dependen del conocimiento exclusivo de una sola persona.
*   **Aislamiento Operativo entre Dependencias:** La distribución física del personal en dos oficinas distintas genera descoordinación, aislamiento en silos de información y el riesgo de desarrollar funcionalidades duplicadas por falta de comunicación.
*   **Seguimiento y Estimación Caóticos:** Uso fragmentado de herramientas (algunos agentes usan Redmine, otros planillas desactualizadas en Excel o registros informales), impidiendo conocer la capacidad operativa real del departamento.
*   **Documentación Inexistente o Desigual:** Falta de manuales técnicos, diccionarios de datos o registros de arquitectura, lo que profundiza la dependencia de programadores específicos.
*   **Ausencia de Gobierno Técnico sobre Proveedores Externos:** Los desarrollos contratados a terceros corren el riesgo de entregarse sin documentación suficiente, sin transferir el conocimiento o sin alinearse con los estándares municipales.
*   **Pruebas de Software Reactivas:** Al no existir el rol de QA en el organigrama municipal (ni la posibilidad de crear nuevos cargos en el escalafón), la verificación de errores depende del propio desarrollador o salta en post-producción reportada por el usuario.
*   **Uso de IA Informal e Inseguro:** La utilización de herramientas de IA se da por iniciativa personal, sin licencias institucionales y sin pautas claras de seguridad sobre la protección de datos sensibles municipales.

### Oportunidades
*   **Adopción de Marcos Ágiles Híbridos:** Implementación de metodologías ágiles adaptadas a la realidad municipal a costo cero.
*   **Estandarización mediante la Arquitectura Base:** Consolidar el *template* preexistente como norma obligatoria para todos los desarrollos.

### Amenazas
*   **Cambios Rápidos en Demandas de Gestión:** Necesidad de acelerar entregas sin comprometer la seguridad ni la mantenibilidad.
*   **Riesgos de Ciberseguridad y Fuga de Datos:** Vulnerabilidades en código heredado o uso inadvertido de IA pública compartiendo datos institucionales.

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

## 5. Propuestas de Mejoras sin Presupuesto (Optimización con Recursos Actuales - Escenario REAL)

Estas acciones constituyen la nueva columna vertebral del departamento y pueden ejecutarse de inmediato reorganizando los procedimientos existentes a costo $0:

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

### 4. Gobierno Técnico de Proveedores Externos
*   La contratación externa de software no significará la pérdida de control institucional. Se establecerán cláusulas procedimentales donde todo proveedor deba:
    *   Alinear su desarrollo a los estándares de arquitectura y seguridad del Municipio.
    *   Entregar obligatoriamente código fuente, manuales técnicos y diccionarios de datos actualizados.
    *   Someterse a pruebas de recepción validadas por el personal técnico del Departamento antes de la aceptación final.

### 5. Protocolo Institucional de Seguridad y Privacidad para Uso de IA Gratuita
*   Ante el uso informal de herramientas gratuitas de IA por parte del personal, se fijará una directiva clara de **Seguridad y Privacidad**:
    *   Queda estrictamente prohibido introducir en herramientas de IA públicas datos personales de ciudadanos, credenciales de acceso, claves de bases de datos o código fuente institucional sensible.
    *   La IA se utilizará únicamente como asistente para generación de estructuras auxiliares, aprendizaje o documentación general, quedando siempre sujeta a la revisión profesional humana.

---

## 6. Propuestas de Mejoras con Presupuesto (Proyección con Incorporación de Recursos - Escenario IDEAL)

Para escalar el departamento hacia la excelencia tecnológica, se planifica la inversión presupuestaria en:

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
| **Control de Terceros** | % de Desarrollos Externos con Gobierno Técnico Aceptado | Asegurar la entrega de código fuente y documentación por proveedores. |
| **Gobernanza de IA** | Cumplimiento del Protocolo de Seguridad en IA | Proteger el 100% de la información sensible municipal. |

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
