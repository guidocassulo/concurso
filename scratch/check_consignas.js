const fs = require('fs');

const corrector = fs.readFileSync('examen_corrector.md', 'utf8');

console.log('=== EXACT INSTRUCTIONS (CONSIGNAS) IN EXAMEN CORRECTOR ===\n');

function printConsignas(blockName) {
  console.log(`\n--- CONSIGNA FOR ${blockName} ---`);
  const idx = corrector.indexOf(blockName);
  if (idx !== -1) {
    console.log(corrector.substring(idx, idx + 600));
  } else {
    console.log('BLOCK NOT FOUND');
  }
}

printConsignas('BLOQUE 1');
printConsignas('BLOQUE 2');
printConsignas('BLOQUE 3');
printConsignas('BLOQUE 4');
