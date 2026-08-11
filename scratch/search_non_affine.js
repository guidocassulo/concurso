const fs = require('fs');

const text = fs.readFileSync('d:\\proyecto\\scratch\\dec1843_direct_pdf_ocr.txt', 'utf8');

console.log('=== SEARCHING FOR NON-AFFINE COURSES / WORKSHOPS IN DECRETO 1843/17 ===\n');

const lines = text.split('\n');
lines.forEach((l, idx) => {
  const lLower = l.toLowerCase();
  if (lLower.includes('no afí') || lLower.includes('no afin') || lLower.includes('4.1') || lLower.includes('4.3') || lLower.includes('otros') || lLower.includes('seminario')) {
    console.log(`[L${idx + 1}]: ${l.trim()}`);
  }
});
