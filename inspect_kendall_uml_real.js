const fs = require('fs');

const text = fs.readFileSync("D:\\proyecto\\25 - Analisis y Diseno de Sistemas - Kendall - 8va_text.txt", "utf8");
const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');

const terms = [
    { name: "Diagrama de casos de uso", query: "diagrama de casos de uso" },
    { name: "Diagrama de clases", query: "diagrama de clases" },
    { name: "Diagrama de secuencia", query: "diagrama de secuencia" },
    { name: "Diagrama de actividades", query: "diagrama de actividades" },
    { name: "Diagrama de comunicacion", query: "diagrama de comunicacion" },
    { name: "Diagrama de estados", query: "diagrama de estados" }
];

console.log("Searching Kendall for UML terms...");
for (const item of terms) {
    let matches = [];
    let idx = normalizedText.indexOf(item.query);
    while (idx !== -1) {
        matches.push(idx);
        idx = normalizedText.indexOf(item.query, idx + 1);
    }
    
    console.log(`Term "${item.name}" found ${matches.length} times.`);
    if (matches.length > 0) {
        // Print the last match or one of the middle matches (which are likely in the body of the chapter, not table of contents)
        const bodyMatch = matches[matches.length - 1]; // last one
        console.log(`Snippet for last match at index ${bodyMatch}:`);
        console.log(text.substring(bodyMatch - 100, bodyMatch + 400).replace(/\r?\n/g, ' '));
        console.log("-----------------------------------");
    }
}
