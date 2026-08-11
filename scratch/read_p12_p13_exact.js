const fs = require('fs');

const text = fs.readFileSync('d:\\proyecto\\scratch\\dec1843_direct_pdf_ocr.txt', 'utf8');

console.log('=== EXACT TEXT OF PAGE 12 AND 13 ON MATERIAS APROBADAS ===\n');

const p12 = text.indexOf('=== Page 12');
const p14 = text.indexOf('=== Page 14');

if (p12 !== -1 && p14 !== -1) {
  console.log(text.substring(p12, p14));
}
