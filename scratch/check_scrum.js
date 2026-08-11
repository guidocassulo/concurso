const fs = require('fs');
const files = fs.readdirSync('Bibliografia');
console.log('Files in Bibliografia:', files);

const scrumFile = files.find(f => f.toLowerCase().includes('scrum'));
if (scrumFile) {
  const text = fs.readFileSync('Bibliografia/' + scrumFile, 'utf8');
  console.log('Scrum text length:', text.length);
  
  let idx = 0;
  while (true) {
    const found = text.toLowerCase().indexOf('marco técnico', idx);
    if (found === -1) break;
    console.log('\n--- FOUND "marco técnico" at index ' + found + ' ---');
    console.log(text.substring(found - 100, found + 1200));
    idx = found + 15;
  }
}
