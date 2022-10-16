import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="my-6 mx-20">
      {children}
    </div>
  )
}
