const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const dir = 'd:/proyecto/certificaciones/capturas';

async function checkHours() {
  const files = [
    '01_Alberta_Especializacion_Software_Design.png',
    '02_Alberta_Object_Oriented_Design.png',
    '03_Alberta_Design_Patterns.png',
    '04_Alberta_Software_Architecture.png',
    '05_Alberta_Service_Oriented_Architecture.png',
    '06_IBM_Machine_Learning_with_Python.png',
    '08_IBM_Databases_and_SQL_for_Data_Science.png',
    '09_IBM_Python_for_Data_Science_AI_Development.png',
    '10_IBM_Data_Analysis_with_Python.png',
    '17_Cisco_Ethical_Hacker.png',
    '18_Cisco_Introduction_to_Cybersecurity.png'
  ];

  for (let f of files) {
    const res = await Tesseract.recognize(path.join(dir, f), 'eng');
    const txt = res.data.text.replace(/\s+/g, ' ');
    // Find hours
    const match = txt.match(/([0-9]+\s*(?:horas?|hours?|semanas?|weeks?|meses?|months?|mes)[^.]{0,80})/i) || txt.match(/(aprox\.[^.]{0,80})/i);
    console.log('=== ' + f + ' ===');
    console.log('Detected hours match:', match ? match[0] : 'Not matched directly');
    console.log('Text snippet:', txt.substring(0, 250));
  }
}

checkHours();
