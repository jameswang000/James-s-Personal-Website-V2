import { textJSON } from "../assets/text";
import { Button } from "./Button";
import PortraitPng from "../assets/images/Personal Website Portrait Background Blurred Resized.png";

export const Hero = () => {
  return (
    <div className=" py-16 px-40 pb-20 font-primary bg-gradient-to-b from-90% from-action-orange/20 to-action-orange/0">
      <div className="flex flex-col justify-center items-center xl:flex-row xl:items-center xl:justify-center gap-12">
        <div className="relative">
          <div className="absolute inset-0 xl:inset-x-[-20%] xl:inset-y-[-40%] xl:translate-x-[-10%] bg-radial from-highlighting-gold/10 to-highlighting-gold/0 from-30% flex items-center xl:rounded-[100%]" />
          <div className="flex flex-col gap-4 items-center xl:items-start">
            <h1 className="font-bold text-7xl text-heading-dark-burgandy">
              {textJSON["hero.heading"]}
            </h1>
            <p className="font-normal text-4xl text-text-dark-brown text-center xl:text-left">
              {textJSON["hero.description"]}
            </p>
            <div className="flex flex-row gap-3">
              <Button
                variant="primary"
                onClick={() => {}}
                label={textJSON["hero.button.primary"]}
              />
              <Button
                variant="secondary"
                onClick={() => {}}
                label={textJSON["hero.button.secondary"]}
              />
            </div>
          </div>
        </div>
        <img
          className="w-[400px] h-[600px] rounded-3xl border-[2px] border-highlighting-gold/20 shadow"
          src={PortraitPng}
          alt="Portrait of James Wang in Front of Riverside"
        />
      </div>
    </div>
  );
};
