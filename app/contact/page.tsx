import HeroSection from "@/components/contact/HeroSection";

import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/prefs/seo"
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'TreGuru - Contact Us',
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION,
};

const ContactPage = () => {
  return (
    <HeroSection />
  );
};

export default ContactPage;
