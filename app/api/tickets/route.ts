import { NextResponse, NextRequest } from "next/server";
import DatabaseHelper from "@/database";
import { ITicket } from "@/models/ticket";
import { authMiddleware } from "@/app/middleware";

const dbHelper: DatabaseHelper= new DatabaseHelper();

export const GET= async (req: NextRequest, _: NextResponse) => {
    const authRes= authMiddleware(req);
    if (!authRes) return NextResponse.json(401);
    const tickets: Array<ITicket> | undefined = await dbHelper.tickets!.getAllTickets();
    return NextResponse.json(JSON.stringify({tickets: tickets}), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const POST= async (req: NextRequest, _: NextResponse) => {
    try {
        const body= await req.json();
        if (!body) return NextResponse.json(401, { headers: { "Content-Type": "application/json" } });

        const ticketRes= await dbHelper.tickets!.createTicket(body!);

        return NextResponse.json((200), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(e) {
        console.log(e);
        return NextResponse.json(500);
    }
}
