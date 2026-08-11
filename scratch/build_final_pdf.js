const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Informe Técnico-Jurídico de Impugnación y Recalificación</title>
<style>
  @page {
    size: A4;
    margin: 20mm 15mm 20mm 15mm;
  }
  
  body {
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    color: #1e293b;
    line-height: 1.6;
    font-size: 11pt;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .header-banner {
    border-bottom: 3px solid #1e3a8a;
    padding-bottom: 12px;
    margin-bottom: 25px;
  }

  .header-title {
    font-size: 20pt;
    font-weight: bold;
    color: #1e3a8a;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .header-subtitle {
    font-size: 12pt;
    color: #475569;
    font-weight: 600;
    margin: 0;
  }

  .metadata-box {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 5px solid #2563eb;
    padding: 12px 18px;
    margin-bottom: 25px;
    border-radius: 4px;
  }

  .metadata-grid {
    display: table;
    width: 100%;
  }

  .metadata-row {
    display: table-row;
  }

  .metadata-cell {
    display: table-cell;
    padding: 4px 10px;
    font-size: 10pt;
  }

  .metadata-label {
    font-weight: bold;
    color: #334155;
    width: 140px;
  }

  h2 {
    color: #1e3a8a;
    font-size: 14pt;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 5px;
    margin-top: 25px;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  h3 {
    color: #0f172a;
    font-size: 12pt;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  p, li {
    text-align: justify;
    font-size: 10.5pt;
  }

  ul, ol {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 22px;
  }

  li {
    margin-bottom: 5px;
  }

  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 10pt;
  }

  th, td {
    border: 1px solid #cbd5e1;
    padding: 8px 10px;
    text-align: left;
  }

  th {
    background-color: #1e3a8a;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 9pt;
    letter-spacing: 0.5px;
  }

  tr:nth-child(even) {
    background-color: #f8fafc;
  }

  /* Alert boxes */
  .alert-box {
    padding: 12px 15px;
    margin: 15px 0;
    border-radius: 4px;
    font-size: 10pt;
  }

  .alert-important {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    border-left: 5px solid #2563eb;
    color: #1e40af;
  }

  .alert-warning {
    background-color: #fffbebfb;
    border: 1px solid #fef3c7;
    border-left: 5px solid #d97706;
    color: #92400e;
  }

  .alert-critical {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    border-left: 5px solid #dc2626;
    color: #991b1b;
  }

  .badge {
    display: inline-block;
    padding: 3px 8px;
    font-size: 8.5pt;
    font-weight: bold;
    border-radius: 3px;
    color: #fff;
  }

  .badge-success { background-color: #16a34a; }
  .badge-warning { background-color: #d97706; }
  .badge-danger  { background-color: #dc2626; }
  .badge-info    { background-color: #2563eb; }

  .quote-box {
    font-style: italic;
    background-color: #f1f5f9;
    border-left: 4px solid #94a3b8;
    padding: 8px 14px;
    margin: 10px 0;
    font-size: 9.5pt;
  }

  .page-break {
    page-break-before: always;
  }
</style>
</head>
<body>

<div class="header-banner">
  <div class="header-title">Informe Técnico-Jurídico e Impugnación</div>
  <div class="header-subtitle">Concurso de Oposición de Antecedentes y Oposición — MUNICIPALIDAD DE GENERAL PUEYRREDON</div>
</div>

<div class="metadata-box">
  <div class="metadata-grid">
    <div class="metadata-row">
      <div class="metadata-cell metadata-label">Cargo:</div>
      <div class="metadata-cell">Jefe de Departamento de Gestión, Desarrollo e Innovación en Sistemas de Software</div>
    </div>
    <div class="metadata-row">
      <div class="metadata-cell metadata-label">Postulante:</div>
      <div class="metadata-cell">Guido Cassulo (Legajo N° 25646)</div>
    </div>
    <div class="metadata-row">
      <div class="metadata-cell metadata-label">Dependencia:</div>
      <div class="metadata-cell">Dirección de Tecnologías de Información y Comunicación</div>
    </div>
    <div class="metadata-row">
      <div class="metadata-cell metadata-label">Fecha del Informe:</div>
      <div class="metadata-cell">Agosto de 2026</div>
    </div>
  </div>
</div>

<h2>1. RESUMEN EJECUTIVO Y RECALIFICACIÓN REAL UNIFICADA</h2>
<p>
El presente informe formaliza la revisión integral del Examen Escrito de Oposición compulsando el solucionario de la Junta Correctora (<code>examen_corrector.md</code>) contra los textos manuscritos de los concursantes y la bibliografía oficial obligatoria (<em>Análisis y Diseño de Sistemas</em> de Kendall & Kendall 8va ed., <em>Scrum Manager</em> v2.6, Ley 14.656, L.O.M., y Decretos Municipales reglamentarios).
</p>

<div class="alert-box alert-important">
  <strong>Resultado del Análisis:</strong> Se han identificado errores materiales en el solucionario de la Junta, omisiones de la clave respecto de la bibliografía oficial (página 16 de <em>Scrum Manager</em>), e inconsistencias de criterio de corrección. La rectificación unificada incrementa el puntaje de Guido Cassulo de <strong>24,0 a 28,1-28,6 PUNTOS</strong>, consolidando su primer puesto en el concurso.
</div>

<table>
  <thead>
    <tr>
      <th>Postulante</th>
      <th>Puntaje Oficial</th>
      <th>Ajustes Identificados por Bloque</th>
      <th>Puntaje Real Unificado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Guido Cassulo</strong></td>
      <td><strong>24,0 pts</strong></td>
      <td>+0,6 (B2-VF1) | +0,5 a +1,0 (B3 Dictamen) | +3,0 (B4-P4 Scrum p.16)</td>
      <td><strong>28,1 a 28,6 pts</strong> <span class="badge badge-success">1° PUESTO</span></td>
    </tr>
    <tr>
      <td><strong>Gabriela López</strong></td>
      <td><strong>23,3 pts</strong></td>
      <td>+1,0 (B1-P7) | +3,0 (B4-P4 Scrum p.16)</td>
      <td><strong>27,3 pts</strong> <span class="badge badge-info">2° PUESTO</span></td>
    </tr>
    <tr>
      <td><strong>Verónica</strong></td>
      <td><strong>18,0 pts</strong></td>
      <td>+3,0 (B1-P8,9,10) | +2,4 (B2-VF3,4,5,7)</td>
      <td><strong>23,4 pts</strong> <span class="badge badge-warning">3° PUESTO</span></td>
    </tr>
  </tbody>
</table>

<h2>2. ANÁLISIS DE LAS CONSIGNAS OFICIALES POR BLOQUE</h2>
<p>
El análisis de las cabeceras e instrucciones formales del examen evidencia reglas diferenciadas que no fueron respetadas homogéneamente al corregir:
</p>
<ul>
  <li><strong>Bloque 1 (Opción Múltiple):</strong> La consigna exige expresamente: <em>"EN TODOS LOS CASOS DEBERÁ INDICAR LA NORMA QUE REGLAMENTA LA SITUACIÓN PLANTEADA."</em> Esto justifica por qué selecciones de opciones sin cita normativa adecuada fueron penalizadas.</li>
  <li><strong>Bloque 2 (Verdadero o Falso):</strong> La consigna establece únicamente: <em>"MARQUE CON UNA CRUZ (X) EN LA OPCIÓN QUE CORRESPONDA..."</em> <strong>No exige fundamentar ni indicar la norma.</strong> Anular la respuesta V/F 1 a Guido (donde marcó correctamente VERDADERO) únicamente por su anotación marginal viola la consigna explícita del bloque.</li>
  <li><strong>Bloque 3 (Casos Prácticos):</strong> Exige responder todos los puntos requeridos. La consigna solicitó expresamente: <em>"e informe si requiere dictamen legal previo"</em>. Guido respondió los 3 ítems pedidos; Gabriela omitió responder la pregunta del dictamen legal.</li>
</ul>

<div class="page-break"></div>

<h2>3. AUDITORÍA EXHAUSTIVA DEL BLOQUE TÉCNICO (BLOQUE 4)</h2>
<p>
Se compulsaron las 5 preguntas específicas del cargo contra los libros de texto asignados por las bases del concurso:
</p>

<table>
  <thead>
    <tr>
      <th>Pregunta Técnica</th>
      <th>Puntaje Oficial</th>
      <th>Compulsa con Bibliografía Oficial</th>
      <th>Estado del Reclamo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>P1: Tipos de Sistemas</strong> (Kendall pp. 2-5)</td>
      <td>3,0 / 3,0 pts</td>
      <td>Enumeró y describió los 7 tipos de sistemas correctamente.</td>
      <td><span class="badge badge-success">Correcto</span></td>
    </tr>
    <tr>
      <td><strong>P2: Herramientas CASE</strong> (Kendall pp. 12-14)</td>
      <td>3,0 / 3,0 pts</td>
      <td>Definió CASE, uso, Upper CASE y Lower CASE (5 ventajas).</td>
      <td><span class="badge badge-success">Correcto</span></td>
    </tr>
    <tr>
      <td><strong>P3: Fundamentos Org.</strong> (Kendall p. 46)</td>
      <td>0,0 / 3,0 pts</td>
      <td>Describió flujo de datos. Kendall exige: Sistemas, Niveles, Cultura.</td>
      <td><span class="badge badge-info">Sin Reclamo (0 Aceptado)</span></td>
    </tr>
    <tr>
      <td><strong>P4: Marco Técnico Scrum</strong> (Scrum Manager)</td>
      <td>0,0 / 3,0 pts</td>
      <td>Transcribió la <strong>Página 16 de Scrum Manager</strong> literal.</td>
      <td><span class="badge badge-danger">Impugnación (+3,0 pts)</span></td>
    </tr>
    <tr>
      <td><strong>P5: Scrum Master</strong> (Scrum Manager pp. 33-34)</td>
      <td>3,0 / 3,0 pts</td>
      <td>Definió rol, liderazgo y funciones completas.</td>
      <td><span class="badge badge-success">Correcto</span></td>
    </tr>
  </tbody>
</table>

<div class="alert-box alert-critical">
  <strong>Fundamentación Irrefutable de la Pregunta 4 (Scrum):</strong><br>
  En el libro oficial <em>Scrum Manager</em>, la frase <em>"El marco técnico de scrum está formado por"</em> aparece en dos capítulos:<br>
  1. <strong>Página 16 (Título: "Introducción al marco técnico"):</strong> <em>"El marco técnico de scrum, está formado por: 1. Gestión evolutiva, 2. Calidad del resultado, 3. Estrategia incremental..."</em><br>
  2. <strong>Página 20 (Título: "Scrum técnico"):</strong> <em>"El marco técnico de scrum está formado por: Roles, Artefactos, Eventos..."</em><br><br>
  Tanto Guido como Gabriela transcribieron el texto literal de la Página 16 del libro oficial (Gabriela incluso asentó <code>Scrum Manager - Pág. 16</code>). El corrector puso 0 puntos a ambos por copiar solo la pág. 20 en su clave. Descalificar a un postulante por transcribir el texto literal del libro oficial asignado bajo el título de la pregunta constituye un error grave de la clave del corrector. <strong>Corresponde otorgar +3,0 PUNTOS.</strong>
</div>

<h2>4. AUDITORÍA DEL BLOQUE DISCIPLINARIO (BLOQUE 3)</h2>
<p>
El caso práctico N° 1 solicitaba expresamente tres partes: 1) Procedimiento y plazos, 2) Redacción de Disposición, y 3) Informar si requiere dictamen legal previo.
</p>
<ul>
  <li><strong>Guido Cassulo (2,0 / 3,0 pts):</strong> Respondió los <strong>3 ítems requeridos</strong>, incluyendo la aclaración fundada de que la sanción correctiva no requiere dictamen legal previo (Ley 14.656).</li>
  <li><strong>Gabriela López (2,5 / 3,0 pts):</strong> <strong>Omitió por completo el ítem 3</strong> (no respondió la pregunta obligatoria sobre el dictamen legal).</li>
</ul>
<p>
<strong>Inconsistencia detectada:</strong> La corrección otorgó mayor puntaje a la respuesta que omitió una consigna del examen. Corresponde ajustar el puntaje de Guido a <strong>mínimo 2,5 pts (+0,5) o 3,0 pts (+1,0)</strong>.
</p>

<h2>5. ANÁLISIS TÉCNICO-JURÍDICO DE LA PREGUNTA V/F 2 (BLOQUE 2)</h2>
<p>
<strong>Enunciado V/F 2:</strong> <em>"La firma de los actos administrativos relacionados con el personal... <strong>sin importar que los mismos no contengan</strong> atribuciones reservadas al Intendente..."</em>
</p>
<div class="quote-box">
  <strong>Decreto 916/20 Art. 2° inc. 6:</strong> "...siempre que los mismos no contengan atribuciones reservadas expresamente al Intendente Municipal por la Ley Orgánica de las Municipalidades."
</div>
<ol>
  <li><strong>Sobre la calificación (FALSO): Es correcta.</strong> El examen alteró "siempre que no contengan" por "sin importar que no contengan". Como las atribuciones reservadas son indelegables (Art. 181 LOM), la afirmación es falsa.</li>
  <li><strong>Sobre la cita del corrector (ERROR DEL CORRECTOR):</strong> En la clave oficial (<code>examen_corrector.md</code>), el corrector citó <em>Decreto 916/20 - Artículo 6°</em>. El Artículo 6° delega atribuciones en la <strong>Secretaría de Salud</strong>. La delegación real está en el <strong>Artículo 2° Inciso 6</strong> (Secretaría de Gobierno). El corrector confundió el Inciso 6 con el Artículo 6, cometiendo un vicio de fundamentación en su clave.</li>
</ol>

<h2>6. PETITORIO FORMAL</h2>
<p>Por todo lo expuesto, se solicita a la Junta Evaluadora:</p>
<ol>
  <li>Tener por presentado en tiempo y forma el recurso de revisión y recalificación del Examen Escrito de Oposición.</li>
  <li>Reconocer la validez de la transcripción literal de la Página 16 de <em>Scrum Manager</em> en la Pregunta 4 del Bloque 4, otorgando a Guido Cassulo los <strong>+3,0 puntos</strong> correspondientes.</li>
  <li>Rectificar la calificación de la V/F 1 del Bloque 2 otorgando los <strong>+0,6 puntos</strong> por haber marcado correctamente la opción exigida por la consigna.</li>
  <li>Ajustar el Bloque 3 otorgando <strong>+0,5 a +1,0 punto</strong> por haber respondido íntegramente los 3 ítems del enunciado.</li>
  <li>Fijar la calificación definitiva de Guido Cassulo en <strong>28,1 a 28,6 PUNTOS</strong>, consagrando el 1° PUESTO en el Orden de Mérito definitivo.</li>
</ol>

<br><br>
<div style="width: 100%; display: table;">
  <div style="display: table-cell; width: 50%; text-align: center;">
    ___________________________________<br>
    <strong>Guido Cassulo</strong><br>
    Postulante — Legajo N° 25646
  </div>
  <div style="display: table-cell; width: 50%; text-align: center;">
    ___________________________________<br>
    <strong>Firma del Receptor</strong><br>
    Junta Evaluadora de Concursos
  </div>
</div>

</body>
</html>
`;

const htmlFilePath = path.resolve('scratch/informe_impugnacion.html');
const pdfFilePath = path.resolve('Informe_Impugnacion_Concurso_Guido_Cassulo.pdf');

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log('HTML written to:', htmlFilePath);

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');

const cmd = `"${edge}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfFilePath}" "${fileUrl}"`;
console.log('Running Edge print command...');
execSync(cmd);

if (fs.existsSync(pdfFilePath)) {
  console.log('SUCCESS! PDF generated at:', pdfFilePath);
  console.log('File size:', fs.statSync(pdfFilePath).size, 'bytes');
} else {
  console.error('ERROR: PDF generation failed.');
}
