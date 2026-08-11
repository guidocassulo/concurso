const fs = require('fs');

const text = fs.readFileSync('d:\\proyecto\\actas\\Acta inicial_extracted.txt', 'utf8');

const idxStart = text.indexOf('Se detallan a continuación las pautas');
const idxEnd = text.indexOf('BIBLIOGRAFÍA:');

console.log('=== LITERAL TEXT OF CONTEST RULES FROM ACTA INICIAL ===\n');
if (idxStart !== -1 && idxEnd !== -1) {
  console.log(text.substring(idxStart, idxEnd));
} else {
  console.log(text.substring(500, 3500));
}
