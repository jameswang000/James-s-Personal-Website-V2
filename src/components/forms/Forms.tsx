import { ContactForm } from "./ContactForm";
import { ExternalLinksCard } from "./ExternalLinksCard";

export const FORMS_SECTION_ID = "forms-section";

export const Forms = () => {
  return (
    <div
      id={FORMS_SECTION_ID}
      className="py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-20 lg:px-40 border-t-1 border-text-dark-brown flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16 justify-center items-stretch"
    >
      <div className="flex-1/2">
        <ContactForm />
      </div>
      <div className="flex-1/2">
        <ExternalLinksCard />
      </div>
    </div>
  );
};
