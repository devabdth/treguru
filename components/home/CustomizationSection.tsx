"use client"
import Image from "next/image";
import { MainButton } from "@/components/globals/";

const CustomizationSection = () => {
  return (
    <div className="w-full h-[180vw] lg:h-[40vw] flex flex-col lg:flex-row items-center justify-between lg:px-28 z-50">
      {/* Content */}
      <div className="w-[100%] lg:w-[50%] h-full flex flex-col lg:items-start items-center justify-center py-6 gap-4">
        <h3 className="text-white bold-32 lg:bold-48 text-center lg:text-start capitalize">
          Your Vision.<br /> <span className="text-gradient">Our Expertise</span>.
        </h3>
        <p className="text-white regular-12 px-12 text-center lg:text-start lg:px-0">
         Every business is unique, and so are your challenges.  We offer a comprehensive suite of services, from captivating media production and data-driven social media marketing to strategic business development and expert consulting.  Whether you need a user-friendly website, a feature-rich mobile app, or a custom software solution, our team of passionate professionals is here to transform your vision into reality and fuel your long-term success.
         </p>
        <MainButton
          title="Book Meeting"
          cursor="pointer"
          customClassesStyle="cursor-pointer z-[200]"
          onClick={() => {
              window.open("/contact", "_self");
              return;
          }}
          type="button"
          variant="btn-accent"
        />
      </div>
      {/* Illustration */}
      <div className="w-[100%] h-[100vw] lg:w-[40%] flex flex-col items-center justify-center px-12 py-6 relative">
        <Image
          src="/customization-illustration.png"
          width={1024}
          height={1024}
          alt="TreGuru Customization Ability Illustration"
          className="object-contain object-center w-[90%] h-[90%] top-[5%] left-[5%] absolute"
        ></Image>
        <Image
          src="/customization-illustration.png"
          width={1024}
          height={1024}
          alt="TreGuru Customization Ability Illustration"
          className="object-contain object-center w-[90%] h-[90%] top-[5%] left-[5%] absolute guassain-blur opacity-50"
        ></Image>
      </div>
    </div>
  );
};

export default CustomizationSection;
