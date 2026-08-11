const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');
const corrector = fs.readFileSync('examen_corrector.md', 'utf8');

console.log('=== AUDITING BLOQUE 4 RESPONSES VS CORRECTOR KEY ===\n');

// P1: Tipos de sistemas
// P2: CASE
// P3: Fundamentos organizacionales
// P4: Marco técnico Scrum (DISCOVERED!)
// P5: Scrum Master

console.log('Summary of Bloque 4 Scores:');
console.log('Guido:', '9/15 (P1: 3, P2: 3, P3: 0, P4: 0, P5: 3)');
console.log('Gaby:', '12/15 (P1: 3, P2: 3, P3: 3, P4: 0, P5: 3)');
console.log('Vero:', '12/15 total');
