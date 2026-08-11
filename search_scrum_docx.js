const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

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
            if (name.endsWith('.docx')) {
                files.push(name);
            }
        }
    }
    return files;
}

function extractTextFromDocx(filePath) {
    try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();
        const docEntry = zipEntries.find(entry => entry.entryName === 'word/document.xml');
        if (!docEntry) return '';
        const xml = docEntry.getData().toString('utf8');
        // Strip XML tags crudely but effectively for keyword matching
        return xml.replace(/<[^>]+>/g, ' ');
    } catch (err) {
        // console.error(`Error reading ${filePath}:`, err.message);
        return '';
    }
}

async function searchInDocx(filePath) {
    const text = extractTextFromDocx(filePath);
    if (!text) return;
    
    const found = [];
    for (const term of searchTerms) {
        if (term.test(text)) {
            found.push(term.source);
        }
    }
    
    if (found.length > 0) {
        console.log(`FOUND in ${filePath}: terms [${found.join(', ')}]`);
        const matchIndex = text.toLowerCase().indexOf('scrum');
        if (matchIndex !== -1) {
            const start = Math.max(0, matchIndex - 100);
            const end = Math.min(text.length, matchIndex + 200);
            console.log(`Snippet around 'scrum': ${text.substring(start, end).replace(/\s+/g, ' ')}`);
        } else {
            const matchIndexMet = text.toLowerCase().indexOf('metodolog');
            if (matchIndexMet !== -1) {
                const start = Math.max(0, matchIndexMet - 100);
                const end = Math.min(text.length, matchIndexMet + 200);
                console.log(`Snippet around 'metodolog': ${text.substring(start, end).replace(/\s+/g, ' ')}`);
            }
        }
        console.log('-----------------------------------');
    }
}

(async () => {
    console.log("Scanning D:\\ for relevant DOCX files...");
    const docxFiles = getFiles('D:\\');
    console.log(`Found ${docxFiles.length} DOCX files to search. Starting search...`);
    for (const file of docxFiles) {
        await searchInDocx(file);
    }
    console.log("Done searching DOCX.");
})();
