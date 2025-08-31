import { CareerExperiencesCard } from "./CareerExperiencesCard";
import { ResumeCard } from "./ResumeCard";
import { SkillsCard } from "./SkillsCard";

export const WORK_EXPERIENCE_SECTION_ID = "work-experience-section";

export const WorkExperience = () => {
  return (
    <div
      id={WORK_EXPERIENCE_SECTION_ID}
      className="flex flex-col items-center justify-center px-20 py-20
                 bg-[linear-gradient(to_bottom,rgba(217,94,79,0)_0%,rgba(217,94,79,0.1)_20%,rgba(217,94,79,0.1)_80%,rgba(217,94,79,0)_100%)]"
    >
      <div className="flex flex-row justify-center items-stretch gap-6">
        <div className="flex-[70%] flex flex-col gap-6">
          <div>
            <CareerExperiencesCard />
          </div>
          <div>
            <SkillsCard />
          </div>
        </div>
        <div className="flex-[30%] h-full">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
};
