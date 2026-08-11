const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\gcassulo\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

const results = [];

for (const d of dirs) {
  const logPath = path.join(brainDir, d, '.system_generated', 'logs', 'transcript.jsonl');
  if (fs.existsSync(logPath)) {
    const stats = fs.statSync(logPath);
    const mtime = stats.mtime;
    results.push({ id: d, mtime: mtime.toISOString(), size: stats.size, logPath });
  }
}

results.sort((a, b) => b.mtime.localeCompare(a.mtime));

console.log('=== TOP 25 RECENT CONVERSATIONS ===\n');
results.slice(0, 25).forEach(r => {
  console.log(`ID: ${r.id} | Modified: ${r.mtime} | Size: ${r.size} bytes`);
});
