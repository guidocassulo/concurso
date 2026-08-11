const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== RUNNING WINRT OCR ON DECRETO 1843/17 ===\n');

const psScript = `
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Runtime.WindowsRuntime

$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.Manifest, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation.Manifest, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFile, Windows.Foundation.Manifest, ContentType = WindowsRuntime]

function AwaitTask($task) {
    while ($task.Status -eq [Windows.Foundation.AsyncStatus]::Started) {
        [System.Threading.Thread]::Sleep(10)
    }
    return $task.GetResults()
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if (-not $engine) {
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("es-ES"))
}

$bmpFiles = Get-ChildItem -Path "d:\\proyecto\\scratch\\dec1843_pages\\*.bmp" | Sort-Object { [int]($_.BaseName -replace '\\D','') }

$fullOcrText = ""

foreach ($file in $bmpFiles) {
    Write-Host "OCRing $($file.Name)..."
    try {
        $storageFile = AwaitTask ([Windows.Storage.StorageFile]::GetFileFromPathAsync($file.FullName))
        $stream = AwaitTask ($storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read))
        $decoder = AwaitTask ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream))
        $softBmp = AwaitTask ($decoder.GetSoftwareBitmapAsync())
        $ocrResult = AwaitTask ($engine.RecognizeAsync($softBmp))
        
        $fullOcrText += "=== " + $file.Name + " ===\`n" + $ocrResult.Text + "\`n\`n"
    } catch {
        Write-Host "Error OCRing $($file.Name): $_"
    }
}

[System.IO.File]::WriteAllText("d:\\proyecto\\scratch\\dec1843_ocr_extracted.txt", $fullOcrText, [System.Text.Encoding]::UTF8)
Write-Host "Done! Saved OCR to d:\\proyecto\\scratch\\dec1843_ocr_extracted.txt. Length: $($fullOcrText.Length)"
`;

fs.writeFileSync('d:\\proyecto\\scratch\\winrt_ocr.ps1', psScript, 'utf8');

try {
  const out = execSync('powershell -ExecutionPolicy Bypass -File d:\\proyecto\\scratch\\winrt_ocr.ps1', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error('PowerShell WinRT OCR error:', e.message);
}
