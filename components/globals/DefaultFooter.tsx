"use client";
import React from "react";
import consts, { SocialLinksProps } from "@/prefs/consts";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const DefaultFooter = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#010101] mt-[10vw] md:mt-[15vw] w-full lg:h-[40vh] md:h-[70vh] h-[80vh] z-50 flex flex-col lg:px-28 px-4 lg:py-4 py-2 items-center justify-center gap-2 lg:pt-20">
        <div className="w-full h-full items-center justify-center flex flex-col-reverse lg:flex-row gap-8">
            <div className="lg:w-[40%] w-full lg:h-full h-[70%] flex flex-col items-start justify-start gap-4">
                <Link href="/">
                    <Image className="object-contain object-center lg:h-[64px] lg:w-[256px] md:h-full" width={1024} height={512} src="/logo.svg" alt="The TreGurus Inc."></Image>
                </Link>
                <p className="lg:regular-14 md:regular-16 lg:text-justify text-center text-white">TreGuru Marketing Agency: We blend cutting-edge trend analysis with
            marketing savvy to guide your brand. By decoding trends and crafting
            data-driven strategies, we propel you ahead of the curve.{" "}
</p>
            </div>
            <div className="lg:w-[60%] w-full lg:h-full h-[30%] flex flex-col items-center justify-between py-4">
                <div className="w-full items-center justify-between flex flex-row lg:gap-4">
                    {consts.NAV_TABS.map((tab, i) => <Link href={tab.href} key={i} className={tab.href === pathname ? "text-gradient bold-16" : "text-white/50 lg:hover:text-white lg:transition-all lg:duration-500 regular-16"}>{tab.label}</Link> )}
                </div>
                <div className="w-full items-center flex justify-between lg:gap-4 flex-wrap gap-4 self-center">
                    <button onClick={() => {window.open("tel:+201129164522", "_self"); }}>
                        <div className="flex flex-row items-center justify-start gap-2 cursor-pointer">
                            <FontAwesomeIcon width={16} height={16} icon={faPhone} color="#9dedf0" />
                            <p className="text-white/50 whitespace-nowrap"> +20 112 916 4522</p>
                        </div>
                    </button>
                    <button onClick={() => {window.open("mailto:info@tregurus.com", "_self"); }}>
                        <div className="flex flex-row items-center justify-start gap-2 cursor-pointer">
                            <FontAwesomeIcon width={16} height={16} icon={faEnvelope} color="#9dedf0" />
                            <p className="text-white/50 whitespace-nowrap">info@treguruseg.com</p>
                        </div>
                    </button>
                    <div className="flex flex-row items-center gap-8">
                        {consts.SOCIAL_LINKS.map((sl, i) =>
                            <Link className="cursor-pointer" href={sl.href} key={i}>
                                <Image className="object-contain object-center" width={16} height={16} src={sl.icon} alt={sl.alt}></Image>
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </div>
        <p className="w-full text-center text-white/20">All Copyrights reserved © The TreGurus Inc.</p>
    </footer>
  );
};

export default DefaultFooter;
