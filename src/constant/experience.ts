// /src/constant/experience.ts

export type ExperienceType = {
  role: string;
  year: string;
  description: string;
  company: string;
  technologies: string[];
  url?: string; // ✅ optional
};
export const EXPERIENCE_DATA = [
  {
    role: "Web Developer",
    year: "2023 - Present",
    description: "Built public-impact web apps and prototypes for award-winning Enactus projects.",
    company: "Enactus KIIT",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    url: "https://enactuskiit.in/", // ✅ Add this
  },
  {
    role: "Cadet",
    year: "2023 - Present",
    description: "Led and coordinated over 250 cadets, applying strategic planning, systems thinking, and operational leadership—akin to managing a large-scale tech team or agile development squad.",
    company: "KIIT NCC",
    technologies: ["Leadership", "Discipline", "Teamwork"],
    url: "https://indiancc.mygov.in/",
  },
];
