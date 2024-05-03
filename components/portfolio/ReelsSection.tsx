import consts, { ReelProps } from "@/prefs/consts"
import ReelCard from "./ReelCard"
import { IReel } from "@/models/reel";

type ReelsSectionProps= {
    openReelModel: (reel: IReel) => void;
    reels: Array<IReel>;
}

const ReelsSection= (props: ReelsSectionProps) => {
    return (
        <section className="w-full flex flex-col items-center justify-start lg:mt-0 mt-[25vw] lg:px-28 lg:py-8 px-4 py-2 lg:gap-2">
            <h2 className="text-gradient lg:bold-88 bold-64 text-center">Reels Showcase</h2>
            <p className="text-white/75 regular-12 lg:px-12 px-6 text-center">See our latest projects come alive! Motion graphics & animation showcasing our skills.</p>
            <div className="w-full grid grid-cols-2 lg:gap-4 gap-2 lg:grid-cols-5 md:grid-cols-4 m-auto items-center lg:mt-[2vw] z-[50] mt-[3vw]">
                {props.reels.map((reel, i) =>( <>
                    <ReelCard reel={reel} key={i} onCardClickListener={
                        () => {
                            props.openReelModel(reel);
                        }
                    } />
                </>))}
            </div>
        </section>
    )
}

export default ReelsSection
