const fs = require('fs');

const text = fs.readFileSync("D:\\proyecto\\concurso_previo_text.txt", "utf8");
let decoded = '';

for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 61440 && code <= 62000) {
        let asciiCode;
        if (code >= 61500) {
            asciiCode = 61728 - code;
        } else {
            asciiCode = code - 61440;
        }
        
        // Handle special character boundaries
        if (asciiCode >= 0 && asciiCode <= 65535) {
            decoded += String.fromCharCode(asciiCode);
        } else {
            decoded += `[ERR:${code}]`;
        }
    } else {
        decoded += text[i];
    }
}

fs.writeFileSync("D:\\proyecto\\concurso_previo_decoded.txt", decoded);
console.log("Decoded text saved to D:\\proyecto\\concurso_previo_decoded.txt");
console.log("Snippet (first 2000 chars):");
console.log(decoded.substring(0, 2000));
