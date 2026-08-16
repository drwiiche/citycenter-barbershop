import fs from 'fs';
import path from 'path';
import https from 'https';

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log("Fetching Fresha page...");
  const html = await fetchHtml('https://www.fresha.com/fr/a/city-center-barbershop-amsterdam-stationsplein-41m-ry7txsy7');
  
  // Extract all images.fresha.com URLs
  const regex = /https:\/\/images\.fresha\.com\/[^"'\s<>]+/g;
  const matches = html.match(regex) || [];
  
  const uniqueImages = new Map();
  for (let match of matches) {
    let clean = match.replace(/&amp;/g, '&');
    // base url without query params
    let base = clean.split('?')[0];
    if (!uniqueImages.has(base)) {
      uniqueImages.set(base, clean);
    }
  }

  console.log(`Found ${uniqueImages.size} unique image bases on Fresha:`);
  for (let [base, full] of uniqueImages.entries()) {
    console.log(`- ${base}`);
  }

  const outDir = path.resolve(process.cwd(), 'public/images/fresha');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let idx = 1;
  const manifest = [];
  for (let [base, full] of uniqueImages.entries()) {
    // Download high quality (f_width=1200, f_quality=85)
    let downloadUrl = base;
    if (full.includes('?')) {
      let params = full.split('?')[1];
      // modify f_width=1200 or request with existing key/signature
      downloadUrl = `${base}?${params.replace(/f_width=\d+/, 'f_width=1200')}`;
    }
    const ext = base.endsWith('.png') ? '.png' : (base.endsWith('.webp') ? '.webp' : '.jpeg');
    const filename = `fresha-image-${idx}${ext}`;
    const dest = path.join(outDir, filename);

    try {
      console.log(`Downloading ${filename} from ${downloadUrl}...`);
      await downloadFile(downloadUrl, dest);
      const stat = fs.statSync(dest);
      if (stat.size > 500) {
        manifest.push({
          id: `fresha-${idx}`,
          filename: filename,
          path: `/images/fresha/${filename}`,
          cdnUrl: downloadUrl,
          size: stat.size
        });
        idx++;
      } else {
        fs.unlinkSync(dest);
      }
    } catch (e) {
      console.error(`Failed to download ${base}:`, e.message);
    }
  }

  fs.writeFileSync(path.resolve(process.cwd(), 'src/data/freshaImages.json'), JSON.stringify(manifest, null, 2));
  console.log(`Successfully downloaded ${manifest.length} Fresha images!`);
}

main().catch(console.error);
