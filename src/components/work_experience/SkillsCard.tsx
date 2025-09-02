import { skills, textJSON } from "../../assets";
import { SkillCard } from "./SkillCard";

export const SkillsCard = () => {
  return (
    <div
      className="bg-highlighting-gold/20 border-1 border-text-dark-brown/30 shadow-2xl 
                   p-6 rounded-2xl w-full gap-5
                   flex flex-col justify-center items-start"
    >
      <h3 className="text-heading-dark-burgandy font-semibold text-xl sm:text-2xl lg:text-3xl">
        {textJSON["workExperience.skills.heading"]}
      </h3>
      <div className="flex flex-row flex-wrap gap-1 sm:gap-2">
        {skills.map((skillCardData) => {
          const { id, ...skillCardProps } = skillCardData;
          return <SkillCard {...skillCardProps} key={id} />;
        })}
      </div>
    </div>
  );
};
