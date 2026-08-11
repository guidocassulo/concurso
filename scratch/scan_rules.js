const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING ALL FILES FOR CONCURSO RULES & PAUTAS ===\n');

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!f.includes('node_modules') && !f.includes('.git')) {
        scanDir(fullPath);
      }
    } else {
      if (f.endsWith('.txt') || f.endsWith('.md') || f.endsWith('.docx') || f.endsWith('.pdf')) {
        const fLower = f.toLowerCase();
        if (fLower.includes('concurso') || fLower.includes('pauta') || fLower.includes('reglamento') || fLower.includes('antecedente') || fLower.includes('circular') || fLower.includes('if-2026') || fLower.includes('decreto') || fLower.includes('llamado')) {
          console.log('Match File:', fullPath);
        }
      }
    }
  }
}

scanDir('d:\\proyecto');
scanDir('C:\\Users\\gcassulo\\Downloads');
