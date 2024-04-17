import Project, {IProject} from "@/models/project";

export default class ProjectsHelper {
    logger?: string;
    constructor() {
        this.logger= "[Projects Database Helper]";
    }


    async getAllProjects(): Promise<Array<IProject> | undefined> {
        try {
            return await Project.find({});
        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return undefined;
        }
    }

    async createProject(body: IProject): Promise<boolean> {
        try {
            const project= new Project(body);
            await project.save();
            return true;
        } catch (e) {
            console.log(`${this.logger}: ${e}`);
            return false;
        }
    }
}
