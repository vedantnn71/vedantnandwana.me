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

      <svg id="texture" className="w-screen h-screen fixed top-0 left-0 -z-50 opacity-20">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </>
  );
};
