import TicketsHelper from "@/database/tickets";
import { connect } from "mongoose";
class DatabaseHelper{
    tickets?: TicketsHelper;
    constructor() {
        connect(process.env.DB_URL!, {
            useNewUrlParser: true, useUnifiedTopology: true,
        }) 
        this.tickets= new TicketsHelper();
    }

}

export default DatabaseHelper;
