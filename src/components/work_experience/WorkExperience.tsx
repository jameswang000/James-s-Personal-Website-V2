import { CareerExperiencesCard } from "./CareerExperiencesCard";
import { ResumeCard } from "./ResumeCard";
import { SkillsCard } from "./SkillsCard";

export const WORK_EXPERIENCE_SECTION_ID = "work-experience-section";

export const WorkExperience = () => {
  return (
    <div
      id={WORK_EXPERIENCE_SECTION_ID}
      className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                 bg-[linear-gradient(to_bottom,rgba(217,94,79,0)_0%,rgba(217,94,79,0.1)_20%,rgba(217,94,79,0.1)_80%,rgba(217,94,79,0)_100%)]"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-4 items-stretch sm:gap-6 w-full max-w-7xl">
        <div className="lg:flex-[75%] flex flex-col gap-4 sm:gap-6">
          <div>
            <CareerExperiencesCard />
          </div>
          <div>
            <SkillsCard />
          </div>
        </div>
        <div className="lg:flex-[25%] h-full">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
};
