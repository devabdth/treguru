"use client"
import Image from "next/image";
import { MainButton } from "@/components/globals/";

const CustomizationSection = () => {
  return (
    <div className="w-full h-[180vw] lg:h-[40vw] flex flex-col lg:flex-row items-center justify-between lg:px-28">
      {/* Content */}
      <div className="w-[100%] lg:w-[50%] h-full flex flex-col lg:items-start items-center justify-center py-6 gap-4">
        <h3 className="text-white regular-32 lg:regular-48 text-center lg:text-start capitalize">
          We'r <span className="text-gradient bold-32 lg:bold-48">Suiting</span> All Needs,
          <br />
          Serving <span className="text-gradient bold-32 lg:bold-48">any</span> Industy!
        </h3>
        <p className="text-white regular-12 px-12 text-center lg:text-start lg:px-0">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <MainButton
          title="Book Meeting"
          onClick={() => {
            // TODO: Open Drawer
            console.log("Booked");
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
