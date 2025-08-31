import { textJSON, WorkIcon } from "../../assets";
import { ABOUT_SECTION_ID } from "../about";
import { FORMS_SECTION_ID } from "../forms";
import { NAVBAR_SECTION_ID } from "../navigation_bar";
import { PROJECTS_SECTION_ID } from "../projects";
import { DotSeperator } from "../util";
import { WORK_EXPERIENCE_SECTION_ID } from "../work_experience";

export const FOOTER_SECTION_ID = "footer-section";

export const Footer = () => {
  const footerLinks = [
    { id: NAVBAR_SECTION_ID, label: textJSON["footer.backToTop"] },
    { id: ABOUT_SECTION_ID, label: textJSON["footer.about"] },
    {
      id: WORK_EXPERIENCE_SECTION_ID,
      label: textJSON["footer.workExperience"],
    },
    { id: PROJECTS_SECTION_ID, label: textJSON["footer.projects"] },
    { id: FORMS_SECTION_ID, label: textJSON["footer.contactMe"] },
  ];

  return (
    <div id={FOOTER_SECTION_ID} className="relative">
      <p className="absolute bottom-1 right-4 text-[0.5rem] text-text-light-white/75">
        {textJSON["footer.copyRight"]}
      </p>
      <div
        className="flex flex-col items-start justify-start bg-heading-dark-burgandy text-text-light-white font-footer
                 xl:flex-row xl:items-center py-4 px-8 gap-1 lg:gap-0"
      >
        <div className="flex flex-row items-center flex-1/3 gap-6">
          <WorkIcon />
          <h1 className="font-logo font-normal text-4xl pt-1">
            {textJSON.logo}
          </h1>
        </div>

        <div className="flex flex-row gap-4 text-xl font-semibold xl:self-center flex-1/3 text-nowrap">
          {footerLinks.map((link, index) => (
            <span key={link.id} className="flex items-center gap-2">
              <a
                href={`#${link.id}`}
                className="relative text-text-light-white transition-all duration-200 ease-in-out
                           hover:text-highlighting-gold hover:scale-101
                           active:scale-95"
              >
                {link.label}
                {/* Optional underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-200 ease-in-out hover:w-full"></span>
              </a>
              {index < footerLinks.length - 1 && <DotSeperator />}
            </span>
          ))}
        </div>

        <div
          className="flex-1/3 flex flex-row gap-2 justify-start xl:justify-end
                        text-xl font-bold"
        >
          <p>{textJSON.email}</p>
          <DotSeperator />
          <p>{textJSON["footer.city"]}</p>
        </div>
      </div>
    </div>
  );
};
