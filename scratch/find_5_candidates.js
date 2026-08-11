const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR ALL CANDIDATES AND EXAM FILES ===\n');

function scanExamenes(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      scanExamenes(fullPath);
    } else {
      console.log('Found exam file:', fullPath);
    }
  });
}

scanExamenes('d:\\proyecto\\examenes');

console.log('\nMain project files:');
fs.readdirSync('d:\\proyecto').forEach(f => {
  if (f.includes('examen') || f.includes('concurso') || f.includes('nota') || f.includes('tabla')) {
    console.log('  ', f);
  }
});
