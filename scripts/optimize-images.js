import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images in public/ directory. Checking sizes...`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    totalOriginalSize += stats.size;

    // Jika ukuran file lebih dari 300KB atau berdimensi besar, kompres dan resize
    if (stats.size > 300 * 1024) {
      console.log(`Optimizing ${file} (Original: ${sizeMB} MB)...`);
      const tempPath = path.join(publicDir, `temp_${file}`);

      try {
        await sharp(filePath)
          .resize({ width: 1400, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(tempPath);

        const newStats = fs.statSync(tempPath);
        fs.renameSync(tempPath, filePath);
        totalOptimizedSize += newStats.size;
        console.log(`  -> Optimized ${file} to ${(newStats.size / (1024 * 1024)).toFixed(2)} MB`);
      } catch (err) {
        console.error(`  -> Failed to optimize ${file}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        totalOptimizedSize += stats.size;
      }
    } else {
      totalOptimizedSize += stats.size;
    }
  }

  console.log(`\n=== Image Optimization Summary ===`);
  console.log(`Original Total Size : ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized Total Size: ${(totalOptimizedSize / (1024 * 1024)).toFixed(2)} MB`);
  const savedPercent = (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1);
  console.log(`Saved Size          : ${savedPercent}% reduction!`);
}

optimizeImages();
