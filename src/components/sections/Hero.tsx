"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { useScreenSize } from "@/hooks/useScreenSize";
import { SELF_DATA } from "@/constant/self";

import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { quentin } from "@/app/fonts";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  const screenSize = useScreenSize();
  const router = useRouter();

  return (
    <header
      className="container mx-auto px-8 min-h-[calc(100vh-90px)] pt-[90px] flex justify-center lg:justify-start items-center 
        bg-black text-white"
    >
      <div className="flex flex-col gap-6 mt-0 lg:gap-10 text-center lg:text-left">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className={`${quentin.className} lg:text-9xl text-7xl font-normal text-white`}
        >
          {screenSize.width > 1024 ? SELF_DATA.name : SELF_DATA.first_name}
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-gray-400 text-2xl lg:text-4xl tracking-wide"
        >
          {SELF_DATA.role[0]}
        </motion.span>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 font-light text-sm lg:text-xl tracking-wider leading-relaxed text-gray-300"
        >
          <TextGenerateEffect words={SELF_DATA.bio} />
        </motion.p>

        <motion.div
          className="flex justify-center lg:justify-start"
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => router.push("/resume")}
            className="w-32 px-4 py-2 border-2 border-gray-600 rounded-md text-gray-300
              hover:bg-white hover:text-black hover:font-semibold transition-colors duration-200"
          >
            Resume
          </button>
        </motion.div>
      </div>
    </header>
  );
};
