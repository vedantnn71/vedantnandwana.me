import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-12 my-8 flex flex-col items-center gap-12">
      {children}
    </div>
  );
};
