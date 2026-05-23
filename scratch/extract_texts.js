import fs from 'fs';

const res = JSON.parse(fs.readFileSync('figma_selection.json', 'utf8'));
const texts = [];

function recurse(node) {
  if (!node) return;
  if (node.type === 'TEXT') {
    texts.push({
      id: node.id,
      name: node.name,
      x: node.x,
      y: node.y,
      width: node.width,
      height: node.height,
      content: node.content,
      fontSize: node.fontSize,
      fontWeight: node.fontWeight,
      fontName: node.fontName,
      fill: node.fill
    });
  }
  if (node.children) {
    node.children.forEach(recurse);
  }
}

if (Array.isArray(res.data.nodes)) {
  res.data.nodes.forEach(recurse);
} else {
  Object.values(res.data.nodes).forEach(recurse);
}

texts.sort((a, b) => a.y - b.y);
console.log(`Found ${texts.length} texts:`);
texts.forEach(t => {
  console.log('------------------------');
  console.log(`ID: ${t.id} | Name: "${t.name}" | Coords: x=${t.x}, y=${t.y}, w=${t.width}, h=${t.height}`);
  console.log(`Content: ${JSON.stringify(t.content)}`);
  console.log(`Style: fontSize=${t.fontSize}, fontWeight=${t.fontWeight}, fill=${t.fill}`);
});
