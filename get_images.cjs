const https = require('https');
function getHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}
async function run() {
  const html1 = await getHTML('https://phynetech.com/product/water-treatment-machine/');
  const html2 = await getHTML('https://phynetech.com/product/water-vending-atms/');
  const imgRegex = /<img[^>]+src="([^">]+)"/gi;
  console.log('Treatment Images:');
  let match;
  let count = 0;
  while ((match = imgRegex.exec(html1)) !== null && count < 10) {
    if (match[1].includes('wp-content/uploads') && !match[1].includes('150x150') && !match[1].includes('logo')) {
      console.log(match[1]);
      count++;
    }
  }
  count = 0;
  console.log('\nVending Images:');
  while ((match = imgRegex.exec(html2)) !== null && count < 10) {
    if (match[1].includes('wp-content/uploads') && !match[1].includes('150x150') && !match[1].includes('logo')) {
      console.log(match[1]);
      count++;
    }
  }
}
run();
