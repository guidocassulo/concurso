const fs = require('fs');

const corrector = fs.readFileSync('examen_corrector.md', 'utf8');
const guido = fs.readFileSync('examen_guido.md', 'utf8');
const dec916 = fs.readFileSync('Bibliografia/06 - Decreto 916-20 - Delegacion de atribuciones_extracted.txt', 'utf8');

console.log('=== EXACT TEXT OF BLOQUE 2 PREGUNTA 2 IN EXAMEN CORRECTOR ===\n');
const idxCorr = corrector.indexOf('2. La firma de los actos administrativos');
if (idxCorr !== -1) {
  const nextIdx = corrector.indexOf('#### 3.', idxCorr);
  console.log(corrector.substring(idxCorr, nextIdx !== -1 ? nextIdx : idxCorr + 600));
} else {
  // Search Bloque 2 area
  const b2Idx = corrector.indexOf('BLOQUE 2');
  console.log(corrector.substring(b2Idx, b2Idx + 1500));
}

console.log('\n=== EXACT TEXT OF DECRETO 916/20 ARTICULO 2 INCISO 6 ===\n');
const idxDec = dec916.indexOf('La firma de los actos administrativos relacionados con el personal');
if (idxDec !== -1) {
  console.log(dec916.substring(idxDec - 30, idxDec + 400));
}

console.log('\n=== EXACT TEXT OF DECRETO 916/20 ARTICULO 6 ===\n');
const idxArt6 = dec916.indexOf('ARTÍCULO 6º');
if (idxArt6 !== -1) {
  console.log(dec916.substring(idxArt6, idxArt6 + 400));
}
