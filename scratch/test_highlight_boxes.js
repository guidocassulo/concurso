const fs = require('fs');
const { PDFDocument, rgb, degrees } = require('pdf-lib');

const A4_W = 595.28;
const A4_H = 841.89;

async function testHighlight() {
  const finalDoc = await PDFDocument.create();

  // Helper para agregar una captura pura con resaltado en A4 Vertical
  async function addHighlightedCapturePage(imgPath, imgW, imgH, boxInImgCoords) {
    const imgBytes = fs.readFileSync(imgPath);
    const img = await finalDoc.embedPng(imgBytes);
    const page = finalDoc.addPage([A4_W, A4_H]);

    // Escalar la imagen al ancho óptimo de la hoja A4 (dejando márgenes limpios de 20pt a los lados)
    const targetW = A4_W - 40; // 555.28 pt
    const scale = targetW / imgW;
    const targetH = imgH * scale;

    const imgX = (A4_W - targetW) / 2; // 20 pt
    const imgY = (A4_H - targetH) / 2; // Centrado vertical

    // 1. Dibujar la imagen de la captura pura
    page.drawImage(img, {
      x: imgX,
      y: imgY,
      width: targetW,
      height: targetH
    });

    // 2. Dibujar el recuadro de resaltado (en coordenadas PDF donde (0,0) está abajo a la izquierda)
    // boxInImgCoords: { x, y, w, h } en coordenadas de imagen estándar (donde y=0 es arriba)
    if (boxInImgCoords) {
      const boxX = imgX + boxInImgCoords.x * scale;
      const boxY = imgY + (imgH - (boxInImgCoords.y + boxInImgCoords.h)) * scale;
      const boxW = boxInImgCoords.w * scale;
      const boxH = boxInImgCoords.h * scale;

      // Marco negro grueso de alto contraste para B&N
      page.drawRectangle({
        x: boxX - 2,
        y: boxY - 2,
        width: boxW + 4,
        height: boxH + 4,
        borderColor: rgb(0, 0, 0),
        borderWidth: 3
      });
    }
  }

  // 1. Cisco Ethical Hacker (1024x403) -> Total Hours 70 (x: 840, y: 15, w: 90, h: 50)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/17_Cisco_Ethical_Hacker_70hs.png',
    1024, 403,
    { x: 840, y: 12, w: 95, h: 55 }
  );

  // 2. Alberta OOD (1024x440) -> Cronograma flexible 2 semanas en 10 horas una semana (x: 580, y: 345, w: 200, h: 75)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/01_Alberta_Diseno_Orientado_Objetos.png',
    1024, 440,
    { x: 575, y: 340, w: 215, h: 80 }
  );

  // 3. Alberta Design Patterns (1024x442) -> Cronograma flexible (x: 580, y: 345, w: 200, h: 75)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/02_Alberta_Patrones_de_Diseno.png',
    1024, 442,
    { x: 575, y: 340, w: 215, h: 80 }
  );

  // 4. Alberta Software Architecture (1024x413) -> Cronograma flexible (x: 580, y: 320, w: 200, h: 75)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/03_Alberta_Arquitectura_de_Software.png',
    1024, 413,
    { x: 575, y: 315, w: 215, h: 80 }
  );

  // 5. Alberta SOA (1024x411) -> Cronograma flexible (x: 580, y: 320, w: 200, h: 75)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/04_Alberta_Arquitectura_Orientada_a_Servicios.png',
    1024, 411,
    { x: 575, y: 315, w: 215, h: 80 }
  );

  // 6. Alberta Especializacion 4 Cursos (1024x606) -> 1 meses y 10 horas por semana (x: 120, y: 250, w: 375, h: 50)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/00_Alberta_Software_Design_Especializacion_4Cursos.png',
    1024, 606,
    { x: 125, y: 245, w: 365, h: 52 }
  );

  // 7. IBM Data Science Especializacion 12 Cursos (1024x680) -> 4 meses y 10 horas por semana (x: 120, y: 250, w: 375, h: 50)
  await addHighlightedCapturePage(
    'd:/proyecto/capturas_horas_cursos/00_IBM_Data_Science_Especializacion_12Cursos.png',
    1024, 680,
    { x: 125, y: 245, w: 365, h: 52 }
  );

  fs.writeFileSync('d:/proyecto/scratch/test_highlighted_captures.pdf', await finalDoc.save());
  console.log('Saved test_highlighted_captures.pdf successfully. Total pages:', finalDoc.getPageCount());
}

testHighlight().catch(console.error);
