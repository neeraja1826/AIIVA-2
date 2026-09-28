import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('public/images/aiiva-logo.png');

let pos = 8;
let width = 0, height = 0;
const idatChunks = [];

while (pos < buf.length) {
  const length = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  const data = buf.subarray(pos + 8, pos + 8 + length);
  if (type === 'IHDR') {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
  } else if (type === 'IDAT') {
    idatChunks.push(data);
  }
  pos += 12 + length;
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const stride = 1 + width * 4;
const rgba = Buffer.alloc(width * height * 4);

let prev = Buffer.alloc(width * 4);
for (let y = 0; y < height; y++) {
  const filter = decompressed[y * stride];
  const line = decompressed.subarray(y * stride + 1, (y + 1) * stride);
  for (let x = 0; x < width * 4; x++) {
    const raw = line[x];
    const a = x >= 4 ? rgba[(y * width * 4) + (x - 4)] : 0;
    const b = prev[x];
    const c = x >= 4 ? prev[x - 4] : 0;
    let val = 0;
    if (filter === 0) val = raw;
    else if (filter === 1) val = (raw + a) & 0xff;
    else if (filter === 2) val = (raw + b) & 0xff;
    else if (filter === 3) val = (raw + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      val = (raw + pr) & 0xff;
    }
    rgba[y * width * 4 + x] = val;
    prev[x] = val;
  }
}

// The emblem icon is in the upper ~66% of the 644x385 image
// Let's find the bounding box of the top emblem (warm bronze color)
let iconMinX = width, iconMaxX = 0, iconMinY = height, iconMaxY = 0;
const cutY = Math.floor(height * 0.68);

for (let y = 0; y < cutY; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const alpha = rgba[idx + 3];
    if (alpha > 30) {
      if (x < iconMinX) iconMinX = x;
      if (x > iconMaxX) iconMaxX = x;
      if (y < iconMinY) iconMinY = y;
      if (y > iconMaxY) iconMaxY = y;
    }
  }
}

console.log(`Icon bounding box: x:[${iconMinX}..${iconMaxX}], y:[${iconMinY}..${iconMaxY}]`);

const iconW = iconMaxX - iconMinX + 1;
const iconH = iconMaxY - iconMinY + 1;
const iconRgba = Buffer.alloc(iconW * iconH * 4);

for (let y = 0; y < iconH; y++) {
  for (let x = 0; x < iconW; x++) {
    const srcIdx = ((iconMinY + y) * width + (iconMinX + x)) * 4;
    const dstIdx = (y * iconW + x) * 4;
    iconRgba[dstIdx] = rgba[srcIdx];
    iconRgba[dstIdx + 1] = rgba[srcIdx + 1];
    iconRgba[dstIdx + 2] = rgba[srcIdx + 2];
    iconRgba[dstIdx + 3] = rgba[srcIdx + 3];
  }
}

// Save icon
function savePngFile(filePath, w, h, bufRGBA) {
  const raw = Buffer.alloc(h * (1 + w * 4));
  for (let y = 0; y < h; y++) {
    const offset = y * (1 + w * 4);
    raw[offset] = 0;
    bufRGBA.copy(raw, offset + 1, y * w * 4, (y + 1) * w * 4);
  }
  const compressed = zlib.deflateSync(raw);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    crcTable[n] = c;
  }
  function calcCrc(b) {
    let crc = 0xffffffff;
    for (let i = 0; i < b.length; i++) crc = crcTable[(crc ^ b[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }
  function makeChunk(t, d) {
    const c = Buffer.alloc(12 + d.length);
    c.writeUInt32BE(d.length, 0);
    c.write(t, 4, 4, 'ascii');
    d.copy(c, 8);
    c.writeUInt32BE(calcCrc(c.subarray(4, 8 + d.length)), 8 + d.length);
    return c;
  }

  const finalPng = Buffer.concat([signature, makeChunk('IHDR', ihdr), makeChunk('IDAT', compressed), makeChunk('IEND', Buffer.alloc(0))]);
  fs.writeFileSync(filePath, finalPng);
  console.log(`Saved ${w}x${h} icon to ${filePath}`);
}

savePngFile('public/images/aiiva-icon.png', iconW, iconH, iconRgba);
