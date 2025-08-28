export interface DotSeperator {
  className?: string;
}

export const DotSeperator = ({ className = "" }: DotSeperator) => {
  return <div className={className}>·</div>;
};
