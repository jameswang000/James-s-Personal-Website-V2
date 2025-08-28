import { ContactForm } from "./ContactForm";
import { ExternalLinksCard } from "./ExternalLinksCard";

export const Forms = () => {
  return (
    <div className="py-16 px-40 border-t-1 border-text-dark-brown flex flex-col xl:flex-row gap-16 justify-center items-stretch">
      <div className="flex-1/2">
        <ContactForm />
      </div>
      <div className="flex-1/2">
        <ExternalLinksCard />
      </div>
    </div>
  );
};
