const fs = require('fs');

const transcriptPath = "C:\\Users\\gcassulo\\.gemini\\antigravity\\brain\\e0e841bb-0fc7-4f5f-80a2-85f9c6f02ce7\\.system_generated\\logs\\transcript.jsonl";

if (fs.existsSync(transcriptPath)) {
    const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
    lines.forEach((l, idx) => {
        if (l.includes('step_index":329,')) {
            console.log(`Line ${idx+1}:`);
            console.log(l);
            console.log("===============================\n");
        }
    });
}
