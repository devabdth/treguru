import Reel, {IReel} from "@/models/reel"

export default class ReelsHelper {
    logger?: string;
    constructor() {
        this.logger= "[Reels Database Helper]";
    }


    async getAllReels(): Promise<Array<IReel> | undefined> {
        try {
            return await Reel.find({});
        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return undefined;
        }
    }

    async createReel(body: IReel): Promise<boolean> {
        try {
            const reel= new Reel(body);
            await reel.save();
            return true;
        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return false;
        }
    }
}
