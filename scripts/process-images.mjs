import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rawDir = path.join(process.cwd(), 'public', 'images', 'raw');
const webDir = path.join(process.cwd(), 'public', 'images', 'web');

if (!fs.existsSync(webDir)) {
  fs.mkdirSync(webDir, { recursive: true });
}

async function processImages() {
  if (!fs.existsSync(rawDir)) {
    console.error("Raw directory not found: " + rawDir);
    return;
  }

  const files = fs.readdirSync(rawDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  
  if (files.length === 0) {
    console.log('No images found to process.');
    return;
  }

  for (const file of files) {
    const rawPath = path.join(rawDir, file);
    // sanitize filename
    const sanitizedName = file.replace(/\(/g, '').replace(/\)/g, '').replace(/ /g, '_');
    const fileNameWithoutExt = path.parse(sanitizedName).name;
    
    const mainWebPath = path.join(webDir, fileNameWithoutExt + '.webp');
    const thumbWebPath = path.join(webDir, fileNameWithoutExt + '-thumb.webp');

    try {
      const metadata = await sharp(rawPath).metadata();
      let width = metadata.width;
      let height = metadata.height;
      
      // Auto-rotation swaps width and height for EXIF orientations 5-8
      if (metadata.orientation >= 5) {
        width = metadata.height;
        height = metadata.width;
      }
      
      const cropHeight = Math.floor(height * 0.92);

      const pipeline = sharp(rawPath)
        .rotate()
        .extract({ left: 0, top: 0, width: width, height: cropHeight })
        .modulate({
          brightness: 1.05
        });

      // Save main image
      await pipeline.clone()
        .resize({ width: 2400, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(mainWebPath);

      // Save thumbnail
      await pipeline.clone()
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(thumbWebPath);

      console.log("Processed: " + file + " -> " + fileNameWithoutExt + ".webp & thumb");
    } catch (err) {
      console.error("Error processing " + file + ":", err);
    }
  }
}

processImages();
