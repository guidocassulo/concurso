const fs = require('fs');

const text = fs.readFileSync("D:\\proyecto\\25 - Analisis y Diseno de Sistemas - Kendall - 8va_text.txt", "utf8");
const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');

// Search for chapter names or parts of outline
const searchTerms = [
    { name: "Diagramas de flujo de datos", query: "diagramas de flujo de datos" },
    { name: "UML / Casos de uso", query: "casos de uso" },
    { name: "Diagrama de clases", query: "diagrama de clases" },
    { name: "Diagrama de secuencia", query: "diagrama de secuencia" },
    { name: "Kendall cap", query: "capitulo" }
];

console.log("Searching Kendall text...");
for (const item of searchTerms) {
    let idx = normalizedText.indexOf(item.query);
    if (idx !== -1) {
        console.log(`Matched "${item.name}" at index ${idx}:`);
        console.log(text.substring(idx - 100, idx + 400).replace(/\r?\n/g, ' '));
        console.log("-----------------------------------");
    } else {
        console.log(`No match for "${item.name}"`);
    }
}
