export interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <div className="bg-highlighting-gold rounded-2xl text-xs font-normal px-2 py-1">
      {label}
    </div>
  );
};
