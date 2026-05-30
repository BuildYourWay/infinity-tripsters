import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "logo.jpg");

const meta = await sharp(logoPath).metadata();
const w = meta.width ?? 800;
const h = meta.height ?? 200;

// Crop around the vertical infinity mark (replaces "f" in "Infinity").
const crop = {
  left: Math.round(w * 0.36),
  top: Math.round(h * 0.08),
  width: Math.round(w * 0.18),
  height: Math.round(h * 0.84),
};

const cropped = sharp(logoPath).extract(crop);

await cropped.clone().resize(32, 32).png().toFile(path.join(root, "app", "icon.png"));
await cropped
  .clone()
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "app", "apple-icon.png"));
await cropped
  .clone()
  .resize(48, 48)
  .png()
  .toFile(path.join(root, "public", "favicon-mark.png"));

console.log("Generated app/icon.png, app/apple-icon.png, public/favicon-mark.png");
