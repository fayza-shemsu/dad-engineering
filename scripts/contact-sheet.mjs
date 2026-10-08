import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rawDir = path.join(process.cwd(), 'public', 'images', 'raw');
const files = fs.readdirSync(rawDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

async function createContactSheet() {
  const thumbWidth = 400;
  const thumbHeight = 400;
  const columns = 5;
  const rows = Math.ceil(files.length / columns);
  
  const canvasWidth = columns * thumbWidth;
  const canvasHeight = rows * thumbHeight;
  
  const composites = [];
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const rawPath = path.join(rawDir, file);
    
    const svgText = `
      <svg width="${thumbWidth}" height="${thumbHeight}">
        <rect x="0" y="${thumbHeight - 40}" width="${thumbWidth}" height="40" fill="rgba(0,0,0,0.7)"/>
        <text x="10" y="${thumbHeight - 15}" font-family="Arial" font-size="24" fill="white">${file}</text>
      </svg>
    `;
    
    const thumbBuffer = await sharp(rawPath)
      .rotate()
      .resize(thumbWidth, thumbHeight, { fit: 'cover' })
      .composite([{ input: Buffer.from(svgText), top: 0, left: 0 }])
      .jpeg()
      .toBuffer();
      
    const col = i % columns;
    const row = Math.floor(i / columns);
    
    composites.push({
      input: thumbBuffer,
      top: row * thumbHeight,
      left: col * thumbWidth,
    });
  }
  
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 3,
      background: { r: 0, g: 0, b: 0 }
    }
  })
  .composite(composites)
  .toFile('contact-sheet.jpg');
  
  console.log('Contact sheet created');
}

createContactSheet().catch(console.error);
