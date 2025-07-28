"use client";

import { motion } from "framer-motion";
import SkillLogos from "@/constant/skillLogos";
import { Title } from "../ui/Title";
import { SkillCard } from "../ui/card/SkillCard";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Parchment-style background overlay
      <div className="absolute inset-0 opacity-10 bg-[url('/textures/samurai-parchment.png')] bg-cover bg-center pointer-events-none z-0" /> */}

      <div className="container mx-auto relative z-10">
        <Title title="Skills" />

        <div className="mt-9 relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...SkillLogos, ...SkillLogos].map((skill, index) => (
              <motion.div
                key={index}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <SkillCard
                  title={skill.title}
                  Icon={skill.logoComponent}
                  className="lg:pr-16 md:pr-8 sm:pr-4 pr-2"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
