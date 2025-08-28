export interface CareerCardProps {
  jobTitle: string;
  companyName: string;
  dateString: string;
  description: string;
  className?: string;
}

export const CareerCard = ({
  jobTitle,
  companyName,
  dateString,
  description,
  className = "",
}: CareerCardProps) => {
  return (
    <div
      className={`group w-68 h-25 [perspective:1000px] ${className}`}
      aria-hidden={false}
    >
      {/* The inner element rotates in 3D */}
      <div
        className="
          relative w-full h-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
          origin-center
          [will-change:transform]
        "
      >
        {/* Front */}
        <div
          className="
            absolute inset-0
            flex flex-col p-3 rounded-2xl shadow-xl
            bg-highlighting-gold/20 border border-text-dark-brown/30
            [backface-visibility:hidden]
            items-start justify-start
          "
        >
          <h3 className="text-text-dark-brown font-bold text-lg">{jobTitle}</h3>
          <p className="text-text-dark-brown font-normal text-sm">
            {companyName}
          </p>
          <p className="text-text-dark-brown/80 font-normal text-[0.625rem]">
            {dateString}
          </p>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            p-3 rounded-2xl shadow-xl
            bg-highlighting-gold/30 border border-text-dark-brown/30
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            text-left
          "
        >
          <p className="text-text-dark-brown text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
