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
    description: "Worked on building responsive web apps.",
    company: "Enactus KIIT",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    url: "https://enactus-kiit.in", // ✅ Add this
  },
  {
    role: "NCC Cadet Leader",
    year: "2023 - Present",
    description: "Led 250+ cadets in training and service.",
    company: "NCC KIIT",
    technologies: ["Leadership", "Discipline", "Teamwork"],
    // url is optional — omit or leave undefined
  },
];
