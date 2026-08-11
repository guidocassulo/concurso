const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR PARTICIPANTES 4 AND 10 ===\n');

function scanFor4and10(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!f.includes('node_modules') && !f.includes('.git')) scanFor4and10(fullPath);
    } else if (f.endsWith('.txt') || f.endsWith('.md')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.includes('4') || text.includes('10')) {
        const lines = text.split('\n');
        lines.forEach((l, idx) => {
          const lLower = l.toLowerCase();
          if ((lLower.includes('participante') || lLower.includes('postulante') || lLower.includes('candidato') || lLower.includes('examen')) && (lLower.includes('4') || lLower.includes('10') || lLower.includes('cuatro') || lLower.includes('diez'))) {
            console.log(`[${f} L${idx + 1}]: ${l.trim().substring(0, 160)}`);
          }
        });
      }
    }
  }
}

scanFor4and10('d:\\proyecto');
