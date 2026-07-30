Get-ChildItem "D:\proyecto\" -Recurse -Filter "*.docx" | Sort-Object LastWriteTime -Descending | ForEach-Object {
    Write-Host "$($_.LastWriteTime)  $($_.Length) bytes  $($_.FullName)"
}
