const fs = require('fs');
const paragraphs = JSON.parse(fs.readFileSync('d:/proyecto/scratch/extracted_guido_final.json', 'utf8'));

console.log('=== SECCION 3: PRINCIPIOS DE GESTION ===');
paragraphs.filter(p => p.idx >= 50 && p.idx <= 90).forEach(p => {
  console.log(`[${p.idx}] ${p.text}\n`);
});
