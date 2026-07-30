$lines = Get-Content "D:\proyecto\proyecto_ganador_ocr_full.txt"
for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -like "*PLAN DE TRABAJO*" -or $line -like "*Diagnóstico*" -or $line -like "*PROPUESTA*") {
        Write-Host "Line $($i+1): $line"
    }
}
