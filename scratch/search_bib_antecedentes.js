const fs = require('fs');
const path = require('path');

console.log('=== DETAILED SEARCH IN BIBLIOGRAFIA FOR ANTECEDENTES & REGLAMENTO ===\n');

const bibDir = 'd:\\proyecto\\Bibliografia';
const files = fs.readdirSync(bibDir);

files.forEach(f => {
  if (f.endsWith('_extracted.txt') || f.endsWith('.md')) {
    const text = fs.readFileSync(path.join(bibDir, f), 'utf8');
    const lines = text.split('\n');
    lines.forEach((l, idx) => {
      const lLower = l.toLowerCase();
      if (
        (lLower.includes('antecedente') || lLower.includes('concurso') || lLower.includes('evalua')) &&
        (lLower.includes('título') || lLower.includes('titulo') || lLower.includes('capacita') || lLower.includes('antigüedad') || lLower.includes('puntaje') || lLower.includes('puntos'))
      ) {
        console.log(`[${f} L${idx + 1}]: ${l.trim().substring(0, 160)}`);
      }
    });
  }
});
