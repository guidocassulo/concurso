const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\gcassulo\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

console.log('=== SEARCHING CONVERSATIONS FROM AUG 8 - 10, 2026 ===\n');

const results = [];

for (const d of dirs) {
  const logPath = path.join(brainDir, d, '.system_generated', 'logs', 'transcript.jsonl');
  if (fs.existsSync(logPath)) {
    const stats = fs.statSync(logPath);
    const mtime = stats.mtime;
    const mtimeStr = mtime.toISOString();
    results.push({ id: d, mtime: mtimeStr, size: stats.size, logPath });
  }
}

results.sort((a, b) => b.mtime.localeCompare(a.mtime));

results.forEach(r => {
  if (r.mtime.startsWith('2026-08-09') || r.mtime.startsWith('2026-08-10') || r.mtime.startsWith('2026-08-08')) {
    console.log(`ID: ${r.id} | Modified: ${r.mtime} | Size: ${r.size} bytes`);
  }
});
