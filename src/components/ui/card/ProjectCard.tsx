"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

import { Techclip } from "../Techclip";
import { Meteors } from "../Meteors";

interface ProjectCardProps {
  title: string;
  desc: string;
  git: string;
  hostedAt: string;
  tech: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  desc,
  git,
  hostedAt,
  tech,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className="relative rounded-xl border border-slate-800 w-full max-w-sm mx-auto shadow-[0_0_15px_rgba(255,0,0,0.15)] overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1e1e1e]"
    >
      <div className="relative p-6 h-full rounded-xl flex flex-col justify-between">
        {/* Title + GitHub Link */}
        <div className="flex flex-row items-center justify-between pb-3">
          <h3 className="text-2xl font-bold text-slate-100 hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <Link
              href={hostedAt}
              rel="noopener noreferrer"
              target="_blank"
              passHref
            >
              {title}
            </Link>
          </h3>
          <Link href={git} rel="noopener noreferrer" target="_blank" passHref>
            <FiGithub className="h-5 w-5 text-slate-300 hover:text-red-500 transition-colors duration-300" />
          </Link>
        </div>

        {/* Description + Tech Stack */}
        <div>
          <p className="text-sm text-slate-400">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((tech, index) => (
              <Techclip key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>

      <Meteors number={12} className="opacity-20 -z-10" />
    </motion.div>
  );
};
