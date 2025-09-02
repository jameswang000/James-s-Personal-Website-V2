import * as RadixHoverCard from "@radix-ui/react-hover-card";

export interface SkillCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // your SVG component
  heading: string;
  description: string;
}

export const SkillCard = ({ Icon, heading, description }: SkillCardProps) => {
  return (
    <RadixHoverCard.Root openDelay={100} closeDelay={50}>
      <RadixHoverCard.Trigger asChild>
        <button
          type="button"
          className="w-20 h-20 rounded-full bg-skillCard-biege flex items-center justify-center
                 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
                     border-1 border-text-dark-brown/20 shadow-lg"
        >
          <Icon className="w-12 h-12" aria-hidden />
          <span className="sr-only">Open preview</span>
        </button>
      </RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <RadixHoverCard.Content
          side="bottom"
          align="center"
          sideOffset={8}
          className="z-50 w-64 rounded-lg bg-white p-4 shadow-lg text-sm"
        >
          <div className="flex flex-col items-start gap-0.5">
            {/* same icon, larger */}
            <Icon className="w-10 h-10 text-gray-700" aria-hidden />
            <h3 className="text-lg font-semibold text-heading-dark-burgandy text-left">
              {heading}
            </h3>
            <p className="text-s text-text-dark-brown text-left">
              {description}
            </p>
          </div>
          <RadixHoverCard.Arrow className="fill-white" />
        </RadixHoverCard.Content>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  );
};
