const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING EXACT NORMATIVE CITATIONS FOR CONTEST SCORING SCALE ===\n');

function searchCitations(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!f.includes('node_modules') && !f.includes('.git')) searchCitations(fullPath);
    } else if (f.endsWith('.txt') || f.endsWith('.md')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.includes('antecedente') || text.includes('evaluación') || text.includes('oposición') || text.includes('título')) {
        const lines = text.split('\n');
        lines.forEach((l, idx) => {
          const lLower = l.toLowerCase();
          if ((lLower.includes('antecedente') || lLower.includes('oposici') || lLower.includes('título') || lLower.includes('capacita')) && (lLower.includes('puntos') || lLower.includes('máximo') || lLower.includes('hasta') || lLower.includes('porcentaje') || lLower.includes('%') || lLower.includes('baremo'))) {
            console.log(`[${f} L${idx + 1}]: ${l.trim().substring(0, 160)}`);
          }
        });
      }
    }
  }
}

searchCitations('d:\\proyecto');
