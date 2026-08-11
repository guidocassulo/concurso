const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function inspectBook(filePath) {
    console.log(`Reading book: ${filePath}`);
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const info = await parser.getInfo();
        console.log(`Page count: ${info.total}`);
        const result = await parser.getText();
        await parser.destroy();
        
        // Find Table of Contents (Índice)
        const text = result.text;
        const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');
        
        let indexPos = normalizedText.indexOf("indice");
        if (indexPos !== -1) {
            console.log(`Found 'indice' at character index ${indexPos}. Snippet:`);
            console.log(text.substring(indexPos, indexPos + 1500).replace(/\r?\n/g, ' '));
        } else {
            console.log("No 'indice' word found.");
            // Print first 1000 characters of text
            console.log("First 1000 characters of text:");
            console.log(text.substring(0, 1000).replace(/\r?\n/g, ' '));
        }
        console.log("=========================================\n");
        
        // Save full text to file for easier access
        const baseName = filePath.split('\\').pop().replace('.pdf', '_text.txt');
        fs.writeFileSync(`D:\\proyecto\\${baseName}`, text);
        console.log(`Saved full text to D:\\proyecto\\${baseName}`);
        console.log("-----------------------------------------");
    } catch(e) {
        console.error(`Error inspecting book ${filePath}:`, e.message);
    }
}

async function run() {
    await inspectBook("D:\\Nueva carpeta\\2\\25 - Analisis y Diseno de Sistemas - Kendall - 8va.pdf");
    await inspectBook("D:\\Nueva carpeta\\2\\26 - scrum-manager-alexander-menzinsky-gertrudis-lopez-juan-palacio.pdf");
}

run();
