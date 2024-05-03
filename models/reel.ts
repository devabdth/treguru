import { Schema, Document, Types, model, models } from "mongoose"

interface IReel extends Document {
    _id: Types.ObjectId;
    title: string;
    bio: string;
    project: string;
    thumbnail: string;
    video: string,
}

const ReelSchema= new Schema<IReel>({
    title: {type: String, required: true},
    bio: {type: String, required: true},
    project: {type: String, required: true},
    thumbnail: {type: String, required: true},
    video: {type: String, required: true},
});

export type { IReel, ReelSchema }

const Reel= models.Reel || model<IReel>('Reel', ReelSchema);
export default Reel;
