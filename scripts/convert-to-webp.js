const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const EXTENSIONS = [".png", ".jpg", ".jpeg"];
const DIRS = ["src/assets", "public"];

async function convertToWebp() {
  const converted = [];

  for (const dir of DIRS) {
    const dirPath = path.join(__dirname, "..", dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = walkDir(dirPath);

    for (const filePath of files) {
      const ext = path.extname(filePath).toLowerCase();
      if (!EXTENSIONS.includes(ext)) continue;

      const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

      try {
        await sharp(filePath)
          .webp({ quality: 85 })
          .toFile(webpPath);
        converted.push({ from: path.relative(process.cwd(), filePath), to: path.relative(process.cwd(), webpPath) });
        console.log(`Converted: ${filePath} -> ${webpPath}`);
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error(`Error converting ${filePath}:`, err.message);
      }
    }
  }

  console.log(`\nDone. Converted ${converted.length} images to WebP.`);
  return converted;
}

function walkDir(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, files);
    } else if (stat.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

convertToWebp().catch(console.error);
