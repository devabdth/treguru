"use client"
import Image from "next/image"
import Link from "next/link"
import Consts from "@/prefs/consts";
import { usePathname } from "next/navigation";


type DrawerProps= {
    closeCallback: Function;
    active: true | false;
}
const Drawer= (props:DrawerProps) => {
  const pathname = usePathname();
    return <div className={`h-full fixed drawer-z top-0 bg-black-gradient w-[60vw] lg:hidden
    flex flex-col items-start justify-between px-2 py-4 gap-8
    transition-all ${props.active? "left-0": "-left-[60vw]"}`}>
    <div className="w-full flex items-center justify-between flex-row">
        <Link href="/">
            <Image
                src="/logo.svg"
                alt="TreGuru Logo"
                width={128}
                height={48}
            ></Image>
        </Link>
        <button
            className="text-white regular-16"
            onClick={() => { props.closeCallback(); }}
        >x</button>
        </div>
        <div className="w-full gap-4 flex flex-col items-start justify-start px-6">
        {Consts.NAV_TABS.map((tab, i) => (
          <div key={i} onClick={() => { props.closeCallback(); }}><Link
            href={tab.href}
            className={`text-gray-30 transition-all hover:bold-16 ${
              pathname === tab.href
                ? "text-gradient bold-16"
                : "text-gray-30 regular-16"
            }`}
          >
            <p>{pathname != tab.href}</p>
            {tab.label}
          </Link></div>
        ))}

        </div>
        <div className="w-full h-full flex flex-2 flex-col items-center justify-end">
          <div className="w-full items-center justify-center gap-6 flex flex-row">
            {Consts.SOCIAL_LINKS.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="footer-social-media-icon"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={24}
                  height={24}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center"> 
          <p className="text-white/50 regular-12 text-center">All Copyrights reserved @ TrenGuru 2024!</p>
        </div>

    </div>
}

export default Drawer
