const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');
const corrector = fs.readFileSync('examen_corrector.md', 'utf8');

console.log('=== DETAILED BLOQUE 4 INSPECTION ===\n');

function printBlock4(name, text) {
  console.log(`==================== ${name} ====================`);
  const idx = text.indexOf('BLOQUE 4');
  if (idx !== -1) {
    console.log(text.substring(idx));
  } else {
    console.log('BLOQUE 4 NOT FOUND');
  }
}

printBlock4('GUIDO', guido);
printBlock4('GABY', gaby);
printBlock4('VERO', vero);
