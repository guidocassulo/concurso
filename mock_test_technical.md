# 💻 Simulacro de Examen: Eje Técnico (Scrum y Diseño de Sistemas)

Este examen de práctica está diseñado para evaluar y consolidar tus conocimientos en **Scrum estándar y avanzado (Scrum Manager v2.6)** y **Análisis y Diseño de Sistemas (Kendall & Kendall 8va Edición)**. 

*Instrucciones: Lee atentamente cada pregunta, selecciona la opción que consideres correcta y haz clic en la sección de "Ver Respuesta" para ver la solución y la justificación teórica basada en la bibliografía oficial del concurso.*

---

### Pregunta 1 (Scrum - Roles)
**En un equipo Scrum que desarrolla el sistema de habilitaciones comerciales del municipio, surge una disputa entre el Subsecretario del área y los desarrolladores sobre el orden en que deben entregarse las funcionalidades. ¿Quién tiene la decisión final y la responsabilidad absoluta sobre el orden de los ítems en el Product Backlog?**
*   A) El Scrum Master, ya que es el encargado de asegurar la productividad del equipo y gestionar los procesos.
*   B) Los Developers, puesto que son quienes estiman el esfuerzo técnico y conocen la viabilidad del código.
*   C) El Product Owner, ya que representa al negocio/usuarios y es el único responsable de maximizar el valor del producto y gestionar la pila.
*   D) El Jurado del concurso o el Director General del área informática mediante un acto administrativo.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Scrum Manager v2.6 - Primera Parte - Roles):**
El Propietario del Producto (Product Owner) es el único responsable de la gestión del Product Backlog (pila del producto). Aunque puede delegar tareas de detalle o recibir aportes de la superioridad y del equipo, la responsabilidad final de ordenar las historias de usuario para maximizar el valor entregado recae exclusivamente en él.
</details>

---

### Pregunta 2 (Scrum - Planificación)
**Durante la Sprint Planning, ¿quién es el responsable de definir el Sprint Goal (Objetivo del Sprint) y de seleccionar las historias de usuario que se comprometen para dicho Sprint?**
*   A) El Product Owner define el objetivo unilateralmente y los desarrolladores deben aceptarlo por jerarquía.
*   B) El equipo completo (Scrum Team) define de forma colaborativa el Sprint Goal, y los Developers seleccionan de forma autónoma cuántos ítems se comprometen a entregar según su velocidad estimada.
*   C) El Scrum Master define el Sprint Goal y asigna las tareas individuales a cada programador.
*   D) El Director de Software del municipio de acuerdo al plan de modernización del Estado.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Scrum Manager v2.6 - Primera Parte - Eventos):**
En Scrum, el equipo completo colabora para establecer el Sprint Goal (el porqué del Sprint). Sin embargo, la selección de qué ítems de la pila del producto se incorporan al Sprint (*Sprint Backlog*) corresponde únicamente a los desarrolladores (Developers), basándose en su capacidad de trabajo estimada (velocidad) para mantener la autoorganización y evitar la sobrecarga (*Muri*).
</details>

---

### Pregunta 3 (Scrum - Estimación)
**El equipo de desarrollo se encuentra estimando la complejidad de una historia de usuario para digitalizar los recibos de sueldo municipales. Utilizan la técnica de Planning Poker. Si se generan opiniones muy dispares en la primera ronda (por ejemplo, un desarrollador estima "3 puntos" y otro "21 puntos"), ¿cómo se debe proceder según el marco ágil?**
*   A) Se calcula el promedio aritmético de todas las cartas mostradas y se asigna ese valor.
*   B) El Scrum Master toma la decisión final e impone un valor intermedio para agilizar la reunión.
*   C) Los desarrolladores con las estimaciones más baja y más alta explican sus argumentos teóricos y técnicos al grupo. Luego se realiza una nueva ronda de votación para buscar el consenso.
*   D) Se descarta la historia de usuario y se envía de regreso al Product Owner para que la rehaga.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Scrum Manager v2.6 - Primera Parte - Medición y Estimación Ágil):**
El Planning Poker busca el consenso grupal mediante la discusión de los extremos. Cuando hay discrepancia alta (ej. 3 vs 21), indica que hay malentendidos sobre el requerimiento o riesgos técnicos que uno vio y otro no. Los estimadores extremos explican su postura y se vuelve a votar hasta que el equipo converja en una estimación compartida.
</details>

---

### Pregunta 4 (Scrum Avanzado - Kanban)
**Al adoptar un flujo de trabajo continuo basado en Kanban para el mantenimiento correctivo de sistemas municipales, ¿cuál es el propósito fundamental de establecer límites de Trabajo en Curso (WIP Limits)?**
*   A) Impedir que los desarrolladores se tomen descansos durante su horario semanal de 40 horas.
*   B) Optimizar la velocidad de entrega del equipo evitando la multitarea (context switching) y detectando cuellos de botella en el flujo.
*   C) Asegurar que el Product Owner no agregue más ítems al Product Backlog.
*   D) Controlar el fichado diario de ingreso y egreso del personal informático.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Scrum Manager v2.6 - Segunda Parte - Gestión Visual Kanban):**
El principio de Kanban es "parar de comenzar y comenzar a terminar". Limitar el WIP (Work In Progress) evita que los desarrolladores abran múltiples tareas simultáneamente, lo cual reduce el rendimiento debido a la pérdida de foco. Al limitar el WIP, se obligan a resolver los bloqueos antes de iniciar nuevas tareas, lo que hace visibles los cuellos de botella del flujo.
</details>

---

### Pregunta 5 (Scrum Avanzado - Desperdicios)
**En la gestión del flujo Kanban del área de software, se detecta que las demoras en las autorizaciones de firmas digitales por parte de la superioridad obligan al equipo a re-planificar constantemente sus tareas semanales. De acuerdo al libro de Scrum Manager, ¿cómo se clasifica este desperdicio e inconsistencia?**
*   A) Muda (Desperdicio directo por sobreprocesamiento o esperas).
*   B) Mura (Variabilidad o irregularidad en el flujo de entrada de trabajo).
*   C) Muri (Sobrecarga de trabajo para los programadores).
*   D) DoD (Falta de una definición de terminado para las firmas).

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Scrum Manager v2.6 - Segunda Parte - Ajustar el flujo: Muda, Mura, Muri):**
*Mura* representa la irregularidad, inconsistencia o variabilidad en el flujo. Cuando un equipo se ve obligado a cambiar de ritmo constantemente por factores externos (como esperas de firmas o requerimientos que entran a ráfagas), se produce Mura, lo que termina generando Muda (tiempos de espera improductivos) y Muri (sobrecarga posterior para compensar el retraso).
</details>

---

### Pregunta 6 (Ingeniería de Requisitos Ágil)
**¿Cuál de las siguientes afirmaciones describe mejor la diferencia entre una Historia de Usuario (User Story) y un Caso de Uso (Use Case), de acuerdo con la bibliografía de Scrum Manager?**
*   A) Las historias de usuario son más formales y cerradas, mientras que los casos de uso son negociables y livianos.
*   B) Las historias de usuario se enfocan en documentar detalladamente las interacciones internas del sistema, mientras que los casos de uso solo contienen la prioridad comercial.
*   C) Las historias de usuario representan un requerimiento ágil negociable en lenguaje de usuario enfocado en el objetivo comercial, mientras que los casos de uso detallan exhaustivamente la interacción paso a paso entre actores y sistema (útil para pliegos de contratación formal).
*   D) No existe ninguna diferencia; son términos sinónimos en la ingeniería de software moderna.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Scrum Manager v2.6 - Ampliaciones - Ingeniería de Requisitos Ágil):**
Las historias de usuario son tarjetas de conversación ligeras basadas en las 3C (Card, Conversation, Confirmation) y el criterio INVEST (Independiente, Negociable, Valiosa, Estimable, Pequeña, Testeable). Por su parte, los casos de uso documentan el comportamiento detallado del sistema mediante flujos principales y alternativos de interacción, sirviendo mejor en entornos predictivos o pliegos licitatorios estructurados.
</details>

---

### Pregunta 7 (Ciclo de Vida de Sistemas - SDLC)
**Según Kendall & Kendall (8va Edición), el analista de sistemas cumple diversos roles dentro de la organización municipal. ¿Cuál de los siguientes roles se enfoca en facilitar la adopción de nuevas tecnologías (como el expediente electrónico GDE) y requiere una alta capacidad para manejar la resistencia al cambio del personal administrativo?**
*   A) Consultor de sistemas.
*   B) Experto de soporte técnico de hardware.
*   C) Administrador de base de datos relacionales.
*   D) Agente de cambio.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: D**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 1 - Roles del analista):**
El rol más exhaustivo del analista es el de **agente de cambio**: una persona que actúa como catalizador de la innovación, desarrolla un plan para el cambio e interactúa activamente con los usuarios y administradores para facilitar la transición digital del negocio de forma empática y planificada.
</details>

---

### Pregunta 8 (SDLC - Fases)
**En el ciclo de vida del desarrollo de sistemas (SDLC) propuesto por Kendall & Kendall, ¿en qué fase se definen los requerimientos de información humana utilizando técnicas interactivas (como entrevistas y JAD) y discretas (como el muestreo y la observación)?**
*   A) Fase 1: Identificación de problemas, oportunidades y objetivos.
*   B) Fase 2: Determinación de los requerimientos de información del factor humano.
*   C) Fase 3: Análisis de las necesidades del sistema.
*   D) Fase 4: Diseño del sistema recomendado.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 1 - Ciclo de Vida del Desarrollo de Sistemas):**
Durante la **Fase 2 (Determinación de requerimientos de información)**, el analista utiliza herramientas como entrevistas directas, cuestionarios, observación del comportamiento de los usuarios en sus oficinas y el análisis de documentos previos para comprender con precisión el flujo del factor humano antes de estructurar las bases lógicas del software.
</details>

---

### Pregunta 9 (UML - Casos de Uso)
**En el modelado UML para el nuevo portal web de autogestión de tasas municipales, el caso de uso "Pagar Tasa de Alumbrado" requiere obligatoriamente que el usuario se identifique con su CUIT y Clave. ¿Cómo se debe modelar esta relación entre el caso de uso "Pagar Tasa" y el caso de uso "Validar Identidad"?**
*   A) Mediante una relación de asociación directa bidireccional simple.
*   B) Mediante una relación de herencia o generalización.
*   C) Mediante una relación de extensión (`<<extend>>`) apuntando a "Validar Identidad".
*   D) Mediante una relación de inclusión (`<<include>>`) apuntando a "Validar Identidad".

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: D**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 10 - Modelado de Casos de Uso):**
La relación `<<include>>` (inclusión) se utiliza cuando un caso de uso base incorpora de forma **obligatoria e incondicional** el comportamiento de otro caso de uso para completar su función. Como no es posible pagar tasas sin validar previamente la identidad, el proceso se incluye. La relación `<<extend>>`, por el contrario, modela un comportamiento opcional o condicional.
</details>

---

### Pregunta 10 (UML - Clases)
**Al diseñar el diagrama de clases para el sistema de compras municipales, se modela la relación entre la clase "Licitación" y la clase "ÍtemLicitado" (el renglón a comprar). Si se destruye el objeto "Licitación", el objeto "ÍtemLicitado" pierde su razón de existir y debe ser destruido automáticamente por el sistema. ¿Qué tipo de relación UML representa esta dependencia estricta de ciclo de vida?**
*   A) Agregación (representada con un rombo vacío junto a la clase contenedora).
*   B) Composición (representada con un rombo relleno de color negro junto a la clase contenedora).
*   C) Asociación simple reflexiva.
*   D) Generalización o herencia múltiple.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 10 - Diagrama de Clases):**
La **Composición** (rombo relleno negro) es una forma de asociación fuerte donde el objeto parte está subordinado al ciclo de vida del objeto todo. Si el contenedor se destruye, las partes constituyentes desaparecen. En la **Agregación** (rombo vacío), la relación es más débil y las partes pueden sobrevivir de forma independiente (ej: un "Departamento Informático" y sus "Programadores").
</details>

---

### Pregunta 11 (UML - Secuencia)
**En un diagrama de secuencia de UML para el módulo de facturación de la tasa de seguridad e higiene, un objeto "Facturador" envía un mensaje a un servicio de la AFIP para validar un comprobante. La ejecución del código del "Facturador" se detiene (se bloquea) a la espera de que el servicio externo responda. ¿Qué tipo de mensaje representa esta interacción y cómo se dibuja en UML?**
*   A) Mensaje sincrónico, dibujado con una flecha con punta sólida (rellena).
*   B) Mensaje asincrónico, dibujado con una flecha con punta abierta (dos líneas).
*   C) Mensaje de retorno simple, dibujado con una línea continua y punta abierta.
*   D) Mensaje de auto-llamado recursivo, dibujado con una línea discontinua.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: A**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 10 - Diagrama de Secuencia):**
Los mensajes sincrónicos (punta sólida rellena) representan llamadas en las que el emisor transfiere el control al receptor y se bloquea (espera) hasta obtener la respuesta para continuar. Los mensajes asincrónicos (punta abierta) permiten que el emisor continúe su ejecución sin esperar la finalización del proceso invocado.
</details>

---

### Pregunta 12 (UML - Actividades)
**¿Qué elemento gráfico se utiliza en un Diagrama de Actividades de UML para separar visualmente las responsabilidades del proceso entre distintos sectores municipales (por ejemplo, "Mesa de Entradas", "Director de Software" y "Subsecretario")?**
*   A) Bifurcaciones de decisión (rombo simple de flujo).
*   B) Barras de sincronización (Forks y Joins para paralelismo).
*   C) Carriles o líneas de partición (*swimlanes*).
*   D) Nodos de estado inicial y final concéntricos.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 10 - Diagrama de Actividades):**
Los carriles o particiones (*swimlanes*) organizan vertical u horizontalmente las actividades del diagrama, asignando cada carril a un actor, rol o departamento específico. Esto permite observar rápidamente quién es el responsable de ejecutar cada acción dentro del flujo de trabajo modelado.
</details>

---

### Pregunta 13 (Arquitectura de Software)
**En el diseño de sistemas municipales bajo el patrón arquitectónico Modelo-Vista-Controlador (MVC), ¿cuál es la responsabilidad específica del componente "Controlador" (Controller)?**
*   A) Almacenar y gestionar la conexión directa a la base de datos municipal relacional.
*   B) Renderizar el código HTML, CSS e interfaces visuales que consume el contribuyente final.
*   C) Interceptar las solicitudes (inputs) del usuario, validar las entradas, coordinar la lógica de negocio invocando al Modelo y seleccionar la Vista adecuada para la respuesta.
*   D) Encriptar las firmas digitales utilizando el protocolo del módulo de seguridad física (HSM).

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 16 - Aseguramiento de Calidad / Patrones):**
El patrón MVC separa las responsabilidades del sistema. El **Modelo** maneja el estado de los datos y la lógica de negocio. La **Vista** representa la interfaz gráfica de usuario. El **Controlador** actúa como intermediario: recibe las acciones del usuario de la vista, actualiza el modelo y le instruye a la vista que se actualice o dibuje la respuesta correspondiente.
</details>

---

### Pregunta 14 (Patrones de Diseño - Creacionales)
**Deseas optimizar la comunicación de un sistema de reclamos vecinales con la base de datos municipal (SQL Server). Para evitar saturar el servidor con múltiples conexiones concurrentes innecesarias, necesitas asegurar que exista una sola instancia de la clase de conexión en toda la ejecución de la aplicación web y proporcionar un punto de acceso global a ella. ¿Qué patrón creacional de GoF debes implementar?**
*   A) Factory Method (Método de Fábrica).
*   B) Observer (Observador).
*   C) Singleton (Único).
*   D) Facade (Fachada).

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: C**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 16 - Patrones de Diseño):**
El patrón **Singleton** restringe la instanciación de una clase a un único objeto y proporciona un método de acceso global para que cualquier otra clase consuma esa misma instancia. Es muy común para pools de conexión a bases de datos, gestores de logs o configuraciones globales del sistema.
</details>

---

### Pregunta 15 (Patrones de Diseño - Estructurales)
**El sistema de mesa de entradas del municipio necesita consumir datos geográficos desde un complejo sistema GIS provincial externo que utiliza múltiples clases internas, formatos heterogéneos y protocolos enrevesados. Para simplificar el trabajo de tus programadores, decides crear una clase intermedia simple con una sola interfaz limpia que exponga únicamente los métodos mínimos que tu sistema necesita. ¿Qué patrón de diseño estructural de GoF estás implementando?**
*   A) Singleton.
*   B) Facade (Fachada).
*   C) Adapter (Adaptador).
*   D) Observer.

<details>
<summary>💡 Ver Respuesta y Justificación</summary>

**Respuesta Correcta: B**

**Justificación (Kendall & Kendall 8va Ed. - Cap. 16 - Patrones de Diseño):**
El patrón **Facade (Fachada)** proporciona una interfaz unificada y simplificada a un conjunto de interfaces complejas o a un subsistema. Evita que las clases clientes tengan que acoplarse con múltiples clases internas del subsistema externo, ofreciendo un único punto de entrada simplificado. El patrón *Adapter*, en cambio, se utiliza para convertir la interfaz de una clase existente en otra interfaz que el cliente espera para que puedan interoperar.
</details>
