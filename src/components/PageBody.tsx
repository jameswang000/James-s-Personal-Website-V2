export interface PageBodyProps {
  children: React.ReactNode;
}

/* 
  Page layout component that controls the horizontal container 
  for the body content of the webpage. It constrains the content
  in the webpage to a max width when the user zooms out too far.
*/
export const PageBody = ({ children }: PageBodyProps) => {
  return <div className="mx-auto max-w-[1600px]">{children}</div>;
};
