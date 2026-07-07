# SIMULACRO DE EXAMEN Nº 8

**Cargo:** Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software  
**Puntaje Máximo:** 35 Puntos  
**Tiempo Límite:** 3 Horas  

---

## CUESTION Nº 1: EVALUACIÓN DISCIPLINARIA Y NORMATIVA MUNICIPAL (10 Puntos)
*Instrucciones del examen: Señale la alternativa correcta, redondeando la letra correspondiente a la opción elegida para cada uno de los supuestos planteados. En todos los casos, solo una de las alternativas es correcta. Fundamente cada respuesta con la norma correspondiente.*

### 1. De acuerdo con las disposiciones de la Ley Orgánica de las Municipalidades (L.O.M.) y reglamentaciones de compras vigentes de la MGP, la adquisición de servidores físicos para el Data Center municipal cuyos montos superen los límites fijados para el Concurso de Precios debe realizarse obligatoriamente mediante el siguiente procedimiento de selección:
*   a) Licitación Pública.
*   b) Contratación Directa por urgencia informática declarada por resolución del Jefe de Departamento.
*   c) Licitación Privada o Concurso de Precios indistintamente, independientemente del monto.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 2. Desarrollo de Prototipos e Ingeniería de Requisitos (Kendall & Kendall)
*   **Prototipo no operacional (modelo a escala no funcional):** Consiste en un diseño o maqueta estática del sistema (por ejemplo, pantallas dibujadas o mockups interactivos de la interfaz de usuario) que permite validar la disposición estética, el flujo de navegación y las entradas/salidas de datos con el usuario, pero sin realizar procesamiento real de datos en el servidor, lógica de negocio ni persistencia en bases de datos.
*   **Diferencia con el Prototipo Operacional:** El prototipo operacional es un subconjunto del sistema real totalmente funcional, con codificación activa en backend y bases de datos reales, pero a menor escala (ej. procesa cobros reales pero solo para un canal de pago).
*   **Condiciones para su utilización:** Es recomendable utilizar prototipos no operacionales en etapas muy tempranas del proyecto para alinear expectativas de diseño visual rápido con usuarios poco experimentados, o cuando el procesamiento de backend es extremadamente complejo o costoso de implementar antes de definir la estructura básica de la interfaz.

*(📖 Kendall & Kendall, Cap. 6, págs. 143-160)*

---

### 3. Límites de Trabajo en Progreso (WIP Limits) y Cuellos de Botella (Scrum Manager)
*   **Ajustar el WIP (Work in Process):** Es la práctica de establecer un número máximo o límite de tareas simultáneas permitidas en una fase o columna específica del tablero Kanban (ej. "En Desarrollo" o "En Testing"). Su propósito es regular el flujo de trabajo, forzar la finalización de tareas abiertas antes de iniciar nuevas, y visibilizar de forma inmediata impedimentos o cuellos de botella.
*   **Significado de "WIP de 3" en Testing:** Significa que en la columna de pruebas del tablero no pueden acumularse más de tres tareas simultáneamente. Si ingresa una cuarta tarea, el flujo de desarrollo aguas arriba se detiene y el equipo no puede arrastrar más trabajo a esa columna hasta liberar espacio.
*   **Acciones para solucionar cuellos de botella en la columna de testing:**
    1.  **Reasignación de esfuerzo (colaboración cruzada):** Los desarrolladores detienen la codificación de nuevas historias y colaboran temporalmente en la ejecución de pruebas manuales y reporte de errores para dar salida a las tareas acumuladas.
    2.  **Optimización y automatización del proceso:** Incorporar herramientas de automatización de pruebas (unitarias y de regresión) para acelerar la velocidad del ciclo de testing.

*(📖 Scrum Manager v2.6, Parte II, págs. 65-66)*

---

### 4. Según el Decreto de GDE (Decreto Nº 2.940/22 MGP) y las normas de procedimiento administrativo electrónico, la tramitación de expedientes mediante la plataforma de Gestión Documental Electrónica exige que:
*   a) Todos los documentos físicos originales sigan archivándose en papel en la dependencia de origen de forma obligatoria por seguridad de red.
*   b) Todo documento o archivo digital que se incorpore al Expediente Electrónico (EE) sea numerado de forma secuencial en papel por mesa de entradas del municipio.
*   c) Cada documento electrónico incorporado al EE sea generado mediante el módulo de GEDO o CCOO, firmado digitalmente por funcionario competente, conformando un registro único y no redundante.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 5. Cálculo de Velocidad y Capacidad Ágil (Scrum Manager)
*   **Concepto de Tiempo Real vs. Tiempo Ideal:** El tiempo real es la jornada laboral física del personal, mientras que el tiempo ideal es el esfuerzo neto necesario para completar una tarea bajo condiciones óptimas sin interrupciones ni tiempos muertos.

#### **a) Cálculo del Tiempo Real Disponible (en horas reales):**
*   Equipo: 5 personas.
*   Sprint: 2 semanas (10 días laborables totales).
*   Jornada: 6 horas diarias.
*   **Tiempo Real Disponible:**
    $\text{Tiempo Real} = 5 \text{ personas} \times 6 \text{ horas/día} \times 10 \text{ días} = \mathbf{300 \text{ horas reales}}$

#### **b) Cálculo de Capacidad Efectiva (Tiempo Ideal) y Validación del Backlog:**
*   La capacidad efectiva en tiempo ideal representa el 60% del tiempo real total:
    $\text{Capacidad Efectiva (Ideal)} = 300 \text{ horas reales} \times 0.60 = \mathbf{180 \text{ horas ideales}}$
*   Suma de esfuerzo estimado del backlog del sprint:
    $\text{Esfuerzo Total Backlog} = 35 \text{ (HU A)} + 42 \text{ (HU B)} + 28 \text{ (HU C)} + 15 \text{ (HU D)} = \mathbf{120 \text{ horas ideales}}$
*   **Validación de Capacidad:** Como el esfuerzo total del backlog ($120 \text{ horas ideales}$) es **menor** que la capacidad efectiva del equipo ($180 \text{ horas ideales}$), el equipo tiene capacidad suficiente para comprometerse a realizar las 4 historias de usuario propuestas durante el sprint, restando un margen de 60 horas ideales para contingencias o tareas no planificadas de soporte.
*   *Nota del Jefe de Sistemas:* En caso de que el esfuerzo hubiera superado la capacidad de 180 horas ideales, el Jefe de Sistemas debería coordinar con el Product Owner para retirar historias de menor prioridad del backlog del sprint antes del cierre de la reunión de planificación.

*(📖 Scrum Manager v2.6, Parte I, págs. 37-41)*

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 2: Higiene, Seguridad y Riesgos del Trabajo</b></summary>

### 1. Configuración de Accidente Laboral (Ley 24557):
**Sí, el hecho configura un Accidente de Trabajo.**
*   **Fundamento Jurídico:** Se trató de un acontecimiento de carácter súbito y violento (descarga eléctrica seguida de caída de altura) que ocurrió *en ocasión del trabajo* (desarrollando cableado de red del municipio) dentro del ámbito físico municipal y durante la jornada laboral (Artículo 6º de la Ley 24557). La ART debe brindar cobertura integral de salud, kinesiología, internación y salarios caídos de la licencia laboral.

### 2. Normas de Higiene y Seguridad Infringidas (Ley 19587 y Dec. 351/79):
Se infringieron de forma directa las normas del **Anexo VI (Instalaciones Eléctricas)** y **Anexo I (Trabajos con Riesgo de Caída)** de la Ley 19587 y el Decreto 351/79:
*   **Omisión de Desenergización:** Todo trabajo sobre instalaciones eléctricas o adyacentes debe ejecutarse sin tensión eléctrica activa, debiendo cortarse la corriente en la caja de fusibles o disyuntores antes del inicio.
*   **Falta de Elementos de Protección Personal (EPP):** Para trabajos en altura (más de 2 metros) y de riesgo eléctrico se debió proveer y exigir obligatoriamente:
    1.  **Arnés de seguridad anticaídas de cuerpo completo** amarrado a línea de vida sólida independiente.
    2.  **Casco de seguridad industrial dieléctrico.**
    3.  **Guantes dieléctricos homologados** para baja y media tensión.
    4.  **Zapatos de seguridad con suela aislante (dieléctricos).**
    5.  **Escalera de fibra de vidrio** de doble hoja (prohibiéndose escaleras de madera o metal en tareas con riesgo eléctrico).
*   **Medidas Correctivas de la Jefatura de Sistemas:** Disponer un protocolo interno de "Permiso de Trabajo Seguro en Redes" y capacitar obligatoriamente a todo el personal técnico de infraestructura en seguridad eléctrica y de trabajos en altura en coordinación con Higiene y Seguridad de la Dirección de Recursos Humanos.

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 3: Procedimiento Disciplinario y Acto Administrativo</b></summary>

### 1. Procedimiento Disciplinario y Cese de Haberes por Abandono de Servicio
*   **Procedimiento Formal Obligatorio:** Al acumularse 11 inasistencias injustificadas consecutivas, se debe cursar intimación fehaciente al agente en su domicilio legal bajo apercibimiento de cesantía. Cumplido el plazo de intimación (48 horas hábiles) sin reintegro ni justificación, se procede a sustanciar el expediente administrativo para declarar formalmente la **cesantía del agente por abandono de servicio** (Artículo 109 inc. 1 de la Ley 14656).
*   **Medidas de la Jefatura de Sistemas:** 
    *   Ordenar la **suspensión preventiva e inmediata de la liquidación de haberes mensuales** del agente J.M. a partir del primer día de inasistencia constatado, evitando pagos indebidos por servicios no prestados.
    *   Ordenar el **bloqueo físico y lógico definitivo de todos los accesos técnicos** (VPN, usuarios Active Directory, correo institucional, accesos a servidores de desarrollo) del agente J.M. para resguardar la seguridad de la red de datos municipal.

---

### 2. Redacción de la Disposición de Elevación de Abandono de Cargo

**MAR DEL PLATA,** [Fecha]

**VISTO** las inasistencias injustificadas del agente J.M., Legajo Nº 55.555, Categoría Programador III, y;

**CONSIDERANDO:**
* Que se registraron diez (10) inasistencias consecutivas sin previo aviso.
* Que cursada la intimación de reintegro en el domicilio real, el agente no compareció ni justificó su inacción en el plazo legal de un (1) día hábil.
* Que esto encuadra en la figura de abandono de cargo establecida en el **Artículo 108º de la Ley 14656**.
* Que corresponde elevar las actuaciones solicitando su cesantía y bloquear sus accesos lógicos preventivamente.

Por ello, en uso de las atribuciones delegadas:

**EL JEFE DEL DEPARTAMENTO DE GESTIÓN, DESARROLLO E INNOVACIÓN EN SISTEMAS DE SOFTWARE**

**D I S P O N E:**

**ARTÍCULO 1º.-** Elevar las actuaciones a la Dirección General de Recursos Humanos solicitando decretar la **Cesantía por Abandono de Cargo** del agente **J.M.**, Legajo Nº **55.555**, en los términos del Artículo 108º de la Ley Nº 14.656.
**ARTÍCULO 2º.-** Disponer el **bloqueo preventivo inmediato de los accesos lógicos (VPN, Active Directory, bases de datos)** del agente a la infraestructura de red municipal.
**ARTÍCULO 3º.-** Registrar, notificar según el Art. 62º de la Ordenanza 26348, elevar copias para el cese de haberes y archivar.

[Firma Jefe de Departamento]
</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 4: Perspectiva de Género y Violencia Laboral</b></summary>

### 1. Encuadre de la Situación (Ordenanza Nº 24.271 MGP):
**Sí, configura Violencia Laboral de Género.**
*   **Fundamento:** La Ordenanza 24271 define la violencia laboral con perspectiva de género como toda conducta, manifestación o acoso que atente contra la dignidad, la integridad física o psíquica del agente en el lugar de trabajo, basada en su género. En este caso, el hostigamiento verbal persistente, comentarios descalificatorios sistemáticos y gestos obscenos configuran violencia psicológica y acoso sexual ambiental, afectando gravemente la salud psíquica de la agente y forzándola a licencias médicas por estrés.

### 2. Obligaciones y Acciones del Jefe de Departamento (Garantizar la No Revictimización):
El Jefe de Departamento debe actuar de inmediato de forma estrictamente confidencial:
*   **Medidas de Distanciamiento Inmediato:** Reubicar al agente presuntamente acosador a otra oficina física o modificar sus turnos o tareas para evitar todo contacto visual y funcional con la víctima.
*   **Resguardo de la Víctima (No victimización secundaria):** Se prohíbe de forma absoluta obligar a la agente denunciante a trasladarse de oficina o de tareas en contra de su voluntad, ya que esto constituiría una sanción indirecta perjudicial para ella por denunciar el hecho. Las medidas de movimiento o reubicación preventiva deben recaer exclusivamente sobre el agente presunto acosador.
*   **Acompañamiento:** Mantener una escucha activa y empática, respetando la voluntad de la agente en todo momento y garantizando el secreto sumarial para evitar represalias de otros agentes de la oficina.

### 3. Vías Institucionales y Derivación Coordinada:
*   El Jefe de Departamento debe informar la situación formalmente a la **Dirección de Políticas de Género municipal** para coordinar el asesoramiento especializado y acompañamiento interdisciplinario (psicológico y social) de la agente.
*   Remitir el caso a la **Dirección de Medicina del Trabajo** de la Municipalidad para justificar y auditar adecuadamente las licencias médicas de la agente, encuadrándolas correctamente dentro del Protocolo de Violencia de Género para evitar pérdidas de presentismo.
*   Elevar la denuncia de acoso ante la **Dirección de Personal de la Dirección General de Recursos Humanos** para que se instruya la investigación sumaria correspondiente contra el agente agresor de conformidad con la Ordenanza 24271 y la Ley Micaela.

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 5: Evaluación de Conocimientos Técnicos (Bases de Datos, Prototipos, Kanban y Capacidad)</b></summary>

### 1. Integridad Referencial y Esquema Relacional de Multas (Kendall & Kendall)
*   **Integridad Referencial:** Es una regla de diseño de bases de datos relacionales que asegura que las relaciones entre tablas permanezcan consistentes. Establece que un valor de una llave foránea en una tabla hija debe corresponder exactamente con un valor existente de la llave primaria de la tabla padre, o bien ser nulo. Esto evita la existencia de registros huérfanos.
*   **Diferencia de Llaves:**
    *   **Llave Primaria (Primary Key - PK):** Campo o conjunto de campos que identifican de forma única y unívoca a un registro en una tabla. No admite valores nulos ni duplicados (ej. `Nro_Acta`).
    *   **Llave Foránea (Foreign Key - FK):** Campo en una tabla que hace referencia directa a la PK de otra tabla, estableciendo una relación entre ambas y forzando la integridad referencial (ej. `Legajo_Inspector` en la tabla actas).
    *   **Llave Candidata (Candidate Key):** Cualquier campo o combinación de campos de una tabla que cumple con las condiciones para ser PK (unicidad y no nulidad) pero que no fue elegido formalmente como la PK (ej. el CUIT o DNI en una tabla de infractores).
*   **Esquema Relacional de Multas (Tránsito MGP):**
    *   Tabla **ACTA_INFRACCION**:
        *   `Nro_Acta` (PK) - int
        *   `Fecha_Hora` - datetime
        *   `Lugar_Hecho` - varchar(100)
        *   `Dominio_Vehiculo` (FK) -> Hace referencia a `VEHICULO.Dominio` - varchar(10)
        *   `Legajo_Inspector` (FK) -> Hace referencia a `INSPECTOR.Legajo` - int
        *   `Codigo_Falta` (FK) -> Hace referencia a `INFRACCION.Codigo` - int
    *   Tabla **VEHICULO**:
        *   `Dominio` (PK) - varchar(10)
        *   `Marca_Modelo` - varchar(50)
        *   `DNI_Titular` - int
    *   Tabla **INSPECTOR**:
        *   `Legajo` (PK) - int
        *   `Nombre_Apellido` - varchar(50)
    *   Tabla **INFRACCION**:
        *   `Codigo` (PK) - int
        *   `Descripcion` - varchar(100)
        *   `Monto_Unidades_Fijas` - decimal(10,2)

*(📖 Kendall & Kendall, Cap. 13, págs. 410-411, 424-425)*

---

### 2. Arquitectura Monolítica vs Microservicios en Portales Municipales
*   **Arquitectura Monolítica:** El sistema se construye como una única unidad funcional y de código donde la base de datos, la lógica del servidor y la interfaz de usuario están empaquetadas juntas en un solo software desplegado en el servidor municipal.
    *   *Ventajas:* Simplicidad de desarrollo y testeo inicial; menor complejidad de infraestructura; despliegue simple y rápido en un solo servidor de pruebas.
    *   *Desventajas:* Si un módulo falla (ej. el sistema de turnos de licencias), arrastra y puede colapsar todo el portal tributario. El escalamiento horizontal de módulos individuales es inviable (debe duplicarse todo el monolito en memoria), y los tiempos de compilación y despliegue crecen indefinidamente, dificultando la agilidad.
*   **Arquitectura de Microservicios:** El portal se descompone en un conjunto de servicios independientes, pequeños, acoplados de forma débil, donde cada servicio ejecuta su propio proceso de negocio, tiene su propia base de datos dedicada y se comunica con los demás a través de APIs web ligeras (REST/gRPC).
    *   *Ventajas:* Escalabilidad independiente por servicio (ej. si el módulo de tasas recibe miles de accesos concurrentes el día del vencimiento, se escalan solo esas instancias de microservicio sin tocar el resto); fallos aislados (si se cae el microservicio de multas, el portal impositivo sigue funcionando); facilidad de despliegue continuo (CD) ya que cada equipo Scrum puede compilar y desplegar su microservicio de forma independiente sin interferir con los demás.
    *   *Desventajas:* Alta complejidad de infraestructura (requiere orquestación como Docker/Kubernetes y gestión de logs distribuidos); latencia de red por llamadas remotas; complejidad para mantener la consistencia transaccional de datos entre servicios.
*   *DoD y Circular 902:* La arquitectura de microservicios se alinea con la Circular 902 al facilitar la adopción de "nuevas herramientas" y permitir que los equipos Scrum definan un DoD específico e independiente por servicio, optimizando el ciclo de vida del desarrollo.

---

### 3. Diagrama de Flujo Acumulado (CFD) e Interpretación (Scrum Manager)
*   **Concepto de CFD:** Es una métrica ágil visual acumulativa que muestra a lo largo del tiempo el volumen de Historias de Usuario o tareas en cada estado o columna del flujo de trabajo Kanban.
*   **Ejes:**
    *   **Eje Horizontal (X):** Eje temporal de días o semanas del proyecto.
    *   **Eje Vertical (Y):** Cantidad acumulada de tareas o puntos de historia.
*   **Bandas de Colores:** Cada banda vertical representa el volumen de tareas en un estado del tablero (ej. Pendiente, En Desarrollo, En Testeo, Terminado).
*   **Ensanchamiento de la franja "En Pruebas (QA)":**
    *   *Interpretación:* Revela la existencia de un **cuello de botella de control de calidad** en el equipo de desarrollo. Significa que los programadores están terminando y acumulando tareas más rápido de lo que los testers o el área de testing municipal pueden probarlas y darles salida a "Terminado" (*Done*). 
    *   *Medidas correctivas del Jefe de Sistemas:*
        1.  **Limitar el WIP (Work in Progress):** Reducir los límites de tareas permitidas en las columnas de programación previa, forzando a los desarrolladores a detener la codificación de nuevas historias y abocarse temporalmente a colaborar con el área de testing para desbloquear las tareas paradas en "En Pruebas".
        2.  **Automatizar Pruebas:** Fomentar que el equipo automatice las pruebas unitarias y funcionales para reducir la carga de testing manual.
        3.  **Reforzar Capacidades:** Reasignar personal de desarrollo con perfil híbrido (Fullstack/QA) para equilibrar el rendimiento de la columna de testing.

*(📖 Scrum Manager v2.6, págs. 55-64)*

---

### 4. Pruebas de Integración vs Pruebas Unitarias (DoD)
*   **Pruebas Unitarias (Unit Testing):** Pruebas de software aisladas y de caja blanca que verifican el correcto funcionamiento de un fragmento de código individual de forma independiente (una clase, un método o una función específica) sin dependencias externas (se simulan bases de datos o APIs con mocks). Son rápidas de ejecutar.
*   **Pruebas de Integración (Integration Testing):** Pruebas que verifican que dos o más módulos de software individuales o componentes del sistema interactúen e intercambien datos de forma correcta de acuerdo a su diseño.
    *   *Ejemplo Municipal:* Validar que el microservicio de cobros interactúe de forma consistente con la API de bases de datos biométricas de GDE y grabe la constancia de pago electrónico de forma consistente en el expediente electrónico correspondiente.
*   **Inclusión en la Definition of Done (DoD):**
    *   El Jefe de Departamento debe incluir de forma explícita en el DoD de los equipos ágiles municipales que:
        1.  El código cuente con un 100% de cobertura de **Pruebas Unitarias** locales aprobadas en el pipeline de desarrollo.
        2.  Las **Pruebas de Integración** en el servidor de pruebas (Staging) entre los nuevos módulos tributarios y los servicios externos del Data Center (ej. GDE nacional o portales de pago de bancos) pasen satisfactoriamente en condiciones similares a producción antes de que se considere "Terminada" (*Done*) la Historia de Usuario para la release.

*(📖 Kendall & Kendall, Cap. 18, pág. 526+)*

---

### 5. Resolución de Caso de Eficiencia del Flujo (Scrum Manager)

#### **a) Cálculo del promedio de Lead Time, Cycle Time y Touch Time:**

1.  **Datos de las 5 tareas (días):**
    *   Requerimiento 1: $LT = 10$, $CT = 4$, $TT = 1$.
    *   Requerimiento 2: $LT = 15$, $CT = 6$, $TT = 2$.
    *   Requerimiento 3: $LT = 8$, $CT = 3$, $TT = 1$.
    *   Requerimiento 4: $LT = 18$, $CT = 7$, $TT = 2.5$.
    *   Requerimiento 5: $LT = 9$, $CT = 5$, $TT = 1.5$.

2.  **Cálculo de Promedios:**
    *   **Lead Time Promedio ($\overline{LT}$):**
        $$\overline{LT} = \frac{10 + 15 + 8 + 18 + 9}{5} = \frac{60}{5} = \mathbf{12 \text{ días}}$$
    *   **Cycle Time Promedio ($\overline{CT}$):**
        $$\overline{CT} = \frac{4 + 6 + 3 + 7 + 5}{5} = \frac{25}{5} = \mathbf{5 \text{ días}}$$
    *   **Touch Time Promedio ($\overline{TT}$):**
        $$\overline{TT} = \frac{1 + 2 + 1 + 2.5 + 1.5}{5} = \frac{8}{5} = \mathbf{1.6 \text{ días}}$$

#### **b) Cálculo de la Eficiencia del Flujo de Trabajo (Flow Efficiency) e interpretación:**

1.  **Eficiencia del Flujo del Proceso Interno (respecto al Cycle Time):**
    *   Mide el tiempo de trabajo activo del equipo de desarrollo frente al tiempo total que la tarea estuvo en el tablero de desarrollo (en progreso).
        $$\text{Flow Efficiency (CT)} = \left( \frac{\overline{TT}}{\overline{CT}} \right) \times 100$$
        $$\text{Flow Efficiency (CT)} = \left( \frac{1.6 \text{ días}}{5.0 \text{ días}} \right) \times 100 = 0.32 \times 100 = \mathbf{32\%}$$

2.  **Eficiencia del Flujo Global de la Cadena de Valor (respecto al Lead Time):**
    *   Mide el tiempo de trabajo activo de codificación del equipo en comparación con el tiempo total transcurrido desde que el usuario solicitó la mejora impositiva hasta su entrega final en producción.
        $$\text{Flow Efficiency (LT)} = \left( \frac{\overline{TT}}{\overline{LT}} \right) \times 100$$
        $$\text{Flow Efficiency (LT)} = \left( \frac{1.6 \text{ días}}{12 \text{ días}} \right) \times 100 = 0.133 \times 100 = \mathbf{13.33\%}$$

3.  **Diferencia Conceptual y Tipo de Cuellos de Botella:**
    *   **Eficiencia respecto al Cycle Time (32%):** Revela que el equipo de desarrollo pasa el **68% de su tiempo interno en el tablero esperando** (espera de testing local, bloqueo por problemas técnicos, o espera de revisiones del superior). Este es un cuello de botella de la *gestión del flujo interno* del equipo de desarrollo de software.
    *   **Eficiencia respecto al Lead Time (13.33%):** Revela que el **86.67% de la vida total del requerimiento corresponde a desperdicio o tiempo de espera improductivo fuera del tablero de programación** (tiempo en que la tarea estuvo esperando en el backlog general de mesa de entradas, demoras políticas para priorizarla, o demoras de implantación final).
    *   *Conclusión:* El análisis revela que la mayor pérdida de valor no ocurre en la oficina de programadores, sino en las **etapas administrativas previas a la aprobación del requerimiento (backlog) y posteriores a la entrega (despliegue final)**. El Jefe de Sistemas debe coordinar con las secretarías demandantes para optimizar la cadena de valor externa de TI.

</details>

<div class="score-calculator">
    <h3>Calculadora de Puntaje (Autoevaluación)</h3>
    <p>Ingresa los puntos obtenidos en cada sección para calcular tu nota final (Puntaje de aprobación: 25 puntos / 70%):</p>
    <div class="score-row">
        <span>Cuestión 1 (Normativa - Máx 10 pts):</span>
        <input type="number" min="0" max="10" step="0.5" class="score-input" id="q1" oninput="calcScore()">
    </div>
    <div class="score-row">
        <span>Cuestión 2 (Higiene y ART - Máx 1.5 pts):</span>
        <input type="number" min="0" max="1.5" step="0.25" class="score-input" id="q2" oninput="calcScore()">
    </div>
    <div class="score-row">
        <span>Cuestión 3 (Caso Disciplinario - Máx 4 pts):</span>
        <input type="number" min="0" max="4" step="0.5" class="score-input" id="q3" oninput="calcScore()">
    </div>
    <div class="score-row">
        <span>Cuestión 4 (Perspectiva de Género - Máx 4.5 pts):</span>
        <input type="number" min="0" max="4.5" step="0.25" class="score-input" id="q4" oninput="calcScore()">
    </div>
    <div class="score-row">
        <span>Cuestión 5 (Evaluación Técnica - Máx 15 pts):</span>
        <input type="number" min="0" max="15" step="0.5" class="score-input" id="q5" oninput="calcScore()">
    </div>
    <div class="score-total">
        <span>Puntaje Total (Máximo 35):</span>
        <span id="total-score">0.0 / 35.0 (<span id="result-status" style="font-weight: bold; color: var(--text-muted);">Sin evaluar</span>)</span>
    </div>
</div>
