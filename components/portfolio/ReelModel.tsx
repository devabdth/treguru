import consts, { ReelProps } from "@/prefs/consts";
import ReactPlayer from "react-player";
import { useState } from "react";
import { MainButton } from "../globals";
import { IReel } from "@/models/reel";

type ReelModelProps= {
    reelIndex: number;
    closeModelCallback: Function;
    reelChangedListener: (reel: IReel) => void;
    reels: Array<IReel>;
}

const ReelModel= (props: ReelModelProps)=> {
    const [isPlaying, setIsPlaying]= useState(true);
    const [showControllers, setShowControllers]= useState(false);
    const [isMuted, setIsMuted]= useState(true);
    const [currentReelIndex, setCurrentReelIndex]= useState(props.reelIndex)
    const [reel, setReel]= useState<IReel>(props.reels[props.reelIndex]);
    const allReelsCount= props.reels.length;
    return (
        <div className="inset-0 fixed w-screen h-screen bg-black/50 backdrop-blur-xl z-[200] flex flex-row items-center justify-center">
            <MainButton 
                type="button" variant="icon-only" iconHeight={16} iconWidth={16}
                customClassesStyle={`${(currentReelIndex !== (0))?"cursor-pointer opacity-100":"cursor-none opacity-0" } aspect-square`} 
                icon="/chevron-right.svg" title="" onClick={() => {
                    const newReelIndex= currentReelIndex-1;
                    setCurrentReelIndex(newReelIndex);
                    setReel(props.reels[newReelIndex]);
                    props.reelChangedListener(props.reels[newReelIndex])
                    }}
            />
            <div className="lg:w-[60vw] w-[90%] aspect-[10/16] max-h-[90%] min-h[85%] flex flex-col items-start justify-center">
                <div className="w-full flex flex-row items-center justify-between text-white">
                    <h3 className="bold-32">{reel.title}</h3>
                    <button onClick={()=> { props.closeModelCallback(); }}
                        className="regular-16"
                    >x</button>
                </div>
                <p className="text-white regular-12">{reel.bio}</p>
                <div className="h-[80%] aspect-[9/16] flex flex-col items-start justify-start overflow-y-auto gap-4 m-auto">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <div className="video-wrapper w-full h-full absolute top-0">
                            <ReactPlayer controls={false} url={reel.video} pip={true} 
                                onStart={()=> {setShowControllers(true); setIsPlaying(true); setIsMuted(false);}}
                                playing={isPlaying} loop={true} muted={isMuted}
                                width='100%' height='100%'
                                light={<img src={reel.thumbnail} alt={reel.title} className="flex aspect-[9/16] object-center object-cover" />}
                            />
                            <source src={reel.video} type="video/mp4" />
                        </div>
                        <div className={`${showControllers ? "opactiy-100": "opacity-0"} transition-all w-full h-[8vw] bg-gradient-to-bl from-black/70 via-50% via-transparent 
                        absolute top-0 right-0 flex flex-row items-start justify-end px-4 py-2 gap-2`}>
                            <MainButton 
                                cursor="pointer" icon={!isMuted ? "/unmute.svg" : "/mute.svg"} title="" 
                                variant="icon-only" type="button" onClick={()=> { setIsMuted(!isMuted); }}
                                iconWidth={20} iconHeight={20}
                                />
                            <MainButton 
                                cursor="pointer" icon={!isPlaying ? "/pause-white.svg" : "/play-white.svg"} title="" 
                                variant="icon-only" type="button" onClick={()=> { setIsPlaying(!isPlaying); }}
                                iconWidth={20} iconHeight={20}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <MainButton 
                type="button" variant="icon-only" iconHeight={16} iconWidth={16}
                customClassesStyle={`${(currentReelIndex !== (allReelsCount-1))?"cursor-pointer opacity-100":"cursor-none opacity-0" } aspect-square`} 
                icon="/chevron-left.svg" title="" onClick={() => {
                    const newReelIndex= currentReelIndex+1;
                    setCurrentReelIndex(newReelIndex);
                    setReel(props.reels[newReelIndex]);
                    props.reelChangedListener(props.reels[newReelIndex])
                    }}
            />


        </div>
    )
}

export default ReelModel
