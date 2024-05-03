"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { PortfolioIndustryProps } from "@/prefs/consts";
import Image from "next/image";
import { MainButton } from "../globals";
import { IProject } from "@/models/project";
import { config as envConfig } from "dotenv";
envConfig()

type PortfolioSectionProps = {
  industry: PortfolioIndustryProps;
  leftTitle: boolean;
  projects: Array<IProject>,
  openModelCallback(project: IProject): void;
};

type ProjectCardProps= {
    project: IProject;
    viewCallback(project: IProject): void;
}

const ProjectCard= ({project, viewCallback}: ProjectCardProps)=> {
  return (
    <div
      className="lg:h-[30vw] md:h-[30vw] h-[50vw] flex items-center justify-center
    rounded-xl overflow-hidden relative
    "
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_HOST}/${project.backgroundImage}`}
        alt={project.title}
        width={1024}
        height={1024}
        className="w-full h-full object-cover object-center absolute top-0"
      ></Image>
      <div className="w-full h-[80%] absolute bottom-0 bg-gradient-to-t from-black/100 to-gray-90/0 flex flex-col items-start justify-end px-4 py-2">
        <h3 className="text-white bold-20">{project.title}</h3>
        <p className="text-white regular-12 text-justify">{project.bio.length > 115 ? `${project.bio.substring(0, 115)}...` : project.bio}</p>
        <div className="w-full mt-[1vw] items-center justify-end flex">
          <MainButton
            title="View"
            type="button"
            onClick={() => {viewCallback(project);}}
            variant="btn-blur"
            cursor="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};


const PortfolioSection: FC<PortfolioSectionProps> = (props) => {
  const projectsCount = props.projects.length;
  const [displayCardsCount, setDisplayCardsCount] = useState(
    projectsCount > 4 ? 4 : projectsCount
  );
  const [showViewMore, setShowViewMore] = useState(
    projectsCount - displayCardsCount > 0
  );
  const [height, setHeight] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(titleRef!.current?.clientHeight! + cardsRef!.current?.clientHeight!);
  });

  return (
    <section
      id={props.industry.sectionId}
      style={{ height: (height+height/20) }}
      className={`w-full padding-container mt-[30vw] lg:mt-[2.5vw] relative transition-all`}
    >
      {/* Neon */}
      <div className="w-full min-h-[160vw] lg:min-h-[40vw] absolute flex flex-row items-center justify-between top-0 left-0">
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className={`absolute neon-left-floating-animation left-0 rotate-180 w-[150%] lg:h-[200%] h-[200%] opacity-75 ${props.industry.neonsHue}`}
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className={`absolute neon-right-floating-animation w-[150%] lg:h-[200%] h-[200%] opacity-75 ${props.industry.neonsHue}`}
        ></Image>
      </div>
      <div className="w-full h-full z-50 padding-container absolute top-0 left-0 flex flex-col">
        {/* Header */}
        <div
          ref={titleRef}
          className={`w-full flex flex-col ${
            props.leftTitle ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center justify-start lg:justify-between`}
        >
          <h2
            className="text-gray-10 bold-64
           text-center lg:text-start"
          >
            {props.industry.title}
            <br />
            <span className="text-gradient bold-88">
              {props.industry.highlightedTitle}
            </span>
          </h2>
          <p className="text-gray-20 regular-18 lg:max-w-[40vw] text-justify text-auto-justify-center lg:text-auto-justify-start px-12 lg:px-0">
            {props.industry.bio}
          </p>
        </div>
        <div
          ref={cardsRef}
          className="w-full mt-[15vw] lg:mt-[2vw] bg-gray-30/20 rounded-xl relative
        backdrop-blur-xl px-4 py-2 flex-col items-start justify-between flex gap-2 transition-all"
        >
          <div
            className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 
          lg:gap-y-[1vw] lg:gap-x-[2vw] gap-y-[6vw] gap-x-[4vw] lg:justify-end mb-[10vw] md:mb-[4vw] lg:mb-[2vw]"
          >
            {props.projects
              .slice(0, displayCardsCount)
              .map((project, i) => (
                <ProjectCard project={project} key={i}
                viewCallback={(project) => {
                    props.openModelCallback(project);
                }}
                />
              ))}
          </div>
          <div
            className={`w-full flex items-center transition-all justify-center flex-row absolute
            lg:-bottom-[1vw] md:-bottom-[2vw] -bottom-[3vw]`}
          >
            <MainButton
              title="View More"
              type="button"
              onClick={() => {
                let newCount = displayCardsCount + 4;
                newCount = newCount < projectsCount ? newCount : projectsCount;
                setDisplayCardsCount(
                  newCount < projectsCount ? newCount : projectsCount
                );
                if (newCount === projectsCount) {
                  setShowViewMore(false);
                }
              }}
              variant="btn-accent"
              icon="/discount.svg"
              cursor={showViewMore ? "cursor-pointer" : "cursor-none"}
              customClassesStyle={`shadow-black shadow-lg transition-all ${
                showViewMore ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
