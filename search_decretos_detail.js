const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    console.log("Reading Decretos.pdf...");
    const dataBuffer = fs.readFileSync("D:\\Nueva carpeta\\2\\Decretos.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    
    const text = result.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const term = "ciclo de vida";
    const idx = text.indexOf(term);
    if (idx !== -1) {
        console.log(`FOUND in Decretos.pdf at index ${idx}:`);
        console.log(result.text.substring(idx - 100, idx + 800).replace(/\r?\n/g, ' '));
    } else {
        console.log("Term 'ciclo de vida' not found in Decretos.pdf");
    }
}

run();
