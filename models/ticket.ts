import { Schema, Document, Types, model, models } from "mongoose"

interface ITicket extends Document {
    _id: Types.ObjectId,
    fName: string,
    lName: string,
    phone: string,
    email: string,
    message: string,
}

const TicketShema= new Schema<ITicket>({
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

export type {ITicket, TicketShema}

const Ticket= models.Ticket || model<ITicket>('Ticket', TicketShema);
export default Ticket;
