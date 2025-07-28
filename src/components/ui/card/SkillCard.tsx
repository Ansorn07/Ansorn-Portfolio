"use client";

import { motion } from "framer-motion";

export const SkillCard = ({
  title,
  Icon,
  className,
}: {
  title: string;
  Icon: React.FC;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className={`group ${className} flex flex-row items-center justify-center gap-2 grayscale-[80%] group-hover:grayscale-0 transition-all duration-300 w-auto`}
    >
      <div className="h-8 w-8 text-slate-300 group-hover:text-red-500 transition-colors duration-300">
        <Icon />
      </div>
      <motion.small
        className="text-sm font-medium text-slate-300 group-hover:text-red-400 transition-colors duration-300"
      >
        {title}
      </motion.small>
    </motion.div>
  );
};
