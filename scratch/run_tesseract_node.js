const fs = require('fs');
const path = require('path');
const { createWorker } = require('tesseract.js');

console.log('=== RUNNING TESSERACT.JS OCR ON DECRETO 1843/17 ===\n');

async function ocrDecreto() {
  const worker = await createWorker('spa');
  
  const pageDir = 'd:\\proyecto\\scratch\\dec1843_pages';
  const files = fs.readdirSync(pageDir).filter(f => f.endsWith('.bmp')).sort((a, b) => {
    return parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, ''));
  });

  let fullText = '';

  for (const f of files) {
    const fullPath = path.join(pageDir, f);
    console.log(`Processing ${f}...`);
    try {
      const { data: { text } } = await worker.recognize(fullPath);
      console.log(`  ${f} extracted ${text.length} chars!`);
      fullText += `=== ${f} ===\n` + text + '\n\n';
    } catch (e) {
      console.error(`Error on ${f}:`, e.message);
    }
  }

  await worker.terminate();

  fs.writeFileSync('d:\\proyecto\\scratch\\dec1843_tesseract_ocr.txt', fullText, 'utf8');
  console.log('\n=== FINISHED! Saved to scratch/dec1843_tesseract_ocr.txt ===');
  console.log('Total length:', fullText.length);
  console.log('\n=== FIRST 2500 CHARACTERS ===\n');
  console.log(fullText.substring(0, 2500));
}

ocrDecreto().catch(err => console.error(err));
