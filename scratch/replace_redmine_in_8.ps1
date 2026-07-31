$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false

try {
    $doc = $word.Documents.Open($docxPath)

    for ($i = 1; $i -le $doc.Paragraphs.Count; $i++) {
        $p = $doc.Paragraphs.Item($i)
        if ($p.Range.Text -like "*plataforma institucional Redmine*") {
            $p.Range.Text = $p.Range.Text.Replace("la plataforma institucional Redmine", "las plataformas institucionales de gestión")
        }
        if ($p.Range.Text -like "*8. 3 3*") {
            $p.Range.Text = $p.Range.Text.Replace("8. 3 3", "8.3")
        }
    }

    $doc.Save()
    Write-Host "Reemplazo exacto realizado."
} catch {
    Write-Host "Error: $_"
} finally {
    if ($doc) { $doc.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
