"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/constant/experience";
import { Title } from "../ui/Title";
import { ExperienceCard } from "../ui/card/ExperienceCard";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
    >
      {/* Samurai parchment background overlay */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/textures/samurai-parchment.png')] bg-cover bg-center pointer-events-none z-0" /> */}

      <div className="container mx-auto relative z-10">
        <Title title="Experience" />

        <div className="mt-12 flex flex-col gap-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard
                role={exp.role}
                year={exp.year}
                description={exp.description}
                company={exp.company}
                technologies={exp.technologies}
                url={exp?.url}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
