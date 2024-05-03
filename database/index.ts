import TicketsHelper from "@/database/tickets";
import ProjectsHelper from "./projects";

import { connect, ConnectOptions } from "mongoose";
import ReelsHelper from "./reels";

class DatabaseHelper{
    tickets?: TicketsHelper;
    projects?: ProjectsHelper;
    reels: ReelsHelper;
    constructor() {
        connect(process.env.DB_URL!, {})
        this.tickets= new TicketsHelper();
        this.projects= new ProjectsHelper();
        this.reels= new ReelsHelper();
    }

}

export default DatabaseHelper;
