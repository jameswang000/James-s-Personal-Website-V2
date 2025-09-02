import { textJSON } from "../../assets";
import { Button } from "../util";
import { portraitImagePNG } from "../../assets";
import { CAREER_EXPERIENCE_ID } from "../work_experience";
import { FORMS_SECTION_ID } from "../forms";

export const HERO_SECTION_ID = "hero-section";

export const Hero = () => {
  return (
    <div
      id={HERO_SECTION_ID}
      className="py-8 px-4 pb-12 sm:py-12 sm:px-8 lg:py-16 lg:px-20 xl:px-40 xl:pb-20 font-primary bg-gradient-to-b from-90% from-action-orange/20 to-action-orange/0"
    >
      <div className="flex flex-col justify-center items-center xl:flex-row xl:items-center xl:justify-center gap-6 sm:gap-8 lg:gap-12">
        <div className="relative">
          <div
            className="absolute inset-0 xl:inset-x-[-20%] xl:inset-y-[-40%] xl:translate-x-[-10%] 
                       bg-radial from-highlighting-gold/10 to-highlighting-gold/0 from-30% 
                       flex items-center xl:rounded-[100%] pointer-events-none"
          />
          <div className="flex flex-col gap-4 items-center xl:items-start">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-heading-dark-burgandy">
              {textJSON["hero.heading"]}
            </h1>
            <p className="pl-0.5 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-text-dark-brown text-center xl:text-left">
              {textJSON["hero.description.body"]}
            </p>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-text-dark-brown text-center xl:text-left">
              {textJSON["hero.description.cta"]}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href={`#${CAREER_EXPERIENCE_ID}`} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  onClick={() => {}}
                  label={textJSON["hero.button.primary"]}
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </a>
              <a href={`#${FORMS_SECTION_ID}`} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  onClick={() => {}}
                  label={textJSON["hero.button.secondary"]}
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="w-[250px] h-[375px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[525px] lg:w-[400px] lg:h-[600px] rounded-3xl border-[2px] border-highlighting-gold/20 shadow-xl"
          src={portraitImagePNG}
          alt="Portrait of James Wang in Front of Riverside"
        />
      </div>
    </div>
  );
};
