const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== EXTRACTING GUIDO PROJECT WORD DOCX TEXT ===\n');

const docxPath = 'd:\\proyecto\\Plan_Trabajo_Concurso_Jefatura_Software.docx';

// Let's use python or node to extract docx text
const script = `
import docx

doc = docx.Document(r'${docxPath}')
fullText = []
for para in doc.paragraphs:
    if para.text.strip():
        fullText.append(para.text)
for table in doc.tables:
    for row in table.rows:
        row_txt = " | ".join([cell.text.strip() for cell in row.cells if cell.text.strip()])
        if row_txt:
            fullText.append(row_txt)

extracted = "\\n".join(fullText)
with open(r'd:\\proyecto\\scratch\\guido_project_text.txt', 'w', encoding='utf8') as f:
    f.write(extracted)

print(f"Extracted {len(fullText)} paragraphs/table rows. Total characters: {len(extracted)}")
print("\\n=== FIRST 1500 CHARACTERS OF GUIDO PROJECT ===")
print(extracted[:1500])
`;

fs.writeFileSync('d:\\proyecto\\scratch\\extract_project.py', script, 'utf8');

try {
  const out = execSync('python d:\\proyecto\\scratch\\extract_project.py', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.log('Python python-docx error, trying fallback:', e.message);
}
