const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== FIXING POWERSHELL C# OCR WRAPPER ===\n');

const csharpCode = `
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

public class OcrHelper {
    public static async Task<string> ProcessImagesAsync(string bmpFolder) {
        OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("es-ES"));
        if (engine == null) {
            engine = OcrEngine.TryCreateFromUserProfileLanguages();
        }

        StringBuilder sb = new StringBuilder();
        string[] files = Directory.GetFiles(bmpFolder, "*.bmp");
        Array.Sort(files);

        foreach (string file in files) {
            try {
                StorageFile storageFile = await StorageFile.GetFileFromPathAsync(file);
                using (var stream = await storageFile.OpenAsync(FileAccessMode.Read)) {
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                    SoftwareBitmap softBmp = await decoder.GetSoftwareBitmapAsync();
                    OcrResult result = await engine.RecognizeAsync(softBmp);
                    sb.AppendLine("=== " + Path.GetFileName(file) + " ===");
                    sb.AppendLine(result.Text);
                    sb.AppendLine();
                }
            } catch (Exception ex) {
                sb.AppendLine("Error on " + Path.GetFileName(file) + ": " + ex.Message);
            }
        }
        return sb.ToString();
    }
}
`;

fs.writeFileSync('d:\\proyecto\\scratch\\OcrHelper.cs', csharpCode, 'utf8');

const psCmd = `powershell -ExecutionPolicy Bypass -Command "
Add-Type -TypeDefinition (Get-Content 'd:\\proyecto\\scratch\\OcrHelper.cs' -Raw) -Language CSharp
$task = [OcrHelper]::ProcessImagesAsync('d:\\proyecto\\scratch\\dec1843_pages')
$task.Wait()
$result = $task.Result
[System.IO.File]::WriteAllText('d:\\proyecto\\scratch\\dec1843_ocr_extracted.txt', $result, [System.Text.Encoding]::UTF8)
Write-Host 'OCR Finished! Total chars: ' $result.Length
"`;

try {
  const out = execSync(psCmd, { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error('C# PowerShell OCR error:', e.message);
}
