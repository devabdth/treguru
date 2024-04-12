import Image from "next/image"
import React from "react"
import { ReelProps } from "@/prefs/consts"
import { MainButton } from "../globals"

type ReelCardProps= {
    reel: ReelProps;
    onCardClickListener: () => void;

}

const ReelCard= (props: ReelCardProps)=> {
    return (
        <div className="min-w-[8vw] w-full lg:aspect-[9/13] md:aspect-[9/14] aspect-[9/15] rounded-xl overflow-hidden relative">
            <Image
                src={props.reel.thumbnail}
                width={1080} height={1920}
                alt={props.reel.bio}
                className="absolute w-full h-full top-0 object-cover object-center"
            ></Image>
            <div className="bg-gradient-to-br via-transparent via-50% from-black absolute top-0 left-0 w-full flex flex-row items-center justify-start px-2 py-1 gap-2">
                <Image
                    src="/project.svg" alt="Project Icon"
                    width={20} height={20}
                ></Image>
                <p className="bold-12 text-white">{props.reel.project}</p>
            </div>
            <div className="w-full h-[40%] absolute bottom-0 bg-gradient-to-t from-black/70 to-black/0 px-2 py-1 items-start justify-end flex flex-col">
                <h4 className="text-white lg:bold-16 bold-40 md:bold-20">{props.reel.title}</h4>
                <p className="text-white lg:regular-10 regular-16 md:regular-12">{props.reel.bio.length < 50 ? props.reel.bio : `${props.reel.bio.substring(0, 50)}...`}</p>
                <div className="w-full flex flex-row items-center justify-end">
                    <MainButton type="button" variant="btn-blur" title="View" onClick={props.onCardClickListener} />
                </div>
            </div>
        </div>
    )
}

export default ReelCard
