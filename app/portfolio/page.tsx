import { IProject } from "@/models/project";
import PortfolioBody from "./PortfolioBody";

import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/prefs/seo"
import type { Metadata } from "next";
import * as dotenv from "dotenv";
dotenv.config();



export const metadata: Metadata = {
    title: 'TreGuru - Portfolio',
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION,
};

const getProjectsData = async () => {
    const headers: Headers= new Headers();
    headers.set("Authorization", process.env.API_KEY ?? "")
    const res =await fetch(`${process.env.NEXT_PUBLIC_HOST!}/api/projects/`, {
        method: "GET", headers: headers,
        cache: "no-store"
    });
    const data= JSON.parse(await res.json());
    return data["projects"] ?? new Array<IProject>;
}


const getReelsData = async () => {
    const headers: Headers= new Headers();
    headers.set("Authorization", process.env.API_KEY ?? "")
    const res =await fetch(`${process.env.NEXT_PUBLIC_HOST!}/api/reels/`, {
        method: "GET", headers: headers,
        cache: "no-store"
    });
    const data= JSON.parse(await res.json());
    return data["reels"] ?? new Array<IProject>;
}



const Portfolio= async () => {
    const projects= await getProjectsData();
    const reels= await getReelsData();
    return (<PortfolioBody projects={projects} reels={reels}/>)
}

export default Portfolio
