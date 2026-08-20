const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const items = [
  {
    name: '01_cisco_ethical_hacker_70hs',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246105318.png',
    // Total Hours: 70
    box: { left: '83.2%', top: '1.2%', width: '13.2%', height: '14.5%' }
  },
  {
    name: '02_alberta_ood',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246001010.png',
    // 2 semanas en 10 horas
    box: { left: '56.5%', top: '73.5%', width: '22%', height: '23.5%' }
  },
  {
    name: '03_alberta_design_patterns',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246014837.png',
    // 2 semanas en 10 horas
    box: { left: '56.5%', top: '73.5%', width: '22%', height: '23.5%' }
  },
  {
    name: '04_alberta_software_arch',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246019813.png',
    // 1 semana en 10 horas
    box: { left: '56.5%', top: '72%', width: '22%', height: '25%' }
  },
  {
    name: '05_alberta_soa',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246027075.png',
    // 1 semana en 10 horas
    box: { left: '56.5%', top: '72%', width: '22%', height: '25%' }
  },
  {
    name: '06_alberta_specialization',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246248842.png',
    // 1 meses y 10 horas por semana
    box: { left: '12.5%', top: '40.2%', width: '36.5%', height: '8.8%' }
  },
  {
    name: '07_ibm_data_science',
    imgPath: 'C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246232748.png',
    // 4 meses y 10 horas por semana
    box: { left: '12.5%', top: '36.2%', width: '36.5%', height: '7.8%' }
  }
];

const outDir = 'd:/proyecto/capturas_horas_cursos/high_res_pages';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

items.forEach(item => {
  const imgBase64 = fs.readFileSync(item.imgPath).toString('base64');
  const imgSrc = `data:image/png;base64,${imgBase64}`;

  // Diseñado para ocupar la carilla horizontal a resolución máxima (A4 Landscape)
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4 landscape;
    margin: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    position: relative;
    width: 96vw;
    height: 94vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    position: relative;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }
  .wrapper img {
    max-width: 96vw;
    max-height: 94vh;
    width: auto;
    height: auto;
    display: block;
    object-fit: contain;
  }
  .highlight-box {
    position: absolute;
    left: ${item.box.left};
    top: ${item.box.top};
    width: ${item.box.width};
    height: ${item.box.height};
    border: 3.5px solid #000000;
    border-radius: 4px;
    box-sizing: border-box;
    pointer-events: none;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="wrapper">
      <img src="${imgSrc}">
      <div class="highlight-box"></div>
    </div>
  </div>
</body>
</html>`;

  const htmlPath = path.join(outDir, `${item.name}.html`);
  const pdfPath = path.join(outDir, `${item.name}.pdf`);
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');

  execSync(`"${chrome}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`);
  console.log('Generado en alta resolución landscape:', pdfPath);
});

console.log('Todas las carillas landscape de alta resolución generadas exitosamente.');
