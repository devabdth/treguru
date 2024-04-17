import { HeroSection, ServicesSection, FeaturesSection } from "@/components/about"
import { DEFAULT_KEYWORDS, DEFAULT_DESCRIPTION } from "@/prefs/seo";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'TreGuru - About',
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
