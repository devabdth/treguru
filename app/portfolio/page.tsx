import PortfolioBody from "./PortfolioBody";

import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/prefs/seo"
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'TreGuru - Portfolio',
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION,
};

const Portfolio= () => {
    return (<PortfolioBody/>)
}

export default Portfolio
