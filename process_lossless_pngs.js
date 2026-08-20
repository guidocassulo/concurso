const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

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

const outDir = 'd:/proyecto/capturas_horas_cursos/lossless_highlighted';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const srcUserDir = 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded';

// 1. Cisco Ethical Hacker
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246105318.png`));
  // Total Hours 70
  drawBox(png, 835, 5, 955, 83, 3);
  fs.writeFileSync(`${outDir}/01_cisco_ethical_hacker_70hs.png`, PNG.sync.write(png));
  console.log('Processed Cisco Ethical Hacker');
}

// 2. Alberta OOD (1024x440) -> Card "Cronograma flexible / 2 semanas en 10 horas una semana / Aprende a tu propio ritmo"
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246001010.png`));
  drawBox(png, 578, 332, 800, 428, 3);
  fs.writeFileSync(`${outDir}/02_alberta_ood.png`, PNG.sync.write(png));
  console.log('Processed Alberta OOD');
}

// 3. Alberta Design Patterns (1024x442)
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246014837.png`));
  drawBox(png, 578, 332, 800, 428, 3);
  fs.writeFileSync(`${outDir}/03_alberta_design_patterns.png`, PNG.sync.write(png));
  console.log('Processed Alberta Design Patterns');
}

// 4. Alberta Software Arch (1024x413)
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246019813.png`));
  drawBox(png, 578, 308, 800, 404, 3);
  fs.writeFileSync(`${outDir}/04_alberta_software_arch.png`, PNG.sync.write(png));
  console.log('Processed Alberta Software Arch');
}

// 5. Alberta SOA (1024x411)
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246027075.png`));
  drawBox(png, 578, 308, 800, 404, 3);
  fs.writeFileSync(`${outDir}/05_alberta_soa.png`, PNG.sync.write(png));
  console.log('Processed Alberta SOA');
}

// 6. Alberta Especialización 4 Cursos (1024x606)
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246248842.png`));
  // "El tiempo aproximado para completar el programa es de 1 meses y un total de 10 horas por semana."
  drawBox(png, 126, 246, 498, 302, 3);
  fs.writeFileSync(`${outDir}/06_alberta_specialization.png`, PNG.sync.write(png));
  console.log('Processed Alberta Specialization');
}

// 7. IBM Data Science 12 Cursos (1024x680)
{
  const png = PNG.sync.read(fs.readFileSync(`${srcUserDir}/media_1787246232748.png`));
  // "El tiempo aproximado para completar el programa es de 4 meses y un total de 10 horas por semana."
  drawBox(png, 126, 246, 498, 302, 3);
  fs.writeFileSync(`${outDir}/07_ibm_data_science.png`, PNG.sync.write(png));
  console.log('Processed IBM Data Science');
}

console.log('Todas las imágenes procesadas en calidad 100% nativa sin compresión.');
