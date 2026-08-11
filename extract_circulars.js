const { PDFParse } = require('pdf-parse');
const fs = require('fs');

async function extract(file, outName) {
    try {
        const dataBuffer = fs.readFileSync(file);
        const parser = new PDFParse({ data: dataBuffer, verbosity: 0 });
        const result = await parser.getText();
        fs.writeFileSync(outName, result.text, 'utf8');
        console.log(`Extracted ${file} -> ${outName} (${result.text.length} chars)`);
    } catch(e) {
        console.log(`Error extracting ${file}:`, e);
    }
}

async function main() {
    await extract("D:\\Descargas\\Circular 895.pdf", "circular_895_text.txt");
    await extract("D:\\Descargas\\Circular 902.pdf", "circular_902_text.txt");
    await extract("D:\\Descargas\\Circular 905.pdf", "circular_905_text.txt");
    await extract("D:\\Descargas\\Circular N 896.pdf", "circular_896_text.txt");
}

main();
