$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false

try {
    $doc = $word.Documents.Open($docxPath)

    # Find Section 8
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
        # Remove any tables in Section 8
        for ($tIdx = $doc.Tables.Count; $tIdx -ge 1; $tIdx--) {
            $tbl = $doc.Tables.Item($tIdx)
            if ($tbl.Range.Start -ge $pStart.Range.Start -and $tbl.Range.End -le $pEnd.Range.Start) {
                $tbl.Delete()
            }
        }

        # Re-acquire range
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

        $rng = $doc.Range($pStart.Range.Start, $pEnd.Range.Start - 1)

        $sec8Text = @"
8. EVALUACIÓN Y SEGUIMIENTO

La implementación del presente Plan de Trabajo requerirá un proceso permanente de evaluación y seguimiento que permita verificar el cumplimiento de los objetivos propuestos, medir el impacto de las acciones organizacionales y ajustar las decisiones de conducción sobre la base de evidencia objetiva.

Con este propósito, la evaluación se concibe como un mecanismo de control de gestión institucional orientado a conocer la evolución del Departamento y la calidad del servicio que presta a la Administración Municipal. Los indicadores y las instancias de seguimiento no tendrán por finalidad realizar un control individual de productividad, sino identificar oportunidades de mejora en los procesos, fortalecer los equipos y garantizar la continuidad operativa.

El esquema de evaluación se estructurará a través de tres ejes principales:

8.1 Revisión periódica de resultados e indicadores de gestión
La Jefatura realizará un monitoreo sistemático de la gestión del Departamento mediante el seguimiento de indicadores clave en las plataformas institucionales de gestión y en las distintas líneas de trabajo:
• Cobertura y planificación: porcentaje de proyectos, requerimientos e incidencias registrados y categorizados en la cartera común institucional.
• Gestión del conocimiento y riesgo operativo: cantidad de sistemas críticos que cuentan con Referente Secundario designado y documentación técnica/funcional mínima actualizada.
• Calidad de software y estabilidad: tasa de incidencias relevantes detectadas con posterioridad a la puesta en producción y tiempo promedio de respuesta frente a requerimientos.
• Gobierno técnico y soberanía: porcentaje de desarrollos entregados por proveedores externos con recepción técnica completa y entrega del código fuente.
• Innovación y actualización: actividades de evaluación de nuevas tecnologías y herramientas asistidas por Inteligencia Artificial realizadas y documentadas.

8.2 Instancias de seguimiento, feedback interno y clima laboral
La evaluación del Departamento no se limitará al análisis de datos cuantitativos, sino que incorporará la dimensión humana y organizativa como aspecto central de la conducción:
• Reuniones periódicas de equipo: espacios de trabajo para revisar el estado de los proyectos, analizar dificultades recurrentes, redistribuir cargas de trabajo y receptar propuestas de mejora formuladas por los propios agentes.
• Feedback técnico y mentoreo: dinámicas de acompañamiento entre el personal de mayor experiencia y los nuevos integrantes, promoviendo el reconocimiento del saber hacer acumulado y el desarrollo profesional continuo.
• Monitoreo del clima laboral: charlas periódicas con el personal para evaluar las condiciones de trabajo, abordar la resistencia al cambio de manera constructiva y resolver tensiones operativas antes de que afecten el desempeño del equipo.

8.3 Ajuste dinámico de la gestión y mejora continua
Los resultados obtenidos de los indicadores y de las instancias de feedback interno se utilizarán para alimentar un ciclo permanente de mejora continua.

Cuando una medida no alcance los resultados esperados o se detecten cuellos de botella en la atención de los servicios, la Jefatura revisará los procedimientos, redefinirá prioridades, redistribuirá responsabilidades o reforzará la capacitación interna. De este modo, la planificación se mantendrá como una herramienta viva de gestión, capaz de adaptarse a la realidad cambiante del Municipio.

"@

        $rng.Text = $sec8Text
        $doc.Save()
        Write-Host "Sección 8 agnóstica guardada con éxito."
    } else {
        Write-Host "No se encontraron limites de Seccion 8."
    }
} catch {
    Write-Host "Error: $_"
} finally {
    if ($doc) { $doc.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
