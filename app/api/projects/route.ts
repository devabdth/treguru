import { NextResponse, NextRequest } from "next/server";
import DatabaseHelper from "@/database";
import { authMiddleware } from "@/app/middleware";
import { IProject } from "@/models/project"


const dbHelper: DatabaseHelper= new DatabaseHelper();
const logger= "[Projects Router]"

export const GET= async (req: NextRequest, _: NextResponse) => {
    try{
        const authRes= authMiddleware(req);
        if (!authRes) return NextResponse.json(401);
        const projects: Array<IProject> | undefined = await dbHelper.projects!.getAllProjects();
        return NextResponse.json(JSON.stringify({projects: projects}), {
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

        const projectRes: boolean= await dbHelper.projects!.createProject(body!);

        return NextResponse.json((projectRes?200: 500), {
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (e) {
        console.log(`${logger}: ${e}`);
        return NextResponse.json(500)
    }

}


