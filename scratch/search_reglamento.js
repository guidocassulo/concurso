const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR CONTEST REGULATIONS & ANTECEDENTES SCORING RULES ===\n');

function searchInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.endsWith('.txt') || f.endsWith('.md')) {
      const fullPath = path.join(dir, f);
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.toLowerCase().includes('antecedentes') || text.toLowerCase().includes('título') || text.toLowerCase().includes('capacitac')) {
        console.log('Found file:', f);
        // Look for point tables or rules
        const lines = text.split('\n');
        lines.forEach((line, idx) => {
          const lLower = line.toLowerCase();
          if (lLower.includes('antecedentes') || lLower.includes('título') || lLower.includes('capacitac') || lLower.includes('puntos') || lLower.includes('máximo')) {
            if (lLower.includes('puntos') || lLower.includes('ptos') || lLower.includes('hasta') || lLower.includes('máximo') || lLower.includes('escalafón') || lLower.includes('evaluación')) {
              console.log(`  [Line ${idx + 1}]: ${line.trim().substring(0, 150)}`);
            }
          }
        });
      }
    }
  }
}

searchInDir('d:\\proyecto');
searchInDir('d:\\proyecto\\Bibliografia');
