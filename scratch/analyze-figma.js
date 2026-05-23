import fs from 'fs';

const scanData = JSON.parse(fs.readFileSync('figma_scan.json', 'utf8'));

console.log('=== FIRST 10 TEXT NODES RAW ===');
scanData.data.allText.slice(0, 15).forEach((t, i) => {
  console.log(`[${i}] ID: ${t.id}, Name: "${t.name}", x: ${t.x}, y: ${t.y}, content: "${t.content ? t.content.replace(/\n/g, '\\n') : ''}"`);
});

// Let's search for text nodes by content
console.log('\n=== TEXT NODES CONTAINING "Quá trình tham gia" ===');
scanData.data.allText.filter(t => t.content && t.content.includes("Quá trình")).forEach(t => {
  console.log(`ID: ${t.id}, x: ${t.x}, y: ${t.y}, w: ${t.width}, h: ${t.height}, content: "${t.content.replace(/\n/g, '\\n')}"`);
});

console.log('\n=== TEXT NODES CONTAINING "EO TECHNICS" ===');
scanData.data.allText.filter(t => t.content && t.content.includes("EO TECHNICS")).forEach(t => {
  console.log(`ID: ${t.id}, x: ${t.x}, y: ${t.y}, w: ${t.width}, h: ${t.height}, content: "${t.content.replace(/\n/g, '\\n')}"`);
});
