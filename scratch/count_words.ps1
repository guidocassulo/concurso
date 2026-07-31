$lines = Get-Content -Path "D:\proyecto\scratch\director1_fast_text.txt" -Encoding UTF8
$totalWords = 0
foreach ($line in $lines) {
    # Strip leading line numbers like "12: Text"
    $clean = $line -replace '^\d+:\s*', ''
    if ($clean.Trim().Length -gt 0) {
        $words = ($clean.Trim() -split '\s+').Count
        $totalWords += $words
    }
}
Write-Host "Total de palabras en el documento: $totalWords"
