import { ReactNode } from "react";

interface Content {
  children: ReactNode;
}
function Content({ children }: Content) {
  return (
    <>
      {children}
    </>
  );
}

export default Content;
