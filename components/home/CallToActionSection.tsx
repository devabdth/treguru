"use client";
import React from "react";
import { MainButton } from "@/components/globals";

const CallToActionSection = () => {
  return (
    <div className="w-full lg:mt-[10vw] max-h-[100vw] mt-[20vw] lg:max-h-[30vw] padding-container lg:px-28">
      <div className="bg-black-gradient rounded-xl w-full h-full flex flex-col items-start justify-center gap-4 px-10 lg:px-28 py-14">
        <h2 className="text-white bold-64">
          Ready to <span className="text-gradient">Grow</span>?
        </h2>
        <p className="text-gray-20 medium-14">
          Let's turn your vision into reality. Schedule a consultation with our experts today and discover how our custom solutions can elevate your brand, ignite engagement, and propel your business forward.
        </p>
        <div className="flex flex-row items-center justify-end w-full">
          <MainButton
            title="Book Meeting"
            cursor="pointer" customClassesStyle="z-[500] cursor-pointer"
            onClick={() => {
                window.open("/contact", "self");
                return;
            }}
            type="button"
            variant="btn-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
