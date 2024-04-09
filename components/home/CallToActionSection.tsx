"use client";
import React from "react";
import { MainButton } from "@/components/globals";

const CallToActionSection = () => {
  return (
    <div className="w-full lg:mt-[10vw] max-h-[100vw] mt-[20vw] lg:max-h-[30vw] padding-container lg:px-28">
      <div className="bg-black-gradient rounded-xl w-full h-full flex flex-col items-start justify-center gap-4 px-10 lg:px-28 py-14">
        <h2 className="text-white regular-40">
          Let’s try <span className="text-gradient bold-40">our service</span>{" "}
          now!
        </h2>
        <p className="text-gray-20 medium-14">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <div className="flex flex-row items-center justify-end w-full">
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
      </div>
    </div>
  );
};

export default CallToActionSection;
