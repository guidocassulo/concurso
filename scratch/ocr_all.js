const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const dir = 'd:/proyecto/capturas_horas_cursos';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function checkAllOCR() {
  for (let f of files) {
    try {
      const res = await Tesseract.recognize(path.join(dir, f), 'eng');
      const txt = res.data.text.replace(/\s+/g, ' ').trim();
      console.log('=== ' + f + ' ===');
      console.log(txt.substring(0, 180));
    } catch(e) {
      console.log('=== ' + f + ' ERROR: ' + e.message);
    }
  }
}

checkAllOCR();
