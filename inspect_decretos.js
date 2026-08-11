const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    console.log("Reading Decretos.pdf...");
    const dataBuffer = fs.readFileSync("D:\\Nueva carpeta\\2\\Decretos.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    console.log("Parsing Decretos.pdf info...");
    const info = await parser.getInfo();
    console.log("Total pages:", info.total);
    
    console.log("Searching for keywords in Decretos.pdf...");
    const result = await parser.getText();
    await parser.destroy();
    
    // Find index of "METODOLOGIAS DE ANALISIS" (case and accent insensitive)
    const text = result.text;
    const cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    const term = "metodologias de analisis";
    let index = cleanText.indexOf(term);
    if (index !== -1) {
        console.log(`Found match at character index ${index}:`);
        console.log(text.substring(index - 200, index + 1000).replace(/\r?\n/g, ' '));
    } else {
        console.log("Term 'metodologias de analisis' not found.");
        // Try searching for "scrum"
        const scrumIndex = cleanText.indexOf("scrum");
        if (scrumIndex !== -1) {
            console.log(`Found 'scrum' at character index ${scrumIndex}:`);
            console.log(text.substring(scrumIndex - 200, scrumIndex + 1000).replace(/\r?\n/g, ' '));
        } else {
            console.log("Term 'scrum' not found either.");
        }
    }
}

run();
