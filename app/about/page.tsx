import { HeroSection, ServicesSection, FeaturesSection } from "@/components/about"
import { DEFAULT_KEYWORDS, DEFAULT_DESCRIPTION } from "@/prefs/seo";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'TreGuru - About',
     icons: [
        {
            rel: "icon",
            type: "image/ico",
            sizes: "64x64",
            url: "../favicon.ico"
        },
    ],

   keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION,
};


const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </main>
  )
}

export default AboutPage
