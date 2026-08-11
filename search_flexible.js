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
    console.log(`Scanning ${pdfFiles.length} PDFs with whitespace normalization...`);
    for (const file of pdfFiles) {
        try {
            const dataBuffer = fs.readFileSync(file);
            const parser = new PDFParse({ data: dataBuffer });
            const result = await parser.getText();
            await parser.destroy();
            
            // Normalize all whitespace to a single space
            const cleanText = result.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');
            
            if (cleanText.includes("ciclo de vida") || cleanText.includes("uml") || cleanText.includes("diseno de sistemas") || cleanText.includes("metodologias de analisis")) {
                console.log(`MATCH in file: ${file}`);
                
                // Find where it matches
                const terms = ["ciclo de vida", "uml", "diseno de sistemas", "metodologias de analisis"];
                for (const t of terms) {
                    const idx = cleanText.indexOf(t);
                    if (idx !== -1) {
                        console.log(`  Term "${t}" matched: ...${cleanText.substring(Math.max(0, idx - 100), Math.min(cleanText.length, idx + 400))}...`);
                    }
                }
                console.log("-----------------------------------");
            }
        } catch(e) {
            // ignore
        }
    }
    console.log("Done scanning.");
}

search();
