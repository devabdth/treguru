"use client"
import Image from "next/image"
import { MainButton } from "../globals"
import Consts from "@/prefs/consts";

const HeroSection= () => {
    return (
    <section className="w-full lg:h-[80vw] md:h-[90vw] h-[100vw] relative">
        {/* Neon Lights & Floating Components */}
        <div className="w-full h-full relative top-0">
            {/* Grid */}
            <Image
                src="/grid.png" alt="Grid"
                width={1100} height={1100}
                className="w-full h-[160%] absolute object-cover object-center -top-[15vw] opacity-25"
            ></Image>
            <Image
                src="/about-home-gradient.png" alt="Gradient"
                width={1417} height={1417}
                className="lg:w-[200%] lg:h-[200%] w-[150%] h-[150%] blur-xl object-cover object-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-50 bg-blend-overlay hue-rotate-60"
            ></Image>
            <div className="w-[15%] aspect-square rounded-full border-2 border-gray-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute opacity-15"></div>
            <div className="w-[25%] aspect-square rounded-full border-2 border-gray-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute opacity-15"></div>
            <div className="w-[35%] aspect-square rounded-full border-2 border-gray-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute opacity-15"></div>
            <div className="w-[45%] aspect-square rounded-full border-2 border-gray-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute opacity-15"></div>
            <div className="w-[55%] aspect-square rounded-full border-2 border-gray-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute opacity-15"></div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-between lg:px-28 px-4 py-[2vw] lg:gap-8 gap-8">
            <div className="w-full flex flex-col items-center justify-center gap-2">
                <h1 className="xl:bold-64 lg:bold-54 md:bold-48 bold-32 text-center text-white">Explore the Possibilities <br/>of Marketing with{" "}
                <span className="inline-block relative">
                        TreGuru
                        <Image
                            src="/title-curve-line.png" alt="Curve Line"
                            width={1248} height={56}
                            className="absolute top-full left-0 w-full xl:-mt-2 hue-rotate-60"
                        ></Image>
                    </span>
                </h1>
                <p className="text-white xl:regular-24 lg:regular-20 regualr-16 xl:px-40 lg:px-16 px-12 text-center">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                <div className="flex flex-row items-center justify-center w-full gap-2">
                   <MainButton 
                        title="Show Portfolio" cursor="pointer" customClassesStyle="cursor-pointer z-[200] px-[1vw] py-[0.5vw]" variant="btn-accent"
                        type="button" onClick={()=> { window.open("/portfolio", "_self"); return;}}></MainButton>

                   <MainButton 
                        title="Pick Quote" cursor="pointer" customClassesStyle="cursor-pointer z-[200] px-[16px] py-[8px]" variant="btn-blur"
                        type="button" onClick={()=> { window.open("/contact", "_self"); return;}}></MainButton>
                </div>
            </div>
            <div className="relative max-w-[90vw] mx-auto md:max-w-[90vw] xl:mb-24">
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                      <div className="aspect-[65/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[880/490] lg:aspect-[1024/490]">
                        <Image
                          src="/about-hero-robot.png"
                          className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                          width={1024}
                          height={490}
                          alt="AI"
                        ></Image>
                    </div>
                </div>
            </div> </div>
            <div className="w-full h-[15%] flex-col items-center justify-between lg:flex hidden gap-4 px-28">
                <p className="text-white opacity-60 regular-12">HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</p>
                <div className="w-full flex flex-row h-full items-center justify-between gap-2">
                    {Consts.CLIENTS_LOGOS.slice(0, 6).map((cl, i) => 
                        <div className="h-full flex flex-col items-center justify-between">
                            <Image key={i}
                                alt={cl.alt} src={cl.src}
                                width={64} height={64}
                                className="w-[96px] aspect-square "
                            ></Image>
                            <p className="text-gray-50 regular-12">{cl.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>

    )
}

export default HeroSection
