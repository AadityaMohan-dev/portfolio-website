import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useScreenSize from "../hooks/useScreenSize"; // your hook

interface SlideSectionProps {
  children: ReactNode;
  z: number;
}

const SlideSection: React.FC<SlideSectionProps> = ({ children, z }) => {
  const { isMobile } = useScreenSize();

  return (
    <motion.section
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={isMobile ? "" : "sticky top-24"} // disable sticky on mobile
      style={{ zIndex: z }}
    >
      <div>
        {children}
      </div>
    </motion.section>
  );
};

export default SlideSection;
