const fs = require('fs');

const text = fs.readFileSync('d:\\proyecto\\actas\\Acta inicial_extracted.txt', 'utf8');

console.log('=== SEARCHING ALL POSTULANTES / PARTICIPANTES IN ACTA INICIAL ===\n');

const lines = text.split('\n');
lines.forEach((l, idx) => {
  const lLower = l.toLowerCase();
  if (lLower.includes('postulante') || lLower.includes('inscript') || lLower.includes('nómina') || lLower.includes('participante') || lLower.includes('legajo')) {
    console.log(`L${idx + 1}: ${l.trim().substring(0, 160)}`);
  }
});
