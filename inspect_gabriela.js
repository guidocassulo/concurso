const AdmZip = require('adm-zip');
const fs = require('fs');

const zip = new AdmZip('D:/proyecto/proyecto prueba/Plan_Trabajo_Concurso_Jefatura_Software_GabrielaLopez.docx');
const stylesXml = zip.readAsText('word/styles.xml');

console.log('--- DEFAULT STYLES / FONTS IN STYLES.XML ---');
const fontMatches = stylesXml.match(/w:rFonts[^>]+/g) || [];
console.log('rFonts in styles:', fontMatches);

const normalStyle = stylesXml.match(/<w:style w:type="paragraph" w:default="1"[^>]*>[\s\S]*?<\/w:style>/);
console.log('\n--- NORMAL PARAGRAPH STYLE ---');
console.log(normalStyle ? normalStyle[0] : 'Not found');

const h1Style = stylesXml.match(/<w:style w:type="paragraph" w:styleId="Heading1"[^>]*>[\s\S]*?<\/w:style>/);
console.log('\n--- HEADING 1 STYLE ---');
console.log(h1Style ? h1Style[0] : 'Heading 1 not found');

const h2Style = stylesXml.match(/<w:style w:type="paragraph" w:styleId="Heading2"[^>]*>[\s\S]*?<\/w:style>/);
console.log('\n--- HEADING 2 STYLE ---');
console.log(h2Style ? h2Style[0] : 'Heading 2 not found');
