import { WorkIcon } from "../../assets";
import { textJSON } from "../../assets";
import { ABOUT_SECTION_ID } from "../about";
import { FORMS_SECTION_ID } from "../forms";
import { PROJECTS_SECTION_ID } from "../projects";
import { DarkModeSwitch } from "../util";
import { Seperator } from "../util";
import { CAREER_EXPERIENCE_ID } from "../work_experience";

export const NAVBAR_SECTION_ID = "navbar-section-id";

export const Navbar = () => {
  return (
    <div
      id={NAVBAR_SECTION_ID}
      className="flex flex-row bg-heading-dark-burgandy text-text-light-white items-center gap-12 py-3 px-8 flex-wrap"
    >
      <div className="flex flex-row items-center gap-6">
        <WorkIcon />
        <h1 className="font-logo font-normal text-4xl pt-1">{textJSON.logo}</h1>
      </div>
      <Seperator orientation="vertical" />
      <div className="flex flex-row gap-9 font-primary font-semibold text-xl items-center self-center">
        {[
          { id: ABOUT_SECTION_ID, label: textJSON["navigation.about"] },
          {
            id: CAREER_EXPERIENCE_ID,
            label: textJSON["navigation.workExperience"],
          },
          { id: PROJECTS_SECTION_ID, label: textJSON["navigation.projects"] },
          { id: FORMS_SECTION_ID, label: textJSON["navigation.contactMe"] },
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative text-text-light-white transition-all duration-200 ease-in-out
                       hover:text-highlighting-gold hover:scale-101
                       active:scale-95"
          >
            {link.label}
            {/* Optional underline animation */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-200 ease-in-out hover:w-full"></span>
          </a>
        ))}
      </div>
      <div className="flex-1"></div>
      <div className="items-center">
        <div className="hidden">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};
