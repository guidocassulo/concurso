const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('file:///d:/proyecto/scratch/diagrama_alquiler_coches.html', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'C:/Users/gcassulo/.gemini/antigravity/brain/38c14cf2-e8a5-40c0-9148-e8957d3ff2ea/Diagrama_UML_Empresa_Alquiler_Coches.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });
  await browser.close();
  console.log('PDF generado exitosamente en la carpeta de artefactos.');
})();
