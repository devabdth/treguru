import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async (req: NextRequest, _: NextResponse) => {
  const type = req.nextUrl.searchParams.get("type");
  const subtype = req.nextUrl.searchParams.get("subtype");
  const id = req.nextUrl.searchParams.get("id");


  const filePath = path.join(
    __dirname,
    `../../../../../assets/${type}/${subtype}/${id}`
  );
  if (fs.existsSync(filePath)) {
    const imageBuffer = fs.readFileSync(filePath);

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": id!.split(".")[1] === "mp4" ? "video/mp4" :`image/${id!.split(".")[1]}`,
      },
    });
  } else {
    return NextResponse.json({ status: 404 });
  }
};

