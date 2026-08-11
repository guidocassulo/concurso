const fs = require('fs');
const path = require('path');

async function fixBmps() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const outDir = 'd:\\proyecto\\scratch\\dec1843_pages_fixed';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();

    for (let j = 0; j < ops.fnArray.length; j++) {
      if (ops.fnArray[j] === pdfjsLib.OPS.paintJpegXObject || ops.fnArray[j] === pdfjsLib.OPS.paintImageXObject) {
        const imgName = ops.argsArray[j][0];
        const imgObj = await new Promise(res => page.objs.get(imgName, res));
        if (imgObj && imgObj.data) {
          const width = imgObj.width;
          const height = imgObj.height;

          // Standard top-down 8bpp BMP
          const rowSize = Math.floor((width * 8 + 31) / 32) * 4;
          const pixelArraySize = rowSize * height;
          const fileHeaderSize = 14;
          const ihSize = 40;
          const paletteSize = 256 * 4;
          const fileSize = fileHeaderSize + ihSize + paletteSize + pixelArraySize;

          const buf = Buffer.alloc(fileSize);
          buf.write('BM', 0);
          buf.writeUInt32LE(fileSize, 2);
          buf.writeUInt32LE(fileHeaderSize + ihSize + paletteSize, 10);
          buf.writeUInt32LE(ihSize, 14);
          buf.writeInt32LE(width, 18);
          buf.writeInt32LE(height, 22); // positive height = bottom-up standard BMP
          buf.writeUInt16LE(1, 26);
          buf.writeUInt16LE(8, 28);
          buf.writeUInt32LE(0, 30);
          buf.writeUInt32LE(pixelArraySize, 34);

          // Standard Grayscale Palette
          for (let k = 0; k < 256; k++) {
            const pIdx = fileHeaderSize + ihSize + k * 4;
            buf[pIdx] = k;
            buf[pIdx + 1] = k;
            buf[pIdx + 2] = k;
            buf[pIdx + 3] = 0;
          }

          // Bottom-up pixel copy (standard BMP)
          const offset = fileHeaderSize + ihSize + paletteSize;
          for (let y = 0; y < height; y++) {
            const srcRow = y * width;
            const dstRow = (height - 1 - y) * rowSize;
            for (let x = 0; x < width; x++) {
              buf[offset + dstRow + x] = imgObj.data[srcRow + x];
            }
          }

          const bmpPath = path.join(outDir, `page_${i}.bmp`);
          fs.writeFileSync(bmpPath, buf);
          console.log(`Saved fixed page ${i} BMP: ${width}x${height}`);
        }
      }
    }
  }
}

fixBmps().catch(e => console.error(e));
