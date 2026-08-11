const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');

console.log('=== BLOQUE 4 COMPARISON ===\n');

function getQ(text, qNum) {
  const startStr = `#### ${qNum}.`;
  const idx = text.indexOf(startStr);
  if (idx === -1) return 'NOT FOUND';
  const endIdx = text.indexOf('---', idx);
  return text.substring(idx, endIdx !== -1 ? endIdx : idx + 1500);
}

console.log('--- GUIDO P3 ---');
console.log(getQ(guido, 3));
console.log('\n--- GABY P3 ---');
console.log(getQ(gaby, 3));
console.log('\n--- VERO P3 ---');
console.log(getQ(vero, 3));

console.log('\n=========================================\n');

console.log('--- GUIDO P4 ---');
console.log(getQ(guido, 4));
console.log('\n--- GABY P4 ---');
console.log(getQ(gaby, 4));
console.log('\n--- VERO P4 ---');
console.log(getQ(vero, 4));
