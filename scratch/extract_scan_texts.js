import fs from 'fs';

const scanData = JSON.parse(fs.readFileSync('figma_scan.json', 'utf8'));

// The scanData seems to have a structure. Let's find out how it looks like.
console.log('Keys of scanData:', Object.keys(scanData));
if (scanData.data) {
  console.log('Keys of scanData.data:', Object.keys(scanData.data));
  if (scanData.data.allText) {
    console.log(`Found ${scanData.data.allText.length} text nodes in allText.`);
    
    // Sort allText by y coordinate
    const sorted = [...scanData.data.allText].sort((a, b) => a.y - b.y);
    
    // Group by some visual boundaries or print them
    fs.writeFileSync('scratch/all_scan_texts.json', JSON.stringify(sorted, null, 2));
    console.log('Saved sorted text nodes to scratch/all_scan_texts.json');
    
    // Let's filter text nodes that look like they belong to SalaryDetail screen.
    // e.g. containing "Chi tiết", "Từ tháng", "Đến tháng", "Chức vụ", "Đơn vị công tác", "Nơi làm việc", "Tiền lương đóng BHXH", "Mức lương"
    const salaryKeywords = ["Chi tiết", "Từ tháng", "Đến tháng", "Chức vụ", "Đơn vị công tác", "Nơi làm việc", "Tiền lương đóng BHXH", "Mức lương"];
    const matches = scanData.data.allText.filter(t => 
      t.content && salaryKeywords.some(kw => t.content.includes(kw))
    );
    console.log(`\nMatches for Salary Detail keywords: ${matches.length}`);
    matches.forEach(t => {
      console.log(`ID: ${t.id} | x: ${t.x}, y: ${t.y}, w: ${t.width}, h: ${t.height} | Content: ${JSON.stringify(t.content)}`);
    });
  }
}
