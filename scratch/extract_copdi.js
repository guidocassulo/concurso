const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pdfPath = 'C:\\Users\\gcassulo\\Downloads\\COPDI-2026-00488010-MUNIMDP-DTTGRH%SLTH.pdf';
console.log('=== EXTRACTING PDF TEXT FROM:', pdfPath, '===\n');

// Let's check python or node pdf tools or pdftotext
try {
  // Let's try pdftotext if available or node pdf-parse
  const outPath = 'd:\\proyecto\\scratch\\copdi_extracted.txt';
  // Let's test if python pdftotext or python fitz works or use pdftotext binary
  const nodeCmd = `node -e "
    const fs = require('fs');
    // Read raw pdf buffer to look for text strings or streams
    const buf = fs.readFileSync('${pdfPath.replace(/\\/g, '\\\\')}');
    const text = buf.toString('utf8');
    console.log('PDF Raw length:', buf.length);
  "`;
  execSync(nodeCmd, { stdio: 'inherit' });
} catch (e) {
  console.log('Error in node test:', e.message);
}
