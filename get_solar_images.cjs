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
  const html1 = await getHTML('https://www.solarking.co.ke/');
  const imgRegex = /<img[^>]+src="([^">]+)"/gi;
  console.log('Images:');
  let match;
  let count = 0;
  while ((match = imgRegex.exec(html1)) !== null && count < 30) {
    if ((match[1].includes('.jpg') || match[1].includes('.png') || match[1].includes('.webp')) && !match[1].includes('logo')) {
      console.log(match[1]);
      count++;
    }
  }
}
run();
