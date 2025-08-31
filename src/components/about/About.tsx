import { EndMark } from "../../assets";
import { textJSON } from "../../assets";

export const ABOUT_SECTION_ID = "about-section";

export const About = () => {
  return (
    <div
      id={ABOUT_SECTION_ID}
      className="bg-background-biege flex flex-col items-center justify-start py-10 px-16 sm:px-20 lg:px-60 font-primary gap-9"
    >
      <h2 className="font-primary font-bold text-5xl text-heading-dark-burgandy text-center">
        {textJSON["about.heading"]}
      </h2>
      <div className="font-normal text-2xl text-text-dark-brown text-center leading-relaxed">
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
