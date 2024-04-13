import * as dotenv from "dotenv";
dotenv.config();

export default async function fetchSecurityData() {
    return process.env.API_KEY;
}
