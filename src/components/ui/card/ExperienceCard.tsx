"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Techclip } from "../Techclip";

interface ExperienceCardProps {
  role: string;
  year: string;
  description: string;
  company: string;
  technologies: string[];
  url?: string;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  technologies,
  url,
}) => {
  return (
    <div className="mb-12 flex flex-wrap lg:justify-center">
      {/* Year Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/4"
      >
        <p className="mb-2 text-sm font-semibold tracking-widest text-red-500">
          {year}
        </p>
      </motion.div>

      {/* Role, Company, Description, Technologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl lg:w-3/4 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] p-6 rounded-xl shadow-[0_0_15px_rgba(255,0,0,0.05)]"
      >
        <h6 className="mb-2 text-lg font-bold text-slate-100">
          {role}{" "}
          {url ? (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-500 hover:underline ml-2"
            >
              @{company}
            </Link>
          ) : (
            <span className="text-sm text-slate-400 ml-2">@{company}</span>
          )}
        </h6>
        <p className="mb-4 text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tec, index) => (
            <Techclip key={index} name={tec} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
