import { textJSON } from "../../assets";
import { jobs } from "../../assets";
import { CareerCard } from "./CareerCard";

export const CAREER_EXPERIENCE_ID = "career_experience_id";

export const CareerExperiencesCard = () => {
  return (
    <div
      id={CAREER_EXPERIENCE_ID}
      className="bg-highlighting-gold/20 border-1 border-text-dark-brown/30 shadow-2xl 
                     p-6 rounded-2xl w-full gap-5
                     flex flex-col justify-center items-start"
    >
      <h3 className="text-heading-dark-burgandy font-semibold text-xl sm:text-2xl lg:text-3xl">
        {textJSON["workExperience.career.heading"]}
      </h3>
      <div className="flex flex-row flex-wrap gap-1 sm:gap-2">
        {jobs.map((careerCardData) => {
          const { id, ...careerCardProps } = careerCardData;
          return <CareerCard {...careerCardProps} key={id} />;
        })}
      </div>
    </div>
  );
};
