const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function merge() {
  const mergedPdf = await PDFDocument.create();

  const fileList = [
    // 1. CV
    { name: 'Curriculum Vitae', path: 'd:/proyecto/scratch/cv_rendered.pdf' },
    
    // 2. Acto administrativo de reencasillamiento / inscripción
    { name: 'Planilla de Inscripcion', path: 'd:/Descargas/PLANILLA DE INSCRIPCIÓN - GUIDO CASSULO.pdf' },
    { name: 'Decreto Reencasillamiento', path: 'd:/Descargas/CASSULO Guido - Dec. Reencasillamiento.pdf' },

    // 3. Título y Analítico
    { name: 'Diploma Teclab Tecnico Superior', path: 'd:/proyecto/certificaciones/diploma teclab.pdf' },
    { name: 'Certificado Analitico Teclab', path: 'd:/Descargas/Analitico.pdf' },
    { name: 'Certificado Titulo Intermedio Teclab', path: 'd:/proyecto/certificaciones/Certificado titulo intermedio TECLAB.pdf' },
    { name: 'Constancia Titulo en Tramite', path: 'd:/proyecto/certificaciones/constancia de titulo en tramite.pdf' },
    { name: 'Certificado HILET Programador Web', path: 'd:/proyecto/certificaciones/Certificado_HILET_Programador_Web_Junior.pdf' },
    { name: 'Certificado Alumno Regular', path: 'd:/Descargas/Certificado Alumno Regular - Guido Cassulo - 2026.pdf' },
    { name: 'Certificado Prof en Historia', path: 'd:/proyecto/certificaciones/certificado Prof en historia.pdf' },

    // 4. Certificaciones ICM (Municipalidad de General Pueyrredon)
    { name: 'ICM - Gestion Documental Electronica (GDE)', path: 'd:/proyecto/certificaciones/Constancia_de_Capacitacin_del_Sistema_de_Gestin_Documental_Electrnica.pdf' },
    { name: 'ICM - Ley Micaela', path: 'd:/proyecto/certificaciones/Certificado_-_Ley_Micaela_Gneros_Violencias_y_Cuidados.pdf' },
    { name: 'ICM - Ofimatica para la Administracion', path: 'd:/proyecto/certificaciones/Constancia_-_HERRAMIENTAS_DE_OFIMATICA_PARA_LA_ADMINISTRACION_PUBLICA_MUNICIPAL_-_2026.pdf' },
    { name: 'ICM - Redes Corporativas Nivel 1', path: 'd:/proyecto/certificaciones/Certificado_-_Herramientas_Informticas_y_Redes_Corporativas_-_Nivel_1_-_2026.pdf' },
    { name: 'ICM - Excel Nivel Inicial', path: 'd:/proyecto/certificaciones/Certificado_-_EXCEL_-_Nivel_Inicial_-_2026.pdf' },
    { name: 'ICM - Domicilio Electronico', path: 'd:/proyecto/certificaciones/Certificado_Curso_Constitucin_Domicilio_Electrnico.pdf' },
    { name: 'ICM - Novedades Diarias Personal', path: 'd:/proyecto/certificaciones/Certificado_-_Plataforma_de_Novedades_Diarias_del_Personal_2026.pdf' },
    { name: 'ICM - Legajo Unico Electronico', path: 'd:/proyecto/certificaciones/Constancia_del_curso_Legajo_nico_Electrnico_usuarios_2026.pdf' },
    { name: 'ICM - Prevencion del Dengue', path: 'd:/proyecto/certificaciones/Certificado_del_Curso_Prevencin_del_Dengue.pdf' },

    // 5. Certificaciones Teclab y Cisco
    { name: 'Teclab - Actualizacion IA', path: 'd:/proyecto/certificaciones/Certificado TECLAB IA.pdf' },
    { name: 'Cisco - Ethical Hacker', path: 'd:/proyecto/certificaciones/Ethical_Hacker_certificate_guidocassulo-gmail-com_f4833f58-ba1a-421a-b3e7-f498cbd06ef4.pdf' },
    { name: 'Cisco - Cybersecurity', path: 'd:/proyecto/certificaciones/Introduction_to_Cybersecurity_certificate_guidocassulo-gmail-com_959cd120-a432-414c-9deb-32a7353ebef6.pdf' },

    // 6. Certificaciones Coursera (Univ. Alberta & IBM)
    { name: 'Coursera 1', path: 'd:/proyecto/certificaciones/Coursera 3J0QKQO5FLWJ.pdf' },
    { name: 'Coursera 2', path: 'd:/proyecto/certificaciones/Coursera 58GQADWQ40PO.pdf' },
    { name: 'Coursera 3', path: 'd:/proyecto/certificaciones/Coursera 5PO4DIGQ30DJ.pdf' },
    { name: 'Coursera 4', path: 'd:/proyecto/certificaciones/Coursera 6DHDJWQXUPRH.pdf' },
    { name: 'Coursera 5', path: 'd:/proyecto/certificaciones/Coursera 7615UF4LDMAP.pdf' },
    { name: 'Coursera 6', path: 'd:/proyecto/certificaciones/Coursera 8VUGHQJ8E4F0.pdf' },
    { name: 'Coursera 7', path: 'd:/proyecto/certificaciones/Coursera FQI66BZA9MDZ.pdf' },
    { name: 'Coursera 8', path: 'd:/proyecto/certificaciones/Coursera HGRBW3OR90E5.pdf' },
    { name: 'Coursera 9', path: 'd:/proyecto/certificaciones/Coursera HUU10CZ56C9I (1).pdf' },
    { name: 'Coursera 10', path: 'd:/proyecto/certificaciones/Coursera ID3CXLUYILOI.pdf' },
    { name: 'Coursera 11', path: 'd:/proyecto/certificaciones/Coursera J6YRF3874JZ2.pdf' },
    { name: 'Coursera 12', path: 'd:/proyecto/certificaciones/Coursera J7WUJLMCE4UF.pdf' },
    { name: 'Coursera 13', path: 'd:/proyecto/certificaciones/Coursera NPRC6XUJ2SSF.pdf' },
    { name: 'Coursera 14', path: 'd:/proyecto/certificaciones/Coursera OC5DNSW8R7H9.pdf' },
    { name: 'Coursera 15', path: 'd:/proyecto/certificaciones/Coursera SZZ8WW7S3CIG.pdf' },
    { name: 'Coursera 16', path: 'd:/proyecto/certificaciones/Coursera VNZF1YY84BM4.pdf' },
    { name: 'Coursera 17', path: 'd:/proyecto/certificaciones/Coursera WS9VW8IGXE16.pdf' },
    { name: 'Coursera 18', path: 'd:/proyecto/certificaciones/Coursera X9AV1ZTNCZJ7.pdf' },
    { name: 'Coursera 19', path: 'd:/proyecto/certificaciones/Coursera Z7AA979D1SSS.pdf' },

    // 7. Plan de Trabajo / Proyecto de Concurso
    { name: 'Plan de Trabajo Proyecto Jefatura', path: 'd:/proyecto/scratch/proyecto_jefe.pdf' }
  ];

  let totalPages = 0;
  for (const item of fileList) {
    if (!fs.existsSync(item.path)) {
      console.log('Skipping missing file: ' + item.path);
      continue;
    }
    const bytes = fs.readFileSync(item.path);
    try {
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach(p => mergedPdf.addPage(p));
      console.log('Added: ' + item.name + ' (' + pdf.getPageCount() + ' pages)');
      totalPages += pdf.getPageCount();
    } catch(e) {
      console.error('Error loading ' + item.path + ': ' + e.message);
    }
  }

  const mergedBytes = await mergedPdf.save();
  const outPath = 'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf';
  fs.writeFileSync(outPath, mergedBytes);
  console.log('\nSUCCESS! Full presentation PDF merged at: ' + outPath);
  console.log('Total Pages: ' + totalPages);
  console.log('File Size: ' + (mergedBytes.length / (1024 * 1024)).toFixed(2) + ' MB');
}

merge().catch(err => console.error(err));
