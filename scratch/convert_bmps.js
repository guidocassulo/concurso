
const fs = require('fs');
const path = require('path');

// Pure JS BMP Encoder for Grayscale / RGB
function createBmp(width, height, data, kind) {
  // kind 1 = GRAYSCALE 1bpp or 8bpp, kind 2 = RGB 24bpp
  const rowSize = Math.floor((width * 8 + 31) / 32) * 4;
  const pixelArraySize = rowSize * height;
  const fileHeaderSize = 14;
  const ihSize = 40;
  const paletteSize = 256 * 4;
  const fileSize = fileHeaderSize + ihSize + paletteSize + pixelArraySize;

  const buf = Buffer.alloc(fileSize);
  
  // File Header
  buf.write('BM', 0);
  buf.writeUInt32LE(fileSize, 2);
  buf.writeUInt32LE(fileHeaderSize + ihSize + paletteSize, 10);

  // Info Header
  buf.writeUInt32LE(ihSize, 14);
  buf.writeInt32LE(width, 18);
  buf.writeInt32LE(-height, 22); // top-down
  buf.writeUInt16LE(1, 26); // planes
  buf.writeUInt16LE(8, 28); // bpp = 8
  buf.writeUInt32LE(0, 30); // compression
  buf.writeUInt32LE(pixelArraySize, 34);

  // Palette (Grayscale)
  for (let i = 0; i < 256; i++) {
    const pIdx = fileHeaderSize + ihSize + i * 4;
    buf[pIdx] = i;     // B
    buf[pIdx + 1] = i; // G
    buf[pIdx + 2] = i; // R
    buf[pIdx + 3] = 0; // A
  }

  // Pixels
  const offset = fileHeaderSize + ihSize + paletteSize;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = y * width + x;
      const dstIdx = offset + y * rowSize + x;
      buf[dstIdx] = data[srcIdx];
    }
  }

  return buf;
}

async function convertAll() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const imgDir = 'd:\\proyecto\\scratch\\dec1843_bmps';
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    for (let j = 0; j < ops.fnArray.length; j++) {
      if (ops.fnArray[j] === pdfjsLib.OPS.paintJpegXObject || ops.fnArray[j] === pdfjsLib.OPS.paintImageXObject) {
        const imgName = ops.argsArray[j][0];
        const imgObj = await new Promise(res => page.objs.get(imgName, res));
        if (imgObj && imgObj.data) {
          const bmpBuf = createBmp(imgObj.width, imgObj.height, imgObj.data, imgObj.kind);
          const bmpPath = path.join(imgDir, `page_${i}.bmp`);
          fs.writeFileSync(bmpPath, bmpBuf);
          console.log(`Saved ${bmpPath}`);
        }
      }
    }
  }
}

convertAll().catch(e => console.error(e));
