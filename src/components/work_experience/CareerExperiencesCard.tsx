import { textJSON } from "../../assets";
import { jobs } from "../../assets";
import { CareerCard } from "./CareerCard";

export const CareerExperiencesCard = () => {
  return (
    <div
      className="bg-highlighting-gold/20 border-1 border-text-dark-brown/30 shadow-2xl 
                     p-6 rounded-2xl w-full gap-5
                     flex flex-col justify-center items-start"
    >
      <h3 className="text-heading-dark-burgandy font-semibold text-3xl">
        {textJSON["workExperience.career.heading"]}
      </h3>
      <div className="flex flex-row flex-wrap gap-2">
        {jobs.map((careerCardProps) => {
          return <CareerCard {...careerCardProps} />;
        })}
      </div>
    </div>
  );
};
