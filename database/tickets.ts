import Ticket, {ITicket} from "@/models/ticket";
export default class TicketsHelper {
    constructor(){}

    async getAllTickets(): Promise<Array<ITicket> | undefined> {
        try {
            return await Ticket.find({});
        } catch (e) {
            console.log(e);
            return undefined;
        }

    }

    async createTicket(body: ITicket): Promise<boolean> {
        try {
            const ticket= new Ticket(body);
            await ticket.save();
            return true;

        } catch (e) {
            console.log(e);
            return false;
        }
    }
}
