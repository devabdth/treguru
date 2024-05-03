import { NextResponse, NextRequest } from "next/server";
import DatabaseHelper from "@/database";
import { authMiddleware } from "@/app/middleware";
import { IReel } from "@/models/reel"


const dbHelper: DatabaseHelper= new DatabaseHelper();
const logger= "[Reels Router]"

export const GET= async (req: NextRequest, _: NextResponse) => {
    try{
        const authRes= authMiddleware(req);
        if (!authRes) return NextResponse.json(401);
        const reels: Array<IReel> | undefined = await dbHelper.reels!.getAllReels();
        return NextResponse.json(JSON.stringify({reels: reels}), {
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (e) {
        console.log(`${logger}: ${e}`);
        return NextResponse.json(500)
    }

}


export const POST= async (req: NextRequest, _: NextResponse) => {
    try{
        const authRes= authMiddleware(req);
        if (!authRes) return NextResponse.json(401);

        const body= await req.json();
        if (!body) return NextResponse.json(401, { headers: { "Content-Type": "application/json" } });

        const reelRes: boolean= await dbHelper.reels!.createReel(body!);

        return NextResponse.json((reelRes?200: 500), {
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (e) {
        console.log(`${logger}: ${e}`);
        return NextResponse.json(500)
    }

}

