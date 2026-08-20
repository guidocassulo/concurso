const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');

const A4_W = 595.28;
const A4_H = 841.89;

async function assembleMasterDocument() {
  console.log('=== ENSAMBLANDO DOSSIER CON LAS CAPTURAS EXACTAS DE GUIDO (D:\\proyecto\\capturas_nuevas_guido) ===');
  
  const finalDoc = await PDFDocument.create();
  const fontBold = await finalDoc.embedFont(StandardFonts.HelveticaBold);

  // Helper para agregar página PDF estándar
  async function addPageDoc(srcDoc, pageIndex) {
    const srcPage = srcDoc.getPage(pageIndex);
    const [embedded] = await finalDoc.embedPages([srcPage]);
    
    const srcW = embedded.width;
    const srcH = embedded.height;
    const isLandscape = srcW > srcH;
    
    const page = finalDoc.addPage([A4_W, A4_H]);
    
    if (isLandscape) {
      const scale = Math.min(A4_W / srcH, A4_H / srcW);
      const drawW = srcW * scale;
      const drawH = srcH * scale;
      
      const x = (A4_W - drawH) / 2 + drawH;
      const y = (A4_H - drawW) / 2;
      
      page.drawPage(embedded, {
        x: x,
        y: y,
        width: drawW,
        height: drawH,
        rotate: degrees(90)
      });
    } else {
      const scale = Math.min(A4_W / srcW, A4_H / srcH);
      const drawW = srcW * scale;
      const drawH = srcH * scale;
      
      const x = (A4_W - drawW) / 2;
      const y = (A4_H - drawH) / 2;
      
      page.drawPage(embedded, {
        x: x,
        y: y,
        width: drawW,
        height: drawH
      });
    }
  }

  // Helper para agregar carilla de Anexo en A4 Vertical con la imagen EXACTA de Guido
  async function addGuidoAnnexPage(imgPath, certExactTitle) {
    if (!fs.existsSync(imgPath)) {
      console.error(`ERROR: No existe la imagen ${imgPath}`);
      return;
    }
    const imgBytes = fs.readFileSync(imgPath);
    const img = await finalDoc.embedPng(imgBytes);
    
    const page = finalDoc.addPage([A4_W, A4_H]);

    const marginX = 30;
    const contentW = A4_W - marginX * 2; // 535.28 pt

    // 1. Título formal arriba ("Anexo: Acreditación de carga horaria oficial")
    const line1 = 'Anexo: Acreditación de carga horaria oficial';
    const line2 = `Certificación: "${certExactTitle}"`;

    page.drawText(line1, {
      x: marginX,
      y: A4_H - 42,
      size: 11,
      font: fontBold,
      color: rgb(0.2, 0.2, 0.2)
    });

    page.drawText(line2, {
      x: marginX,
      y: A4_H - 62,
      size: 14,
      font: fontBold,
      color: rgb(0, 0, 0)
    });

    // Línea divisoria
    page.drawLine({
      start: { x: marginX, y: A4_H - 72 },
      end: { x: A4_W - marginX, y: A4_H - 72 },
      thickness: 1.5,
      color: rgb(0, 0, 0)
    });

    // 2. Imagen exacta sin compresión
    const maxAvailableH = A4_H - 72 - 35; // Espacio vertical libre (~734 pt)
    const scale = Math.min(contentW / img.width, maxAvailableH / img.height);
    const targetW = img.width * scale;
    const targetH = img.height * scale;

    const imgX = (A4_W - targetW) / 2;
    const imgY = (A4_H - 72 - targetH) / 2 + 10;

    page.drawImage(img, {
      x: imgX,
      y: imgY,
      width: targetW,
      height: targetH
    });
  }

  // 1. CURRICULUM VITAE (Primero - 2 páginas)
  console.log('1. Agregando Curriculum Vitae...');
  const cvDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/curriculum_guido_cassulo_v2.pdf'));
  for (let i = 0; i < cvDoc.getPageCount(); i++) {
    await addPageDoc(cvDoc, i);
  }

  const certDir = 'd:/proyecto/certificaciones';
  const guidoDir = 'D:/proyecto/capturas_nuevas_guido';

  // 2. PRIMERO: CERTIFICACIONES DE TECLAB
  console.log('2. Agregando Certificaciones de TECLAB...');
  const teclabFiles = [
    'diploma teclab.pdf',
    'Certificado titulo intermedio TECLAB.pdf',
    'constancia de titulo en tramite.pdf',
    'Reporte consolidado de la carrera.pdf',
    'Certificado TECLAB IA.pdf'
  ];
  for (let f of teclabFiles) {
    const fullP = path.join(certDir, f);
    if (!fs.existsSync(fullP)) continue;
    const doc = await PDFDocument.load(fs.readFileSync(fullP));
    for (let i = 0; i < doc.getPageCount(); i++) {
      await addPageDoc(doc, i);
    }
  }

  // 3. SEGUNDO: DEMÁS CERTIFICACIONES DE PROGRAMACIÓN CON LAS CAPTURAS DE GUIDO
  console.log('3. Agregando demás Certificaciones con las capturas de Guido...');
  
  // HILET
  const hiletDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Certificado_HILET_Programador_Web_Junior.pdf')));
  for (let i = 0; i < hiletDoc.getPageCount(); i++) {
    await addPageDoc(hiletDoc, i);
  }

  // CISCO Ethical Hacker + Anexo 16.png: "Hacker ético"
  const ciscoHackerDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Ethical_Hacker_certificate_guidocassulo-gmail-com_f4833f58-ba1a-421a-b3e7-f498cbd06ef4.pdf')));
  for (let i = 0; i < ciscoHackerDoc.getPageCount(); i++) {
    await addPageDoc(ciscoHackerDoc, i);
  }
  await addGuidoAnnexPage(
    path.join(guidoDir, '16.png'),
    'Hacker ético'
  );

  // CISCO Cybersecurity
  const ciscoCyberDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Introduction_to_Cybersecurity_certificate_guidocassulo-gmail-com_959cd120-a432-414c-9deb-32a7353ebef6.pdf')));
  for (let i = 0; i < ciscoCyberDoc.getPageCount(); i++) {
    await addPageDoc(ciscoCyberDoc, i);
  }

  // COURSERA ALBERTA (con nombres exactos de cada certificado y capturas 12, 13, 14, 19, 17)
  const albertaCourses = [
    { file: 'Coursera 58GQADWQ40PO.pdf', img: '12.png', exactTitle: 'Object-Oriented Design' },
    { file: 'Coursera FQI66BZA9MDZ.pdf', img: '13.png', exactTitle: 'Design Patterns' },
    { file: 'Coursera 7615UF4LDMAP.pdf', img: '14.png', exactTitle: 'Software Architecture' },
    { file: 'Coursera HGRBW3OR90E5.pdf', img: '19.png', exactTitle: 'Service-Oriented Architecture' },
    { file: 'Coursera HUU10CZ56C9I (1).pdf', img: '17.png', exactTitle: 'Software Design and Architecture' }
  ];
  for (let item of albertaCourses) {
    const p = path.join(certDir, item.file);
    if (fs.existsSync(p)) {
      const doc = await PDFDocument.load(fs.readFileSync(p));
      for (let i = 0; i < doc.getPageCount(); i++) {
        await addPageDoc(doc, i);
      }
      await addGuidoAnnexPage(
        path.join(guidoDir, item.img),
        item.exactTitle
      );
    }
  }

  // COURSERA IBM
  const ibmFiles = [
    'Coursera 3J0QKQO5FLWJ.pdf',
    'Coursera 5PO4DIGQ30DJ.pdf',
    'Coursera 6DHDJWQXUPRH.pdf',
    'Coursera 8VUGHQJ8E4F0.pdf',
    'Coursera ID3CXLUYILOI.pdf',
    'Coursera J6YRF3874JZ2.pdf',
    'Coursera J7WUJLMCE4UF.pdf',
    'Coursera NPRC6XUJ2SSF.pdf',
    'Coursera OC5DNSW8R7H9.pdf',
    'Coursera SZZ8WW7S3CIG.pdf',
    'Coursera VNZF1YY84BM4.pdf',
    'Coursera WS9VW8IGXE16.pdf',
    'Coursera X9AV1ZTNCZJ7.pdf',
    'Coursera Z7AA979D1SSS.pdf' // IBM Data Science Professional Certificate (12 Cursos)
  ];
  for (let f of ibmFiles) {
    const fullP = path.join(certDir, f);
    if (!fs.existsSync(fullP)) continue;
    const doc = await PDFDocument.load(fs.readFileSync(fullP));
    for (let i = 0; i < doc.getPageCount(); i++) {
      await addPageDoc(doc, i);
    }
    // Si es el diploma de especialización de IBM Data Science, agregar la captura 20.png de Guido
    if (f === 'Coursera Z7AA979D1SSS.pdf') {
      await addGuidoAnnexPage(
        path.join(guidoDir, '20.png'),
        'IBM Data Science'
      );
    }
  }

  // 4. TERCERO: CERTIFICACIONES DE ICM (MGP)
  console.log('4. Agregando Certificaciones de ICM (MGP)...');
  const icmFiles = [
    'Certificado_-_EXCEL_-_Nivel_Inicial_-_2026.pdf',
    'Certificado_-_Herramientas_Informticas_y_Redes_Corporativas_-_Nivel_1_-_2026.pdf',
    'Certificado_-_Ley_Micaela_Gneros_Violencias_y_Cuidados.pdf',
    'Certificado_-_Plataforma_de_Novedades_Diarias_del_Personal_2026.pdf',
    'Certificado_Curso_Constitucin_Domicilio_Electrnico.pdf',
    'Certificado_del_Curso_Prevencin_del_Dengue.pdf',
    'Constancia_-_HERRAMIENTAS_DE_OFIMATICA_PARA_LA_ADMINISTRACION_PUBLICA_MUNICIPAL_-_2026.pdf',
    'Constancia_del_curso_Legajo_nico_Electrnico_usuarios_2026.pdf',
    'Constancia_de_Capacitacin_del_Sistema_de_Gestin_Documental_Electrnica.pdf'
  ];
  for (let f of icmFiles) {
    const fullP = path.join(certDir, f);
    if (!fs.existsSync(fullP)) continue;
    const doc = await PDFDocument.load(fs.readFileSync(fullP));
    for (let i = 0; i < doc.getPageCount(); i++) {
      await addPageDoc(doc, i);
    }
  }

  // 5. CUARTO: ANALÍTICO DE PROFESORADO EN HISTORIA (UNMDP)
  console.log('5. Agregando Analítico de Profesorado en Historia (UNMDP)...');
  const historiaDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'certificado Prof en historia.pdf')));
  for (let i = 0; i < historiaDoc.getPageCount(); i++) {
    await addPageDoc(historiaDoc, i);
  }

  // 6. PLAN DE TRABAJO COMPLETO (18 páginas)
  console.log('6. Agregando Plan de Trabajo Completo...');
  const planDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/Proyecto_Guido_Cassulo_Completo.pdf'));
  for (let i = 0; i < planDoc.getPageCount(); i++) {
    await addPageDoc(planDoc, i);
  }

  const outBytes = await finalDoc.save();
  
  fs.writeFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Final.pdf', outBytes);
  fs.writeFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_v3.pdf', outBytes);
  fs.writeFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Actualizado.pdf', outBytes);
  fs.writeFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf', outBytes);

  console.log('====================================================');
  console.log('EXITO TOTAL: Dossier final generado con las capturas de Guido.');
  console.log('Total páginas del documento consolidado:', finalDoc.getPageCount());
}

assembleMasterDocument().catch(console.error);
