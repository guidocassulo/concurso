const { PDFParse } = require('pdf-parse');
const fs = require('fs');

async function extractPDFText(filePath, outTxtName) {
    const buf = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buf, verbosity: 0 });
    try {
        const result = await parser.getText();
        fs.writeFileSync(outTxtName, result.text, 'utf8');
        console.log(`Extracted ${filePath} -> ${outTxtName} (${result.text.length} chars)`);
    } catch(e) {
        console.log(`Error parsing ${filePath}:`, e);
    }
}

async function main() {
    await extractPDFText("D:\\Nueva carpeta\\2\\06 - Decreto 916-20 - Delegacion de atribuciones.pdf", "decreto_916_20.txt");
    await extractPDFText("D:\\Nueva carpeta\\2\\10 - Decreto 1539-18 - Regimen de Sanciones.pdf", "decreto_1539_18.txt");
}

main();
