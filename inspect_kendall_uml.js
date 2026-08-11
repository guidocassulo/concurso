const fs = require('fs');

const text = fs.readFileSync("D:\\proyecto\\25 - Analisis y Diseno de Sistemas - Kendall - 8va_text.txt", "utf8");
const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ');

// Look for UML diagrams in Capítulo 10
// We know Cap 10 starts around page index 281 in the PDF or near character index where "10 analisis y diseno de sistemas orientados a objetos" is.
const idxCap10 = normalizedText.indexOf("10 analisis y diseno de sistemas orientados a objetos mediante el uso de uml");
if (idxCap10 !== -1) {
    console.log(`Matched Cap 10 start at index ${idxCap10}`);
    // Search for types of UML diagrams from this point onwards
    const terms = [
        "diagrama de casos de uso",
        "diagrama de clases",
        "diagrama de secuencia",
        "diagrama de actividades",
        "diagrama de comunicacion",
        "diagrama de estados",
        "diagrama de colaboracion",
        "diagrama de componentes",
        "diagrama de despliegue"
    ];
    
    const subText = normalizedText.substring(idxCap10, idxCap10 + 200000); // 200k chars is plenty
    for (const term of terms) {
        let subIdx = subText.indexOf(term);
        if (subIdx !== -1) {
            console.log(`Found "${term}" in Cap 10:`);
            const realIdx = idxCap10 + subIdx;
            console.log(text.substring(realIdx - 50, realIdx + 300).replace(/\r?\n/g, ' '));
            console.log("-----------------------------------");
        } else {
            console.log(`Not found in Cap 10: "${term}"`);
        }
    }
} else {
    console.log("Capítulo 10 header not found.");
}
