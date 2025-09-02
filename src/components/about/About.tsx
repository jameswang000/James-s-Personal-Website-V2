import { EndMark } from "../../assets";
import { textJSON } from "../../assets";

export const ABOUT_SECTION_ID = "about-section";

export const About = () => {
  return (
    <div
      id={ABOUT_SECTION_ID}
      className="bg-background-biege flex flex-col items-center justify-start py-8 px-4 sm:py-10 sm:px-8 md:px-16 lg:px-20 xl:px-60 font-primary gap-6 sm:gap-9"
    >
      <h2 className="font-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-heading-dark-burgandy text-center">
        {textJSON["about.heading"]}
      </h2>
      <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark-brown text-center leading-relaxed">
        {textJSON["about.description"].map((paragraph, i) => (
          <p key={i} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
      <EndMark />
    </div>
  );
};
