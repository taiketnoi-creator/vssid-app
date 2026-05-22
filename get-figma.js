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
  console.log('--- Probing Figma MCP Bridge ---');
  try {
    const health = await makeRequest('/health', 'GET');
    console.log('Health Check:', JSON.stringify(health, null, 2));

    if (!health.pluginConnected) {
      console.log('❌ Figma plugin is not connected. Please run "Figma UI MCP Bridge" in Figma Desktop.');
      return;
    }

    console.log('\n--- Getting Selection ---');
    const selection = await makeRequest('/exec', 'POST', {
      operation: 'get_selection',
      params: { depth: 'full' }
    });
    fs.writeFileSync('figma_selection.json', JSON.stringify(selection, null, 2));
    console.log('Saved get_selection to figma_selection.json');

    console.log('\n--- Scanning Selected Design ---');
    const scan = await makeRequest('/exec', 'POST', {
      operation: 'scan_design',
      params: { depth: 5 }
    });
    fs.writeFileSync('figma_scan.json', JSON.stringify(scan, null, 2));
    console.log('Saved scan_design to figma_scan.json');

  } catch (err) {
    console.error('Error contacting Figma MCP bridge:', err);
  }
}

main();
