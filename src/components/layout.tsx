import { ReactNode } from "react";
import { Container, Nav } from "@/components";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div 
        className="w-screen h-screen overflow-x-hidden"
      >
        <Container>
          <Nav />
          {children}
        </Container>
      </div>

      <div className="background-grid"></div>
    </>
  )
}

