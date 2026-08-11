const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR DECRETO 1843 IN ALL TEXT & PDF FILES ===\n');

function searchAll(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && !f.includes('node_modules') && !f.includes('.git')) {
      searchAll(full);
    } else if (f.endsWith('.txt') || f.endsWith('.md')) {
      const text = fs.readFileSync(full, 'utf8');
      if (text.includes('1843') || text.includes('LLAMADO A CONCURSO') || text.includes('Régimen Llamado')) {
        console.log('FOUND IN TEXT FILE:', full);
        const lines = text.split('\n');
        lines.forEach((l, idx) => {
          if (l.toLowerCase().includes('1843') || l.toLowerCase().includes('xii') || l.toLowerCase().includes('baremo')) {
            console.log(`  [L${idx + 1}]: ${l.trim().substring(0, 150)}`);
          }
        });
      }
    }
  }
}

searchAll('d:\\proyecto');
searchAll('D:\\Nueva carpeta');
