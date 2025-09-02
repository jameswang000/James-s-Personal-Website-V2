import { textJSON } from "../../assets";
import { Button } from "../util";

export const ResumeCard = () => {
  return (
    <div
      className="bg-highlighting-gold/20 border-1 border-text-dark-brown/30 shadow-2xl 
                 p-6 rounded-2xl w-full h-full
                 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-heading-dark-burgandy font-semibold text-xl sm:text-2xl lg:text-3xl">
          {textJSON["workExperience.resume.heading"]}
        </h3>
        {/* PDF Preview */}
        <div className="flex flex-col p-4 bg-text-dark-brown/10 rounded-2xl gap-3 justify-center items-start">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-1 border-text-dark-brown rounded shadow-xl"
          >
            <p>
              PDF preview not supported.{" "}
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
            </p>
          </object>
          <div className="flex gap-2 flex-col sm:flex-row w-full">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                label={textJSON["workExperience.resume.button.primary"]}
                onClick={() => {}}
                size="md"
                className="w-full sm:w-auto"
              />
            </a>
            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <Button
                variant="secondary"
                label={textJSON["workExperience.resume.button.secondary"]}
                onClick={() => {}}
                size="md"
                className="w-full sm:w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
