const fs = require('fs');

const raw = "";
for (let i = 0; i < raw.length; i++) {
    const char = raw[i];
    const code = char.charCodeAt(0);
    console.log(`Char: ${char} (${code.toString(16)} / ${code}) -> Decoded code (61728-c): ${61728 - code}`);
}
