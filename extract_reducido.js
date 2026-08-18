const fs = require('fs');
const AdmZip = require('adm-zip');

function extractDocxText(docxPath) {
    const zip = new AdmZip(docxPath);
    const xml = zip.readAsText('word/document.xml');
    
    const paragraphs = xml.split('</w:p>');
    const textLines = [];
    
    for (const p of paragraphs) {
        const matches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
        if (matches) {
            const line = matches.map(m => m.replace(/<[^>]+>/g, '')).join('');
            textLines.push(line);
        }
    }
    return textLines.join('\n');
}

const text = extractDocxText('d:/proyecto/proyecto reducido.docx');
fs.writeFileSync('d:/proyecto/proyecto_reducido_text.txt', text, 'utf8');
console.log('Extracted successfully, length:', text.length);
