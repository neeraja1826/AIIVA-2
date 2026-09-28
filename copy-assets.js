import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\d20bc906-ce00-4c2e-9303-dd3e7388d8df\\.user_uploaded';
const pubDir = 'c:\\Users\\Admin\\Downloads\\IVA-Automation-2\\public';
const imgDir = path.join(pubDir, 'images');
const prodDir = path.join(imgDir, 'products');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(prodDir)) fs.mkdirSync(prodDir, { recursive: true });

const filesToCopy = [
  { src: 'media_1790575128156.png', dest: path.join(pubDir, 'logo.png') },
  { src: 'media_1790575128156.png', dest: path.join(imgDir, 'aiiva-logo.png') },
  { src: 'media_1790575169133.jpg', dest: path.join(prodDir, 'switch-8touch-dual-socket.png') },
  { src: 'media_1790575169140.jpg', dest: path.join(prodDir, 'switch-fan-dual-socket.png') },
  { src: 'media_1790575169181.jpg', dest: path.join(prodDir, 'switch-4gang-touch.png') },
  { src: 'media_1790575169195.jpg', dest: path.join(prodDir, 'switch-fan-regulator.png') },
];

for (const item of filesToCopy) {
  const fullSrc = path.join(srcDir, item.src);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, item.dest);
    console.log(`Copied ${item.src} -> ${item.dest}`);
  } else {
    console.error(`Source not found: ${fullSrc}`);
  }
}
console.log('Finished copying assets successfully!');
