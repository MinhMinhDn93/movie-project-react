import { ReactNode } from "react";

interface Content {
  children: ReactNode;
}
function Content({ children }: Content) {
  return (
    <>
      Đây là content
      {children}
    </>
  );
}

export default Content;
