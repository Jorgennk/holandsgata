export const dynamic = "force-static";

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir: string = path.join(process.cwd(), "public", "kommunevapen");
  const files: string[] = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".svg"));
  return NextResponse.json(files);
}
