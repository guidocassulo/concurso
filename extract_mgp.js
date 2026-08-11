const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extract(file, outName) {
    try {
        const dataBuffer = fs.readFileSync(file);
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        fs.writeFileSync(outName, result.text);
        console.log(`Extracted ${file} to ${outName}, size: ${result.text.length}`);
        await parser.destroy();
    } catch(e) {
        console.error(`Error extracting ${file}:`, e.message);
    }
}

async function run() {
    await extract("D:\\Descargas\\IF-2026-00029502-MUNIMDP-SSGDMP%SPCD.pdf", "d:\\proyecto\\if_2026_text.txt");
    await extract("D:\\Descargas\\Circular 902.pdf", "d:\\proyecto\\circular_902_text.txt");
    await extract("D:\\Descargas\\Circular 895.pdf", "d:\\proyecto\\circular_895_text.txt");
    await extract("D:\\Descargas\\Circular N 896.pdf", "d:\\proyecto\\circular_896_text.txt");
}

run();
