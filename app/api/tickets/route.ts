import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";


export const GET= async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json(401, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const POST= async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json(401, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
