// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const dir = path.join(process.cwd(), "public", "kommunevapen");

const files = fs.readdirSync(dir).filter((file) => file.endsWith(".svg"));

const outputPath = path.join(process.cwd(), "public", "shields.json");
fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));

console.log("✅ Shield list generated successfully!");
