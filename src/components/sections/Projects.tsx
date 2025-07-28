import { PROJECT_DATA } from "@/constant/projects";

import { Title } from "../ui/Title";
import { ProjectCard } from "../ui/card/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="project"
      className="py-16 px-6 lg:px-12 bg-black text-white"
    >
      <Title title="Projects" />

      <div className="grid gap-10 lg:grid-cols-3 mt-10">
        {PROJECT_DATA.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.name}
            desc={proj.description}
            git={proj.github_link}
            hostedAt={proj.demo}
            tech={proj.tech}
          />
        ))}
      </div>
    </section>
  );
};
