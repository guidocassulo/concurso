const fs = require('fs');

console.log('=== SEARCHING LEY 14656 & BIBLIOGRAFIA FOR CONCURSO RULES ===\n');

const leyText = fs.readFileSync('d:\\proyecto\\Bibliografia\\09 - Ley 14656 - Nueva ley de empleo - Estatuto Municipal_extracted.txt', 'utf8');

const lines = leyText.split('\n');
lines.forEach((l, idx) => {
  const lower = l.toLowerCase();
  if (lower.includes('concurso') || lower.includes('antecedente') || lower.includes('capacitac')) {
    console.log(`L${idx + 1}: ${l.trim()}`);
  }
});
