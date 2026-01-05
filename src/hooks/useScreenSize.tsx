import { useEffect, useState } from "react";

function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 640,
    isLaptop: width >= 1280 && width < 1600,      // 13–15 inch
    isDesktop: width >= 1600 && width < 1920,     // standard desktop
    isWide: width >= 1920,                        // ultrawide
  };
}

export default useScreenSize;
