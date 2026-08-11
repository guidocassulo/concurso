const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'D:\\Nueva carpeta\\2';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

async function search() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        try {
            const dataBuffer = fs.readFileSync(filePath);
            const parser = new PDFParse({ data: dataBuffer });
            const result = await parser.getText();
            await parser.destroy();
            if (result.text.toLowerCase().includes('metodologias de analisis') || result.text.toLowerCase().includes('computacion')) {
                console.log(`Match in ${file}:`);
                const index = result.text.toLowerCase().indexOf('metodologias');
                if (index !== -1) {
                    console.log(result.text.substring(index - 100, index + 300).replace(/\r?\n/g, ' '));
                } else {
                    console.log("No 'metodologias' word but matched 'computacion'.");
                }
                console.log('-----------------------------------');
            }
        } catch(e) {
            // ignore
        }
    }
}

search();
