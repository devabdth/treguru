import TicketsHelper from "@/database/tickets";
import ProjectsHelper from "./projects";

import { connect } from "mongoose";
class DatabaseHelper{
    tickets?: TicketsHelper;
    projects?: ProjectsHelper;
    constructor() {
        connect(process.env.DB_URL!, {
            useNewUrlParser: true, useUnifiedTopology: true,
        })
        this.tickets= new TicketsHelper();
        this.projects= new ProjectsHelper();
    }

}

export default DatabaseHelper;
