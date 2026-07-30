$src = "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$dst = "D:\proyecto\Plan_Trabajo_Jefatura_Software_Version_Director.docx"

$fileStream = New-Object System.IO.FileStream($src, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
$destStream = New-Object System.IO.FileStream($dst, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
$fileStream.CopyTo($destStream)
$fileStream.Dispose()
$destStream.Dispose()
Write-Host "✅ Sincronizado correctamente a la raíz de D:\proyecto"
