"use client"
import HomeSection from "@/components/portfolio/HeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ProjectModel from "@/components/portfolio/ProjectModel"
import Consts from "@/prefs/consts";
import { useState } from "react";
import { PortfolioProjectProps } from "@/prefs/consts";


const PortfolioBody = () => {
    const [showModel, setShowModel]= useState(false);
    const [projectState, setProjectState]= useState<{project?: PortfolioProjectProps}>();
  return (
    <>
      <HomeSection />
      {Consts.PORTFOLIO_DATA.map((project, i) => (
        <PortfolioSection industry={project} key={i} leftTitle={i % 2 == 0}
            openModelCallback={(project)=> { setProjectState(prevState => ({...prevState, project})); setShowModel(true);}}
        />
      ))}
      {showModel && <ProjectModel 
        project={projectState!.project!}  
        closeModelCallback={()=> { setShowModel(false); setProjectState({project: undefined})}}
      />}
    </>
  );
};

export default PortfolioBody;
