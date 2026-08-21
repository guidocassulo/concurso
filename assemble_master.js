const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');

const A4_W = 595.28;
const A4_H = 841.89;

async function assembleMasterDocument() {
  console.log('=== ENSAMBLANDO DOSSIER CON PROYECTO GUIDO PARA PDF ===');
  
  const finalDoc = await PDFDocument.create();
  const fontBold = await finalDoc.embedFont(StandardFonts.HelveticaBold);

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

  async function addGuidoAnnexPage(imgPath, certExactTitle) {
    if (!fs.existsSync(imgPath)) return;
    const imgBytes = fs.readFileSync(imgPath);
    const img = await finalDoc.embedPng(imgBytes);
    const page = finalDoc.addPage([A4_W, A4_H]);

    const marginX = 30;
    const contentW = A4_W - marginX * 2;

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

    page.drawLine({
      start: { x: marginX, y: A4_H - 72 },
      end: { x: A4_W - marginX, y: A4_H - 72 },
      thickness: 1.5,
      color: rgb(0, 0, 0)
    });

    const maxAvailableH = A4_H - 72 - 35;
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

  // 1. CURRICULUM VITAE (2 páginas)
  const cvDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/curriculum_guido_cassulo_v2.pdf'));
  for (let i = 0; i < cvDoc.getPageCount(); i++) {
    await addPageDoc(cvDoc, i);
  }

  const certDir = 'd:/proyecto/certificaciones';
  const guidoDir = 'D:/proyecto/capturas_nuevas_guido';

  // 2. TECLAB
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

  // 3. OTRAS CERTIFICACIONES + ANEXOS
  const hiletDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Certificado_HILET_Programador_Web_Junior.pdf')));
  for (let i = 0; i < hiletDoc.getPageCount(); i++) {
    await addPageDoc(hiletDoc, i);
  }

  const ciscoHackerDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Ethical_Hacker_certificate_guidocassulo-gmail-com_f4833f58-ba1a-421a-b3e7-f498cbd06ef4.pdf')));
  for (let i = 0; i < ciscoHackerDoc.getPageCount(); i++) {
    await addPageDoc(ciscoHackerDoc, i);
  }
  await addGuidoAnnexPage(path.join(guidoDir, '16.png'), 'Hacker ético');

  const ciscoCyberDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'Introduction_to_Cybersecurity_certificate_guidocassulo-gmail-com_959cd120-a432-414c-9deb-32a7353ebef6.pdf')));
  for (let i = 0; i < ciscoCyberDoc.getPageCount(); i++) {
    await addPageDoc(ciscoCyberDoc, i);
  }

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
      await addGuidoAnnexPage(path.join(guidoDir, item.img), item.exactTitle);
    }
  }

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
    'Coursera Z7AA979D1SSS.pdf'
  ];
  for (let f of ibmFiles) {
    const fullP = path.join(certDir, f);
    if (!fs.existsSync(fullP)) continue;
    const doc = await PDFDocument.load(fs.readFileSync(fullP));
    for (let i = 0; i < doc.getPageCount(); i++) {
      await addPageDoc(doc, i);
    }
    if (f === 'Coursera Z7AA979D1SSS.pdf') {
      await addGuidoAnnexPage(path.join(guidoDir, '20.png'), 'IBM Data Science');
    }
  }

  // 4. ICM
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

  // 5. HISTORIA
  const historiaDoc = await PDFDocument.load(fs.readFileSync(path.join(certDir, 'certificado Prof en historia.pdf')));
  for (let i = 0; i < historiaDoc.getPageCount(); i++) {
    await addPageDoc(historiaDoc, i);
  }

  // 6. PLAN DE TRABAJO INDIVIDUAL (PROYECTO GUIDO PARA PDF.pdf - 18 páginas)
  const planDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/PROYECTO GUIDO PARA PDF.pdf'));
  for (let i = 0; i < planDoc.getPageCount(); i++) {
    await addPageDoc(planDoc, i);
  }

  const outBytes = await finalDoc.save();
  
  const targets = [
    'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Final.pdf',
    'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_v4.pdf',
    'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_v3.pdf',
    'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf'
  ];

  for (let t of targets) {
    try {
      fs.writeFileSync(t, outBytes);
      console.log('Guardado exitoso: ' + t);
    } catch (e) {
      console.warn('No se pudo sobrescribir ' + t + ': ' + e.message);
    }
  }

  console.log('Total páginas del dossier consolidado:', finalDoc.getPageCount());
}

assembleMasterDocument().catch(console.error);
