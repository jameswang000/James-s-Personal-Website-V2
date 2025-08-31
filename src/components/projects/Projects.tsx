import { projects, textJSON } from "../../assets";
import { ProjectCard } from "./ProjectCard";

export const PROJECTS_SECTION_ID = "projects-section";

export const Projects = () => {
  return (
    <div
      id={PROJECTS_SECTION_ID}
      className="bg-background-biege flex flex-col justify-center items-center gap-9 py-16 px-40"
    >
      <h2 className="text-heading-dark-burgandy font-semibold text-5xl text-center">
        {textJSON["projects.heading"]}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center 2xl:grid 2xl:grid-cols-3 gap-10">
        {projects.map((projectCardData) => {
          const { id, ...projectCardProps } = projectCardData;
          return <ProjectCard {...projectCardProps} key={id} />;
        })}
      </div>
    </div>
  );
};
