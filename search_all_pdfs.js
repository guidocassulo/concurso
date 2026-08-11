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
    console.log(`Found ${pdfFiles.length} PDFs to scan.`);
    for (const file of pdfFiles) {
        try {
            const dataBuffer = fs.readFileSync(file);
            const parser = new PDFParse({ data: dataBuffer });
            const result = await parser.getText();
            await parser.destroy();
            const cleanText = result.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const matchIndex = cleanText.indexOf("metodologias de analisis y diseno");
            if (matchIndex !== -1) {
                console.log(`FOUND in: ${file}`);
                console.log("Snippet:");
                console.log(result.text.substring(matchIndex - 100, matchIndex + 600).replace(/\r?\n/g, ' '));
                console.log("-----------------------------------");
            }
        } catch(e) {
            // ignore
        }
    }
    console.log("Done.");
}

search();
