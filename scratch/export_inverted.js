const fs = require('fs');
const path = require('path');

async function exportInverted() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'D:\\Nueva carpeta\\2\\Dec. Nº 1843-17 - Régimen Llamado a Concursos.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const outDir = 'd:\\proyecto\\scratch\\dec1843_inverted';
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

          const rowSize = Math.floor((width * 24 + 31) / 32) * 4;
          const pixelArraySize = rowSize * height;
          const fileHeaderSize = 14;
          const ihSize = 40;
          const fileSize = fileHeaderSize + ihSize + pixelArraySize;

          const buf = Buffer.alloc(fileSize);
          buf.write('BM', 0);
          buf.writeUInt32LE(fileSize, 2);
          buf.writeUInt32LE(fileHeaderSize + ihSize, 10);
          buf.writeUInt32LE(ihSize, 14);
          buf.writeInt32LE(width, 18);
          buf.writeInt32LE(height, 22);
          buf.writeUInt16LE(1, 26);
          buf.writeUInt16LE(24, 28);
          buf.writeUInt32LE(0, 30);
          buf.writeUInt32LE(pixelArraySize, 34);

          const offset = fileHeaderSize + ihSize;
          for (let y = 0; y < height; y++) {
            const srcRow = y * width;
            const dstRow = (height - 1 - y) * rowSize;
            for (let x = 0; x < width; x++) {
              // INVERT BYTE: 255 - val
              const val = 255 - imgObj.data[srcRow + x];
              const dstIdx = offset + dstRow + x * 3;
              buf[dstIdx] = val;
              buf[dstIdx + 1] = val;
              buf[dstIdx + 2] = val;
            }
          }

          const bmpPath = path.join(outDir, `page_${i}.bmp`);
          fs.writeFileSync(bmpPath, buf);
          console.log(`Saved inverted 24bpp page ${i} BMP: ${width}x${height}`);
        }
      }
    }
  }
}

exportInverted().catch(e => console.error(e));
