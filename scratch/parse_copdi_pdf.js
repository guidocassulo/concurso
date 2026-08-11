const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfPath = 'C:\\Users\\gcassulo\\Downloads\\COPDI-2026-00488010-MUNIMDP-DTTGRH%SLTH.pdf';
console.log('=== PARSING PDF WITH PDF-PARSE ===\n');

const dataBuffer = fs.readFileSync(pdfPath);

pdfParse(dataBuffer).then(function(data) {
  console.log('Pages:', data.numpages);
  console.log('Info:', data.info);
  console.log('Text length:', data.text.length);
  
  fs.writeFileSync('scratch/copdi_real_text.txt', data.text, 'utf8');
  console.log('\nSaved full extracted text to scratch/copdi_real_text.txt');
  
  console.log('\n=== FIRST 2000 CHARACTERS OF PDF ===');
  console.log(data.text.substring(0, 2000));
}).catch(function(err) {
  console.error('Error parsing PDF:', err);
});
