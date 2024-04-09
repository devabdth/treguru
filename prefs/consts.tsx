import * as dotenv from "dotenv";
dotenv.config();

type NavTab = { label: string; href: string };

const NAV_TABS: Array<NavTab> = [
  {
    label: "Home",
    href: "/",
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
      "Tell your story with captivating visuals. We create high-quality video, audio, and graphic content to engage your audience and achieve your marketing objectives.",
    icon: "/media-production-service-icon.svg",
    variant: "bg-primary",
  },
  {
    title: "Social Media Marketing",
    description:
      "Elevate your brand awareness and engagement. We craft data-driven social media strategies to connect you with your target audience and achieve your marketing goals.",
    icon: "/smma-service-icon.svg",
    variant: "bg-primary",
  },
  {
    title: "Business Development",
    description:
      "Grow your business strategically. Our experts develop and execute comprehensive plans to identify new markets, partnerships, and revenue streams.",
    variant: "bg-primary",
    icon: "/business-development-service-icon.svg",
  },
  {
    title: "Business Consulting",
    description:
      "Optimize your operations and achieve success. We provide insightful consulting services to help you make informed decisions and reach your full potential.",
    variant: "bg-primary",
    icon: "/business-consulting-service-icon.svg",
  },
  {
    title: "Web Development",
    description:
      "Create a user-friendly and impactful website. We design and develop custom websites that showcase your brand and drive results.",
    variant: "bg-primary",
    icon: "/web-development-service-icon.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Reach your audience on-the-go. We build innovative mobile applications that enhance user experience and engagement.",
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
  projects: Array<PortfolioProjectProps>;
  sectionId: string;
  neonsHue: string;
};

type PortfolioProjectProps = {
  title: string;
  bio: string;
  projectId: string;
  backgroundImage: string;
  projectDisplayImages: Array<string>;
};

const PORTFOLIO_DATA: Array<PortfolioIndustryProps> = [
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "hue-rotate-90",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "hue-rotate-180",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "-hue-rotate-90",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "-hue-rotate-180",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "hue-rotate-180",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
  {
    title: "Crafted for ",
    highlightedTitle: "Growth!",
    bio: "Explore websites that work. Our portfolio showcases impactful designs built to elevate brands and drive results. We craft user-friendly experiences that convert.",
    neonsHue: "hue-rotate-45",
    projects: [
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
      {
        title: "Sky Elevators",
        bio: "This is the website of Sky Elevators EG: A decent and gamechanger elevators company in egypt",
        projectId: "tg-24@001",
        backgroundImage: `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=covers&id=0.png`,
        projectDisplayImages: [
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=0.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=1.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=2.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=3.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=4.png`,
          `http://${process.env.NEXT_PUBLIC_HOST}/api/assets/?type=projects&subtype=materials&id=5.png`,
        ],
      },
    ],
    sectionId: "websites",
  },
];

export type {
  HomeFeatureProps,
  TestmonialProps,
  ServiceProps,
  SocialLinksProps,
  PortfolioIndustryProps,
  PortfolioProjectProps,
};
export default {
  NAV_TABS,
  HOME_PAGE_FEATURES,
  TESTMONIALS,
  SERVICES,
  SOCIAL_LINKS,
  PORTFOLIO_DATA,
};
