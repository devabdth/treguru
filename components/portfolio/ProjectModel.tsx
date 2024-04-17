import Image from "next/image"
import { config as envConfig } from "dotenv";
import { IProject } from "@/models/project";
envConfig();

type ProjectModelProps= {
    project: IProject;
    closeModelCallback: Function;
}

const ProjectModel= (props: ProjectModelProps)=> {
    return (
        <div className="inset-0 fixed w-screen h-screen bg-black/50 backdrop-blur-sm z-[200] flex flex-row items-center justify-center">
            <div className="w-[80%] lg:w-[80%] h-[90%] lg:h-[90%] bg-black-gradient rounded-xl px-6 lg:px-12 py-2 lg:py-4">
                <div className="w-full flex flex-row items-center justify-between text-white">
                    <h3 className="bold-32">{props.project.title}</h3>
                    <button onClick={()=> { props.closeModelCallback(); }}
                        className="regular-16"
                    >x</button>
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start overflow-y-auto gap-4">
                    <p className="text-white regular-12">{props.project.bio}</p>
                    <div className="w-full lg:h-[80%] h-[80%] rounded-xl overflow-auto">
                    {props.project.projectDisplayImages.map((projectDisplayImage, i) => <Image
                        src={`${process.env.NEXT_PUBLIC_HOST}/${projectDisplayImage}`}
                        alt={props.project.title}
                        key={i}
                        width={1920}
                        height={1080}
                        className="w-full aspect-video object-cover object-center"
                    ></Image>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModel
