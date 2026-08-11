const fs = require('fs');
const dec966 = fs.readFileSync('Bibliografia/08 - Decreto 966-19 - Manual de redaccion admin_extracted.txt', 'utf8');

const nombresIdx = dec966.indexOf('NOMBRES');
console.log('=== NOMBRES section ===');
console.log(dec966.substring(nombresIdx - 100, nombresIdx + 900));

const firmaIdx = dec966.indexOf('FIRMA');
console.log('\n=== FIRMA section ===');
console.log(dec966.substring(firmaIdx, firmaIdx + 900));

// Find CONSIDERANDO rule (in the body of the manual, not the preamble)
// Try various patterns
const patterns = ['CONSIDERANDO', 'La palabra', 'la palabra'];
for (const p of patterns) {
  let idx = 0;
  while (true) {
    const found = dec966.indexOf(p, idx);
    if (found < 0) break;
    idx = found + 1;
    if (found > 5000) {
      console.log('\n=== Found "' + p + '" at idx ' + found + ' ===');
      console.log(dec966.substring(found - 100, found + 600));
      break;
    }
  }
}
