import { textJSON, externalLinks } from "../../assets";
import { ExternalLinkCard } from "./ExternalLinkCard";

export const ExternalLinksCard = () => {
  return (
    <div
      className="flex flex-col gap-5 items-start justify-start
                   bg-highlighting-gold/20 border-1 border-text-dark-brown/30 
                    shadow-2xl p-8 rounded-2x rounded-2xl h-full"
    >
      <h3 className="text-heading-dark-burgandy font-semibold text-4xl">
        {textJSON["forms.externalLinksCard.heading"]}
      </h3>
      <div className="flex flex-col gap-2 justify-center items-start w-full">
        {externalLinks.map((externalLinkCardData) => {
          const { id, ...externalLinkCardProps } = externalLinkCardData;
          return <ExternalLinkCard {...externalLinkCardProps} key={id} />;
        })}
      </div>
    </div>
  );
};
