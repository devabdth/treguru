import { type NextRequest } from "next/server";
import * as dotenv from "dotenv";


export function authMiddleware(req: NextRequest) {
    dotenv.config();
    const authKey= process.env.API_KEY;

    const auth= req.headers.get("Authorization");
    return !(authKey === undefined || auth !== authKey)
}

