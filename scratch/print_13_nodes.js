import fs from 'fs';

const scanData = JSON.parse(fs.readFileSync('figma_scan.json', 'utf8'));

if (scanData.data && scanData.data.allText) {
  const matches = scanData.data.allText.filter(t => t.id.startsWith('13:'));
  matches.sort((a, b) => a.y - b.y || a.x - b.x);
  
  console.log(`Found ${matches.length} text nodes for SalaryDetail (prefix '13:'):`);
  matches.forEach(t => {
    console.log('----------------------------------------');
    console.log(`ID: ${t.id} | Name: "${t.name}"`);
    console.log(`Coords: x=${t.x}, y=${t.y}, w=${t.width}, h=${t.height}`);
    console.log(`Content: ${JSON.stringify(t.content)}`);
    console.log(`Style: fontSize=${t.fontSize}, fontWeight=${t.fontWeight}, fontName=${JSON.stringify(t.fontName)}, fill=${t.fill}`);
  });
}
