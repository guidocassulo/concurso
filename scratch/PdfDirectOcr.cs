using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Windows.Data.Pdf;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Storage.Streams;

class Program {
    static void Main(string[] args) {
        RunAsync().GetAwaiter().GetResult();
    }

    static async Task RunAsync() {
        string pdfPath = @"D:\Nueva carpeta\2\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf";
        StorageFile file = await StorageFile.GetFileFromPathAsync(pdfPath);
        PdfDocument pdfDoc = await PdfDocument.LoadFromFileAsync(file);

        OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("es"));
        if (engine == null) engine = OcrEngine.TryCreateFromUserProfileLanguages();

        StringBuilder sb = new StringBuilder();
        Console.WriteLine("PDF Pages: " + pdfDoc.PageCount);

        for (uint i = 0; i < pdfDoc.PageCount; i++) {
            using (PdfPage page = pdfDoc.GetPage(i)) {
                using (var stream = new InMemoryRandomAccessStream()) {
                    await page.RenderToStreamAsync(stream);
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                    SoftwareBitmap softBmp = await decoder.GetSoftwareBitmapAsync();
                    OcrResult result = await engine.RecognizeAsync(softBmp);

                    Console.WriteLine("=== Page " + (i + 1) + " (Chars: " + result.Text.Length + ") ===");
                    if (result.Text.Length > 0) {
                        Console.WriteLine(result.Text.Substring(0, Math.Min(200, result.Text.Length)).Replace('\n', ' '));
                    }
                    sb.AppendLine("=== Page " + (i + 1) + " ===");
                    sb.AppendLine(result.Text);
                    sb.AppendLine();
                }
            }
        }

        File.WriteAllText(@"d:\proyecto\scratch\dec1843_direct_pdf_ocr.txt", sb.ToString(), Encoding.UTF8);
        Console.WriteLine("OCR Finished! Output length: " + sb.Length);
    }
}
