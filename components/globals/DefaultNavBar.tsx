"use client";
import Link from "next/link";
import Image from "next/image";
import Consts from "@/prefs/consts";
import { usePathname } from "next/navigation";

type NavBarProps= {
    openDrawerCallback: Function;
}

const DefaultNavBar = (props: NavBarProps) => {
  const pathname = usePathname();
  return (
    <nav
      className="nav-index w-full max-container padding-container flex flex-row h-[12vw] 
    lg:justify-between gap-4 lg:gap-0 justify-start items-center md:max-h-[8vw] lg:max-h-[5vw]"
    >
      <button
        className="lg:hidden"
        onClick={() => {
            props.openDrawerCallback()
        }}
      >
        <Image
          src="/menu.svg"
          alt="Drawer Icon"
          width={32}
          height={32}
          className="cursor-pointer"
        ></Image>
      </button>

      <Link href="/">
        <Image
          src="/logo.svg"
          alt="TreGuru Logo"
          width={128}
          height={48}
        ></Image>
      </Link>
      <div className="flex-row gap-3 justify-center items-center hidden lg:flex">
        {Consts.NAV_TABS.map((tab, i) => (
          <Link
            key={i}
            href={tab.href}
            className={`text-gray-30 transition-all hover:bold-12 ${
              pathname === tab.href
                ? "text-gradient bold-12"
                : "text-gray-30 regular-12"
            }`}
          >
            <p>{pathname != tab.href}</p>
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DefaultNavBar;
