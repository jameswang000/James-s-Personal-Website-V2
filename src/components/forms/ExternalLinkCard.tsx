export interface ExternalLinkCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // your SVG component
  heading: string;
  description: string;
  url: string;
}

export const ExternalLinkCard = ({
  Icon,
  heading,
  description,
  url,
}: ExternalLinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-row items-center justify-start p-3 rounded-xl shadow-xl w-full
                 bg-action-orange/10 border-1 border-text-dark-brown/20 gap-2
                 transition-transform duration-200 ease-in-out
                 hover:scale-105 hover:shadow-2xl
                 active:scale-95 active:shadow-xl"
    >
      <div className="w-10 h-10 rounded-full bg-text-light-white/50 sm:flex items-center justify-center hidden">
        <Icon className="w-6 h-6 text-action-orange" />
      </div>
      <div className="flex flex-col justify-between text-text-dark-brown">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </a>
  );
};
