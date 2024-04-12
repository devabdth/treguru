import Image from "next/image"
import React from "react"
import { ReelProps } from "@/prefs/consts"

type ReelCardProps= {
    reel: ReelProps
}

const ReelCard= (props: ReelCardProps)=> {
    return (
        <div className="min-w-[18vw] w-full aspect-[9/14] border-2 border-red-500 rounded-xl overflow-hidden relative">
            <Image
                src={props.reel.thumbnail}
                width={1080} height={1920}
                alt={props.reel.bio}
                className="absolute w-full h-full top-0 object-cover object-center"
            ></Image>
        </div>
    )
}

export default ReelCard
