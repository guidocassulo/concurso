const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');

const srcUserDir = 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded';
const finalCapturasDir = 'd:/proyecto/capturas_nuevas_guido/procesadas';
if (!fs.existsSync(finalCapturasDir)) fs.mkdirSync(finalCapturasDir, { recursive: true });

// Function to draw clean highlight box directly on lossless PNG pixels
function drawBoxOnPng(inputPath, outputPath, boxCoords) {
  const png = PNG.sync.read(fs.readFileSync(inputPath));
  const { x0, y0, x1, y1 } = boxCoords;
  const borderThickness = 3;

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
    for (let x = x0 - t; x <= x1 + t; x++) {
      setPixel(x, y0 - t);
      setPixel(x, y1 + t);
    }
    for (let y = y0 - t; y <= y1 + t; y++) {
      setPixel(x0 - t, y);
      setPixel(x1 + t, y);
    }
  }

  fs.writeFileSync(outputPath, PNG.sync.write(png));
  console.log(`Saved lossless highlighted: ${outputPath}`);
}

// 1. Cisco Ethical Hacker (1024x403)
drawBoxOnPng(
  `${srcUserDir}/media_1787248993074.png`,
  `${finalCapturasDir}/01_cisco_ethical_hacker.png`,
  { x0: 835, y0: 5, x1: 955, y1: 83 }
);

// 2. Alberta OOD (1024x512)
drawBoxOnPng(
  `${srcUserDir}/media_1787249038387.png`,
  `${finalCapturasDir}/02_alberta_ood.png`,
  { x0: 578, y0: 388, x1: 798, y1: 498 }
);

// 3. Alberta Design Patterns (1024x512)
drawBoxOnPng(
  `${srcUserDir}/media_1787249045087.png`,
  `${finalCapturasDir}/03_alberta_design_patterns.png`,
  { x0: 578, y0: 388, x1: 798, y1: 498 }
);

// 4. Alberta Software Arch (1024x512)
drawBoxOnPng(
  `${srcUserDir}/media_1787249060834.png`,
  `${finalCapturasDir}/04_alberta_software_arch.png`,
  { x0: 578, y0: 388, x1: 798, y1: 498 }
);

// 5. Alberta SOA (1024x512)
drawBoxOnPng(
  `${srcUserDir}/media_1787249076324.png`,
  `${finalCapturasDir}/05_alberta_soa.png`,
  { x0: 578, y0: 388, x1: 798, y1: 498 }
);

// 6. Alberta Especialización (media_1787249102839.png - 1024x606)
drawBoxOnPng(
  `${srcUserDir}/media_1787249102839.png`,
  `${finalCapturasDir}/06_alberta_specialization.png`,
  { x0: 126, y0: 246, x1: 498, y1: 302 }
);

// 7. IBM Data Science Especialización (media_1787249122180.png - 1024x556)
drawBoxOnPng(
  `${srcUserDir}/media_1787249122180.png`,
  `${finalCapturasDir}/07_ibm_data_science.png`,
  { x0: 602, y0: 454, x1: 824, y1: 546 }
);

console.log('Todas las capturas procesadas con calidad 100% nativa.');
