const fs = require('fs');
const files = fs.readdirSync('d:/proyecto').filter(f => f.endsWith('.txt') || f.endsWith('.md'));

const keywords = ['idiom', 'castell', 'traduc', 'ingl', 'antecedent', 'certific', 'barem', 'validez', 'idioma nacional', 'document'];

files.forEach(f => {
  if (f.includes('Kendall')) return;
  const content = fs.readFileSync('d:/proyecto/' + f, 'utf8');
  keywords.forEach(kw => {
    let idx = 0;
    while ((idx = content.toLowerCase().indexOf(kw, idx)) !== -1) {
      console.log('[' + f + '] (' + kw + '): ...' + content.substring(Math.max(0, idx - 80), Math.min(content.length, idx + 120)).replace(/\r?\n/g, ' ') + '...');
      idx += kw.length + 80;
    }
  });
});
