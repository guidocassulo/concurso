const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (name.includes('$RECYCLE.BIN') || name.includes('System Volume Information') || name.includes('node_modules') || name.includes('Desarrollo')) {
            continue;
        }
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else {
            if (name.endsWith('.pdf')) {
                files.push(name);
            }
        }
    }
    return files;
}

async function search() {
    const pdfFiles = getFiles('D:\\');
    console.log(`Scanning ${pdfFiles.length} PDFs for 'ciclo de vida'...`);
    for (const file of pdfFiles) {
        try {
            const dataBuffer = fs.readFileSync(file);
            const parser = new PDFParse({ data: dataBuffer });
            const result = await parser.getText();
            await parser.destroy();
            const cleanText = result.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            if (cleanText.includes("ciclo de vida")) {
                console.log(`MATCH in file: ${file}`);
                const idx = cleanText.indexOf("ciclo de vida");
                console.log(result.text.substring(idx - 100, idx + 400).replace(/\r?\n/g, ' '));
                console.log("-----------------------------------");
            }
        } catch(e) {
            // ignore
        }
    }
    console.log("Done scanning.");
}

search();
