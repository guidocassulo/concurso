const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    console.log("Reading Decreto 2250...");
    const dataBuffer = fs.readFileSync("D:\\Nueva carpeta\\2\\07 - Decreto 2250 - Grupo Ocupacional Computacion.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    
    console.log("Running regex search...");
    const text = result.text;
    
    // Search for "METODOLOGIAS" case-insensitively
    const regex1 = /metodologias/i;
    const match1 = text.match(regex1);
    if (match1) {
        console.log("Matched 'metodologias' at index:", match1.index);
        console.log(text.substring(match1.index - 50, match1.index + 200).replace(/\r?\n/g, ' '));
    } else {
        console.log("No match for 'metodologias'");
    }
    
    // Search for "UML" case-insensitively
    const regex2 = /uml/i;
    const match2 = text.match(regex2);
    if (match2) {
        console.log("Matched 'UML' at index:", match2.index);
        console.log(text.substring(match2.index - 50, match2.index + 200).replace(/\r?\n/g, ' '));
    } else {
        console.log("No match for 'UML'");
    }
}

run();
