"use client";
import React, { FC } from "react";
import MainButton from "../globals/MainButton";
import consts, { ServiceProps } from "@/prefs/consts";
import Image from "next/image";

type ServiceCardProps = { service: ServiceProps };
const ServiceCard: FC<ServiceCardProps> = (props) => {
  return (
    <div
      className="w-full lg:max-w-[30%] backdrop-blur-xl third-black-gradient
    h-max-[40vw] h-[25vw] lg:h-[6vw] lg:h-max-[30vw] rounded-3xl
     overflow-hidden px-8 py-4 lg:px-8 lg:py-4
     flex flex-row items-center justify-start gap-4"
    >
      <div className="lg:max-w-[6vw] max-w-[20vw] aspect-square h-full flex flex-col items-center justify-center">
        <div
          className={`rounded-full bg-primary w-full h-full backdrop-blur-sm flex flex-col items-center justify-center`}
        >
          <Image
            src={props.service.icon}
            alt={props.service.description}
            width={64}
            height={64}
            className="w-[60%] h-[60%]"
          ></Image>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center">
        <h2 className="text-gradient bold-16">{props.service.title}</h2>
        <p className="text-white regular-10">{props.service.description}</p>
      </div>
    </div>
  );
};

const TestmonialsSection = () => {
  return (
    <section className="relative min-h-[20vw] -mt-[80vw] lg:-mt-[30vw] lg:min-h-[30vw]">
      <div className="w-full h-full relative min-h-[100vw] lg:min-h-[30vw]">
        {/* Lights */}
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -top-[40%] right-0 opacity-75 hue-rotate-90"
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -bottom-[120%] right-0 opacity-75 hue-rotate-90"
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -bottom-[180%] right-0 opacity-75 hue-rotate-90"
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -bottom-[260%] right-0 opacity-75 hue-rotate-90"
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -bottom-[320%] right-0 opacity-75 hue-rotate-90"
        ></Image>
        <Image
          src="/testmonials-light-1.png"
          alt="Neon Light"
          width={512}
          height={512}
          className="absolute -bottom-[300%] -left-[70%] w-[150%] h-[450%] opacity-75 hue-rotate-90"
        ></Image>
      </div>
      {/* Content */}
      <div className="w-full h-full flex flex-col min-h-[100vw] lg:min-h-[30vw] gap-8">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 pl-2 lg:px-28 lg:py-10">
          <h3 className="capitalize text-white bold-48">
            What people are <br />
            <span className="text-gradient">saying</span> about us!
          </h3>
          <p className="lg:max-w-[40%] max-w-[85%] text-gray-20 lg:regular-16 regular-16">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full h-full gap-4 px-4 lg:px-28 items-center justify-between">
          {consts.SERVICES.map((service, i) => (
            <ServiceCard service={service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestmonialsSection;
