export interface ExternalLinkCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // your SVG component
  heading: string;
  description: string;
}

export const ExternalLinkCard = ({
  Icon,
  heading,
  description,
}: ExternalLinkCardProps) => {
  return (
    <div
      className="flex flex-row items-center justify-start p-3 rounded-xl shadow-xl w-full
               bg-action-orange/10 border-1 border-text-dark-brown/20 gap-2"
    >
      <div className="w-10 h-10 rounded-full bg-text-light-white/50 sm:flex items-center justify-center hidden">
        <Icon className="w-6 h-6 text-action-orange" />
      </div>
      <div className="flex flex-col justify-between text-text-dark-brown">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};
