const fs = require('fs');

async function inspectLastPages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'C:\\Users\\gcassulo\\Downloads\\COPDI-2026-00488010-MUNIMDP-DTTGRH%SLTH.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  
  console.log('Total Pages:', doc.numPages);
  
  for (let i = doc.numPages - 5; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const txt = content.items.map(item => item.str).join(' ');
    console.log(`\n--- PAGE ${i} ---`);
    console.log(txt);
  }
}

inspectLastPages().catch(err => console.error(err));
