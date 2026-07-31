$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director1.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
    $doc = $word.Documents.Open($docxPath)
    $lines = @()
    for ($i = 1; $i -le $doc.Paragraphs.Count; $i++) {
        $lines += ("{0}: {1}" -f $i, $doc.Paragraphs.Item($i).Range.Text.Trim())
    }
    $lines | Out-File -FilePath "D:\proyecto\scratch\director1_paragraphs.txt" -Encoding utf8
    Write-Host ("Extracted {0} paragraphs." -f $doc.Paragraphs.Count)
} finally {
    if ($doc) { $doc.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
