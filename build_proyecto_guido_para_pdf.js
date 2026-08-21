const fs = require('fs');
const path = require('path');
const admZip = require('adm-zip');
const { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  AlignmentType, 
  Footer, 
  PageNumber, 
  PageBreak, 
  TabStopType,
  TabStopPosition
} = require('docx');

console.log('=== LEYENDO PROYECTO GUIDO FINAL.DOCX ===');
const sourceFile = 'd:/proyecto/proyecto prueba/Proyecto Guido Final.docx';
const zip = new admZip(sourceFile);
const xml = zip.readAsText('word/document.xml');

const pMatches = xml.match(/<w:p(?:\s+[^>]*)?>[\s\S]*?<\/w:p>/g) || [];
const parsedParagraphs = [];

pMatches.forEach((pXml) => {
  const isBullet = /<w:numPr>/i.test(pXml) || pXml.replace(/<[^>]+>/g, '').trim().startsWith('•') || pXml.replace(/<[^>]+>/g, '').trim().startsWith('●');
  const rMatches = pXml.match(/<w:r(?:\s+[^>]*)?>[\s\S]*?<\/w:r>/g) || [];
  const runs = [];
  let fullText = '';
  
  rMatches.forEach((rXml) => {
    const bold = /<w:b(?:\s*\/|\s+[^>]*\/>|\s*>[\s\S]*?<\/w:b>)/i.test(rXml);
    const italic = /<w:i(?:\s*\/|\s+[^>]*\/>|\s*>[\s\S]*?<\/w:i>)/i.test(rXml);
    const tMatches = rXml.match(/<w:t(?:\s+[^>]*)?>([\s\S]*?)<\/w:t>/g) || [];
    let text = '';
    tMatches.forEach((t) => {
      text += t.replace(/<[^>]+>/g, '');
    });
    if (text) {
      runs.push({ text, bold, italic });
      fullText += text;
    }
  });
  
  fullText = fullText.trim();
  if (fullText.length > 0) {
    parsedParagraphs.push({
      fullText,
      runs,
      isBullet
    });
  }
});

const introIndex = parsedParagraphs.findIndex(p => p.fullText.startsWith('1. INTRODUCCIÓN'));
const bodyParagraphsRaw = parsedParagraphs.slice(introIndex);
console.log(`Párrafos del cuerpo extraídos: ${bodyParagraphsRaw.length}`);

// Estructura de secciones e índice
const indiceItems = [
  { num: '1.', title: 'INTRODUCCIÓN', level: 1 },
  { num: '2.', title: 'DIAGNÓSTICO INSTITUCIONAL', level: 1 },
  { num: '2.1', title: 'Situación actual del Departamento', level: 2 },
  { num: '2.2', title: 'Análisis FODA', level: 2 },
  { num: '2.3', title: 'Conclusión del diagnóstico', level: 2 },
  { num: '3.', title: 'PRINCIPIOS DE GESTIÓN', level: 1 },
  { num: '3.1', title: 'Liderazgo basado en la colaboración y el desarrollo del equipo', level: 2 },
  { num: '3.2', title: 'Gestión orientada a procesos', level: 2 },
  { num: '3.3', title: 'Gestión del conocimiento institucional', level: 2 },
  { num: '3.4', title: 'Mejora continua', level: 2 },
  { num: '3.5', title: 'Innovación responsable', level: 2 },
  { num: '3.6', title: 'Orientación al servicio', level: 2 },
  { num: '3.7', title: 'Decisiones basadas en evidencia', level: 2 },
  { num: '4.', title: 'OBJETIVOS DEL PLAN DE TRABAJO', level: 1 },
  { num: '5.', title: 'PROPUESTA DE MEJORA Y OPTIMIZACIÓN CON RECURSOS ACTUALES', level: 1 },
  { num: '5.1', title: 'Organización y planificación del trabajo', level: 2 },
  { num: '5.2', title: 'Gestión del conocimiento institucional', level: 2 },
  { num: '5.3', title: 'Estandarización técnica y calidad del software', level: 2 },
  { num: '5.4', title: 'Gestión de requerimientos y relación con las áreas usuarias', level: 2 },
  { num: '5.5', title: 'Gobierno técnico de proveedores externos', level: 2 },
  { num: '5.6', title: 'Innovación tecnológica responsable', level: 2 },
  { num: '5.7', title: 'Coordinación y comunicación interna entre equipos', level: 2 },
  { num: '5.8', title: 'Optimización de roles según experiencia acumulada', level: 2 },
  { num: '6.', title: 'PROYECCIÓN CON INCORPORACIÓN DE RECURSOS', level: 1 },
  { num: '6.1', title: 'Incorporación de herramientas profesionales de apoyo al desarrollo y asistencia técnica', level: 2 },
  { num: '6.2', title: 'Programa permanente de capacitación continua y especialización del personal', level: 2 },
  { num: '6.3', title: 'Modernización tecnológica y actualización de plataformas', level: 2 },
  { num: '6.4', title: 'Fortalecimiento del trabajo colaborativo', level: 2 },
  { num: '6.5', title: 'Herramientas de analítica de proyectos y tableros ejecutivos', level: 2 },
  { num: '6.6', title: 'Fortalecimiento gradual de la estructura técnica y especialización funcional', level: 2 },
  { num: '7.', title: 'IMPLEMENTACIÓN Y GESTIÓN DEL PLAN DE TRABAJO', level: 1 },
  { num: '7.1', title: 'Puesta en marcha', level: 2 },
  { num: '7.2', title: 'Implementación progresiva', level: 2 },
  { num: '7.3', title: 'Gestión, seguimiento y ajuste', level: 2 },
  { num: '8.', title: 'EVALUACIÓN Y SEGUIMIENTO', level: 1 },
  { num: '8.1', title: 'Revisión periódica de resultados e indicadores de gestión', level: 2 },
  { num: '8.2', title: 'Instancias de seguimiento, feedback interno y clima laboral', level: 2 },
  { num: '8.3', title: 'Ajuste dinámico de la gestión y mejora continua', level: 2 },
  { num: '9.', title: 'CONCLUSIONES', level: 1 }
];

// PORTADA OFICIAL (Sección 1)
const portadaChildren = [
  new Paragraph({ spacing: { before: 200, after: 120 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'MUNICIPALIDAD DE GENERAL PUEYRREDON', bold: true, size: 28, color: '1B365D', font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'SECRETARÍA DE PARTICIPACIÓN CIUDADANA Y DESCENTRALIZACIÓN', bold: true, size: 22, color: '333333', font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 60, after: 500 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'SUBSECRETARÍA DE GOBIERNO DIGITAL Y MEJORA DE PROCESOS', bold: true, size: 22, color: '555555', font: 'Arial' })
  ]}),
  
  new Paragraph({ spacing: { before: 400, after: 600 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Concurso: Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software', bold: true, size: 24, color: '1B365D', font: 'Arial' })
  ]}),
  
  new Paragraph({ spacing: { before: 400, after: 160 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'PLAN DE TRABAJO', bold: true, size: 34, color: '1B365D', font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 100, after: 700 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ 
      text: 'Diagnóstico Integral y Propuesta de Mejora para el Funcionamiento del Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software: Optimización con Recursos Actuales y Proyección con Incorporación de Recursos', 
      bold: true, 
      size: 24, 
      color: '222222', 
      font: 'Arial' 
    })
  ]}),
  
  new Paragraph({ spacing: { before: 500, after: 60 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Postulante: ', bold: true, size: 23, font: 'Arial' }),
    new TextRun({ text: 'Guido Cassulo', size: 23, font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 40, after: 700 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Legajo: ', bold: true, size: 23, font: 'Arial' }),
    new TextRun({ text: '36484', size: 23, font: 'Arial' })
  ]}),
  
  new Paragraph({ spacing: { before: 400, after: 0 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Mar del Plata – 2026', bold: true, size: 21, color: '666666', font: 'Arial' })
  ]})
];

// ÍNDICE (Carilla 2)
const indiceChildren = [
  new Paragraph({ 
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 150, after: 200 }, 
    alignment: AlignmentType.CENTER, 
    children: [
      new TextRun({ text: 'ÍNDICE GENERAL', bold: true, size: 26, color: '1B365D', font: 'Arial' })
    ]
  })
];

indiceItems.forEach(item => {
  if (item.level === 1) {
    indiceChildren.push(new Paragraph({
      spacing: { before: 80, after: 30 },
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({ text: `${item.num} ${item.title}`, bold: true, size: 21, color: '1B365D', font: 'Arial' })
      ]
    }));
  } else {
    indiceChildren.push(new Paragraph({
      spacing: { before: 20, after: 20 },
      indent: { left: 350 },
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({ text: `${item.num} ${item.title}`, size: 20, color: '333333', font: 'Arial' })
      ]
    }));
  }
});

indiceChildren.push(new Paragraph({ children: [new PageBreak()] }));

// CUERPO DEL TEXTO (A partir de Carilla 3)
const bodyChildren = [...indiceChildren];

bodyParagraphsRaw.forEach((pObj) => {
  const text = pObj.fullText;
  
  if (/^[1-9]\.\s+[A-ZÁÉÍÓÚÑ\s]+$/.test(text)) {
    bodyChildren.push(new Paragraph({
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.LEFT,
      spacing: { before: 240, after: 100 },
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 24,
          color: '1B365D',
          font: 'Arial'
        })
      ]
    }));
  }
  else if (/^[1-9]\.[0-9]+\s+/.test(text)) {
    bodyChildren.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.LEFT,
      spacing: { before: 180, after: 60 },
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 22,
          color: '2C3E50',
          font: 'Arial'
        })
      ]
    }));
  }
  else if (['Problema', 'Propuesta', 'Implementación', 'Resultado esperado', 'Fortalezas', 'Oportunidades', 'Debilidades', 'Amenazas'].includes(text) || text === 'ImplementaciónLa implementación comprenderá:') {
    const isSpecialCase = text === 'ImplementaciónLa implementación comprenderá:';
    bodyChildren.push(new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 100, after: 30 },
      children: [
        new TextRun({
          text: isSpecialCase ? 'Implementación' : text,
          bold: true,
          size: 22,
          color: '1B365D',
          font: 'Arial'
        })
      ]
    }));
    if (isSpecialCase) {
      bodyChildren.push(new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 20, after: 50, line: 265 },
        children: [
          new TextRun({ text: 'La implementación comprenderá:', size: 22, font: 'Arial' })
        ]
      }));
    }
  }
  else if (pObj.isBullet || text.startsWith('•') || text.startsWith('●')) {
    const cleanText = text.replace(/^[•●]\s*/, '');
    
    // Si contiene ":", poner la primera parte en negrita
    if (cleanText.includes(':')) {
      const parts = cleanText.split(':');
      const prefix = parts[0] + ':';
      const rest = parts.slice(1).join(':');
      
      bodyChildren.push(new Paragraph({
        bullet: { level: 0 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 30, after: 40, line: 265 },
        children: [
          new TextRun({ text: prefix, bold: true, size: 22, font: 'Arial' }),
          new TextRun({ text: rest, size: 22, font: 'Arial' })
        ]
      }));
    } else {
      bodyChildren.push(new Paragraph({
        bullet: { level: 0 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 30, after: 40, line: 265 },
        children: [
          new TextRun({ text: cleanText, size: 22, font: 'Arial' })
        ]
      }));
    }
  }
  else {
    bodyChildren.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { before: 20, after: 50, line: 265 },
      children: pObj.runs.length > 0 ? pObj.runs.map(r => new TextRun({
        text: r.text,
        bold: r.bold,
        italics: r.italic,
        size: 22,
        font: 'Arial'
      })) : [new TextRun({ text: text, size: 22, font: 'Arial' })]
    }));
  }
});

// Pie de página oficial: "Guido Cassulo – Legajo 36484 | Plan de Trabajo     Página X de 18"
const bodyFooter = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 80, after: 0 },
      children: [
        new TextRun({
          text: 'Guido Cassulo – Legajo 36484  |  Plan de Trabajo',
          size: 18,
          color: '555555',
          font: 'Arial'
        }),
        new TextRun({
          text: '\tPágina ',
          size: 18,
          color: '555555',
          font: 'Arial'
        }),
        new TextRun({
          children: [PageNumber.CURRENT],
          size: 18,
          color: '555555',
          font: 'Arial'
        }),
        new TextRun({
          text: ' de 18',
          size: 18,
          color: '555555',
          font: 'Arial'
        })
      ],
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
      ]
    })
  ]
});

// Pautas oficiales del concurso: A4, Sup 3cm, Inf 1.5cm, Esq 3cm, Der 1.5cm
const officialPageProperties = {
  size: {
    width: 11906,
    height: 16838
  },
  margin: {
    top: 1701,    // 3.0 cm
    bottom: 850,  // 1.50 cm
    left: 1701,   // 3.0 cm
    right: 850,   // 1.50 cm
    footer: 400   // 0.70 cm del borde
  }
};

const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: 'Arial',
          size: 22,
          color: '222222'
        },
        paragraph: {
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 265,
            after: 60
          }
        }
      }
    }
  },
  sections: [
    {
      properties: {
        page: officialPageProperties
      },
      children: portadaChildren
    },
    {
      properties: {
        page: {
          ...officialPageProperties,
          pageNumbers: {
            start: 1
          }
        }
      },
      footers: {
        default: bodyFooter
      },
      children: bodyChildren
    }
  ]
});

async function generate() {
  const buffer = await Packer.toBuffer(doc);
  const targetDocx = 'd:/proyecto/PROYECTO GUIDO PARA PDF.docx';
  const targetDocxPrueba = 'd:/proyecto/proyecto prueba/PROYECTO GUIDO PARA PDF.docx';
  
  fs.writeFileSync(targetDocx, buffer);
  try {
    fs.writeFileSync(targetDocxPrueba, buffer);
  } catch (e) {}
  console.log(`Documento generado con éxito en: ${targetDocx}`);
}

generate().catch(console.error);
