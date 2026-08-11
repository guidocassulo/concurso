const fs = require('fs');

async function main() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'C:\\Users\\gcassulo\\Downloads\\COPDI-2026-00488010-MUNIMDP-DTTGRH%SLTH.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log('PDF Loaded! Total pages:', doc.numPages);
  
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += `--- PAGE ${i} ---\n` + pageText + '\n\n';
  }
  
  fs.writeFileSync('scratch/copdi_real_text.txt', fullText, 'utf8');
  console.log('Saved extracted text. Total length:', fullText.length);
  console.log('\n=== FIRST 2500 CHARACTERS ===\n');
  console.log(fullText.substring(0, 2500));
}

main().catch(err => console.error(err));
