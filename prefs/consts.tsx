import * as dotenv from "dotenv";
dotenv.config();

type NavTab = { label: string; href: string };



const NAV_TABS: Array<NavTab> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

type HomeFeatureProps = {
  title: string;
  description: string;
  icon: string;
  id: string;
};
const HOME_PAGE_FEATURES: Array<HomeFeatureProps> = [
  {
    title: "Elite Care",
    description:
      "Experience exceptional service that elevates your project. Our dedicated team prioritizes your success in a personalized approach.",
    icon: "/deliver-feature.svg",
    id: "1",
  },
  {
    title: "Smart Pricing",
    description:
      "LoreGet top-tier results at reasonable costs. We offer competitive pricing without compromising on quality or expertise.",
    icon: "/quality-feature.svg",
    id: "2",
  },
  {
    title: "Secure Solutions",
    description:
      "Trust TreGuru with complete project security. We implement robust measures to safeguard your data and intellectual property.",
    icon: "/security-feature.svg",
    id: "3 ",
  },
];

type TestmonialProps = {
  message: string;
  person: string;
  position: string;
  image: string;
};

const TESTMONIALS: Array<TestmonialProps> = [
  {
    message:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    person: "Ahmed Mahmoud",
    position: "Founder & CEO",
    image: "/person-one.png",
  },
  {
    message:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    person: "Mahmoud Qandil",
    position: "Founder & CEO",
    image: "/person-two.png",
  },
  {
    message:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    person: "Hisham Mahmoud",
    position: "Founder & CEO",
    image: "/person-three.png",
  },
];

type ServiceProps = {
  title: string;
  description: string;
  variant: string;
  icon: string;
};

const SERVICES: Array<ServiceProps> = [
  {
    title: "Media Production",
    description:
      "Craft captivating video content that tells your brand story & ignites engagement. From concept to creation, we elevate your visual voice across all platforms.",
    icon: "/media-production-service-icon.svg",
    variant: "bg-primary",
  },
  {
    title: "Social Media Marketing",
    description:
      "Spark conversations & build a loyal online community. Our data-driven social media strategies amplify your brand message & drive real results.",
    icon: "/smma-service-icon.svg",
    variant: "bg-primary",
  },
  {
    title: "Business Development",
    description:
      "Unleash your growth potential. We develop custom strategies to expand your reach, secure partnerships, & fuel long-term success.",
    variant: "bg-primary",
    icon: "/business-development-service-icon.svg",
  },
  {
    title: "Business Consulting",
    description:
      "Navigate the business landscape with confidence. Our expert consultants offer strategic guidance to optimize operations & achieve your goals.",
    variant: "bg-primary",
    icon: "/business-consulting-service-icon.svg",
  },
  {
    title: "Web Development",
    description:
      "Build a website that wows. We create user-friendly, high-performing websites that convert visitors into customers & strengthen your online presence.",
    variant: "bg-primary",
    icon: "/web-development-service-icon.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Reach users on the go.  We develop feature-rich mobile apps that enhance your brand experience & drive engagement on smartphones and tablets.",
    variant: "bg-primary",
    icon: "/mobile-development-service-icon.svg",
  },
];

type SocialLinksProps = {
  href: string;
  alt: string;
  icon: string;
};

const SOCIAL_LINKS: Array<SocialLinksProps> = [
  {
    href: "https://facebook.com/tregurueg",
    icon: "/Facebook.svg",
    alt: "TreGuru Inc. Facebook Link",
  },
  {
    href: "https://instagram.com/tregurueg",
    icon: "/Instagram.svg",
    alt: "TreGuru Inc. Instagram Link",
  },
  {
    href: "https://linkedin.com/tregurueg",
    icon: "/Linkedin.svg",
    alt: "TreGuru Inc. LinkedIn Link",
  },
];

type PortfolioIndustryProps = {
  title: string;
  highlightedTitle: string;
  bio: string;
  projects: Array<string>;
  sectionId: string;
  neonsHue: string;
};
const PORTFOLIO_DATA: Array<PortfolioIndustryProps> = [
    {
        sectionId: "secOne",
        title: "Crafted for ",
        highlightedTitle: "Growth!",
        bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
        neonsHue: "hue-rotate-90",
        projects: [
            "tg-240001",
            "tg-240002",
            "tg-240003"

        ],
    },
];

type ReelProps = {
    id: string,
    title: string,
    bio: string,
    project: string,
    thumbnail: string,
    video: string
}
const REELS_DATA: Array<ReelProps> = [
    {
        id: "0",
        title: "The First Reel",
        bio: "This is the bio for the first reel to be published on TreGuru Website",
        project: "Forexology",
        thumbnail: `${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=reels&subtype=thumbnails&id=0.png`,
        video: `${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=reels&subtype=videos&id=0.mp4`
    },
 {
        id: "1",
        title: "The First Reel",
        bio: "This is the bio for the first reel to be published on TreGuru Website",
        project: "Forexology",
        thumbnail: `${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=reels&subtype=thumbnails&id=1.png`,
        video: `${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=reels&subtype=videos&id=1.mp4`
    },
]

type ClientLogoProps= {
    alt: string; src: string;
    name: string;
}

const CLIENTS_LOGOS: ClientLogoProps[]= [
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
    {
        alt: "Sky Elevators Logo",
        src: "/brainwave-symbol-white.svg",
        name: "Sky Elevators",
    },
];

export type {
  HomeFeatureProps,
  TestmonialProps,
  ServiceProps,
  SocialLinksProps,
  PortfolioIndustryProps,
  ReelProps,
  ClientLogoProps,
};

export default {
    CLIENTS_LOGOS,
  NAV_TABS,
  HOME_PAGE_FEATURES,
  TESTMONIALS,
  SERVICES,
  SOCIAL_LINKS,
  PORTFOLIO_DATA,
  REELS_DATA
};


