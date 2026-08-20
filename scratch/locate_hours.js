const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const files = [
  'd:/proyecto/capturas_horas_cursos/17_Cisco_Ethical_Hacker_70hs.png',
  'd:/proyecto/capturas_horas_cursos/01_Alberta_Diseno_Orientado_Objetos.png',
  'd:/proyecto/capturas_horas_cursos/02_Alberta_Patrones_de_Diseno.png',
  'd:/proyecto/capturas_horas_cursos/03_Alberta_Arquitectura_de_Software.png',
  'd:/proyecto/capturas_horas_cursos/04_Alberta_Arquitectura_Orientada_a_Servicios.png',
  'd:/proyecto/capturas_horas_cursos/00_Alberta_Software_Design_Especializacion_4Cursos.png',
  'd:/proyecto/capturas_horas_cursos/00_IBM_Data_Science_Especializacion_12Cursos.png'
];

async function locateWords() {
  for (let f of files) {
    const res = await Tesseract.recognize(f, 'eng');
    console.log('=== ' + path.basename(f) + ' ===');
    const words = res.data.words || [];
    words.forEach(w => {
      if (/hour|hora|70|week|semana|month|mes|cronograma|flexible|tiempo/i.test(w.text)) {
        console.log(`Word: "${w.text}" bbox: x0=${w.bbox.x0}, y0=${w.bbox.y0}, x1=${w.bbox.x1}, y1=${w.bbox.y1}`);
      }
    });
  }
}

locateWords().catch(console.error);
