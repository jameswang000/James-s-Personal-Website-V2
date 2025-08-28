export interface PageProps {
  children: React.ReactNode;
}

/* 
  Page layout component that provides the background for
  the entire webpage. Mostly provides color and stretchs 
  to fill the entire window.
*/
export const Page = ({ children }: PageProps) => {
  return <div className="bg-background-biege min-h-screen">{children}</div>;
};
