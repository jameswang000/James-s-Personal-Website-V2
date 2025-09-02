import { textJSON } from "../../assets";

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
  url,
}: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col justify-start items-center p-3 sm:p-4 rounded-2xl shadow-xl
                 bg-highlighting-gold/20 border border-text-dark-brown/30 gap-3 sm:gap-4 h-full w-full sm:max-w-sm"
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center justify-start gap-2 sm:gap-3">
          <Icon
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-200 ease-in-out
                           group-hover:scale-110"
          />
          <h3 className="font-semibold text-text-dark-brown text-base sm:text-lg">
            {heading}
          </h3>
          {/* {badges.map((label) => (
            <Badge key={label} label={label} />
          ))} */}
        </div>
        <div className="flex flex-col justify-center items-end">
          <a
            href={url}
            target="_blank"
            className="bg-action-orange text-text-light-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg
                       transition-transform duration-200 ease-in-out
                       hover:bg-orange-500 hover:scale-105
                       active:bg-orange-600 active:scale-95"
          >
            {textJSON["projects.cards.explore"]}
          </a>
        </div>
      </div>
      <p className="font-normal text-sm sm:text-base text-text-dark-brown">
        {description}
      </p>
    </div>
  );
};
