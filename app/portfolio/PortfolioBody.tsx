"use client"
import HomeSection from "@/components/portfolio/HeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ProjectModel from "@/components/portfolio/ProjectModel"
import ReelsSection from "@/components/portfolio/ReelsSection"
import Consts, { ReelProps } from "@/prefs/consts";
import { useState } from "react";
import consts, { PortfolioProjectProps } from "@/prefs/consts";
import ReelModel from "@/components/portfolio/ReelModel";
import { IProject } from "@/models/project";

type PortfolioBodyProps = {projects: Array<IProject>}
const PortfolioBody = (props: PortfolioBodyProps) => {
    const [showModel, setShowModel]= useState(false);
    const [projectState, setProjectState]= useState<{project?: PortfolioProjectProps}>();
    const [showReelsModel, setShowReelsModel]= useState(false);
    const [reelState, setReelState]= useState<{reel?: ReelProps}>();

  return (
    <>
      <HomeSection />
      <ReelsSection openReelModel={(reel) => {
          setReelState({reel: reel});
          setShowReelsModel(true);
        }} />
      {Consts.PORTFOLIO_DATA.map((industry, i) => (
        <PortfolioSection industry={industry}
            projects={(props.projects??[]).filter((proj: IProject) => industry.projects.includes(proj.projectId))}
            key={i} leftTitle={i % 2 == 0}
            openModelCallback={(project)=> { setProjectState(prevState => ({...prevState, project})); setShowModel(true);}}
        />
      ))}
      {showReelsModel && <ReelModel 
        reelIndex={consts.REELS_DATA.indexOf(reelState!.reel!)}  
        closeModelCallback={()=> { setShowReelsModel(false); setReelState({reel: undefined})}}
        reelChangedListener={(newReel) => {
            setReelState({reel: newReel});
        }}
      />}

      {showModel && <ProjectModel 
        project={projectState!.project!}  
        closeModelCallback={()=> { setShowModel(false); setProjectState({project: undefined})}}
      />}
    </>
  );
};
export default PortfolioBody;
