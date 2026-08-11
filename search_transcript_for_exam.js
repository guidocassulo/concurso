const fs = require('fs');

const transcriptPath = "C:\\Users\\gcassulo\\.gemini\\antigravity\\brain\\e0e841bb-0fc7-4f5f-80a2-85f9c6f02ce7\\.system_generated\\logs\\transcript.jsonl";

if (fs.existsSync(transcriptPath)) {
    const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
    console.log(`Read ${lines.length} lines from transcript.`);
    
    // Look for keywords in transcript
    lines.forEach((l, idx) => {
        // Look for typical exam keywords like "CUESTION" or specific questions
        if (l.includes('CUESTION') || l.includes('EXAMEN') || l.includes('PREGUNTA') || l.includes('Cuestión')) {
            // Check if it's user input or model output containing a lot of text
            if (l.length > 500) {
                console.log(`Line ${idx+1}: Length = ${l.length}`);
                console.log(l.substring(0, 400));
                console.log("------------------------\n");
            }
        }
    });
}
