$word = New-Object -ComObject Word.Application
$word.Visible = $false
$docPath = "D:\proyecto\Proyecto_Guido_Cassulo_Jefe.docx"
$pdfPath = "D:\proyecto\scratch\proyecto_jefe.pdf"
if (Test-Path $pdfPath) { Remove-Item $pdfPath -Force }
$doc = $word.Documents.Open($docPath)
$doc.SaveAs([ref]$pdfPath, [ref]17)
$doc.Close([ref]0)
$word.Quit()
Write-Host "PDF created:" (Test-Path $pdfPath)
