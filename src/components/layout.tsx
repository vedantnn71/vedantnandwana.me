import { ReactNode } from "react";
import { Container, Nav } from "@/components";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div 
        className="w-screen h-screen bg-center bg-no-repeat bg-cover z-50 overflow-x-hidden"
      >
        <Container>
          <Nav />
          {children}
        </Container>
      </div>

      <div className="background-grid z-[0]"></div>
    </>
  )
}

