import { textJSON } from "../../assets";
import { Badge } from "./Badge";

export interface ProjectCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  heading: string;
  description: string;
  badges: string[];
  url: string;
}

export const ProjectCard = ({
  Icon,
  heading,
  description,
  badges,
  url,
}: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-4 rounded-2xl shadow-xl
               bg-highlighting-gold/20 border border-text-dark-brown/30 gap-4"
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center justify-start gap-3">
          <Icon className="w-10 h-10" />
          <h3 className="font-semibold text-text-dark-brown text-2xl ">
            {heading}
          </h3>
          {badges.map((label) => {
            return <Badge label={label} />;
          })}
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href={url}
            target="_blank"
            className="bg-action-orange text-text-light-white text-sm font-bold px-3 py-1.5 rounded-lg"
          >
            {textJSON["projects.cards.explore"]}
          </a>
        </div>
      </div>
      <p className="font-normal text-sm text-text-dark-brown">{description}</p>
    </div>
  );
};
