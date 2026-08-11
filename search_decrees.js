const fs = require('fs');

function searchFile(filePath, term) {
    const text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');
    console.log(`\n=== Matches for "${term}" in ${filePath} ===`);
    lines.forEach((l, idx) => {
        if (l.toLowerCase().includes(term.toLowerCase())) {
            console.log(`Line ${idx+1}: ${l.trim()}`);
            // print context
            const start = Math.max(0, idx - 1);
            const end = Math.min(lines.length - 1, idx + 2);
            for (let j = start; j <= end; j++) {
                console.log(`  ${j+1}: ${lines[j].trim()}`);
            }
            console.log('---');
        }
    });
}

searchFile('decreto_1539_18.txt', 'jefe');
searchFile('decreto_1539_18.txt', 'departamento');
searchFile('decreto_1539_18.txt', 'atribuc');
searchFile('decreto_1539_18.txt', 'sanc');

searchFile('decreto_916_20.txt', 'jefe');
searchFile('decreto_916_20.txt', 'departamento');
searchFile('decreto_916_20.txt', 'sanc');
