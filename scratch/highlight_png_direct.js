const fs = require('fs');
const { PNG } = require('pngjs');

// Function to draw a crisp rectangle onto a PNG
function drawBox(png, x0, y0, x1, y1, borderThickness = 3, color = { r: 0, g: 0, b: 0, a: 255 }) {
  // Clamp
  x0 = Math.max(0, Math.min(png.width - 1, x0));
  x1 = Math.max(0, Math.min(png.width - 1, x1));
  y0 = Math.max(0, Math.min(png.height - 1, y0));
  y1 = Math.max(0, Math.min(png.height - 1, y1));

  function setPixel(x, y) {
    const idx = (png.width * y + x) << 2;
    png.data[idx] = color.r;
    png.data[idx + 1] = color.g;
    png.data[idx + 2] = color.b;
    png.data[idx + 3] = color.a;
  }

  for (let t = 0; t < borderThickness; t++) {
    // Top and bottom horizontal lines
    for (let x = x0 - t; x <= x1 + t; x++) {
      if (x >= 0 && x < png.width) {
        if (y0 - t >= 0) setPixel(x, y0 - t);
        if (y1 + t < png.height) setPixel(x, y1 + t);
      }
    }
    // Left and right vertical lines
    for (let y = y0 - t; y <= y1 + t; y++) {
      if (y >= 0 && y < png.height) {
        if (x0 - t >= 0) setPixel(x0 - t, y);
        if (x1 + t < png.width) setPixel(x1 + t, y);
      }
    }
  }
}

// 1. Process Cisco Ethical Hacker (1024x403)
// Total Hours 70 is located at:
// In the top right: x ~ 840 to 920, y ~ 10 to 60.
const ciscoBuffer = fs.readFileSync('C:/Users/gcassulo/.gemini/antigravity/brain/7721c8cd-e929-4ddc-8ff1-6701377a6901/.user_uploaded/media_1787246105318.png');
const ciscoPng = PNG.sync.read(ciscoBuffer);

// Let's find the exact dark text pixels in top right quadrant (x > 800, y < 80)
let minX = 10000, maxX = -1, minY = 10000, maxY = -1;
for (let y = 5; y < 75; y++) {
  for (let x = 830; x < 940; x++) {
    const idx = (ciscoPng.width * y + x) << 2;
    const r = ciscoPng.data[idx];
    const g = ciscoPng.data[idx + 1];
    const b = ciscoPng.data[idx + 2];
    // Dark text pixel
    if (r < 180 && g < 180 && b < 180) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log('Cisco Total Hours detected text box:', { minX, maxX, minY, maxY });
drawBox(ciscoPng, minX - 10, minY - 6, maxX + 10, maxY + 6, 3);
fs.writeFileSync('d:/proyecto/capturas_horas_cursos/cisco_ethical_hacker_highlighted.png', PNG.sync.write(ciscoPng));
console.log('Saved cisco_ethical_hacker_highlighted.png');
