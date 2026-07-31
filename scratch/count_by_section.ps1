$lines = Get-Content -Path "D:\proyecto\scratch\director1_fast_text.txt" -Encoding UTF8
$sectionWords = @{}
$currentSection = "Carátula / Encabezado"
$sectionWords[$currentSection] = 0

foreach ($line in $lines) {
    $clean = $line -replace '^\d+:\s*', ''
    if ($clean -match '^\d+\.\s+[A-ZÁÉÍÓÚÑ]') {
        $currentSection = $clean
        if (-not $sectionWords.ContainsKey($currentSection)) {
            $sectionWords[$currentSection] = 0
        }
    }
    $words = ($clean.Trim() -split '\s+').Count
    $sectionWords[$currentSection] += $words
}

foreach ($sec in $sectionWords.Keys) {
    Write-Host "$sec : $($sectionWords[$sec]) palabras"
}
