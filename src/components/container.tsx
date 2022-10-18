import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="m-8 flex flex-col items-center gap-12 md:mx-12">
      {children}
    </div>
  );
};
