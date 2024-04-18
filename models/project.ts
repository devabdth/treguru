import { Schema, Document, Types, model, models } from "mongoose"

interface IProject extends Document {
    _id: Types.ObjectId;
    title: string;
    bio: string;
    projectId: string;
    backgroundImage: string;
    projectDisplayImages: Array<string>;
    portfolioSectionId: string,
}

const ProjectSchema= new Schema<IProject>({
    title: {type: String, required: true},
    bio: {type: String, required: true},
    projectId: {type: String, required: true},
    backgroundImage: {type: String, required: true},
    portfolioSectionId: {type: String, required: true},
    projectDisplayImages: {type: [String], required: true},
});

export type {IProject, ProjectSchema}

const Ticket= models.Project || model<IProject>('Project', ProjectSchema);
export default Ticket;
