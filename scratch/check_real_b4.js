const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');

console.log('=== REAL BLOQUE 4 COMPARISON ===\n');

function getB4(text, name) {
  console.log(`\n==================== ${name} BLOQUE 4 ====================`);
  const idx = text.indexOf('BLOQUE 4');
  if (idx === -1) return;
  console.log(text.substring(idx));
}

getB4(guido, 'GUIDO');
getB4(gaby, 'GABY');
getB4(vero, 'VERO');
