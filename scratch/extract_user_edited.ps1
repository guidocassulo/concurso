Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

# Remove XML tags and extract plain text
$cleanText = [System.Text.RegularExpressions.Regex]::Replace($xml, "<[^>]+>", " ")
$cleanText = [System.Text.RegularExpressions.Regex]::Replace($cleanText, "\s+", " ")
Set-Content -Path "D:\proyecto\user_edited_text.txt" -Value $cleanText -Encoding UTF8
Write-Host "✅ Extracted user text to user_edited_text.txt"
