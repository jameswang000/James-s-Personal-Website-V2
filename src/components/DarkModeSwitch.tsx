import * as Switch from "@radix-ui/react-switch";
import { textJSON } from "../assets/text";

export const DarkModeSwitch = () => {
  return (
    <div className="font-primary flex flex-row gap-3">
      <p className="text-base">{textJSON["navigation.lightMode"]}</p>
      <Switch.Root
        className="relative h-[25px] w-[42px] cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black"
        id="airplane-mode"
      >
        <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <p className="text-base">{textJSON["navigation.darkMode"]}</p>
    </div>
  );
};
