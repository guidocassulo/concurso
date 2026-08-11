const fs = require('fs');

const path = 'C:\\Users\\gcassulo\\.gemini\\antigravity\\brain\\38c14cf2-e8a5-40c0-9148-e8957d3ff2ea\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

console.log('=== USER MESSAGES IN CONVERSATION 38c14cf2 ===\n');

lines.forEach((line, i) => {
  if (!line.trim()) return;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT' || obj.source === 'USER_EXPLICIT' || (obj.content && obj.content.includes('<USER_REQUEST>'))) {
      console.log(`[Step ${i}] timestamp: ${obj.timestamp || 'N/A'}`);
      console.log(`Content snippet:`, (obj.content || '').substring(0, 300));
      console.log('--------------------------------------------------');
    }
  } catch (e) {}
});
