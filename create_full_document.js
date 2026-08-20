const fs = require('fs');
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

// 1. Cargar el documento original
const zip = new admZip('d:/proyecto/proyecto prueba/Proyecto Guido.docx');
const xml = zip.readAsText('word/document.xml');

// Extraer párrafos
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

// Modificaciones en primera persona para Sección 3.1
bodyParagraphsRaw.forEach(p => {
  if (p.fullText.startsWith('La conducción del Departamento promoverá un ambiente de trabajo participativo')) {
    p.fullText = 'Como Jefe del Departamento, promoveré un ambiente de trabajo participativo y transparente, donde la comunicación fluida, el intercambio de conocimientos y la construcción colectiva de soluciones sean el eje de la cultura organizacional. Asumiré la responsabilidad de facilitar el trabajo de los equipos, remover obstáculos operativos y generar las condiciones para que cada integrante pueda desarrollar su potencial profesional.';
    p.runs = [{ text: p.fullText, bold: false, italic: false }];
  }
  if (p.fullText.startsWith('Para consolidar esta visión de conducción humana y estratégica, la Jefatura se apoyará')) {
    p.fullText = 'Para consolidar esta visión de conducción humana y estratégica, apoyaré mi gestión en tres pilares de gestión de personas:';
    p.runs = [{ text: p.fullText, bold: false, italic: false }];
  }
  if (p.fullText.includes('sino como procesos naturales de transición que la Jefatura debe gestionar mediante el diálogo')) {
    p.fullText = p.fullText.replace('que la Jefatura debe gestionar mediante el diálogo', 'que gestionaré mediante el diálogo');
    p.runs = [{ text: p.fullText, bold: false, italic: false }];
  }
});

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

// PORTADA (Sección 1) - Con excelente presencia visual, tipografía proporcionada y distribución armoniosa en la hoja A4
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
  
  new Paragraph({ spacing: { before: 400, after: 100 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'CONCURSO INTERNO DE OPOSICIÓN Y ANTECEDENTES', bold: true, size: 24, color: '1B365D', font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 60, after: 600 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Cargo: Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software', italics: true, size: 23, color: '2C3E50', font: 'Arial' })
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
  new Paragraph({ spacing: { before: 40, after: 60 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Cargo actual: ', bold: true, size: 23, font: 'Arial' }),
    new TextRun({ text: 'Soporte Semi Senior', size: 23, font: 'Arial' })
  ]}),
  new Paragraph({ spacing: { before: 40, after: 700 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Legajo: ', bold: true, size: 23, font: 'Arial' }),
    new TextRun({ text: '36484', size: 23, font: 'Arial' })
  ]}),
  
  new Paragraph({ spacing: { before: 400, after: 0 }, alignment: AlignmentType.CENTER, children: [
    new TextRun({ text: 'Mar del Plata – 2026', bold: true, size: 21, color: '666666', font: 'Arial' })
  ]})
];

// ÍNDICE
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

// CUERPO DEL TEXTO
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
  else if (text.startsWith('•') || text.startsWith('●') || pObj.isBullet) {
    let cleanText = text.replace(/^[•●\s]+/, '').trim();
    const colonIdx = cleanText.indexOf(':');
    if (colonIdx > 0 && colonIdx < 80) {
      const boldPart = cleanText.substring(0, colonIdx + 1);
      const restPart = cleanText.substring(colonIdx + 1);
      bodyChildren.push(new Paragraph({
        bullet: { level: 0 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 20, after: 40, line: 265 },
        children: [
          new TextRun({ text: boldPart + ' ', bold: true, size: 22, font: 'Arial' }),
          new TextRun({ text: restPart.trim(), size: 22, font: 'Arial' })
        ]
      }));
    } else {
      bodyChildren.push(new Paragraph({
        bullet: { level: 0 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 20, after: 40, line: 265 },
        children: [
          new TextRun({ text: cleanText, size: 22, font: 'Arial' })
        ]
      }));
    }
  }
  else {
    const textRuns = pObj.runs.map(r => new TextRun({
      text: r.text,
      bold: r.bold,
      italics: r.italic,
      size: 22,
      font: 'Arial'
    }));
    
    bodyChildren.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { before: 30, after: 60, line: 265 },
      children: textRuns.length > 0 ? textRuns : [new TextRun({ text: text, size: 22, font: 'Arial' })]
    }));
  }
});

// Pie de página ajustado con distancia adecuada para no tocar el texto del margen inferior
const bodyFooter = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 120 }, // Espacio de resguardo sobre el texto
      children: [
        new TextRun({
          text: 'Guido Cassulo – Legajo 36484  |  Plan de Trabajo',
          size: 17, // 8.5pt
          color: '666666',
          font: 'Arial'
        }),
        new TextRun({
          text: '\tPágina ',
          size: 17,
          color: '666666',
          font: 'Arial'
        }),
        new TextRun({
          children: [PageNumber.CURRENT],
          size: 17,
          bold: true,
          color: '1B365D',
          font: 'Arial'
        }),
        new TextRun({
          text: ' de ',
          size: 17,
          color: '666666',
          font: 'Arial'
        }),
        new TextRun({
          children: [PageNumber.TOTAL_PAGES],
          size: 17,
          bold: true,
          color: '1B365D',
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

// Pautas oficiales del concurso:
// Superior 3 cm (1701 dxa), Inferior 1.50 cm (850 dxa), Izquierdo 3 cm (1701 dxa), Derecho 1.50 cm (850 dxa)
// Ajustamos footer distance a 400 dxa (0.7 cm del borde de la hoja) para que no se choque con el texto que termina a 1.5 cm.
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
    footer: 400   // 0.70 cm (deja 0.8 cm libre con el texto)
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
  fs.writeFileSync('d:/proyecto/Proyecto_Guido_Cassulo_Completo.docx', buffer);
  fs.writeFileSync('d:/proyecto/proyecto prueba/Proyecto_Guido_Cassulo_Completo.docx', buffer);
  console.log('Docx generado con éxito.');
}

generate().catch(console.error);
