import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestmonialsSection from "@/components/home/TestmonialsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CustomizationSection from "@/components/home/CustomizationSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/prefs/seo"

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'TreGuru - Home',
    keywords: DEFAULT_KEYWORDS,
    icons: [
        {
            rel: "icon",
            type: "image/ico",
            sizes: "64x64",
            url: "./favicon.ico"
        },
    ],

   description: DEFAULT_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CustomizationSection />
      <TestmonialsSection />
      <CallToActionSection />
    </>
  );
}
