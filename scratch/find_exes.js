const fs = require('fs');
const path = require('path');

console.log('=== SEARCHING FOR PYTHON OR TESSERACT EXES ===\n');

function findExes(dir) {
  if (!fs.existsSync(dir)) return;
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      if (f.toLowerCase().includes('python.exe') || f.toLowerCase().includes('tesseract.exe')) {
        console.log('FOUND EXE:', path.join(dir, f));
      }
    }
  } catch (e) {}
}

findExes('C:\\Program Files');
findExes('C:\\Program Files (x86)');
findExes('C:\\Users\\gcassulo\\AppData\\Local\\Programs\\Python');
findExes('C:\\Users\\gcassulo\\AppData\\Local\\Programs');
