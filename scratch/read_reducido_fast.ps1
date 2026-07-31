Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = "D:\proyecto\proyecto reducido.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$xml = [xml]$xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$paragraphs = $xml.SelectNodes("//w:p", $ns)
$lines = @()
$idx = 1
foreach ($p in $paragraphs) {
    $t = $p.InnerText.Trim()
    if ($t.Length -gt 0) {
        $lines += ("{0}: {1}" -f $idx, $t)
        $idx++
    }
}
$lines | Out-File -FilePath "D:\proyecto\scratch\proyecto_reducido_text.txt" -Encoding utf8
Write-Host "Leídos $($lines.Count) párrafos de proyecto reducido.docx."
