import http from 'http';
import fs from 'fs';

function makeRequest(path, method, payload) {
  return new Promise((resolve, reject) => {
    const dataString = payload ? JSON.stringify(payload) : '';
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: 38451,
        path: path,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(dataString)
        }
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve({ raw: body });
          }
        });
      }
    );
    req.on('error', (err) => reject(err));
    if (payload) {
      req.write(dataString);
    }
    req.end();
  });
}

async function main() {
  try {
    // 1. Get the face icon node (ID: 2002:75) or look in the current selection
    // Let's use export_image with id: '2002:75'
    console.log('Exporting face icon image...');
    const response = await makeRequest('/exec', 'POST', {
      operation: 'export_image',
      params: { id: '2002:75', format: 'png', scale: 2 }
    });
    
    if (response.success && response.data && response.data.image) {
      const buffer = Buffer.from(response.data.image, 'base64');
      fs.writeFileSync('src/assets/fingerprint.png', buffer);
      fs.writeFileSync('src/assets/ic_login_fingerprint.png', buffer);
      console.log('✅ Successfully exported face icon to src/assets/fingerprint.png and ic_login_fingerprint.png!');
    } else {
      console.log('❌ Failed to export face icon:', response);
      
      // Let's search the selection nodes to find the node ID if it changed
      const selection = await makeRequest('/exec', 'POST', {
        operation: 'get_selection',
        params: { depth: 'full' }
      });
      console.log('Searching in current selection for face icon...');
      let foundNodeId = null;
      
      function search(n) {
        if (n.name && (n.name.includes('pngtree') || n.name.includes('fingerprint') || n.name.includes('Face') || n.name.includes('Icon') || n.name.includes(' khuôn mặt'))) {
          console.log(`Found matching node: ID=${n.id}, Name="${n.name}"`);
          foundNodeId = n.id;
        }
        if (n.children) n.children.forEach(search);
      }
      
      if (selection.success && selection.data && selection.data.nodes) {
        selection.data.nodes.forEach(search);
      }
      
      if (foundNodeId) {
        console.log(`Retrying export for node ID=${foundNodeId}...`);
        const retryRes = await makeRequest('/exec', 'POST', {
          operation: 'export_image',
          params: { id: foundNodeId, format: 'png', scale: 2 }
        });
        if (retryRes.success && retryRes.data && retryRes.data.image) {
          const buffer = Buffer.from(retryRes.data.image, 'base64');
          fs.writeFileSync('src/assets/fingerprint.png', buffer);
          fs.writeFileSync('src/assets/ic_login_fingerprint.png', buffer);
          console.log('✅ Successfully exported face icon on retry!');
        } else {
          console.log('❌ Retry failed:', retryRes);
        }
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
