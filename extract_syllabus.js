const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    console.log("Reading Decretos.pdf...");
    const dataBuffer = fs.readFileSync("D:\\Nueva carpeta\\2\\Decretos.pdf");
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    
    console.log("Searching for UML or Systems Design terms in Decretos.pdf...");
    const lines = result.text.split('\n');
    let found = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes('uml') || lines[i].toLowerCase().includes('diseno de sistemas') || lines[i].toLowerCase().includes('metodologias de analisis')) {
            console.log(`Line ${i}: ${lines[i]}`);
            // Print surrounding 15 lines
            for (let j = Math.max(0, i - 10); j < Math.min(lines.length, i + 30); j++) {
                console.log(`   [${j}] ${lines[j]}`);
            }
            console.log("=========================================");
            found = true;
            break; // just find the first match to locate the syllabus
        }
    }
    if (!found) {
        console.log("No specific syllabus line found with simple search.");
    }
}

run();
