const fs = require('fs');

const corrector = fs.readFileSync('examen_corrector.md', 'utf8');
const dec916 = fs.readFileSync('Bibliografia/06 - Decreto 916-20 - Delegacion de atribuciones_extracted.txt', 'utf8');

// Extract statement
const idxCorr = corrector.indexOf('2. La firma de los actos administrativos');
const statement = corrector.substring(idxCorr + 3, corrector.indexOf('- Verdadero', idxCorr)).trim();

// Extract Dec 916/20 Art 2 inc 6
const idxDec = dec916.indexOf('6.- La firma de los actos administrativos');
const decText = dec916.substring(idxDec + 4, dec916.indexOf('7.- Aplicar', idxDec)).replace(/\s+/g, ' ').trim();

console.log('=== EXACT WORD-BY-WORD COMPARISON ===\n');

console.log('--- ENUNCIADO DEL EXAMEN ---');
console.log(statement);

console.log('\n--- DECRETO 916/20 ARTÍCULO 2º INCISO 6 ---');
console.log(decText);

console.log('\n--- DIFERENCIA CLAVE ---');
const word1 = "sin importar que";
const word2 = "siempre que";

console.log(`Exam contains: "${word1}"`);
console.log(`Decree contains: "${word2}"`);
