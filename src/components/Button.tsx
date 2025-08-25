export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary";
  label: string;
}

export const Button = ({ onClick, variant, label }: ButtonProps) => {
  const isPrimary = variant === "primary";
  const buttonFill = isPrimary ? "action-orange" : "transparent";
  const buttonTextColor = isPrimary ? "text-light-white" : "action-orange";
  return (
    <button
      className={`py-3 px-6 bg-${buttonFill} text-${buttonTextColor} border-[5px] border-action-orange
                  rounded-2xl text-2xl font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
