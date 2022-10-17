import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-12 mx-8 my-8">
      {children}
    </div>
  )
}
