const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\gcassulo\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

console.log('=== SEARCHING ALL TRANSCRIPTS FOR "2026-08-09" OR "09/08" ===\n');

let foundCount = 0;

for (const d of dirs) {
  const logPath = path.join(brainDir, d, '.system_generated', 'logs', 'transcript.jsonl');
  if (fs.existsSync(logPath)) {
    const content = fs.readFileSync(logPath, 'utf8');
    if (content.includes('2026-08-09') || content.includes('2026-08-08')) {
      console.log(`FOUND IN CONVERSATION ID: ${d}`);
      foundCount++;
      // Print snippets
      const lines = content.split('\n');
      lines.forEach(l => {
        if (l.includes('2026-08-09') || l.includes('2026-08-08')) {
          console.log('Line snippet:', l.substring(0, 200));
        }
      });
    }
  }
}

if (foundCount === 0) {
  console.log('No transcripts found with timestamps 2026-08-09 or 2026-08-08.');
}
