"use client";

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

import { SELF_DATA } from "@/constant/self";

import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { quentin } from "@/app/fonts";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-white">
      <div className="mx-auto px-6 sm:px-12 lg:px-24 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Samurai Logo"
              width={40}
              height={40}
              loading="lazy"
              quality={100}
              className="object-cover"
            />
            <h2 className={`${quentin.className} text-4xl font-bold text-white`}>
              {SELF_DATA.name}
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <FooterIcon href={`https://github.com/${SELF_DATA.socials_username.github}`} Icon={FaGithub} />
            <FooterIcon href={`https://linkedin.com/in/${SELF_DATA.socials_username.linkedin}`} Icon={FaLinkedin} />
            <FooterIcon href={`https://leetcode.com/${SELF_DATA.socials_username.leetcode}`} Icon={SiLeetcode} />
            <FooterIcon href={`https://instagram.com/${SELF_DATA.socials_username.instagram}`} Icon={FaInstagram} />
            <FooterIcon href={`https://twitter.com/${SELF_DATA.socials_username.twitter}`} Icon={FaXTwitter} />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <code className="text-gray-400 text-sm">
            Made with ❤️ by{" "}
            <span
              className="cursor-pointer text-white hover:text-gray-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
             A.S.Babji Rao
            </span>
            <sup>©</sup>
          </code>
        </div>
      </div>
    </footer>
  );
};

const FooterIcon = ({ href, Icon }: { href: string; Icon: IconType }) => (
  <Link href={href} passHref rel="noopener noreferrer" target="_blank">
    <Icon className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
  </Link>
);
