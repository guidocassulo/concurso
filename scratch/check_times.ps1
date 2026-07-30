$root = Get-Item "D:\proyecto\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
$prueba = Get-Item "D:\proyecto\proyecto prueba\Plan_Trabajo_Jefatura_Software_Version_Director.docx"
Write-Host "ROOT:   mtime=$($root.LastWriteTime)  size=$($root.Length)"
Write-Host "PRUEBA: mtime=$($prueba.LastWriteTime)  size=$($prueba.Length)"
