using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage.Streams;

class Program {
    static void Main(string[] args) {
        RunAsync().GetAwaiter().GetResult();
    }

    static async Task RunAsync() {
        OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("es"));
        if (engine == null) {
            engine = OcrEngine.TryCreateFromUserProfileLanguages();
        }

        StringBuilder sb = new StringBuilder();
        string folder = @"d:\proyecto\scratch\dec1843_inverted";
        string[] files = Directory.GetFiles(folder, "*.bmp");
        Array.Sort(files);

        foreach (string file in files) {
            try {
                using (Bitmap bmp = new Bitmap(file)) {
                    using (MemoryStream ms = new MemoryStream()) {
                        bmp.Save(ms, ImageFormat.Png);
                        ms.Position = 0;
                        
                        InMemoryRandomAccessStream winrtStream = new InMemoryRandomAccessStream();
                        using (DataWriter writer = new DataWriter(winrtStream.GetOutputStreamAt(0))) {
                            writer.WriteBytes(ms.ToArray());
                            await writer.StoreAsync();
                        }

                        BitmapDecoder decoder = await BitmapDecoder.CreateAsync(winrtStream);
                        SoftwareBitmap softBmp = await decoder.GetSoftwareBitmapAsync();
                        OcrResult result = await engine.RecognizeAsync(softBmp);

                        Console.WriteLine("=== " + Path.GetFileName(file) + " (Text chars: " + result.Text.Length + ") ===");
                        if (result.Text.Length > 0) {
                            Console.WriteLine(result.Text.Substring(0, Math.Min(150, result.Text.Length)).Replace('\n', ' '));
                        }
                        sb.AppendLine("=== " + Path.GetFileName(file) + " ===");
                        sb.AppendLine(result.Text);
                        sb.AppendLine();
                    }
                }
            } catch (Exception ex) {
                Console.WriteLine("Error on " + Path.GetFileName(file) + ": " + ex.Message);
            }
        }

        File.WriteAllText(@"d:\proyecto\scratch\dec1843_ocr_extracted.txt", sb.ToString(), Encoding.UTF8);
        Console.WriteLine("OCR Done! Total output size: " + sb.Length);
    }
}
