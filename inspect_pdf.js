const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function inspect(filePath) {
    console.log(`=== Inspecting ${filePath} ===`);
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        const infoResult = await parser.getInfo();
        console.log(`Number of pages: ${infoResult.total}`);
        console.log(`Text snippet (first 1200 chars):`);
        console.log(result.text.substring(0, 1200).replace(/\r?\n/g, ' '));
        console.log(`=========================================\n`);
        await parser.destroy();
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
    }
}

const targetFiles = [
    "D:\\Nueva carpeta\\1\\01 - Ley Organica de Municipalidades Decreto-Ley 6769.pdf",
    "D:\\Nueva carpeta\\1\\02 - Ordenanza Gral 26348 - Procedimiento Administrativo Municipal.pdf",
    "D:\\Nueva carpeta\\1\\03 - Ordenanza 26580 - Complementaria de Presupuesto.pdf",
    "D:\\Nueva carpeta\\1\\04 - Decreto 2980-00 - RAFAM - Contable.pdf",
    "D:\\Nueva carpeta\\1\\documento_final_numerado.pdf",
    "D:\\Nueva carpeta\\1\\Ley OM, RAFAM, Prodcedimiento Admin. Muni.pdf"
];

(async () => {
    for (const file of targetFiles) {
        await inspect(file);
    }
})();
