const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR COPDI-2026-00488010 FILE ===\n');

function findFile(dir, pattern) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.toLowerCase().includes(pattern.toLowerCase())) {
      const fullPath = path.join(dir, f);
      console.log('FOUND:', fullPath);
      return fullPath;
    }
  }
}

const searchDirs = [
  'C:\\Users\\gcassulo\\Downloads',
  'd:\\proyecto',
  'd:\\proyecto\\Bibliografia',
  'C:\\Users\\gcassulo'
];

let foundPath = null;
for (const d of searchDirs) {
  const p = findFile(d, 'COPDI-2026-00488010');
  if (p) {
    foundPath = p;
    break;
  }
}

if (!foundPath) {
  // Broad search in Downloads
  console.log('Searching all files in Downloads...');
  if (fs.existsSync('C:\\Users\\gcassulo\\Downloads')) {
    const files = fs.readdirSync('C:\\Users\\gcassulo\\Downloads');
    files.forEach(f => {
      if (f.includes('COPDI') || f.includes('00488010') || f.includes('SLTH') || f.includes('MUNIMDP') || f.endsWith('.pdf') || f.endsWith('.txt')) {
        console.log('Downloads file:', f);
      }
    });
  }
}
