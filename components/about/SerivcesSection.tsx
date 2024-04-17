"use client"
import React from "react";
import Image from "next/image";
import Consts, {ServiceProps} from "@/prefs/consts";
import { MainButton } from "../globals";

const ServiceCard= (props: {service: ServiceProps}) => {
    const gradientRotates= ["rounded-sm", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-4xl"]
    return (
        <div className="lg:min-h-[20vw] md:min-h-[30vw] min-h-[60vw] rounded-xl overflow-hidden bg-gray-700/25 backdrop-blur-2xl">
            <div className="w-full h-full rounded-xl px-4 py-8 flex flex-col items-start justify-between">
                <h3 className="text-white bold-20">{props.service.title}</h3>
                <p className="lg:regular-12 regular-16 text-gray-10/75 text-justify 2xl:-mt-[5vw]">{props.service.description}</p>
                <div className="w-full items-center justify-between flex-row flex">
                    <div className={`w-[48px] h-[48px] rounded-xl flex flex-col items-center justify-center ${props.service.variant}`}>
                        <Image
                            src={props.service.icon} alt={props.service.title}
                            width={32} height={32}
                        ></Image>
                    </div>
                    <MainButton variant="shadow" type="button" title="Show Projects" onClick={()=> {window.open(`/portfolio?section=${props.service.title}`, "_self"); return;}}
                    ></MainButton>
                </div>
            </div>
        </div>
    )
}

const ServicesSection = () => {
    return (
        <section className="w-full min-h-[30vw] flex flex-col items-center justify-start gap-4 z-50 lg:px-28 lg:py-14 md:px-8 md:py-4 px-2 py-1 mt-[15vw] md:mt-[10vw] lg:mt-[8vw] xl:mt-[4vw]">
            <h2 className="text-white lg:bold-48 bold-32 text-center z-50">Promote Smarter, <span className="text-gradient">Like a Pro</span><br/> with Treguru</h2>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 xl:px-28 px-4">
            {Consts.SERVICES.map((service, i) => <ServiceCard key={i} service={service} />)}
            </div>
        </section>
    );
}

export default ServicesSection;
