const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const annexes = [
  {
    id: 'annex_cisco_ethical_hacker',
    title: 'Hacker Ético (Ethical Hacker)',
    institution: 'Cisco Networking Academy',
    certId: 'f4833f58-ba1a-421a-b3e7-f498cbd06ef4',
    hoursHighlight: '70 HORAS RELOJ OFICIALES',
    details: 'Acreditación oficial emitida por Cisco Networking Academy (Directora: Lynn Bloomer). Constancia con verificación QR y registro formal en plataforma Cisco NetAcad / Skills for All.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/17_Cisco_Ethical_Hacker_70hs.png'
  },
  {
    id: 'annex_alberta_ood',
    title: 'Diseño Orientado a Objetos (Object-Oriented Design)',
    institution: 'University of Alberta (Coursera)',
    certId: '58GQADWQ40PO',
    hoursHighlight: '20 HORAS RELOJ (2 Semanas a 10 hs/semana)',
    details: 'Instructor: Dr. Kenny Wong (Associate Professor Computing Science). 4 módulos temáticos: Principios SOLID, cohesión y acoplamiento, modelado UML y componentes reusables.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/01_Alberta_Diseno_Orientado_Objetos.png'
  },
  {
    id: 'annex_alberta_design_patterns',
    title: 'Patrones de Diseño (Design Patterns)',
    institution: 'University of Alberta (Coursera)',
    certId: 'FQI66BZA9MDZ',
    hoursHighlight: '20 HORAS RELOJ (2 Semanas a 10 hs/semana)',
    details: 'Instructor: Dr. Kenny Wong. 4 módulos temáticos: Patrones Creacionales (Singleton, Factory), Estructurales (Adapter, Composite, Facade) y de Comportamiento (Observer, Strategy).',
    imageFile: 'd:/proyecto/capturas_horas_cursos/02_Alberta_Patrones_de_Diseno.png'
  },
  {
    id: 'annex_alberta_software_arch',
    title: 'Arquitectura de Software (Software Architecture)',
    institution: 'University of Alberta (Coursera)',
    certId: '7615UF4LDMAP',
    hoursHighlight: '10 HORAS RELOJ SEMANALES (4 Módulos Temáticos)',
    details: 'Instructor: Dr. Kenny Wong. 4 módulos temáticos: Atributos de calidad de software (escalabilidad, mantenibilidad, rendimiento), vistas arquitectónicas (modelo 4+1) y evaluación ATAM.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/03_Alberta_Arquitectura_de_Software.png'
  },
  {
    id: 'annex_alberta_soa',
    title: 'Arquitectura Orientada a Servicios (SOA / Microservicios)',
    institution: 'University of Alberta (Coursera)',
    certId: 'HGRBW3OR90E5',
    hoursHighlight: '10 HORAS RELOJ SEMANALES (4 Módulos Temáticos)',
    details: 'Instructor: Dr. Kenny Wong. 4 módulos temáticos: Microservicios, diseño de APIs RESTful, servicios web SOAP/WSDL, desacoplamiento y orquestación de sistemas distribuidos.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/04_Alberta_Arquitectura_Orientada_a_Servicios.png'
  },
  {
    id: 'annex_alberta_specialization',
    title: 'Programa Especializado: Software Design and Architecture',
    institution: 'University of Alberta (Coursera)',
    certId: 'HUU10CZ56C9I',
    hoursHighlight: 'PROGRAMA ESPECIALIZADO INTEGRADO (4 Cursos Universitarios)',
    details: 'Acreditación global de la Especialización de 4 cursos de posgrado/actualización profesional de la University of Alberta. Incluye desarrollo y evaluación del proyecto integrador Capstone.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/00_Alberta_Software_Design_Especializacion_4Cursos.png'
  },
  {
    id: 'annex_ibm_data_science',
    title: 'Certificado Profesional: IBM Data Science (12 Cursos)',
    institution: 'IBM (Coursera)',
    certId: 'Z7AA979D1SSS',
    hoursHighlight: '160 HORAS RELOJ (4 Meses a 10 hs/semana — 12 Cursos)',
    details: 'Director de Programa: Rav Ahuja (IBM Skills Network). Programa profesional completo compuesto por 12 cursos certificados: Python, SQL, Bases de Datos, Machine Learning, Metodología y Capstone.',
    imageFile: 'd:/proyecto/capturas_horas_cursos/00_IBM_Data_Science_Especializacion_12Cursos.png'
  }
];

const outDir = 'd:/proyecto/capturas_horas_cursos/pdf_annexes';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

annexes.forEach(a => {
  const imgBase64 = fs.readFileSync(a.imageFile).toString('base64');
  const imgSrc = `data:image/png;base64,${imgBase64}`;

  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4 portrait;
    margin: 20mm 15mm 15mm 20mm;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
    margin: 0;
    padding: 0;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .header-box {
    border-bottom: 2px solid #000000;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
  .doc-type {
    font-size: 10pt;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #333333;
  }
  .course-title {
    font-size: 15pt;
    font-weight: bold;
    margin: 4px 0 2px 0;
    color: #000000;
  }
  .meta-line {
    font-size: 9.5pt;
    color: #222222;
  }
  
  /* RECUADRO DE CARGA HORARIA DE ALTO CONTRASTE PARA IMPRESIÓN B&N */
  .hours-banner {
    border: 2.5px solid #000000;
    background: #f4f4f4;
    padding: 10px 14px;
    margin: 12px 0;
    text-align: center;
  }
  .hours-label {
    font-size: 9pt;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #000000;
  }
  .hours-value {
    font-size: 16pt;
    font-weight: 900;
    color: #000000;
    margin-top: 3px;
    letter-spacing: 0.5px;
  }
  
  .details-text {
    font-size: 9.5pt;
    line-height: 1.35;
    margin-bottom: 12px;
    color: #111111;
    text-align: justify;
  }
  
  .image-container {
    border: 1.5px solid #000000;
    padding: 4px;
    background: #ffffff;
    text-align: center;
    margin-top: 6px;
  }
  .image-container img {
    max-width: 100%;
    max-height: 480px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
  
  .footer-note {
    margin-top: 10px;
    font-size: 8pt;
    color: #444444;
    border-top: 1px solid #777777;
    padding-top: 4px;
    text-align: right;
  }
</style>
</head>
<body>
  <div class="header-box">
    <div class="doc-type">Acreditación Oficial de Antecedentes — Concurso MGP</div>
    <div class="course-title">${a.title}</div>
    <div class="meta-line"><strong>Institución Emisora:</strong> ${a.institution} &nbsp;|&nbsp; <strong>Postulante:</strong> Guido Emmanuel Cassulo (Leg. 36484)</div>
  </div>

  <div class="hours-banner">
    <div class="hours-label">● Acreditación de Carga Horaria y Dedicación Oficial ●</div>
    <div class="hours-value">${a.hoursHighlight}</div>
  </div>

  <div class="details-text">
    ${a.details}
  </div>

  <div class="image-container">
    <img src="${imgSrc}" alt="Captura oficial de horas y syllabus">
  </div>

  <div class="footer-note">
    Documento complementario probatorio &bull; ID de Verificación: ${a.certId}
  </div>
</body>
</html>`;

  const htmlPath = path.join(outDir, `${a.id}.html`);
  const pdfPath = path.join(outDir, `${a.id}.pdf`);
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');

  // Convert HTML to PDF using Chrome
  execSync(`"${chrome}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`);
  console.log(`Generado: ${pdfPath}`);
});

console.log('Todos los anexos PDF de alta calidad en B&N generados exitosamente.');
