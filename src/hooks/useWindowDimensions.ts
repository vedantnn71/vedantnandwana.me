import { useEffect, useState } from "react";

export const useWindowDimensions = (): {
  width: number;
  height: number;
} => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number | null;
    height: number | null;
  } | null>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: windowDimensions?.width as number,
    height: windowDimensions?.height as number,
  };
};
