const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// Filter to enhance text contrast and sharpness for Black & White printing
function enhanceAndBox(inputPath, outputPath, boxCoords) {
  const png = PNG.sync.read(fs.readFileSync(inputPath));

  // Contrast enhancement: stretch contrast so text is deep dark and light areas are crisp white
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      
      // Calculate luminance
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      
      // If it's grayish text, boost contrast to make it sharp and dark
      if (lum < 175) {
        // Darken text pixels for maximum legibility in B&W
        const factor = lum / 175;
        png.data[idx] = Math.round(r * factor * 0.7);
        png.data[idx + 1] = Math.round(g * factor * 0.7);
        png.data[idx + 2] = Math.round(b * factor * 0.7);
      } else if (lum > 235) {
        // Clean white background
        png.data[idx] = 255;
        png.data[idx + 1] = 255;
        png.data[idx + 2] = 255;
      }
    }
  }

  // Draw crisp highlight box (3px solid black)
  if (boxCoords) {
    const { x0, y0, x1, y1 } = boxCoords;
    const borderThickness = 3;
    
    function setPixel(x, y) {
      const idx = (png.width * y + x) << 2;
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 255;
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

  fs.writeFileSync(outputPath, PNG.sync.write(png));
  console.log(`Saved enhanced: ${outputPath}`);
}

const outDir = 'd:/proyecto/capturas_horas_cursos/enhanced_highres';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const srcUserDir = 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded';

// 1. Cisco
enhanceAndBox(
  `${srcUserDir}/media_1787246105318.png`,
  `${outDir}/01_cisco_ethical_hacker_70hs.png`,
  { x0: 835, y0: 5, x1: 955, y1: 83 }
);

// 2. Alberta OOD
enhanceAndBox(
  `${srcUserDir}/media_1787246001010.png`,
  `${outDir}/02_alberta_ood.png`,
  { x0: 578, y0: 332, x1: 800, y1: 428 }
);

// 3. Alberta Design Patterns
enhanceAndBox(
  `${srcUserDir}/media_1787246014837.png`,
  `${outDir}/03_alberta_design_patterns.png`,
  { x0: 578, y0: 332, x1: 800, y1: 428 }
);

// 4. Alberta Software Arch
enhanceAndBox(
  `${srcUserDir}/media_1787246019813.png`,
  `${outDir}/04_alberta_software_arch.png`,
  { x0: 578, y0: 308, x1: 800, y1: 404 }
);

// 5. Alberta SOA
enhanceAndBox(
  `${srcUserDir}/media_1787246027075.png`,
  `${outDir}/05_alberta_soa.png`,
  { x0: 578, y0: 308, x1: 800, y1: 404 }
);

// 6. Alberta Especialización
enhanceAndBox(
  `${srcUserDir}/media_1787246248842.png`,
  `${outDir}/06_alberta_specialization.png`,
  { x0: 126, y0: 246, x1: 498, y1: 302 }
);

// 7. IBM Data Science
enhanceAndBox(
  `${srcUserDir}/media_1787246232748.png`,
  `${outDir}/07_ibm_data_science.png`,
  { x0: 126, y0: 246, x1: 498, y1: 302 }
);

console.log('Procesamiento de nitidez y contraste completado.');
