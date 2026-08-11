const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR DECRETO 1843/17 PUNTO XII LITERAL TEXT ===\n');

function searchDec1843(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!f.includes('node_modules') && !f.includes('.git')) searchDec1843(fullPath);
    } else if (f.endsWith('.txt') || f.endsWith('.md')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.includes('1843') || text.includes('Capacitación') || text.includes('punto XII')) {
        const lines = text.split('\n');
        lines.forEach((l, idx) => {
          const lLower = l.toLowerCase();
          if (lLower.includes('1843') || lLower.includes('xii') || (lLower.includes('capacita') && lLower.includes('decreto'))) {
            console.log(`[${f} L${idx + 1}]: ${l.trim().substring(0, 160)}`);
          }
        });
      }
    }
  }
}

searchDec1843('d:\\proyecto');
