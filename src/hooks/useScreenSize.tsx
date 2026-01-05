// useScreenSize.ts
import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = size.width < 768;
  const isDesktop = size.width >= 1024;
  const isWide = size.width >= 1536;

  // 🔥 CRITICAL: detect 15-inch laptops
  const isLowHeightLaptop =
    size.width >= 1024 && size.width <= 1536 && size.height <= 850;

  return {
    ...size,
    isMobile,
    isDesktop,
    isWide,
    isLowHeightLaptop,
  };
}
