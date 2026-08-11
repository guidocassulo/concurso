const fs = require('fs');
const text = fs.readFileSync('scratch/copdi_extracted.txt', 'utf8');

console.log('=== SEARCHING FOR KEYWORDS IN COPDI PDF ===\n');

const keywords = ['cassulo', 'lópez', 'lopez', 'verónica', 'veronica', 'vattimo', 'jefe', 'sistemas', 'legajo', '25646', '36484'];

keywords.forEach(kw => {
  let count = 0;
  let idx = 0;
  while (true) {
    const found = text.toLowerCase().indexOf(kw, idx);
    if (found === -1) break;
    count++;
    if (count <= 5) {
      console.log(`Keyword "${kw}" at ${found}:`, text.substring(Math.max(0, found - 60), found + 180).replace(/\s+/g, ' '));
    }
    idx = found + kw.length;
  }
  console.log(`Total count for "${kw}": ${count}\n-----------------------------------`);
});
