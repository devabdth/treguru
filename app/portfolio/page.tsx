import { IProject } from "@/models/project";
import PortfolioBody from "./PortfolioBody";
import DatabaseHelper from "@/database";
import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/prefs/seo"
import type { Metadata } from "next";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import * as dotenv from "dotenv";
dotenv.config();



export const metadata: Metadata = {
    title: 'TreGuru - Portfolio',
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION,
};

const getData = async () => {
    const dbHelper: DatabaseHelper= new DatabaseHelper();
    const projects: Array<IProject> | undefined = await dbHelper.projects!.getAllProjects();
    console.log(projects)
    return projects??[];

}


const Portfolio= async () => {
    const projects= await getData();
    return (<PortfolioBody projects={projects}/>)
}

export default Portfolio
