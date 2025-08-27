import { CareerExperiencesCard } from "./CareerExperiencesCard";
import { ResumeCard } from "./ResumeCard";
import { SkillsCard } from "./SkillsCard";

export const WorkExperience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-20 py-32
                 bg-[linear-gradient(to_bottom,rgba(217,94,79,0)_0%,rgba(217,94,79,0.1)_20%,rgba(217,94,79,0.1)_80%,rgba(217,94,79,0)_100%)]"
    >
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="flex-2/3 flex flex-col gap-6">
          <div>
            <CareerExperiencesCard />
          </div>
          <div>
            <SkillsCard />
          </div>
        </div>
        <div className="flex-1/3">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
};
