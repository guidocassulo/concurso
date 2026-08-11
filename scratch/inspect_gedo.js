const fs = require('fs');

async function checkPages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'C:\\Users\\gcassulo\\Downloads\\COPDI-2026-00488010-MUNIMDP-DTTGRH%SLTH.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  
  console.log('Total Pages in GEDO Document:', doc.numPages);
  
  for (let i = 1; i <= Math.min(10, doc.numPages); i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    console.log(`Page ${i} operators count:`, ops.fnArray.length);
  }
}

checkPages().catch(err => console.error(err));
