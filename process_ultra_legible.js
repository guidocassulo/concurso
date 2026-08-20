const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// Helper to crop a PNG
function cropPNG(png, x, y, width, height) {
  x = Math.max(0, Math.min(png.width - 1, Math.round(x)));
  y = Math.max(0, Math.min(png.height - 1, Math.round(y)));
  width = Math.min(png.width - x, Math.round(width));
  height = Math.min(png.height - y, Math.round(height));

  const cropped = new PNG({ width, height });
  for (let cy = 0; cy < height; cy++) {
    for (let cx = 0; cx < width; cx++) {
      const srcIdx = ((y + cy) * png.width + (x + cx)) << 2;
      const dstIdx = (cy * width + cx) << 2;
      cropped.data[dstIdx] = png.data[srcIdx];
      cropped.data[dstIdx + 1] = png.data[srcIdx + 1];
      cropped.data[dstIdx + 2] = png.data[srcIdx + 2];
      cropped.data[dstIdx + 3] = png.data[srcIdx + 3];
    }
  }
  return cropped;
}

// Helper to draw clean highlight box
function drawBox(png, x0, y0, x1, y1, borderThickness = 3, color = { r: 0, g: 0, b: 0, a: 255 }) {
  x0 = Math.max(0, Math.min(png.width - 1, Math.round(x0)));
  x1 = Math.max(0, Math.min(png.width - 1, Math.round(x1)));
  y0 = Math.max(0, Math.min(png.height - 1, Math.round(y0)));
  y1 = Math.max(0, Math.min(png.height - 1, Math.round(y1)));

  function setPixel(x, y) {
    const idx = (png.width * y + x) << 2;
    png.data[idx] = color.r;
    png.data[idx + 1] = color.g;
    png.data[idx + 2] = color.b;
    png.data[idx + 3] = color.a;
  }

  for (let t = 0; t < borderThickness; t++) {
    for (let x = x0 - t; x <= x1 + t; x++) {
      if (x >= 0 && x < png.width) {
        if (y0 - t >= 0) setPixel(x, y0 - t);
        if (y1 + t < png.height) setPixel(x, y1 + t);
      }
    }
    for (let y = y0 - t; y <= y1 + t; y++) {
      if (y >= 0 && y < png.height) {
        if (x0 - t >= 0) setPixel(x0 - t, y);
        if (x1 + t < png.width) setPixel(x1 + t, y);
      }
    }
  }
}

// Enhance contrast for deep dark text
function enhanceContrast(png) {
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum < 185) {
        const factor = lum / 185;
        png.data[idx] = Math.round(r * factor * 0.6);
        png.data[idx + 1] = Math.round(g * factor * 0.6);
        png.data[idx + 2] = Math.round(b * factor * 0.6);
      } else if (lum > 230) {
        png.data[idx] = 255;
        png.data[idx + 1] = 255;
        png.data[idx + 2] = 255;
      }
    }
  }
  return png;
}

const outDir = 'd:/proyecto/capturas_horas_cursos/ultra_legible';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const srcUserDir = 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded';

// 1. Cisco Ethical Hacker (1024x403) -> Focus on the complete card (or whole image cropped of unnecessary borders)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246105318.png`));
  // The full image shows the certificate on the left and metadata on the right.
  // Let's crop tight to remove outer gray/black empty padding: x: 10 to 1014, y: 5 to 395
  const cropped = cropPNG(raw, 10, 5, 1004, 390);
  enhanceContrast(cropped);
  // Total Hours 70 is at x: 825, y: 3, w: 120, h: 78 in cropped coords
  drawBox(cropped, 825, 3, 945, 78, 3.5);
  fs.writeFileSync(`${outDir}/01_cisco_ethical_hacker_70hs.png`, PNG.sync.write(cropped));
  console.log('Saved Cisco Ethical Hacker ultra legible');
}

// 2. Alberta OOD (1024x440) -> Crop top header + course details card tightly (x: 10 to 1014, y: 30 to 435)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246001010.png`));
  const cropped = cropPNG(raw, 10, 30, 1004, 405);
  enhanceContrast(cropped);
  // Highlight box on "Cronograma flexible / 2 semanas en 10 horas una semana"
  drawBox(cropped, 568, 302, 790, 398, 3.5);
  fs.writeFileSync(`${outDir}/02_alberta_ood.png`, PNG.sync.write(cropped));
  console.log('Saved Alberta OOD ultra legible');
}

// 3. Alberta Design Patterns (1024x442)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246014837.png`));
  const cropped = cropPNG(raw, 10, 30, 1004, 405);
  enhanceContrast(cropped);
  drawBox(cropped, 568, 302, 790, 398, 3.5);
  fs.writeFileSync(`${outDir}/03_alberta_design_patterns.png`, PNG.sync.write(cropped));
  console.log('Saved Alberta Design Patterns ultra legible');
}

// 4. Alberta Software Arch (1024x413)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246019813.png`));
  const cropped = cropPNG(raw, 10, 30, 1004, 380);
  enhanceContrast(cropped);
  drawBox(cropped, 568, 278, 790, 374, 3.5);
  fs.writeFileSync(`${outDir}/04_alberta_software_arch.png`, PNG.sync.write(cropped));
  console.log('Saved Alberta Software Arch ultra legible');
}

// 5. Alberta SOA (1024x411)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246027075.png`));
  const cropped = cropPNG(raw, 10, 30, 1004, 380);
  enhanceContrast(cropped);
  drawBox(cropped, 568, 278, 790, 374, 3.5);
  fs.writeFileSync(`${outDir}/05_alberta_soa.png`, PNG.sync.write(cropped));
  console.log('Saved Alberta SOA ultra legible');
}

// 6. Alberta Especialización 4 Cursos (1024x606)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246248842.png`));
  const cropped = cropPNG(raw, 10, 100, 1004, 500);
  enhanceContrast(cropped);
  // "El tiempo aproximado para completar el programa es de 1 meses y un total de 10 horas por semana."
  drawBox(cropped, 116, 146, 488, 202, 3.5);
  fs.writeFileSync(`${outDir}/06_alberta_specialization.png`, PNG.sync.write(cropped));
  console.log('Saved Alberta Especialización ultra legible');
}

// 7. IBM Data Science 12 Cursos (1024x680)
{
  const raw = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246232748.png`));
  const cropped = cropPNG(raw, 10, 100, 1004, 575);
  enhanceContrast(cropped);
  // "El tiempo aproximado para completar el programa es de 4 meses y un total de 10 horas por semana."
  drawBox(cropped, 116, 146, 488, 202, 3.5);
  fs.writeFileSync(`${outDir}/07_ibm_data_science.png`, PNG.sync.write(cropped));
  console.log('Saved IBM Data Science ultra legible');
}

console.log('Todas las capturas procesadas con máxima legibilidad y nitidez.');
