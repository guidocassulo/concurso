const fs = require('fs');

const guidoTxt = fs.readFileSync('d:\\proyecto\\scratch\\proyecto_guido_reducido.txt', 'utf8');
const gabyTxt = fs.readFileSync('d:\\proyecto\\scratch\\proyecto_gaby.txt', 'utf8');

console.log('=== STRUCTURAL COMPARISON OF GUIDO VS GABY PROJECTS ===\n');

console.log('--- GUIDO PROJECT SUMMARY (46,030 chars) ---');
console.log('First 1500 chars:');
console.log(guidoTxt.substring(0, 1500));

console.log('\n--------------------------------------------------\n');

console.log('--- GABY PROJECT SUMMARY (45,088 chars) ---');
console.log('First 1500 chars:');
console.log(gabyTxt.substring(0, 1500));
