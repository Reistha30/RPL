import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  const [filter, setFilter] = useState(true);

  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
        </h4>{" "}
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {devProjects.map((project: ProjectProps) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
