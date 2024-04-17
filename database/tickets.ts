import Ticket, {ITicket} from "@/models/ticket";
export default class TicketsHelper {
    logger?: string;
    constructor() {
        this.logger= "[Projects Database Helper]";
    }

    async getAllTickets(): Promise<Array<ITicket> | undefined> {
        try {
            return await Ticket.find({});
        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return undefined;
        }

    }

    async createTicket(body: ITicket): Promise<boolean> {
        try {
            const ticket= new Ticket(body);
            await ticket.save();
            return true;

        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return false;
        }
    }
}
