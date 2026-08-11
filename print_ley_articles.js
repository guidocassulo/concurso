const fs = require('fs');
const text = fs.readFileSync('ley14656_text.txt', 'utf8');

// Function to find exact text around an article
function getArticleBlock(artNum) {
    const regex = new RegExp(`ART[ÍI]CULO\\s+${artNum}\\b`, 'i');
    const match = text.match(regex);
    if (!match) return `Artículo ${artNum} no encontrado.`;
    
    const startIdx = match.index;
    // Find next article or end of text
    const nextArtNum = artNum + 1;
    const nextRegex = new RegExp(`ART[ÍI]CULO\\s+${nextArtNum}\\b`, 'i');
    const nextMatch = text.match(nextRegex);
    
    let endIdx = text.length;
    if (nextMatch) {
        endIdx = nextMatch.index;
    }
    
    return text.substring(startIdx, endIdx).trim();
}

console.log("=== ARTÍCULOS CLAVE DE LEY 14656 ===");
const articlesToPrint = [3, 6, 19, 25, 47, 50, 51, 52, 53, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
articlesToPrint.forEach(num => {
    console.log(`\n-------------------`);
    console.log(getArticleBlock(num));
});

console.log("\n=== BUSCAR TÉRMINO 'PRESCRI' ===");
const regexPrescri = /prescri[a-z]*/gi;
let m;
while ((m = regexPrescri.exec(text)) !== null) {
    const start = Math.max(0, m.index - 100);
    const end = Math.min(text.length, m.index + 200);
    console.log(`Match at index ${m.index}:\n${text.substring(start, end).replace(/\n/g, ' ')}\n`);
}

console.log("\n=== BUSCAR TÉRMINO 'INCOMPATIB' ===");
const regexIncompat = /incompatib[a-z]*/gi;
while ((m = regexIncompat.exec(text)) !== null) {
    const start = Math.max(0, m.index - 100);
    const end = Math.min(text.length, m.index + 200);
    console.log(`Match at index ${m.index}:\n${text.substring(start, end).replace(/\n/g, ' ')}\n`);
}
