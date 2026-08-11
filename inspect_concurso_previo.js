const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    const filePath = "C:\\Users\\gcassulo\\Downloads\\0066 - COPDI-2026-00123324-MUNIMDP-DTTGRH%SLTH.pdf";
    console.log(`Reading: ${filePath}`);
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const info = await parser.getInfo();
        console.log(`Page count: ${info.total}`);
        const result = await parser.getText();
        await parser.destroy();
        
        fs.writeFileSync("D:\\proyecto\\concurso_previo_text.txt", result.text);
        console.log("Saved text to D:\\proyecto\\concurso_previo_text.txt");
    } catch(e) {
        console.error("Error reading PDF:", e.message);
    }
}

run();
