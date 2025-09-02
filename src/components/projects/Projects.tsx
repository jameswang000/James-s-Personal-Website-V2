import { projects, textJSON } from "../../assets";
import { ProjectCard } from "./ProjectCard";

export const PROJECTS_SECTION_ID = "projects-section";

export const Projects = () => {
  return (
    <div
      id={PROJECTS_SECTION_ID}
      className="bg-background-biege flex flex-col justify-center items-center gap-6 sm:gap-9 py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-20 lg:px-40"
    >
      <h2 className="text-heading-dark-burgandy font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        {textJSON["projects.heading"]}
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full max-w-7xl">
        {projects.map((projectCardData) => {
          const { id, ...projectCardProps } = projectCardData;
          return <ProjectCard {...projectCardProps} key={id} />;
        })}
      </div>
    </div>
  );
};
