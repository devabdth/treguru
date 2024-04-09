import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const type = req.nextUrl.searchParams.get("type");
  const subtype = req.nextUrl.searchParams.get("subtype");
  const id = req.nextUrl.searchParams.get("id");

  const response = new NextResponse();

  const filePath = path.join(
    __dirname,
    `../../../../../assets/${type}/${subtype}/${id}`
  );
  console.log(filePath)
  if (fs.existsSync(filePath)) {
    const imageBuffer = fs.readFileSync(filePath);

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpg",
      },
    });
  } else {
    return NextResponse.json({ status: 404 });
  }
};

