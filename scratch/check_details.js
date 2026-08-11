const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');
const corrector = fs.readFileSync('examen_corrector.md', 'utf8');

console.log('=== DETAILED INCONSISTENCY CHECK ===\n');

// 1. Check Bloque 1
console.log('--- BLOQUE 1 ANALYSIS ---');
// Let's check Gaby P7, P8, P9, P10
// In Gaby file, let's see why P8, P9, P10 are marked 0.
const gabyB1 = gaby.substring(gaby.indexOf('BLOQUE 1'), gaby.indexOf('BLOQUE 2'));
console.log('Gaby Bloque 1 text around P7-P10:');
console.log(gabyB1.substring(gabyB1.indexOf('7.')));

// Let's check Vero Bloque 1 around P7-P10
const veroB1 = vero.substring(vero.indexOf('BLOQUE 1'), vero.indexOf('BLOQUE 2'));
console.log('\nVero Bloque 1 text around P7-P10:');
console.log(veroB1.substring(veroB1.indexOf('7.')));
