"use client";
import React, { FC } from "react";
import MainButton from "../globals/MainButton";
import consts, { HomeFeatureProps } from "@/prefs/consts";
import Image from "next/image";

type FeatureTileProps = {
  feature: HomeFeatureProps;
  highlighted?: boolean;
};

const FeatureTile: FC<FeatureTileProps> = (props) => {
  return (
    <div
      className={`${
        props.highlighted
          ? "scale-102 first-black-gradient"
          : "bg-gray-gradient"
      } w-full h-[32vw] lg:h-[8vw] transition-all overflow-hidden ease-in rounded-3xl`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between gap-4 px-4 py-2">
        <div className="w-[15%] min-w-[15%] lg:w-[15%] flex h-full items-center justify-center ">
          <div
            className={`w-full aspect-square rounded-full ${
              !props.highlighted
                ? "scale-102 first-black-gradient"
                : "bg-gray-gradient"
            } flex items-center justify-center`}
          >
            <Image
              src={props.feature.icon}
              alt={props.feature.title}
              width={512}
              height={512}
              className="w-[70%] aspect-square object-contain object-center "
            ></Image>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-center">
          <h3 className="bold-20 text-gradient">{props.feature.title}</h3>
          <p className="regular-12 text-white text-justify">
            {props.feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section
      className=" max-h-[180vw] lg:max-h-[40vw] lg:min-h-[30vw] lg:mt-[5vw] max-container padding-container
        mt-[100vw] flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-[10vw]"
    >
      {/* Info Section */}
      <div className="w-full lg:max-w-[70%] lg:h-full items-start justify-center gap-4 flex flex-col">
        <h2 className="regular-72 text-white whitespace-nowrap">
          You dream,
          <br />
          <span className="text-gradient font-bold text-[80px]">we create</span>
          .
        </h2>
        <p className="regular-12 text-gray-20">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
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
      {/* Features Section */}
      <div className="w-full lg:max-w-[40%] flex flex-col items-center justify-between h-[80vw] lg:h-full gap-2">
        {consts.HOME_PAGE_FEATURES.map((feature, i) => (
          <FeatureTile
            feature={feature}
            highlighted={i === 1}
            key={feature.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
