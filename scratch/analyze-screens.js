import fs from 'fs';

const scanData = JSON.parse(fs.readFileSync('figma_scan.json', 'utf8'));

const sections = scanData.data.sections;

console.log('=== MATCHING TEXTS BY SECTION ===');
const sec = sections.find(s => s.name === 'iPhone 17 - 4');
if (sec) {
  console.log(`\nFrame: ${sec.name} (ID: ${sec.id})`);
  const prefix = sec.id.split(':')[0] + ':';
  const preview = sec.textContent || [];
  
  const matches = scanData.data.allText.filter(t => {
    return t.id.startsWith(prefix) || preview.includes(t.content);
  });
  
  matches.sort((a, b) => (a.y - b.y) || (a.x - b.x));
  
  console.log(`Found ${matches.length} matching texts:`);
  matches.forEach(t => {
    console.log(`  ID: ${t.id}, x: ${t.x}, y: ${t.y}, w: ${t.width}, h: ${t.height}, fill: ${t.fill}, font: ${t.fontSize}px ${t.fontWeight}, content: "${t.content ? t.content.replace(/\n/g, '\\n') : ''}"`);
  });
}
