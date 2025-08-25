import { EndMark } from "../assets";
import { textJSON } from "../assets/text";

export const About = () => {
  return (
    <div className="bg-background-biege flex flex-col items-center justify-center py-10 px-60 font-primary gap-6">
      <h2 className="font-primary font-semibold text-5xl text-heading-dark-burgandy text-center">
        {textJSON["about.heading"]}
      </h2>
      <p className="font-normal text-3xl text-text-dark-brown text-center">
        {textJSON["about.description"]}
      </p>
      <div></div>
      <EndMark />
    </div>
  );
};
