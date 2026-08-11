const fs = require('fs');
const text = fs.readFileSync('Bibliografia/26 - scrum-manager-alexander-menzinsky-gertrudis-lopez-juan-palacio_extracted.txt', 'utf8');

let idx = 0;
while (true) {
  const found = text.toLowerCase().indexOf('marco técnico', idx);
  if (found === -1) break;
  console.log('\n--- FOUND "marco técnico" at index ' + found + ' ---');
  console.log(text.substring(found - 100, found + 800));
  idx = found + 15;
}
