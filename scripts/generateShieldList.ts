import fs from "fs";
import path from "path";

// Define the directory containing the shield SVGs
const dir: string = path.join(process.cwd(), "public", "kommunevapen");

// Read all SVG files from the directory
const files: string[] = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".svg"));

// Write the list of files to a JSON file in the public directory
const outputPath = path.join(process.cwd(), "public", "shields.json");

fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));

console.log("✅ Shield list generated successfully!");
