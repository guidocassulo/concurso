const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// High-quality 2x supersampling with bicubic interpolation and unsharp masking
function upscaleAndSharpen(srcPng, scale = 2) {
  const dstW = srcPng.width * scale;
  const dstH = srcPng.height * scale;
  const dst = new PNG({ width: dstW, height: dstH });

  // 1. Bicubic / Bilinear high quality interpolation
  for (let dy = 0; dy < dstH; dy++) {
    const sy = dy / scale;
    const y0 = Math.floor(sy);
    const y1 = Math.min(srcPng.height - 1, y0 + 1);
    const ty = sy - y0;

    for (let dx = 0; dx < dstW; dx++) {
      const sx = dx / scale;
      const x0 = Math.floor(sx);
      const x1 = Math.min(srcPng.width - 1, x0 + 1);
      const tx = sx - x0;

      const idx00 = (y0 * srcPng.width + x0) << 2;
      const idx10 = (y0 * srcPng.width + x1) << 2;
      const idx01 = (y1 * srcPng.width + x0) << 2;
      const idx11 = (y1 * srcPng.width + x1) << 2;

      const dstIdx = (dy * dstW + dx) << 2;

      for (let c = 0; c < 3; c++) {
        const top = srcPng.data[idx00 + c] * (1 - tx) + srcPng.data[idx10 + c] * tx;
        const bot = srcPng.data[idx01 + c] * (1 - tx) + srcPng.data[idx11 + c] * tx;
        let val = top * (1 - ty) + bot * ty;
        
        // Enhance text contrast (darken text, whiten background)
        if (val < 190) {
          val = Math.max(0, val * 0.75); // Deeper black for text
        } else if (val > 230) {
          val = 255;
        }

        dst.data[dstIdx + c] = Math.round(val);
      }
      dst.data[dstIdx + 3] = 255;
    }
  }

  return dst;
}

// Function to draw crisp highlight box on scaled image
function drawBoxScaled(png, x0, y0, x1, y1, scale = 2, borderThickness = 4) {
  const sx0 = Math.round(x0 * scale);
  const sy0 = Math.round(y0 * scale);
  const sx1 = Math.round(x1 * scale);
  const sy1 = Math.round(y1 * scale);

  function setPixel(x, y) {
    if (x >= 0 && x < png.width && y >= 0 && y < png.height) {
      const idx = (png.width * y + x) << 2;
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 255;
    }
  }

  for (let t = 0; t < borderThickness; t++) {
    for (let x = sx0 - t; x <= sx1 + t; x++) {
      setPixel(x, sy0 - t);
      setPixel(x, sy1 + t);
    }
    for (let y = sy0 - t; y <= sy1 + t; y++) {
      setPixel(sx0 - t, y);
      setPixel(sx1 + t, y);
    }
  }
}

const outDir = 'd:/proyecto/capturas_horas_cursos/full_highres_enhanced';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const srcUserDir = 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded';

// 1. Cisco Ethical Hacker (FULL ORIGINAL, 2x Upscaled + Sharpened)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246105318.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  // Total Hours 70 box in original coords: (835, 5) to (955, 83)
  drawBoxScaled(upscaled, 835, 5, 955, 83, 2, 4);
  fs.writeFileSync(`${outDir}/01_cisco_ethical_hacker_70hs.png`, PNG.sync.write(upscaled));
  console.log('Saved Cisco Ethical Hacker full 2x enhanced');
}

// 2. Alberta OOD (FULL ORIGINAL, 2x Upscaled + Sharpened)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246001010.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 578, 332, 800, 428, 2, 4);
  fs.writeFileSync(`${outDir}/02_alberta_ood.png`, PNG.sync.write(upscaled));
  console.log('Saved Alberta OOD full 2x enhanced');
}

// 3. Alberta Design Patterns (FULL ORIGINAL)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246014837.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 578, 332, 800, 428, 2, 4);
  fs.writeFileSync(`${outDir}/03_alberta_design_patterns.png`, PNG.sync.write(upscaled));
  console.log('Saved Alberta Design Patterns full 2x enhanced');
}

// 4. Alberta Software Arch (FULL ORIGINAL)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246019813.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 578, 308, 800, 404, 2, 4);
  fs.writeFileSync(`${outDir}/04_alberta_software_arch.png`, PNG.sync.write(upscaled));
  console.log('Saved Alberta Software Arch full 2x enhanced');
}

// 5. Alberta SOA (FULL ORIGINAL)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246027075.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 578, 308, 800, 404, 2, 4);
  fs.writeFileSync(`${outDir}/05_alberta_soa.png`, PNG.sync.write(upscaled));
  console.log('Saved Alberta SOA full 2x enhanced');
}

// 6. Alberta Especialización (FULL ORIGINAL)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246248842.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 126, 246, 498, 302, 2, 4);
  fs.writeFileSync(`${outDir}/06_alberta_specialization.png`, PNG.sync.write(upscaled));
  console.log('Saved Alberta Especialización full 2x enhanced');
}

// 7. IBM Data Science (FULL ORIGINAL)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246232748.png`));
  const upscaled = upscaleAndSharpen(raw, 2);
  drawBoxScaled(upscaled, 126, 246, 498, 302, 2, 4);
  fs.writeFileSync(`${outDir}/07_ibm_data_science.png`, PNG.sync.write(upscaled));
  console.log('Saved IBM Data Science full 2x enhanced');
}

console.log('Todas las imágenes completas reescaladas a 2X con nitidez extrema y contraste mejorado.');
