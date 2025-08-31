import React from "react";

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary";
  label: string | React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl"; // new
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  label,
  size = "md",
  className = "",
  disabled = false,
}) => {
  const base = `
    inline-flex items-center justify-center
    select-none
    transition-all duration-150 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    hover:cursor-pointer
  `;

  // size → text, padding, rounding, border thickness
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "text-sm py-1 px-3 rounded-lg border-[2px]",
    md: "text-xl py-2 px-5 rounded-2xl border-[4px]",
    lg: "text-2xl py-3 px-6 rounded-2xl border-[5px]",
    xl: "text-3xl py-4 px-8 rounded-3xl border-[6px]",
  };

  const primary = `
    bg-action-orange text-text-light-white
    shadow-md
    hover:shadow-lg hover:-translate-y-1
    active:translate-y-[2px] active:scale-[0.99] active:shadow-sm
    focus-visible:ring-action-orange/40 font-semibold
  `;

  const secondary = `
    bg-transparent text-action-orange
    shadow-sm
    hover:bg-action-orange/10 hover:shadow-md hover:-translate-y-1
    active:bg-action-orange/20 active:translate-y-[2px] active:scale-[0.99] active:shadow-sm
    focus-visible:ring-action-orange/30 font-semibold
  `;

  // border color is theme-specific; keep the border color shared with action-orange
  const variantBorder = `border-action-orange`;

  const classes = [
    base,
    sizeClasses[size],
    variant === "primary" ? primary : secondary,
    variantBorder,
    className,
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      onClick={onClick}
      className={classes}
      type="button"
      aria-pressed="false"
      disabled={disabled}
    >
      {label}
    </button>
  );
};
