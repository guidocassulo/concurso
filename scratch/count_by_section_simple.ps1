$lines = Get-Content -Path "D:\proyecto\scratch\director1_fast_text.txt" -Encoding UTF8
$currentSection = "Caratula / Inicio"
$wordCount = 0

foreach ($line in $lines) {
    $clean = $line -replace '^\d+:\s*', ''
    if ($clean -match '^\d\.\s+[A-Z]') {
        if ($wordCount -gt 0) {
            Write-Host "$currentSection : $wordCount palabras"
        }
        $currentSection = $clean
        $wordCount = 0
    }
    if ($clean.Trim().Length -gt 0) {
        $wordCount += ($clean.Trim() -split '\s+').Count
    }
}
Write-Host "$currentSection : $wordCount palabras"
