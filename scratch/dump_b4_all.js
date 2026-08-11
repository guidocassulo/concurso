const fs = require('fs');

const corrector = fs.readFileSync('examen_corrector.md', 'utf8');
const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');

console.log('=== ULTRA AUDIT OF BLOQUE 4 (TECHNICAL BLOCK) ===\n');

function getBlock4Content(text, name) {
  console.log(`\n******************** ${name} BLOQUE 4 ********************`);
  const idx = text.indexOf('BLOQUE 4');
  if (idx !== -1) {
    console.log(text.substring(idx));
  } else {
    console.log('BLOQUE 4 NOT FOUND');
  }
}

getBlock4Content(corrector, 'EXAMEN CORRECTOR (CLAVE OFICIAL)');
getBlock4Content(guido, 'GUIDO CASSULO');
getBlock4Content(gaby, 'GABRIELA LÓPEZ');
getBlock4Content(vero, 'VERÓNICA');
