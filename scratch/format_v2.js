const fs = require('fs');
const paras = JSON.parse(fs.readFileSync('scratch/current_v2_exact_dump.json', 'utf8'));

const lines = [];
paras.filter(p => p.text.trim().length > 0).forEach(p => {
  lines.push(`=== PÁRRAFO ${p.idx} ===\n${p.text}\n`);
});

fs.writeFileSync('scratch/v2_exact_readable.txt', lines.join('\n'), 'utf8');
console.log('Saved to scratch/v2_exact_readable.txt');
