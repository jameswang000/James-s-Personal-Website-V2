export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary";
  label: string;
}

export const Button = ({ onClick, variant, label }: ButtonProps) => {
  const isPrimary = variant === "primary";
  return isPrimary ? (
    <button
      className={`py-2 px-6 bg-action-orange text-text-light-white border-[5px] border-action-orange
                  rounded-2xl text-2xl font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <button
      className={`py-2 px-6 bg-transparent text-action-orange border-[5px] border-action-orange
                  rounded-2xl text-2xl font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
