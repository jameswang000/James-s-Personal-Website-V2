import { projects, textJSON } from "../../assets";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="bg-background-biege flex flex-col justify-center items-center gap-9 py-16 px-40">
      <h2 className="text-heading-dark-burgandy font-semibold text-5xl text-center">
        {textJSON["projects.heading"]}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center 2xl:grid 2xl:grid-cols-3 gap-10">
        {projects.map((projectCardProps) => {
          return <ProjectCard {...projectCardProps} />;
        })}
      </div>
    </div>
  );
};
