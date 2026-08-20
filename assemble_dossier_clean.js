const fs = require('fs');
const { PDFDocument, PageSizes } = require('pdf-lib');

// Medidas estándar A4 en puntos (pt)
// A4 Portrait: 595.28 x 841.89
// A4 Landscape: 841.89 x 595.28
const A4_PORTRAIT = [595.28, 841.89];
const A4_LANDSCAPE = [841.89, 595.28];

async function assembleDossier() {
  console.log('--- ARMANDO DOSSIER CONCURSO GUIDO CASSULO ---');
  
  const origDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo_OLD_BACKUP.pdf'));
  const planDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/Proyecto_Guido_Cassulo_Completo.pdf'));
  const hiletDoc = await PDFDocument.load(fs.readFileSync('d:/proyecto/certificaciones/Certificado_HILET_Programador_Web_Junior.pdf'));
  
  const finalDoc = await PDFDocument.create();
  
  // Función para agregar una página asegurando tamaño exacto A4 (Portrait o Landscape)
  async function addPageNormalized(sourceDoc, pageIndex, isLandscape = false) {
    const [embedded] = await finalDoc.embedPages([sourceDoc.getPage(pageIndex)]);
    const targetWidth = isLandscape ? A4_LANDSCAPE[0] : A4_PORTRAIT[0];
    const targetHeight = isLandscape ? A4_LANDSCAPE[1] : A4_PORTRAIT[1];
    
    const newPage = finalDoc.addPage([targetWidth, targetHeight]);
    
    // Escalar manteniendo proporción y centrar
    const srcWidth = embedded.width;
    const srcHeight = embedded.height;
    
    const scale = Math.min(targetWidth / srcWidth, targetHeight / srcHeight);
    const drawWidth = srcWidth * scale;
    const drawHeight = srcHeight * scale;
    
    const x = (targetWidth - drawWidth) / 2;
    const y = (targetHeight - drawHeight) / 2;
    
    newPage.drawPage(embedded, {
      x: x,
      y: y,
      width: drawWidth,
      height: drawHeight
    });
  }

  // 1. CV (Páginas 1 y 2 de origDoc -> 0 y 1) - A4 Portrait
  console.log('Agregando CV (2 páginas Portrait)...');
  await addPageNormalized(origDoc, 0, false);
  await addPageNormalized(origDoc, 1, false);

  // 2. Certificado HILET (Original apaisado) - A4 Landscape
  console.log('Agregando Certificado HILET (1 página Landscape)...');
  await addPageNormalized(hiletDoc, 0, true);

  // 3. Decreto de Reencasillamiento MGP (Páginas 4 a 7 de origDoc -> índices 3 a 6) - A4 Portrait
  console.log('Agregando Decreto MGP (4 páginas Portrait)...');
  for (let i = 3; i <= 6; i++) {
    await addPageNormalized(origDoc, i, false);
  }

  // 4. Certificado Teclab Técnico Superior (Pág 8 de origDoc -> índice 7) - A4 Landscape
  console.log('Agregando Certificado Teclab Técnico Superior (Landscape)...');
  await addPageNormalized(origDoc, 7, true);

  // NOTA: Páginas 9 y 10 (índices 8 y 9) son el ANALÍTICO DE TECLAB -> SE EXCLUYEN / SE SALTEAN.
  console.log('>>> EXCLUYENDO REPORTE ANALÍTICO DE TECLAB (Páginas 9 y 10 de backup) <<<');

  // 5. Certificado 1er año Teclab (Pág 11 -> índice 10) - A4 Landscape
  console.log('Agregando Certificado 1er año Teclab (Landscape)...');
  await addPageNormalized(origDoc, 10, true);

  // 6. Constancia de Título en Trámite Teclab (Pág 12 -> índice 11) - A4 Portrait
  console.log('Agregando Constancia de Título en trámite Teclab (Portrait)...');
  await addPageNormalized(origDoc, 11, false);

  // 7. Diploma Teclab (Pág 13 -> índice 12) - A4 Landscape
  console.log('Agregando Diploma Teclab (Landscape)...');
  await addPageNormalized(origDoc, 12, true);

  // 8. Certificado Alumno Regular Teclab (Pág 14 -> índice 13) - A4 Portrait
  console.log('Agregando Certificado Alumno Regular Teclab (Portrait)...');
  await addPageNormalized(origDoc, 13, false);

  // 9. Constancias UNMDP Profesorado en Historia (Págs 15 y 16 -> índices 14 y 15) - A4 Portrait
  console.log('Agregando Constancias UNMDP (2 páginas Portrait)...');
  await addPageNormalized(origDoc, 14, false);
  await addPageNormalized(origDoc, 15, false);

  // 10. Certificados de Capacitación Municipal MGP (Págs 17 a 25 -> índices 16 a 24) - A4 Landscape
  console.log('Agregando Certificados Capacitaciones MGP (9 páginas Landscape)...');
  for (let i = 16; i <= 24; i++) {
    await addPageNormalized(origDoc, i, true);
  }

  // 11. Certificado Teclab IA (Pág 26 -> índice 25) - A4 Landscape
  console.log('Agregando Certificado Teclab IA (Landscape)...');
  await addPageNormalized(origDoc, 25, true);

  // 12. Certificados Cisco Networking Academy (Págs 27 y 28 -> índices 26 y 27) - A4 Landscape
  console.log('Agregando Certificados Cisco (2 páginas Landscape adaptadas a A4)...');
  await addPageNormalized(origDoc, 26, true);
  await addPageNormalized(origDoc, 27, true);

  // 13. Certificados Coursera / IBM / Alberta (Págs 29 a 47 -> índices 28 a 46) - A4 Landscape
  console.log('Agregando Certificados Coursera / IBM / Alberta (19 páginas Landscape adaptadas a A4)...');
  for (let i = 28; i <= 46; i++) {
    await addPageNormalized(origDoc, i, true);
  }

  // 14. Plan de Trabajo Nuevo (18 páginas de Proyecto_Guido_Cassulo_Completo.pdf) - A4 Portrait
  console.log('Agregando Plan de Trabajo Completo (' + planDoc.getPageCount() + ' páginas Portrait)...');
  for (let i = 0; i < planDoc.getPageCount(); i++) {
    await addPageNormalized(planDoc, i, false);
  }

  const finalBytes = await finalDoc.save();
  const outputPath = 'd:/proyecto/Presentacion_Concurso_Guido_Cassulo_Completo.pdf';
  fs.writeFileSync(outputPath, finalBytes);

  console.log('----------------------------------------------------');
  console.log('EXITO: Presentación completa generada en: ' + outputPath);
  console.log('Total de páginas del dossier final: ' + finalDoc.getPageCount());
}

assembleDossier().catch(console.error);
