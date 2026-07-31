$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false

try {
    $doc = $word.Documents.Open($docxPath)

    $find = $doc.Content.Find
    $null = $find.Execute("en la plataforma institucional Redmine y en las distintas", $false, $false, $false, $false, $false, $true, 1, $false, "en las plataformas institucionales de gestión de proyectos y en las distintas", 2)

    $find2 = $doc.Content.Find
    $null = $find2.Execute("8. 3 3", $false, $false, $false, $false, $false, $true, 1, $false, "8.3", 2)

    $doc.Save()
    Write-Host "Texto corregido correctamente."
} catch {
    Write-Host "Error: $_"
} finally {
    if ($doc) { $doc.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
