const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const A4_W = 595.28;
const A4_H = 841.89;

async function createNewConsolidatedPDF() {
  console.log('--- CREANDO NUEVO DOCUMENTO CONSOLIDADO ---');
  
  const finalDoc = await PDFDocument.create();

  // Helper para insertar páginas forzando tamaño A4 VERTICAL
  async function appendAsA4Vertical(srcDoc, pageIdx) {
    const [embedded] = await finalDoc.embedPages([srcDoc.getPage(pageIdx)]);
    const page = finalDoc.addPage([A4_W, A4_H]);
    
    const srcW = embedded.width;
    const srcH = embedded.height;
    
    // Si la página original es horizontal (srcW > srcH), la escalamos para que entre en el ancho de A4 con margen
    const margin = 20;
    const maxW = A4_W - (margin * 2);
    const maxH = A4_H - (margin * 2);
    
    const scale = Math.min(maxW / srcW, maxH / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    
    const x = (A4_W - drawW) / 2;
    const y = (A4_H - drawH) / 2;
    
    page.drawPage(embedded, {
      x,
      y,
      width: drawW,
      height: drawH
    });
  }

  // 1. CV (curriculum_guido_cassulo_v2.pdf)
  const cvPath = 'd:/proyecto/curriculum_guido_cassulo_v2.pdf';
  console.log('1. Agregando CV desde:', cvPath);
  const cvDoc = await PDFDocument.load(fs.readFileSync(cvPath));
  for (let i = 0; i < cvDoc.getPageCount(); i++) {
    await appendAsA4Vertical(cvDoc, i);
  }

  // 2. Certificaciones de la carpeta D:\proyecto\certificaciones
  const certDir = 'd:/proyecto/certificaciones';
  
  // Archivos ordenados y deduplicados
  const certFiles = [
    // Terciario / Universitario
    'diploma teclab.pdf',
    'Certificado titulo intermedio TECLAB.pdf',
    'constancia de titulo en tramite.pdf',
    'Certificado TECLAB IA.pdf',
    'Certificado_HILET_Programador_Web_Junior.pdf',
    'certificado Prof en historia.pdf',
    
    // Capacitaciones Municipales MGP
    'Certificado_-_EXCEL_-_Nivel_Inicial_-_2026.pdf',
    'Certificado_-_Herramientas_Informticas_y_Redes_Corporativas_-_Nivel_1_-_2026.pdf',
    'Certificado_-_Ley_Micaela_Gneros_Violencias_y_Cuidados.pdf',
    'Certificado_-_Plataforma_de_Novedades_Diarias_del_Personal_2026.pdf',
    'Certificado_Curso_Constitucin_Domicilio_Electrnico.pdf',
    'Certificado_del_Curso_Prevencin_del_Dengue.pdf',
    'Constancia_-_HERRAMIENTAS_DE_OFIMATICA_PARA_LA_ADMINISTRACION_PUBLICA_MUNICIPAL_-_2026.pdf',
    'Constancia_del_curso_Legajo_nico_Electrnico_usuarios_2026.pdf',
    'Constancia_de_Capacitacin_del_Sistema_de_Gestin_Documental_Electrnica.pdf',
    
    // Cisco
    'Ethical_Hacker_certificate_guidocassulo-gmail-com_f4833f58-ba1a-421a-b3e7-f498cbd06ef4.pdf',
    'Introduction_to_Cybersecurity_certificate_guidocassulo-gmail-com_959cd120-a432-414c-9deb-32a7353ebef6.pdf',
    
    // Coursera / IBM / Alberta
    'Coursera 3J0QKQO5FLWJ.pdf',
    'Coursera 58GQADWQ40PO.pdf',
    'Coursera 5PO4DIGQ30DJ.pdf',
    'Coursera 6DHDJWQXUPRH.pdf',
    'Coursera 7615UF4LDMAP.pdf',
    'Coursera 8VUGHQJ8E4F0.pdf',
    'Coursera FQI66BZA9MDZ.pdf',
    'Coursera HGRBW3OR90E5.pdf',
    'Coursera HUU10CZ56C9I (1).pdf',
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

  console.log('2. Agregando ' + certFiles.length + ' archivos de certificaciones...');
  for (let f of certFiles) {
    const fullP = path.join(certDir, f);
    if (!fs.existsSync(fullP)) {
      console.log('ADVERTENCIA: No encontrado -> ' + f);
      continue;
    }
    const cDoc = await PDFDocument.load(fs.readFileSync(fullP));
    for (let p = 0; p < cDoc.getPageCount(); p++) {
      await appendAsA4Vertical(cDoc, p);
    }
  }

  // 3. Plan de Trabajo Completo (Proyecto_Guido_Cassulo_Completo.pdf)
  const planPath = 'd:/proyecto/Proyecto_Guido_Cassulo_Completo.pdf';
  console.log('3. Agregando Plan de Trabajo desde:', planPath);
  const planDoc = await PDFDocument.load(fs.readFileSync(planPath));
  for (let i = 0; i < planDoc.getPageCount(); i++) {
    await appendAsA4Vertical(planDoc, i);
  }

  const outBytes = await finalDoc.save();
  const outPath1 = 'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Final.pdf';
  const outPath2 = 'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf';
  
  fs.writeFileSync(outPath1, outBytes);
  fs.writeFileSync(outPath2, outBytes);
  
  console.log('----------------------------------------------------');
  console.log('EXITO: Creado documento nuevo: ' + outPath1);
  console.log('Total páginas 100% A4 Vertical:', finalDoc.getPageCount());
}

createNewConsolidatedPDF().catch(console.error);
