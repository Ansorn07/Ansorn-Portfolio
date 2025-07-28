"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";

import { ContactForm } from "../ui/card/ContactForm";
import { SELF_DATA } from "@/constant/self";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
    >
      {/* Samurai texture overlay */}
      {/* <div className="absolute inset-0 bg-[url('/textures/samurai-parchment.png')] opacity-10 bg-cover bg-center z-0 pointer-events-none" /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 items-center gap-16 bg-black/50 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-lg shadow-red-900/40 border border-zinc-800">
          {/* Left Side */}
          <div>
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-nasalization font-bold text-white"
            >
              Get in Touch
            </motion.h1>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-slate-300 mt-3"
            >
              Open to any adventure that involves learning and making cool
              stuff!
            </motion.p>

            {/* Contact List */}
            <ul className="mt-10 space-y-6">
              <ContactList
                Icon={IoMailOutline}
                link={`mailto:${SELF_DATA.email}`}
                text={SELF_DATA.email}
                initial={-25}
              />

              <ContactList
                Icon={FaInstagram}
                link={`https://instagram.com/${SELF_DATA.socials_username.instagram}`}
                text={`@${SELF_DATA.socials_username.instagram}`}
                initial={25}
              />

              <ContactList
                Icon={IoLocationOutline}
                link={`https://www.google.com/maps/place/${SELF_DATA.current_location.city}+${SELF_DATA.current_location.state}+${SELF_DATA.current_location.country}`}
                text={`${SELF_DATA.current_location.city}, ${SELF_DATA.current_location.state}, ${SELF_DATA.current_location.country}`}
                initial={-25}
              />
            </ul>

            {/* Social Icons */}
            <ul className="flex mt-10 space-x-4">
              <ContactSocial
                Icon={FaGithub}
                link={`https://github.com/${SELF_DATA.socials_username.github}`}
                initial={-10}
              />
              <ContactSocial
                Icon={FaLinkedinIn}
                link={`https://www.linkedin.com/in/${SELF_DATA.socials_username.linkedin}`}
                initial={10}
              />
              <ContactSocial
                Icon={PiTelegramLogo}
                link={`https://t.me/${SELF_DATA.socials_username.telegram}`}
                initial={-10}
              />
              <ContactSocial
                Icon={FaTwitter}
                link={`https://twitter.com/${SELF_DATA.socials_username.twitter}`}
                initial={10}
              />
              <ContactSocial
                Icon={SiLeetcode}
                link={`https://leetcode.com/${SELF_DATA.socials_username.leetcode}`}
                initial={-10}
              />
            </ul>
          </div>

          {/* Right Side - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

// Contact item
const ContactList = ({
  Icon,
  link,
  text,
  initial,
}: {
  Icon: IconType;
  link: string;
  text: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-slate-300 hover:text-red-400 transition-all"
      >
        <Icon className="w-6 h-6" />
        <span className="ml-3 text-md">{text}</span>
      </Link>
    </motion.li>
  );
};

// Social button
const ContactSocial = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      whileHover={{ scale: 1.15 }}
      className="bg-zinc-800 text-slate-300 hover:bg-red-600 hover:text-white h-10 w-10 rounded-full flex items-center justify-center transition-colors"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="w-5 h-5" />
      </Link>
    </motion.li>
  );
};
