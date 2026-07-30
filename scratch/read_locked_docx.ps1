$docxPath = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$tempPath = "D:\proyecto\scratch\temp_copy.docx"

# Copy file with ReadWrite share mode
$fileStream = New-Object System.IO.FileStream($docxPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
$destStream = New-Object System.IO.FileStream($tempPath, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
$fileStream.CopyTo($destStream)
$fileStream.Close()
$destStream.Close()

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($tempPath)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

# Extract paragraphs nicely
$paragraphs = [regex]::Matches($xml, '<w:p\b[^>]*>(.*?)</w:p>') | ForEach-Object {
    $pXml = $_.Value
    $textMatches = [regex]::Matches($pXml, '<w:t\b[^>]*>(.*?)</w:t>') | ForEach-Object { $_.Groups[1].Value }
    $pText = $textMatches -join ''
    if ($pText.Trim()) { $pText }
}

Set-Content -Path "D:\proyecto\user_edited_paragraphs.txt" -Value $paragraphs -Encoding UTF8
Write-Host "✅ Extracted" $paragraphs.Count "paragraphs to user_edited_paragraphs.txt"
