import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "kommunevapen");
const files = fs.readdirSync(dir).filter((file) => file.endsWith(".svg"));

fs.writeFileSync(
  path.join(process.cwd(), "public", "shields.json"),
  JSON.stringify(files, null, 2)
);

console.log("✅ Shield list generated successfully!");
