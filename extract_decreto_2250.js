const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    const dataBuffer = fs.readFileSync("D:\\Nueva carpeta\\2\\07 - Decreto 2250 - Grupo Ocupacional Computacion.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    fs.writeFileSync("d:\\proyecto\\decreto_2250_text.txt", result.text);
    console.log("Extracted text of Decreto 2250, size:", result.text.length);
    await parser.destroy();
}

run();
