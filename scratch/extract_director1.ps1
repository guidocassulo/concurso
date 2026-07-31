$path = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director1.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
    $doc = $word.Documents.Open($path)
    $text = $doc.Content.Text
    Set-Content -Path "D:\proyecto\scratch\director1_full_text.txt" -Value $text -Encoding UTF8
    Write-Host "Extraído con éxito. Longitud: $($text.Length)"
} finally {
    if ($doc) { $doc.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
