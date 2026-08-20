const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function extractP11() {
  const src = await PDFDocument.load(fs.readFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Final.pdf'));
  const dst = await PDFDocument.create();
  const [p11] = await dst.copyPages(src, [10]); // index 10 = page 11
  dst.addPage(p11);
  fs.writeFileSync('d:/proyecto/scratch/extracted_page_11.pdf', await dst.save());
  console.log('Extracted page 11 to d:/proyecto/scratch/extracted_page_11.pdf');
}
extractP11();
