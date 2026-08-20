const fs = require('fs');

async function inspectPages() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(fs.readFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf'));
  const doc = await pdfjs.getDocument({ data }).promise;
  console.log('Total pages in PDF:', doc.numPages);
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 1.0 });
    const content = await page.getTextContent();
    const str = content.items.map(it => it.str).join(' ').replace(/\s+/g, ' ').trim();
    console.log('Page ' + i + ': [' + viewport.width.toFixed(1) + ' x ' + viewport.height.toFixed(1) + ', rot: ' + page.rotate + '] -> ' + str.substring(0, 120));
  }
}

inspectPages().catch(console.error);
