import * as RadixSeperator from "@radix-ui/react-separator";

export interface SeperatorProps {
  orientation: "horizontal" | "vertical";
}

export const Seperator = ({ orientation }: SeperatorProps) => {
  return (
    <RadixSeperator.Root
      className="mx-[15px] bg-text-light-white
                 data-[orientation=horizontal]:h-px
                 data-[orientation=vertical]:w-px
                 data-[orientation=vertical]:h-[52px]"
      decorative
      orientation={orientation}
    />
  );
};
