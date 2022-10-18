import { ReactNode } from "react";
import { Container, Nav } from "@/components";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Container>
          <Nav />
          {children}
        </Container>
      </div>

      <div className="background-grid"></div>
    </>
  );
};
