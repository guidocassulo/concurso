const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    const dataBuffer = fs.readFileSync("D:\\Descargas\\ANEXO.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    fs.writeFileSync("d:\\proyecto\\anexo_text.txt", result.text);
    console.log("Extracted text of ANEXO.pdf, size:", result.text.length);
    await parser.destroy();
}

run();
