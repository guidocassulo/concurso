const fs = require('fs');
const path = require('path');

async function extractImages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  
  const imgDir = 'd:\\proyecto\\scratch\\dec1843_images';
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
  
  console.log('PDF Loaded! Pages:', doc.numPages);
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    
    // Find Image XObjects in operators
    for (let j = 0; j < ops.fnArray.length; j++) {
      if (ops.fnArray[j] === pdfjsLib.OPS.paintJpegXObject || ops.fnArray[j] === pdfjsLib.OPS.paintImageXObject) {
        const imgName = ops.argsArray[j][0];
        try {
          const imgObj = await new Promise((resolve) => {
            page.objs.get(imgName, resolve);
          });
          
          if (imgObj) {
            console.log(`Page ${i} Image ${imgName}: width=${imgObj.width}, height=${imgObj.height}, kind=${imgObj.kind}`);
            if (imgObj.data) {
              // Write raw image data or convert RGBA to PNG
              const imgPath = path.join(imgDir, `page_${i}.png`);
              // Let's write a simple BMP or raw file if needed, or save PNG
              // If it's JPEG data
              fs.writeFileSync(path.join(imgDir, `page_${i}.raw`), Buffer.from(imgObj.data));
            }
          }
        } catch (e) {
          console.log(`Page ${i} error getting image:`, e.message);
        }
      }
    }
  }
}

extractImages().catch(err => console.error(err));
