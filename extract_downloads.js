const fs = require('fs');
const AdmZip = require('adm-zip');

function extractDocx(filePath, outName) {
    try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();
        const docEntry = zipEntries.find(entry => entry.entryName === 'word/document.xml');
        if (!docEntry) {
            console.error(`No word/document.xml in ${filePath}`);
            return;
        }
        const xml = docEntry.getData().toString('utf8');
        const text = xml.replace(/<[^>]+>/g, ' ');
        fs.writeFileSync(outName, text);
        console.log(`Extracted ${filePath} to ${outName}, size: ${text.length}`);
    } catch (e) {
        console.error(`Error extracting ${filePath}:`, e.message);
    }
}

extractDocx("D:\\Descargas\\API 4.docx", "d:\\proyecto\\api_4_text.txt");
extractDocx("D:\\Descargas\\analisis_canal_gyo.docx", "d:\\proyecto\\analisis_canal_gyo_text.txt");
extractDocx("D:\\Descargas\\analisis_extendido_gyo.docx", "d:\\proyecto\\analisis_extendido_gyo_text.txt");
