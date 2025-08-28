import { WorkIcon } from "../../assets";
import { textJSON } from "../../assets";
import { DarkModeSwitch } from "../util";
import { Seperator } from "../util";

export const Navbar = () => {
  return (
    <div className="flex flex-row bg-heading-dark-burgandy text-text-light-white items-center gap-12 py-3 px-8 flex-wrap">
      <div className="flex flex-row items-center gap-6">
        <WorkIcon />
        <h1 className="font-logo font-normal text-4xl pt-1">{textJSON.logo}</h1>
      </div>
      <Seperator orientation="vertical" />
      <div className="flex flex-row gap-9 font-primary font-semibold text-xl items-center self-center">
        <a href="">{textJSON["navigation.about"]}</a>
        <a href="">{textJSON["navigation.workExperience"]}</a>
        <a href="">{textJSON["navigation.projects"]}</a>
        <a href="">{textJSON["navigation.contactMe"]}</a>
      </div>
      <div className="flex-1"></div>
      <div className="items-center">
        <DarkModeSwitch />
      </div>
    </div>
  );
};
