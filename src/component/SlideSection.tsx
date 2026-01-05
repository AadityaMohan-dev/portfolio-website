import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useScreenSize from "../hooks/useScreenSize";

interface SlideSectionProps {
  children: ReactNode;
  z: number;
}

const SlideSection: React.FC<SlideSectionProps> = ({ children, z }) => {
  const { isMobile, isLowHeightLaptop } = useScreenSize();

  const disableSlide = isMobile || isLowHeightLaptop;

  return (
    <motion.section
      initial={disableSlide ? false : { y: 120, opacity: 0 }}
      whileInView={disableSlide ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={disableSlide ? "relative" : "sticky top-24"}
      style={{ zIndex: disableSlide ? "auto" : z }}
    >
      {children}
    </motion.section>
  );
};

export default SlideSection;
