const fs = require('fs');

const text = fs.readFileSync('d:\\proyecto\\scratch\\dec1843_direct_pdf_ocr.txt', 'utf8');

const pages = text.split('=== Page ');

for (let i = 1; i < pages.length; i++) {
  const pNum = parseInt(pages[i].substring(0, 3));
  if (pNum === 11 || pNum === 12) {
    console.log(`==================== PAGE ${pNum} ====================`);
    console.log(pages[i]);
  }
}
