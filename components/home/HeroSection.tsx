"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section
      className=" w-full max-w-[100%] max-h-[100vw]
    lg:max-h-[50vw] lg:h-[35vw] flex lg:flex-row flex-col-reverse items-center justify-between content-between"
    >
      {/* Content */}
      <div
        className="w-full lg:max-w-[70%] lg:mt-0 mt-[40vw]   
      flex flex-col justify-center items-center relative"
      >
        <div className="w-[100%] h-[60vw] top-[50%] translate-y-[-50%] lg:top-0 absolute left-0">
          <Image
            width={500}
            height={500}
            alt="Robot's Hand Light"
            src="/home-hero-text-light.png"
          ></Image>
        </div>
        <div className="w-full h-full absolute top-[50%]  min-h-[70vw] px-6 lg:pl-28 lg:min-h-0 left-0 flex flex-col items-start justify-center gap-1">
          <div className="flex flex-row bg-gray-gradient rounded-lg items-center justify-center">
            <Image
              className="w-8"
              src="/discount.svg"
              alt="Discount Icon"
              width={100}
              height={100}
            ></Image>
            <p className="px-2 py-1 uppercase text-white whitespace-nowrap regular-12">
              20% DISCOUNT FOR FIRST CONTRACT MARKING-DOWN
            </p>
          </div>
          <h1 className="text-white bold-52 lg:bold-64 text-justify">
            The Next
            <br />
            <span className="text-gradient bold-52 lg:bold-64">Generation</span>
            <br />
            <ReactTyped
              strings={[
                "Websites",
                "Applications",
                "Designs",
                "Marketing Strategies",
                "Business Plans",
              ]}
              typeSpeed={100}
              loop
              backSpeed={40}
              cursorChar="|"
              showCursor={true}
            />
            <span className="text-gradient bold-52 lg:bold-64">!</span>
          </h1>
          <p className="text-gray-20 regular-12 text-justify">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      {/* Floadting Hand */}
      <div className="w-full max-h-[80vw] h-[512px] lg:h-[35vw] relative -mt-[12vw]">
        <div className="relative top-0 w-full h-full lg:max-w-[100%]  ">
          <Image
            width={100}
            height={100}
            src="/robot-light.png"
            alt="Robot's Hand Light"
            className="border-2absolute bottom-[-25%] w-[180%] h-[130%] object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-0.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-[120%] h-[120%] object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-1.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-full h-full object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-2.png"
            alt="Robot's Hand Light"
            className=" absolute top-0 right-0 w-full h-full object-center object-cover"
          ></Image>
          <Image
            width={512}
            height={512}
            src="/robot.png"
            alt="Robot's Hand"
            className="absolute bottom-0 w-full h-full -mb-[28%] -cover"
          ></Image>
          <Image
            width={512}
            height={512}
            src="/floating-items.png"
            alt="Robot's Hand Floating Items"
            className="guassain-blur absolute floating-animation top-[6%] lg:top-[8%]  right-[25%] w-[50%] h-full -mb-[256px] object-center object-contain"
          ></Image>
          <Image
            width={512}
            height={512}
            src="/floating-items.png"
            alt="Robot's Hand Floating Items"
            className="absolute floating-animation top-[6%] lg:top-[8%]  right-[25%] w-[50%] h-full -mb-[256px] object-center object-contain"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
