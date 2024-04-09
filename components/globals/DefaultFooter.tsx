"use client";
import React from "react";
import consts, { SocialLinksProps } from "@/prefs/consts";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
  const pathname = usePathname();

  return (
    <footer className="body-background mt-[10vw]">
      <div className="footer-column" id="column-one">
        <Image
          src="/logo.svg"
          alt="TreGuru Logo"
          width={128}
          height={64}
        ></Image>
        <div id="footer-msg">
          <h4>
            TreGuru Marketing Agency: We blend cutting-edge trend analysis with
            marketing savvy to guide your brand. By decoding trends and crafting
            data-driven strategies, we propel you ahead of the curve.{" "}
          </h4>
        </div>
      </div>
      <div className="footer-column" id="column-two">
        <div id="tabs">
          {consts.NAV_TABS.map((tab, i) => (
            <Link
              key={i}
              href={tab.href}
              className={`footer-tabs-item ${
                pathname === tab.href && "active"
              }`}
            >
              <p>{pathname != tab.href}</p>
              {tab.label}
            </Link>
          ))}
        </div>
        <div id="contact">
          <div id="links">
            <Link href="/privacyPolicy/">Privacy Policy</Link>
            <Link href="/termsAndConditions/">Terms & Conditions</Link>
          </div>
          <div id="contact-info">
            <div id="contact-info-snippet">
              <i className="fa-solid fa-phone"></i>
              <p>+20 112 916 4522</p>
            </div>
            <div id="contact-info-snippet">
              <i className="fa-solid fa-envelope"></i>
              <p>info@trenguru.com</p>
            </div>
          </div>
          <div id="social-media">
            {consts.SOCIAL_LINKS.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="footer-social-media-icon"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={16}
                  height={16}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
        <div id="copyright">
          <p>All Copyrights reserved @ TrenGuru 2024!</p>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
