"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section
      className=" w-full max-w-[100%] max-h-[100vw] h-[200vw]
    lg:max-h-[60vw] lg:h-[35vw] flex lg:flex-row flex-col-reverse items-center justify-between content-between"
    >
      {/* Content */}
      <div
        className="w-full lg:max-w-[70%]
      flex flex-col justify-center items-center relative"
      >
        <div className="w-[100%] h-[60vw] top-[50%] translate-y-[-50%] lg:top-0 absolute left-0 hidden lg:flex">
          <Image
            width={1024}
            height={1024}
            alt="Robot's Hand Light"
            src="/portfolio-hero-light-one.png"
          ></Image>
        </div>
        <div className="w-full absolute min-h-[30vw] px-6 lg:pl-20 lg:min-h-0 left-0 flex flex-col items-start justify-center gap-1">
          <h1 className="text-white bold-32 lg:bold-32 text-start">
            We Have Created
            <br />
            <span className="text-gradient bold-52 lg:bold-64">
              <ReactTyped
                strings={[
                  "25+ Websites",
                  "2K+ Designs",
                  "50+ Strategies",
                  "10+ Business Plans",
                  "100+ Reels",
                  "50+ Videos",
                ]}
                typeSpeed={100}
                loop
                backSpeed={40}
                cursorChar="|"
                showCursor={true}
              />
            </span>
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
      <div className="w-full max-h-[80vw] h-[2048px] lg:h-[35vw] relative -mt-[15vw]">
        <div className="relative top-0 w-full h-full lg:max-w-[100%]  ">
          <Image
            width={100}
            height={100}
            src="/robot-light.png"
            alt="Robot's Hand Light"
            className="absolute bottom-[-50%] w-[200%] h-[180%] object-center object-cover hue-rotate-90"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-0.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-[120%] h-[120%] object-center object-cover hue-rotate-90"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-1.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-full h-full object-center object-cover hue-rotate-90"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-2.png"
            alt="Robot's Hand Light"
            className=" absolute top-0 right-0 w-full h-full object-center object-cover hue-rotate-90"
          ></Image>
          <Image
            width={1024}
            height={1024}
            src="/portfolio-hero-robot.png"
            alt="Robot's Hand Floating Items"
            className="guassain-blur absolute top-[15%] right-[5%] lg:top-[16%] floating-animation lg:right-[15%] w-[100%] lg:w-[70%] h-full -mb-[512px] object-center object-contain"
          ></Image>
          <Image
            width={1024}
            height={1024}
            src="/portfolio-hero-robot.png"
            alt="Robot's Hand Floating Items"
            className="absolute top-[15%] right-[5%] lg:top-[16%] floating-animation lg:right-[15%] w-[100%] lg:w-[70%] h-full -mb-[512px] object-center object-contain"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
