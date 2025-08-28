import { textJSON, WorkIcon } from "../../assets";
import { DotSeperator } from "../util";

export const Footer = () => {
  return (
    <div className="relative">
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
          <a href="">{textJSON["footer.backToTop"]}</a>
          <DotSeperator />
          <a href="">{textJSON["footer.about"]}</a>
          <DotSeperator />
          <a href="">{textJSON["footer.workExperience"]}</a>
          <DotSeperator />
          <a href="">{textJSON["footer.projects"]}</a>
          <DotSeperator />
          <a href="">{textJSON["footer.contactMe"]}</a>
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
