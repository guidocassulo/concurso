
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

class Program {
    static void Main(string[] args) {
        RunAsync().GetAwaiter().GetResult();
    }

    static async Task RunAsync() {
        OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("es"));
        if (engine == null) {
            engine = OcrEngine.TryCreateFromUserProfileLanguages();
        }
        if (engine == null) {
            Console.WriteLine("ERROR: Could not create OcrEngine");
            return;
        }

        StringBuilder sb = new StringBuilder();
        string folder = @"d:\proyecto\scratch\dec1843_pages";
        string[] files = Directory.GetFiles(folder, "*.bmp");
        Array.Sort(files);

        foreach (string file in files) {
            try {
                StorageFile storageFile = await StorageFile.GetFileFromPathAsync(file);
                using (var stream = await storageFile.OpenAsync(FileAccessMode.Read)) {
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                    SoftwareBitmap softBmp = await decoder.GetSoftwareBitmapAsync();
                    OcrResult result = await engine.RecognizeAsync(softBmp);
                    Console.WriteLine("=== " + Path.GetFileName(file) + " ===");
                    Console.WriteLine(result.Text);
                    sb.AppendLine("=== " + Path.GetFileName(file) + " ===");
                    sb.AppendLine(result.Text);
                    sb.AppendLine();
                }
            } catch (Exception ex) {
                Console.WriteLine("Error on " + Path.GetFileName(file) + ": " + ex.Message);
            }
        }

        File.WriteAllText(@"d:\proyecto\scratch\dec1843_ocr_extracted.txt", sb.ToString(), Encoding.UTF8);
        Console.WriteLine("OCR Done! Length: " + sb.Length);
    }
}
