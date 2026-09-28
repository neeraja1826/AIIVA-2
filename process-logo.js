import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

function processPng(inputPath, outputPath, cropMode = 'all') {
  const buf = fs.readFileSync(inputPath);
  
  let pos = 8; // skip PNG signature
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (pos < buf.length) {
    const length = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + length);
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      console.log(`Original: ${width}x${height}, bitDepth: ${bitDepth}, colorType: ${colorType}`);
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }
    pos += 12 + length;
  }

  const compressedData = Buffer.concat(idatChunks);
  const decompressed = zlib.inflateSync(compressedData);

  const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 4;
  const stride = 1 + width * bytesPerPixel;
  
  // Reconstruct un-filtered scanlines into RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  let prevScanline = Buffer.alloc(width * bytesPerPixel);

  for (let y = 0; y < height; y++) {
    const filterType = decompressed[y * stride];
    const currentScanline = decompressed.subarray(y * stride + 1, (y + 1) * stride);
    const unfiltered = Buffer.alloc(width * bytesPerPixel);

    for (let x = 0; x < width * bytesPerPixel; x++) {
      const bpp = bytesPerPixel;
      const raw = currentScanline[x];
      const a = x >= bpp ? unfiltered[x - bpp] : 0;
      const b = prevScanline[x];
      const c = x >= bpp ? prevScanline[x - bpp] : 0;

      let val = 0;
      if (filterType === 0) val = raw;
      else if (filterType === 1) val = (raw + a) & 0xff;
      else if (filterType === 2) val = (raw + b) & 0xff;
      else if (filterType === 3) val = (raw + Math.floor((a + b) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        val = (raw + pr) & 0xff;
      }
      unfiltered[x] = val;
    }
    prevScanline = unfiltered;

    for (let x = 0; x < width; x++) {
      const targetIdx = (y * width + x) * 4;
      if (colorType === 6) {
        rgba[targetIdx] = unfiltered[x * 4];
        rgba[targetIdx + 1] = unfiltered[x * 4 + 1];
        rgba[targetIdx + 2] = unfiltered[x * 4 + 2];
        rgba[targetIdx + 3] = unfiltered[x * 4 + 3];
      } else if (colorType === 2) {
        rgba[targetIdx] = unfiltered[x * 3];
        rgba[targetIdx + 1] = unfiltered[x * 3 + 1];
        rgba[targetIdx + 2] = unfiltered[x * 3 + 2];
        rgba[targetIdx + 3] = 255;
      }
    }
  }

  // Detect background white color and make transparent
  // Find bounding box
  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = rgba[idx];
      const g = rgba[idx + 1];
      const b = rgba[idx + 2];
      
      // If near white (background)
      if (r > 240 && g > 240 && b > 240) {
        rgba[idx + 3] = 0; // transparent
      } else {
        // Non-white pixel
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding box: x:[${minX}..${maxX}], y:[${minY}..${maxY}]`);

  // Add small padding
  const pad = 8;
  const cropMinX = Math.max(0, minX - pad);
  const cropMinY = Math.max(0, minY - pad);
  const cropMaxX = Math.min(width - 1, maxX + pad);
  const cropMaxY = Math.min(height - 1, maxY + pad);

  const croppedW = cropMaxX - cropMinX + 1;
  const croppedH = cropMaxY - cropMinY + 1;

  console.log(`Cropped: ${croppedW}x${croppedH}`);

  // Create cropped RGBA buffer
  const croppedRgba = Buffer.alloc(croppedW * croppedH * 4);
  for (let y = 0; y < croppedH; y++) {
    for (let x = 0; x < croppedW; x++) {
      const srcIdx = ((cropMinY + y) * width + (cropMinX + x)) * 4;
      const dstIdx = (y * croppedW + x) * 4;
      croppedRgba[dstIdx] = rgba[srcIdx];
      croppedRgba[dstIdx + 1] = rgba[srcIdx + 1];
      croppedRgba[dstIdx + 2] = rgba[srcIdx + 2];
      croppedRgba[dstIdx + 3] = rgba[srcIdx + 3];
    }
  }

  // Also extract the icon only (the top bronze emblem)
  // Let's find where the emblem ends and text begins
  // The emblem is in the upper ~60% of bounding box
  const iconHeight = Math.floor(croppedH * 0.72);
  let iconMaxY = 0;
  for (let y = 0; y < iconHeight; y++) {
    for (let x = 0; x < croppedW; x++) {
      const idx = (y * croppedW + x) * 4;
      if (croppedRgba[idx + 3] > 20) {
        if (y > iconMaxY) iconMaxY = y;
      }
    }
  }

  // Save Cropped Logo PNG
  savePng(outputPath, croppedW, croppedH, croppedRgba);
  console.log(`Saved transparent cropped logo to ${outputPath}`);
}

function savePng(filePath, width, height, rgbaBuffer) {
  // Format filter 0 scanlines
  const rawScanlines = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const offset = y * (1 + width * 4);
    rawScanlines[offset] = 0; // filter 0
    rgbaBuffer.copy(rawScanlines, offset + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(rawScanlines);

  // PNG Header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const finalPng = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(filePath, finalPng);
}

function makeChunk(type, data) {
  const length = data.length;
  const chunk = Buffer.alloc(12 + length);
  chunk.writeUInt32BE(length, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  
  // CRC32
  const crc = calcCrc32(chunk.subarray(4, 8 + length));
  chunk.writeUInt32BE(crc, 8 + length);
  return chunk;
}

// CRC32 Table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function calcCrc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Process
processPng(
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\d20bc906-ce00-4c2e-9303-dd3e7388d8df\\.user_uploaded\\media_1790575128156.png',
  'c:\\Users\\Admin\\Downloads\\IVA-Automation-2\\public\\images\\aiiva-logo-cropped.png'
);

processPng(
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\d20bc906-ce00-4c2e-9303-dd3e7388d8df\\.user_uploaded\\media_1790575128156.png',
  'c:\\Users\\Admin\\Downloads\\IVA-Automation-2\\public\\images\\aiiva-logo.png'
);

processPng(
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\d20bc906-ce00-4c2e-9303-dd3e7388d8df\\.user_uploaded\\media_1790575128156.png',
  'c:\\Users\\Admin\\Downloads\\IVA-Automation-2\\public\\logo.png'
);
