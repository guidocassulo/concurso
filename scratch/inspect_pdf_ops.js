const fs = require('fs');

async function inspectPdfObjects() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  
  console.log('PDF Loaded! Pages:', doc.numPages);
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    console.log(`Page ${i}: ops = ${ops.fnArray.length}`);
    
    // Check if there are text items or images
    const textContent = await page.getTextContent();
    if (textContent.items.length > 0) {
      const txt = textContent.items.map(it => it.str).join(' ');
      console.log(`  Page ${i} text length:`, txt.length);
      if (txt.length > 20) {
        console.log(`  Snippet:`, txt.substring(0, 200));
      }
    }
  }
}

inspectPdfObjects().catch(err => console.error(err));
