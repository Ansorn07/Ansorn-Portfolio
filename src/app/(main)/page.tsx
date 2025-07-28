"use client";

import { motion } from "framer-motion";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <MotionDivHome>
      <div className="top-0 fixed -z-10 h-full w-full">
        {/* ✅ Removed violet gradient and replaced with solid black */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-black"></div>
      </div>

      <div className="mx-auto container cursor-default select-none px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </MotionDivHome>
  );
}

const MotionDivHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="overflow-x-hidden text-slate-300 antialiased"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
