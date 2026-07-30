$docxPath = "D:\proyecto\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$tempPath = "D:\proyecto\scratch\temp_copy_root.docx"

# Copy file with ReadWrite share mode (works even when Word has it open)
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

# Extract paragraphs cleanly
$paragraphs = [regex]::Matches($xml, '<w:p\b[^>]*>(.*?)</w:p>') | ForEach-Object {
    $pXml = $_.Value
    $textMatches = [regex]::Matches($pXml, '<w:t\b[^>]*>(.*?)</w:t>') | ForEach-Object { $_.Groups[1].Value }
    $pText = $textMatches -join ''
    if ($pText.Trim()) { $pText }
}

Set-Content -Path "D:\proyecto\scratch\current_root_paragraphs.txt" -Value $paragraphs -Encoding UTF8
Write-Host "Extracted $($paragraphs.Count) paragraphs from ROOT file to current_root_paragraphs.txt"

# Also check proyecto prueba
$docxPath2 = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$tempPath2 = "D:\proyecto\scratch\temp_copy_prueba.docx"
$fileStream2 = New-Object System.IO.FileStream($docxPath2, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
$destStream2 = New-Object System.IO.FileStream($tempPath2, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
$fileStream2.CopyTo($destStream2)
$fileStream2.Close()
$destStream2.Close()

$zip2 = [System.IO.Compression.ZipFile]::OpenRead($tempPath2)
$entry2 = $zip2.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream2 = $entry2.Open()
$reader2 = New-Object System.IO.StreamReader($stream2)
$xml2 = $reader2.ReadToEnd()
$reader2.Close()
$zip2.Dispose()

$paragraphs2 = [regex]::Matches($xml2, '<w:p\b[^>]*>(.*?)</w:p>') | ForEach-Object {
    $pXml = $_.Value
    $textMatches = [regex]::Matches($pXml, '<w:t\b[^>]*>(.*?)</w:t>') | ForEach-Object { $_.Groups[1].Value }
    $pText = $textMatches -join ''
    if ($pText.Trim()) { $pText }
}

Set-Content -Path "D:\proyecto\scratch\current_prueba_paragraphs.txt" -Value $paragraphs2 -Encoding UTF8
Write-Host "Extracted $($paragraphs2.Count) paragraphs from PRUEBA file to current_prueba_paragraphs.txt"
