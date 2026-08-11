const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const searchTerms = [/scrum/i, /sprint/i, /backlog/i, /historias de usuario/i, /metodolog/i, /casos de uso/i, /uml/i, /diseño/i, /análisis de/i];

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

async function searchInPdf(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        await parser.destroy();
        
        const found = [];
        for (const term of searchTerms) {
            if (term.test(result.text)) {
                found.push(term.source);
            }
        }
        
        if (found.length > 0) {
            console.log(`FOUND in ${filePath}: terms [${found.join(', ')}]`);
            // Print a snippet around the first found term
            const matchIndex = result.text.toLowerCase().indexOf('scrum');
            if (matchIndex !== -1) {
                const start = Math.max(0, matchIndex - 100);
                const end = Math.min(result.text.length, matchIndex + 200);
                console.log(`Snippet around 'scrum': ${result.text.substring(start, end).replace(/\r?\n/g, ' ')}`);
            } else {
                const matchIndexMet = result.text.toLowerCase().indexOf('metodolog');
                if (matchIndexMet !== -1) {
                    const start = Math.max(0, matchIndexMet - 100);
                    const end = Math.min(result.text.length, matchIndexMet + 200);
                    console.log(`Snippet around 'metodolog': ${result.text.substring(start, end).replace(/\r?\n/g, ' ')}`);
                }
            }
            console.log('-----------------------------------');
        }
    } catch (err) {
        // console.error(`Error reading ${filePath}:`, err.message);
    }
}

(async () => {
    console.log("Scanning D:\\ for relevant PDF files...");
    const pdfFiles = getFiles('D:\\');
    console.log(`Found ${pdfFiles.length} PDFs to search. Starting search...`);
    for (const file of pdfFiles) {
        await searchInPdf(file);
    }
    console.log("Done searching.");
})();
