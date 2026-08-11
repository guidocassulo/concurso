const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');
const corrector = fs.readFileSync('examen_corrector.md', 'utf8');

console.log('=== STRICT OBJECTIVE SCORE AUDIT ===\n');

// 1. GUIDO AUDIT:
// Official Score: 24 pts
// B1: 9 / 10
// B2: 3 / 6 (5 V/F correct * 0.6 = 3.0 pts)
// B3: 3 / 4 (P1: 2.0, P2: 1.0)
// B4: 9 / 15 (P1: 3, P2: 3, P3: 0, P4: 0, P5: 3)
// Total = 9 + 3 + 3 + 9 = 24.0. Correct math.

// Let's check Guido B2 score in detail:
// Guido answered V/F:
// 1: V (0 pts) -> Correct key: V
// 2: V (0 pts) -> Correct key: F
// 3: F (0.6) -> Correct key: F
// 4: V (0.6) -> Correct key: V
// 5: F (0.6) -> Correct key: F
// 6: V (0 pts) -> Correct key: F
// 7: V (0 pts) -> Correct key: F
// 8: V (0.6) -> Correct key: F in doc, but V awarded by corrector!
// 9: V (0 pts) -> Correct key: F
// 10: V (0.6) -> Correct key: V
// Score = 0.6 * 5 = 3.0.

console.log('Guido B2 breakdown:');
console.log('Q1: V (key V) -> awarded 0. (Because cited LOM 70 instead of RAFAM 4)');
console.log('Q8: V (key F in doc) -> awarded 0.6! (Corrector key in doc says F, but corrector marked Guido V as correct)');

// 2. GABY AUDIT:
// Official Score: 23.3 pts
// B1: 6 / 10
// B2: 1.8 / 6 (3 V/F correct * 0.6 = 1.8 pts)
// B3: 3.5 / 4 (P1: 2.5, P2: 1.0)
// B4: 12 / 15 (P1: 3, P2: 3, P3: 3, P4: 0, P5: 3)
// Total = 6 + 1.8 + 3.5 + 12 = 23.3. Correct math.

// 3. VERO AUDIT:
// Official Score: 18 pts
// B1: 3 / 10
// B2: 0 / 6
// B3: 3 / 4 (P1: 2.5, P2: 0.5)
// B4: 12 / 15
// Total = 3 + 0 + 3 + 12 = 18.0. Correct math.
