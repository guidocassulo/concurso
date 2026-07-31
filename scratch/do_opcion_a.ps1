$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false

$doc = $word.Documents.Open($docxPath)

for ($i = $doc.Tables.Count; $i -ge 1; $i--) {
    $tbl = $doc.Tables.Item($i)
    if ($tbl.Range.Text -like "*Porcentaje de proyectos registrados en Redmine*") {
        $tbl.Delete()
    }
}

$pStart = $null
$pEnd = $null

for ($i = 1; $i -le $doc.Paragraphs.Count; $i++) {
    $p = $doc.Paragraphs.Item($i)
    $t = $p.Range.Text.Trim()
    if ($t -match "^8\.\s+EVALUA") {
        $pStart = $p
    }
    if ($pStart -ne $null -and $t -match "^9\.\s+CONCLU") {
        $pEnd = $p
        break
    }
}

if ($pStart -ne $null -and $pEnd -ne $null) {
    $rng = $doc.Range($pStart.Range.Start, $pEnd.Range.Start - 1)
    
    $opcionA = @"
8. EVALUACION Y SEGUIMIENTO

La implementacion del presente Plan de Trabajo requerira un proceso permanente de evaluacion y seguimiento que permita verificar el cumplimiento de los objetivos propuestos, medir el impacto de las acciones organizacionales y ajustar las decisiones de conduccion sobre la base de evidencia objetiva.

Con este proposito, la evaluacion se concibe como un mecanismo de control de gestion institucional orientado a conocer la evolucion del Departamento y la calidad del servicio que presta a la Administracion Municipal. Los indicadores y las instancias de seguimiento no tendran por finalidad realizar un control individual de productividad, sino identificar oportunidades de mejora en los procesos, fortalecer los equipos y garantizar la continuidad operativa.

El esquema de evaluacion se estructurara a traves de tres ejes principales:

8.1 Revision periodica de resultados e indicadores de gestion
La Jefatura realizara un monitoreo sistematico de la gestion del Departamento mediante el seguimiento de indicadores clave en la plataforma institucional Redmine y en las distintas lineas de trabajo:
• Cobertura y planificacion: porcentaje de proyectos, requerimientos e incidencias registrados y categorizados en la cartera comun.
• Gestion del conocimiento y riesgo operativo: cantidad de sistemas criticos que cuentan con Referente Secundario designado y documentacion tecnica/funcional minima actualizada.
• Calidad de software y estabilidad: tasa de incidencias relevantes detectadas con posterioridad a la puesta en produccion y tiempo promedio de respuesta frente a requerimientos.
• Gobierno tecnico y soberania: porcentaje de desarrollos entregados por proveedores externos con recepcion tecnica completa y entrega del codigo fuente.
• Innovacion y actualizacion: actividades de evaluacion de nuevas tecnologias y herramientas asistidas por Inteligencia Artificial realizadas y documentadas.

8.2 Instancias de seguimiento, feedback interno y clima laboral
La evaluacion del Departamento no se limitara al analisis de datos cuantitativos, sino que incorporara la dimension humana y organizativa como aspecto central de la conduccion:
• Reuniones periodicas de equipo: espacios de trabajo para revisar el estado de los proyectos, analizar dificultades recurrentes, redistribuir cargas de trabajo y receptar propuestas de mejora formuladas por los propios agentes.
• Feedback tecnico y mentoreo: dinamicas de acompanamiento entre el personal de mayor experiencia y los nuevos integrantes, promoviendo el reconocimiento del saber hacer acumulado y el desarrollo profesional continuo.
• Monitoreo del clima laboral: charlas periodicas con el personal para evaluar las condiciones de trabajo, abordar la resistencia al cambio de manera constructiva y resolver tensiones operativas antes de que afecten el desempeno del equipo.

8.3 Ajuste dinamico de la gestion y mejora continua
Los resultados obtenidos de los indicadores y de las instancias de feedback interno se utilizaran para alimentar un ciclo permanente de mejora continua.

Cuando una medida no alcance los resultados esperados o se detecten cuellos de botella en la atencion de los servicios, la Jefatura revisara los procedimientos, redefinira prioridades, redistribuira responsabilidades o reforzara la capacitacion interna. De este modo, la planificacion se mantendra como una herramienta viva de gestion, capaz de adaptarse a la realidad cambiante del Municipio.

"@

    $rng.Text = $opcionA
    $doc.Save()
    Write-Host "Sección 8 actualizada con exito a Opción A!"
} else {
    Write-Host "No se encontraron los párrafos limite (pStart: $pStart, pEnd: $pEnd)"
}

$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
