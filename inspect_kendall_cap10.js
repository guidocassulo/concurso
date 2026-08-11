const fs = require('fs');

const text = fs.readFileSync("D:\\proyecto\\25 - Analisis y Diseno de Sistemas - Kendall - 8va_text.txt", "utf8");
const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');

// Find where Cap 10 starts in the body (not TOC)
// Cap 10 starts with "10" and then "ANALISIS Y DISEÑO DE SISTEMAS ORIENTADOS A OBJETOS..."
// Let's search for "capitulo 10" or "analisis y diseno de sistemas orientados a objetos mediante el uso de uml" after character index 100000.
let startPos = normalizedText.indexOf("analisis y diseno de sistemas orientados a objetos mediante el uso de uml", 50000);
if (startPos !== -1) {
    console.log("Capítulo 10 body found at character:", startPos);
    // Find all occurrences of "diagrama de" in Cap 10 (say 150,000 characters from startPos)
    const capText = normalizedText.substring(startPos, startPos + 150000);
    const originalCapText = text.substring(startPos, startPos + 150000);
    
    // Find terms like "diagrama de..."
    const regex = /diagrama de [a-z]+/gi;
    let match;
    const foundDiagrams = new Set();
    while ((match = regex.exec(originalCapText)) !== null) {
        foundDiagrams.add(match[0].toLowerCase().trim());
    }
    
    console.log("Diagram terms found in Cap 10:");
    console.log(Array.from(foundDiagrams));
} else {
    console.log("Cap 10 start pos not found.");
}
