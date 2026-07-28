# GUÍA COMPLETA DE REVISIÓN Y AUDITORÍA DEL PLAN DE TRABAJO
**Concurso Interno de Oposición y Antecedentes para Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software**
**Municipalidad de General Pueyrredon (Mar del Plata)**

---

## 🎯 PROPÓSITO DE ESTE DOCUMENTO
Este documento fue generado para servir como **Prompt e Instrucciones de Auditoría** para que otro modelo o chat revise integralmente el proyecto final del postulante **Guido Cassulo**.

Contiene todo el contexto institucional, las restricciones políticas y operativas de la Municipalidad de General Pueyrredon (MGP), la estructura exacta del documento y la lista de chequeo (*checklist*) para realizar una crítica rigurosa, seria y profesional.

---

## 📋 DATOS INSTITUCIONALES DEL CONCURSO
* **Postulante:** Guido Cassulo (Cargo actual: Analista Programador / Personal de Software).
* **Cargo Concursado:** Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software.
* **Ubicación Orgánica:** Subsecretaría de Gobierno Digital y Mejora de Procesos — Secretaría de Participación Ciudadana y Descentralización (C.F. 1-31-00-01 | N° de Orden 6733).
* **Ubicación de Archivos a Revisar:**
  * Documento Principal Word: `D:\proyecto\Plan_Trabajo_Concurso_Jefatura_Software.docx`
  * Documento Markdown Maestro: `D:\proyecto\proyecto_guido_cassulo.md`

---

## ⚖️ REGLAS DE ORO Y RESTRICCIONES INNEGOCIABLES (LÍMITES POLÍTICOS Y REALIDAD MUNICIPAL)

Cualquier revisión del proyecto DEBE respetar de manera absoluta los siguientes principios:

1. **Tono Crítico, Serio y Profesional:**
   * El tono debe ser institucional, analítico, honesto y sincero. Evitar frases de auto-validación desmedida, triunfalismos o lenguaje de "marketing personal".
2. **Prohibido Promover Teletrabajo o Flexibilidad Horaria:**
   * El régimen municipal de la MGP no contempla el teletrabajo como beneficio. La retención de personal debe justificarse mediante motivadores no monetarios (tecnologías modernas, formación en servicio y protección contra el *burnout* mediante la Jefatura como filtro de cargas).
3. **Tratamiento Político de Desarrollos Tercerizados:**
   * NO criticar las contrataciones de proveedores ni sugerir "despilfarro" o "mala decisión" de las Secretarías. Las contrataciones externas las definen los Secretarios y el jurado incluye autoridades políticas. Framear las tercerizaciones siempre desde el **"Gobierno Técnico y Recepción Técnica Institucional"** (asegurar entregables, código fuente y documentación).
4. **Tratamiento de la Inteligencia Artificial (IA):**
   * La IA es una **OPORTUNIDAD** externa (asistencia de código en IDEs). En la propuesta operativa debe normarse el uso seguro: prohibición estricta de subir credenciales de servidores, cadenas de conexión de base de datos o datos sensibles de ciudadanos a servidores públicos de IA.
5. **Sin Mención al HCD:**
   * Evitar nombrar explícitamente al "HCD" (Honorable Concejo Deliberante) en las Amenazas para evitar sonar confrontativo con los legisladores. Usar la frase institucional: *Requerimientos Normativos y Operativos Imprevistos*.
6. **Sin Modificar el Escalafón Formal:**
   * No pedir la creación de nuevos cargos formales en el escalafón. La propuesta debe organizar el trabajo de forma dinámica aprovechando las clases existentes del *Grupo Ocupacional Computación* (Clases IX, X y XI).
7. **Realidad Técnica del Departamento:**
   * El área cuenta con 24 agentes distribuidos en 2 oficinas físicas.
   * Coexisten tecnologías antiguas (.NET WebForms, SQL Server 2005) con modernas (.NET Core/8, React, Angular, PHP, PostgreSQL).
   * Existen herramientas institucionales preexistentes: GitLab (versiones), Redmine (gestión) y ambientes de Dev/Test/Prod.

---

## 🔍 CHECKLIST DE REVISIÓN CAPÍTULO POR CAPÍTULO

Pedir al nuevo chat que evalúe los siguientes puntos en el archivo `Plan_Trabajo_Concurso_Jefatura_Software.docx`:

### 1. Abordaje e Introducción (Capítulos 1 y 2)
- [ ] ¿El abordaje destaca que los **procedimientos organizacionales son la columna vertebral** del área?
- [ ] ¿Están citadas las 7 funciones primarias del nomenclador municipal (Relevamiento, Planificación/Desarrollo, Modelos y Documentación, Estándares y Calidad, Investigación e Innovación, Control de Terceros e Interoperabilidad)?

### 2. Diagnóstico Integral - Análisis FODA (Capítulo 3)
- [ ] **Simetría y Balance:** Verificar que el FODA contenga:
  - **4 Fortalezas:** Personal Capacitado, Medios Físicos, Herramientas Base (GitLab/Redmine/Dev-Test-Prod), Tecnologías Modernas.
  - **8 Debilidades:** Fragmentación Legacy, Falta de Arquitectura Base, Proyectos Unipersonales (Conocimiento Concentrado), Ausencia de Metodología Común, Documentación Desigual/Inventario, Pruebas Reactivas, Resistencia al Cambio, Falta de Coordinación.
  - **4 Oportunidades:** IA en IDEs, Marcos Ágiles Híbridos, Estandarización por Arquitectura Base, Capacitaciones Accesibles.
  - **5 Amenazas:** Integración Legacy, Requerimientos Imprevistos, Demoras de Áreas Usuarias, Resistencia al Liderazgo y Desgaste del Equipo, **Riesgo de Dependencia Técnica e Incomunicación con Proveedores Externos**.
- [ ] **Sin Duplicados ni Errores:** Confirmar que no existan viñetas repetidas (ej. ambientes diferenciados dicho 2 veces) ni títulos cortados.

### 3. Objetivos (Capítulo 4)
- [ ] ¿El Objetivo General está enfocado en la capacidad institucional, la seguridad y la sostenibilidad?
- [ ] ¿Los 6 Objetivos Específicos tienen trazabilidad directa con las debilidades y soluciones?

### 4. Propuesta SIN PRESUPUESTO - Plan Realista $0 (Capítulo 5)
- [ ] **Rol del Jefe:** ¿Se presenta al Jefe como *Scrum Master Global* (filtro de cargas y destrabador de bloqueos) y *Gestor Gerencial*?
- [ ] **Referentes Secundarios:** ¿Se implementa la figura del Referente Secundario mediante *shadowing* y formación cruzada sin tocar el escalafón?
- [ ] **Template de Arquitectura Base:** ¿Se exige la obligatoriedad del template municipal para todo desarrollo nuevo (*Congelamiento Legacy*)?
- [ ] **Gobierno Técnico de Terceros:** ¿Exige la entrega de código fuente, manuales y pruebas de recepción antes del pago final?
- [ ] **Uso Seguro de IA:** ¿Establece la norma clara de no subir datos sensibles ni credenciales a IAs públicas?

### 5. Propuesta CON PRESUPUESTO - Plan Proyectado (Capítulo 6)
- [ ] ¿Justifica la inversión en Licencias Corporativas de IA (entornos privados), SonarQube (calidad estática), Dockerización (para entregar a Redes/DevOps) y Capacitaciones Formales?

### 6. Implementación, KPIs y Sectores (Capítulos 7, 8, 9 y 10)
- [ ] **Roadmap:** ¿Está estructurado en Etapas (Conocer ➔ Integrar ➔ Consolidar ➔ Proceso Permanente)?
- [ ] **Matriz de Indicadores:** ¿Incluye KPIs de riesgo operacional (% de sistemas con referente secundario, % de sistemas documentados, Lead Time, Defectos post-producción)?
- [ ] **Sectores:** ¿Organiza las tareas según las Clases IX, X y XI del escalafón de Computación?

---

## 📄 PROMPT SUGERIDO PARA PEGAR EN EL OTRO CHAT:

```text
"Hola. Necesito que actúes como un Evaluador Experto de Concursos de Oposición y Antecedentes en la Administración Pública Municipal (Especialista en Gestión de Software y Gobierno Digital).

Por favor, revisá el plan de trabajo adjunto en `D:\proyecto\Plan_Trabajo_Concurso_Jefatura_Software.docx` (o en su versión .md `D:\proyecto\proyecto_guido_cassulo.md`), leyendo la Guía de Revisión en `D:\proyecto\guia_revision_proyecto.md`.

Realizá un análisis crítico, honesto y riguroso de todo el documento verificando:
1. Coherencia interna entre el Diagnóstico FODA y la Propuesta de Mejora.
2. Cumplimiento estricto de los límites políticos (no teletrabajo, no atacar proveedores, uso seguro de IA, sin tocar escalafón formal).
3. Calidad redaccional y solidez técnica de la propuesta.

Dame una devolución seria destacando los puntos más fuertes y cualquier inconsistencia que encuentres."
```
