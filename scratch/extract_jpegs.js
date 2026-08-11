const fs = require('fs');
const path = require('path');

console.log('=== EXTRACTING RAW JPEG STREAMS FROM PDF ===\n');

const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
const buf = fs.readFileSync(pdfPath);

const outDir = 'd:\\proyecto\\scratch\\dec1843_jpegs';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Search for JPEG headers: 0xFF 0xD8 0xFF ... 0xFF 0xD9
let count = 0;
let start = -1;

for (let i = 0; i < buf.length - 1; i++) {
  if (buf[i] === 0xFF && buf[i + 1] === 0xD8 && buf[i + 2] === 0xFF) {
    start = i;
  } else if (start !== -1 && buf[i] === 0xFF && buf[i + 1] === 0xD9) {
    const end = i + 2;
    const jpegBuf = buf.slice(start, end);
    if (jpegBuf.length > 20000) { // filter tiny icons
      count++;
      const imgPath = path.join(outDir, `page_${count}.jpg`);
      fs.writeFileSync(imgPath, jpegBuf);
      console.log(`Saved JPEG image ${count}: ${imgPath} (${jpegBuf.length} bytes)`);
    }
    start = -1;
  }
}

console.log(`\nTotal JPEGs extracted: ${count}`);
