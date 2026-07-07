# SIMULACRO DE EXAMEN Nº 6

**Cargo:** Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software  
**Puntaje Máximo:** 35 Puntos  
**Tiempo Límite:** 3 Horas  

---

## CUESTION Nº 1: EVALUACIÓN DISCIPLINARIA Y NORMATIVA MUNICIPAL (10 Puntos)
*Instrucciones del examen: Señale la alternativa correcta, redondeando la letra correspondiente a la opción elegida para cada uno de los supuestos planteados. En todos los casos, solo una de las alternativas es correcta. Fundamente cada respuesta con la norma correspondiente.*

### 1. Al elaborar las especificaciones técnicas del Pliego de Bases y Condiciones Particulares para la adquisición de switches y routers para el Data Center municipal mediante Concurso de Precios, el Jefe de Departamento debe cumplir con el principio de:
*   a) Exclusividad de marcas comerciales, especificando una única marca del mercado para evitar ofertas alternativas.
*   b) Neutralidad tecnológica, redactando los requerimientos técnicos en base a estándares abiertos y rendimientos técnicos objetivos, sin direccionar la compra a marcas específicas, salvo justificación de compatibilidad preexistente.
*   c) Reservar los precios máximos en secreto para evitar la colusión de las empresas oferentes.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 2. Según el régimen estatutario de la Ley 14656 y decretos locales de la MGP, la licencia extraordinaria otorgada a un agente municipal por motivos de examen para cursar carreras de informática de nivel universitario o superior cuenta con el siguiente límite temporal:
*   a) Hasta dos (2) días por examen y un máximo de diez (10) días por año calendario.
*   b) Hasta cinco (5) días corridos por examen, con un máximo de veinte (20) días por año calendario, con goce íntegro de haberes.
*   c) Hasta diez (10) días por examen de forma ilimitada siempre que se presente certificado de examen.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 3. De acuerdo al Decreto de Control Horario de la Municipalidad (Decreto 121/18), la compensación de horas extraordinarias de servicio realizadas por el personal técnico de guardia de sistemas durante días inhábiles o fines de semana por caídas del servidor:
*   a) Se liquida de forma automática en el recibo de haberes como sobresueldo sin requerir intervención jerárquica.
*   b) Debe usufructuarse mediante días francos compensatorios previa solicitud y autorización por escrito del Jefe de Departamento, dentro de los plazos reglamentarios.
*   c) Es acumulable de forma ilimitada para ser cobrada al momento del retiro o jubilación del agente.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 4. Si el departamento de Sistemas requiere contratar el mantenimiento preventivo crítico de los procesadores del mainframe central del municipio, y el fabricante extranjero expide una certificación oficial de que existe un único distribuidor e ingeniero de soporte autorizado en el territorio nacional, encuadra en:
*   a) Licitación Pública plurianual de forma obligatoria.
*   b) Contratación Directa por exclusividad del servicio, de conformidad con las excepciones de la LOM y la RAFAM.
*   c) Concurso de Precios municipal invitando a tres empresas informáticas del medio local.
*   d) Ninguna de las anteriores.

**Fundamento Normativo:** __________________________________________________________________

---

### 5. Ajuste del Flujo y Desperdicios en Lean/Kanban (Scrum Manager)
*   **Muda (Desperdicio):** Cualquier actividad, proceso o recurso que consume tiempo o dinero pero no aporta valor directo al producto final ni al cliente.
*   **Mura (Variabilidad / Discrepancia):** Irregularidad o falta de uniformidad en el volumen y ritmo de trabajo, que provoca alternancia entre picos de saturación y periodos de inactividad (tiempos muertos).
*   **Muri (Sobrecarga / Cuello de Botella):** Exigir al sistema, a los procesos o a las personas un rendimiento superior a sus capacidades nominales, lo que genera bloqueos, cansancio y fallos de calidad.
*   **Ejemplos prácticos de "Muda" (Desperdicios) en desarrollo de software municipal:**
    1.  **Código o funcionalidades no utilizadas:** Desarrollar módulos complejos (ej. un generador de reportes con múltiples filtros) que los contribuyentes o agentes municipales nunca llegan a utilizar en la práctica.
    2.  **Esperas y demoras administrativas:** Retrasar el avance del desarrollo debido a la espera prolongada de firmas jerárquicas o autorizaciones de infraestructura para desplegar un servidor de pruebas.
    3.  **Procesamiento extra:** Realizar reuniones de trabajo excesivamente largas o innecesarias, u obligar a documentar en exceso detalles obvios de código en lugar de enfocarse en entregar software funcional.

*(📖 Scrum Manager v2.6, Parte II, págs. 71-72)*

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 2: Higiene, Seguridad y Riesgos del Trabajo</b></summary>

### 1. Configuración de Accidente Laboral:
**Sí, el siniestro califica formalmente como un Accidente de Trabajo.**
*   **Fundamento Jurídico:** Se produjo un acontecimiento de carácter súbito y violento (lesión física en la columna) que ocurrió *en ocasión del trabajo* (traslado físico de equipamiento informático ordenado por la Jefatura) en el ámbito físico municipal y durante la jornada laboral (Artículo 6º de la Ley 24557). La ART debe brindar cobertura total.

### 2. Normas de Ergonomía Omitidas (Resolución SRT 295/03 y Ley 19587):
Se infringió el **Anexo I (Especificaciones Técnicas de Ergonomía para la manipulación manual de cargas)** de la Resolución SRT 295/03 reglamentaria de la Ley 19587:
*   **Omisión de Cargas Límites:** La norma nacional establece límites máximos de levantamiento de cargas por una sola persona (máximo de 25 kg para hombres en condiciones de agarre óptimas). Obligar o permitir que un solo agente levante un rack de servidores de 50 kg (duplicando el límite seguro) viola flagrantemente el principio preventivo.
*   **Falta de Medios Auxiliares:** El empleador (Municipio) omitió proveer herramientas mecánicas para el traslado vertical u horizontal de elementos pesados en la oficina de TIC.
*   **Medidas Correctivas:** El Jefe del Departamento Técnico debe solicitar de forma prioritaria la provisión de:
    1.  Medios mecánicos de elevación y traslado: **Carro hidráulico manual (zorra) o carro de plataforma rodante**.
    2.  Capacitación obligatoria al personal técnico en técnicas seguras de levantamiento de cargas (doblar rodillas, mantener carga pegada al cuerpo).
    3.  Fajas lumbares protectoras de uso obligatorio para tareas de depósito y traslados físicos de servidores.

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 3: Procedimiento Disciplinario y Acto Administrativo</b></summary>

### 1. Procedimiento Disciplinario y Medida Jerárquica Directa
*   **Procedimiento Obligatorio:** Al configurarse la comisión de una falta administrativa gravísima de índole ética e informática (utilización indebida de credenciales del superior para alterar de forma fraudulenta las marcas biométricas del reloj horario de asistencia), la sanción a aplicar es la de **cesantía o exoneración** del agente A.T. Por consiguiente, **es requisito obligatorio tramitar un Sumario Administrativo previo** (Artículo 108º de la Ley 14656).
*   **Medida Preventiva de Sistemas:** El Jefe de Sistemas de Software debe ordenar de forma inmediata el **bloqueo físico y lógico de todos los perfiles de acceso (usuarios Active Directory, VPN, accesos a bases de datos y terminales físicas) del agente A.T.**, impidiendo cualquier interacción técnica con los sistemas del municipio en tanto dure la tramitación de las actuaciones para evitar adulteración o eliminación de logs y registros del sistema.

---

### 2. Redacción de la Disposición de Elevación

**MAR DEL PLATA,** [Insertar Fecha]

**VISTO** las alteraciones y accesos no autorizados detectados en las auditorías técnicas de la base de datos biométrica de control de asistencia municipal con fecha [Fecha del hecho], que involucran al Agente A.T., Legajo Nº 44.444; y

**CONSIDERANDO:**

Que las auditorías y trazabilidad de logs del servidor de base de datos de asistencia determinaron que se utilizaron credenciales de administración del superior sin autorización previa para alterar y adulterar los registros de fichadas de ingresos y egresos del agente de mención y de terceros.

Que el agente A.T., Categoría Técnico I, reconoció formalmente por escrito la autoría del suceso, no aportando argumentos justificativos de su accionar.

Que este hecho configura una transgresión gravísima a las obligaciones de buena fe, decoro y lealtad contempladas en la Ley Nº 14656, en particular su **Artículo 107º, Inciso 5**, y representa una violación flagrante de los protocolos de seguridad informática de esta Municipalidad.

Que dada la extrema gravedad de la conducta y la naturaleza expulsiva de la eventual sanción definitiva (cesantía o exoneración), resulta obligatorio solicitar la instrucción de un Sumario Administrativo previo según lo determina el Artículo 108º de la Ley Nº 14656.

Que por razones imperativas de seguridad informática de la red de datos del municipio y para salvaguardar la integridad de las bases de datos de personal, se estima indispensable ordenar la suspensión preventiva del agente A.T. y el cese de sus accesos técnicos lógicos.

Por ello, en uso de las atribuciones de supervisión técnico-disciplinarias de la dependencia,

**EL JEFE DEL DEPARTAMENTO DE GESTIÓN, DESARROLLO E INNOVACIÓN EN SISTEMAS DE SOFTWARE**

**D I S P O N E:**

**ARTÍCULO 1º.-** Elevar formalmente el informe de auditoría técnica y los obrados ante la Dirección General de TIC y la Dirección de Personal, solicitando la instrucción del **Sumario Administrativo previo** al Agente **A.T.**, Legajo Nº **44.444**, Categoría **Técnico I**, de conformidad con el Artículo 108º de la Ley Nº 14656.

**ARTÍCULO 2º.-** Disponer el **bloqueo inmediato y total de todos los accesos lógicos (VPN, Active Directory, perfiles de base de datos) e ingreso físico** del agente A.T. a los servidores e instalaciones municipales, y proponer su suspensión preventiva del cargo sin goce de haberes por el período sumarial reglamentario.

**ARTÍCULO 3º.-** Registrar en la dependencia, notificar a los organismos técnicos superiores y archivar.

**DISPOSICIÓN Nº** [Dejar espacio para número]

*Firma y Sello del Jefe de Departamento*

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 4: Perspectiva de Género y Violencia Laboral</b></summary>

### 1. Responsabilidad Jerárquica del Jefe de Departamento:
Al Jefe de Departamento le compete la **obligación legal de velar por el cumplimiento del plan de capacitación obligatoria en género de la Ley Micaela** por parte de la totalidad del personal bajo su cargo (Ley 15134 y Ley 27499). Debe notificar formalmente a los agentes sobre el inicio de las cohortes de capacitación, realizar el seguimiento de acreditación de certificados del personal del área y asegurar el acceso democrático a la formación.

### 2. Medidas de Organización del Trabajo y Flexibilidad:
Para posibilitar la realización de la capacitación obligatoria sin afectar el servicio crítico de desarrollo de software y soporte técnico:
*   **Rotación de Turnos y Relevos:** Organizar un cronograma rotativo para que los programadores asistan o realicen la capacitación virtual en tramos horarios diferenciados (por ejemplo, dividiendo al equipo en dos subgrupos).
*   **Permiso de Capacitación dentro del Horario Laboral:** El Jefe debe computar el tiempo dedicado a la capacitación Ley Micaela (sea presencial o virtual) **como tiempo efectivo de servicio trabajado**, exceptuando a los agentes de sus tareas habituales durante esas horas de estudio reglamentario.

### 3. Sanción de Carrera Administrativa al Jefe por Incumplimiento:
*   **Sanción de Carrera:** De acuerdo al **Artículo 3º de la Ley Provincial 15134**: la capacitación en género es un **requisito obligatorio** para la promoción a niveles superiores de la carrera administrativa. Si el propio Jefe de Departamento no acredita haber completado la capacitación Ley Micaela, **quedará inhabilitado legalmente para ser promovido a categorías superiores, confirmarse definitivamente en su cargo concursado, o participar en futuros concursos jerárquicos o de ascenso** en la Municipalidad de General Pueyrredón.

</details>

<details>
<summary><b>Desplegar Solución - CUESTION Nº 5: Evaluación de Conocimientos Técnicos (UX, Estimaciones, UML y Desperdicios Lean)</b></summary>

### 1. Usabilidad UX/UI y Accesibilidad Web (Kendall & Kendall)
*   **Usabilidad:** Es el atributo de calidad que mide qué tan fácil de usar, interactivo, intuitivo y eficiente resulta un sistema de software para los usuarios reales que lo operan (ej. los ciudadanos que pagan tasas en el portal).
*   **Heurísticas de Nielsen (3 seleccionadas):**
    1.  **Visibilidad del Estado del Sistema:** El sistema siempre debe mantener informado al usuario sobre lo que está ocurriendo a través de retroalimentación oportuna (ej. mostrar una barra de progreso cuando se genera una liquidación).
    2.  **Consistencia y Estándares:** Los usuarios no deben adivinar si diferentes palabras, situaciones o acciones significan lo mismo. El portal web municipal debe usar un lenguaje y diseño visual uniforme en todas sus páginas.
    3.  **Prevención de Errores:** Es mejor un diseño que prevenga que ocurra un error antes que emitir buenos mensajes de error (ej. deshabilitar el botón "Pagar" si los datos de la tarjeta están incompletos).
*   **Accesibilidad Web (WCAG 2.1):** Es el principio de diseño de interfaces que garantiza que los sitios web puedan ser percibidos, operados y comprendidos por todas las personas en igualdad de condiciones, incluyendo aquellas con discapacidades permanentes o transitorias (visuales, motrices, auditivas o cognitivas). Exige el uso de textos alternativos en imágenes, contraste adecuado de colores, compatibilidad con lectores de pantalla y navegación completa mediante teclado.

*(📖 Kendall & Kendall, Cap. 14, págs. 445-455)*

---

### 2. Puntos de Historia (Scrum) vs Puntos de Función (Métrica Tradicional)
*   **Puntos de Historia (Story Points):** Es una métrica de estimación **relativa** y subjetiva del esfuerzo de desarrollo utilizada por equipos ágiles. Mide el tamaño global, la complejidad y la incertidumbre de una tarea comparándola con otras tareas de referencia conocidas (ej. mediante Planning Poker). Es única e interna para cada equipo de desarrollo.
*   **Puntos de Función (Function Points):** Métrica **absoluta** y estandarizada que mide el tamaño funcional de un sistema de software basándose en la cantidad y complejidad de sus transacciones y datos de entrada/salida de negocio (entradas, salidas, consultas de usuario, archivos lógicos internos y archivos de interfaz externa). Es independiente de la tecnología, lenguaje de programación o metodología de trabajo utilizada.
*   *Cuándo utilizarlas:*
    *   **Puntos de Historia:** Adecuados para la planificación interna del equipo en Sprints (Scrum) y para calcular la velocidad diaria del equipo de programadores.
    *   **Puntos de Función:** Adecuados para la contratación formal del desarrollo de software con proveedores externos mediante Licitación Pública/Privada, permitiendo establecer presupuestos máximos, comparar la productividad de distintas empresas oferentes e inspeccionar el volumen del producto contratado bajo estándares ISO internacionales.

*(📖 Scrum Manager v2.6, págs. 35-48)*

---

### 3. Casos de Uso de Negocio vs Casos de Uso de Sistema (Kendall & Kendall)
*   **Caso de Uso de Negocio:** Describe un proceso de negocio completo y a alto nivel que realiza la organización (Municipalidad) para brindar un resultado de valor a un actor externo (ej. contribuyente). No detalla sistemas de software ni interfaces técnicas.
    *   *Ejemplo Municipal:* `Registrar Habilitación de Comercio` (Abarca la recepción de documentación física, inspección física del local de bomberos y entrega de cartón habilitante).
*   **Caso de Uso de Sistema:** Describe la interacción detallada e interactiva paso a paso entre un usuario (actor) y una aplicación informática de software específica para lograr una tarea específica.
    *   *Ejemplo Municipal:* `Cargar Certificado de Bomberos PDF` (Detalla el login del usuario en la web, el clic en el botón de carga, la validación del tamaño del archivo PDF por el software y el almacenamiento del archivo en la base de datos).

*(📖 Kendall & Kendall, Cap. 2, págs. 35-42)*

---

### 4. Inyección SQL (SQLi) y Estrategias de Prevención
*   **Concepto de SQLi:** Es una vulnerabilidad de seguridad web en la cual un atacante inserta o "inyecta" comandos de código SQL maliciosos dentro de los campos de entrada de texto del portal (como el campo de búsqueda de padrón o CUIT de login), los cuales son interpretados y ejecutados de forma directa por el motor de la base de datos municipal.
*   **Mecanismo de Ataque:** Si el código concatena directamente la entrada del usuario a la consulta SQL sin limpiarla (ej. `SELECT * FROM contribuyentes WHERE cuit = '` + `entrada_usuario` + `'`), el atacante puede ingresar la cadena `' OR '1'='1` para anular la validación y acceder a la totalidad de los datos confidenciales de la base de datos, o ejecutar comandos destructivos (ej. `DROP TABLE`).
*   **Estrategias Técnicas de Prevención:**
    1.  **Sentencias Preparadas (Prepared Statements con Consultas Parametrizadas):** Es la medida principal. Fuerza al motor de base de datos a tratar la entrada del usuario estrictamente como un parámetro de datos y nunca como código ejecutable.
    2.  **Validación y Saneamiento de Datos de Entrada (Sanitization):** Aplicar listas blancas de caracteres válidos y rechazar entradas que contengan caracteres especiales del motor SQL (comillas, guiones).

*(📖 Kendall & Kendall, Cap. 16, págs. 518-522)*

---

### 5. Resolución de Caso Práctico de Eficiencia del Flujo en Kanban

#### **a) Cálculo del Lead Time y Eficiencia del Flujo (Flow Efficiency):**
1.  **Datos:**
    *   Tiempo promedio de procesamiento activo (*Touch Time*): $12 \text{ horas}$.
    *   Tiempo promedio de espera (*Waiting Time*): $36 \text{ horas}$.
2.  **Cálculo del Lead Time:**
    $$\text{Lead Time} = \text{Active Time} + \text{Waiting Time} = 12 \text{ horas} + 36 \text{ horas} = \mathbf{48 \text{ horas}}$$

3.  **Cálculo de la Eficiencia del Flujo (Flow Efficiency):**
    $$\text{Flow Efficiency (\%)} = \left( \frac{\text{Touch Time}}{\text{Lead Time}} \right) \times 100$$
    $$\text{Flow Efficiency (\%)} = \left( \frac{12 \text{ horas}}{48 \text{ horas}} \right) \times 100 = 0.25 \times 100 = \mathbf{25\%}$$

#### **b) Interpretación Ágil y Medidas de Gestión a Adoptar:**
*   **Interpretación:** La eficiencia del flujo de trabajo es del **25%**. Esto significa que del tiempo total que pasa una incidencia en el tablero del equipo (48 horas), **únicamente una cuarta parte (25%) corresponde a trabajo activo** de codificación o reparación. El **75% restante del tiempo (36 horas) es tiempo de espera improductivo** (tareas bloqueadas, en espera de aprobaciones, infraestructura o firma del Product Owner).
*   **Medidas de Gestión a Adoptar por el Jefe de Sistemas:**
    1.  **Enfoque en los Tiempos de Espera:** El foco de optimización de la Jefatura no debe estar en presionar al equipo para que programe más rápido (lo cual solo afectaría las 12 horas de touch time), sino en **eliminar los cuellos de botella y las dependencias** que causan las 36 horas de espera.
    2.  **Revisión de Columnas de Espera y Bloqueos:** Implementar en el tablero Kanban columnas de espera intermedias (ej. `Ready for Test` o `Waiting PO`) y utilizar indicadores visuales de bloqueo (tarjetas rojas) para analizar diariamente en las reuniones rápidas por qué están paradas las tareas.
    3.  **WIP Limits Ajustados:** Reducir los límites de WIP en las columnas de programación para forzar a los desarrolladores a colaborar activamente en desbloquear y testear las tareas paradas antes de iniciar nuevos tickets.

*(📖 Scrum Manager v2.6, págs. 60-70)*

</details>
