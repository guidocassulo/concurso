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

class TestOcr {
    static void Main() {
        RunAsync().GetAwaiter().GetResult();
    }

    static async Task RunAsync() {
        Bitmap bmp = new Bitmap(600, 200);
        using (Graphics g = Graphics.FromImage(bmp)) {
            g.Clear(Color.White);
            g.DrawString("DECRETO 1843 REGIMEN DE CONCURSOS", new Font("Arial", 24), Brushes.Black, 10, 50);
        }
        bmp.Save(@"d:\proyecto\scratch\test_ocr.png", ImageFormat.Png);

        OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("es"));
        if (engine == null) engine = OcrEngine.TryCreateFromUserProfileLanguages();

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

            Console.WriteLine("Test OCR Recognized Text: '" + result.Text + "'");
        }
    }
}
