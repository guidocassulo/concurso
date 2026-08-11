const fs = require('fs');

async function extractDec1843() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2 Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  
  if (!fs.existsSync(pdfPath)) {
    console.error('File not found:', pdfPath);
    return;
  }
  
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  console.log('Decreto 1843/17 PDF Loaded! Total pages:', doc.numPages);
  
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += `--- PAGE ${i} ---\n` + pageText + '\n\n';
  }
  
  fs.writeFileSync('d:\\proyecto\\scratch\\dec1843_full_text.txt', fullText, 'utf8');
  console.log('Saved extracted text to scratch/dec1843_full_text.txt! Length:', fullText.length);
  
  // Search for Punto XII or Antecedentes or Puntaje or Capacitación
  const lines = fullText.split('\n');
  lines.forEach((l, idx) => {
    const lLower = l.toLowerCase();
    if (lLower.includes('xii') || lLower.includes('antecedente') || lLower.includes('capacita') || lLower.includes('título') || lLower.includes('puntaje') || lLower.includes('baremo')) {
      console.log(`[L${idx + 1}]: ${l.trim().substring(0, 160)}`);
    }
  });
}

extractDec1843().catch(err => console.error(err));
