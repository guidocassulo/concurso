const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== RUNNING POWERSHELL WINDOWS NATIVE OCR ===\n');

const psScript = `
[void][Reflection.Assembly]::LoadWithPartialName("System.Drawing")
Add-Type -AssemblyName System.Runtime.WindowsRuntime

$asyncNoAttribute = [System.Windows.Forms.Form].Assembly.GetType('System.Windows.Forms.AsyncOperationManager')

# Load WinRT Windows.Media.Ocr
[Windows.Media.Ocr.OcrEngine, Windows.Foundation.Manifest, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.Manifest, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation.Manifest, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("es-ES"))
if ($null -eq $engine) {
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
}

$bmpFiles = Get-ChildItem -Path "d:\\proyecto\\scratch\\dec1843_bmps\\*.bmp" | Sort-Object Name

$allText = ""

foreach ($file in $bmpFiles) {
    Write-Host "OCRing $($file.Name)..."
    $fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($file.FullName)
    while ($fileTask.Status -eq 'Started') { Start-Sleep -Milliseconds 20 }
    $storageFile = $fileTask.GetResults()

    $streamTask = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    while ($streamTask.Status -eq 'Started') { Start-Sleep -Milliseconds 20 }
    $stream = $streamTask.GetResults()

    $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    while ($decoderTask.Status -eq 'Started') { Start-Sleep -Milliseconds 20 }
    $decoder = $decoderTask.GetResults()

    $bmpTask = $decoder.GetSoftwareBitmapAsync()
    while ($bmpTask.Status -eq 'Started') { Start-Sleep -Milliseconds 20 }
    $softwareBmp = $bmpTask.GetResults()

    $ocrTask = $engine.RecognizeAsync($softwareBmp)
    while ($ocrTask.Status -eq 'Started') { Start-Sleep -Milliseconds 20 }
    $ocrResult = $ocrTask.GetResults()

    $allText += "=== " + $file.Name + " ===\`n" + $ocrResult.Text + "\`n\`n"
}

[System.IO.File]::WriteAllText("d:\\proyecto\\scratch\\dec1843_ocr_text.txt", $allText)
Write-Host "OCR Complete! Total chars: $($allText.Length)"
`;

fs.writeFileSync('d:\\proyecto\\scratch\\run_ocr.ps1', psScript, 'utf8');

try {
  const out = execSync('powershell -ExecutionPolicy Bypass -File d:\\proyecto\\scratch\\run_ocr.ps1', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error('PowerShell OCR error:', e.message);
}
