import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useScreenSize from "../hooks/useScreenSize";

interface SlideSectionProps {
  children: ReactNode;
  z: number;
}

const SlideSection: React.FC<SlideSectionProps> = ({ children, z }) => {
  const { isMobile } = useScreenSize();

  if (isMobile) {
    return (
      <section className="relative">
        {children}
      </section>
    );
  }

  return (
    <motion.section
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      className="sticky top-10"
      style={{ zIndex: z }}
    >
      {children}
    </motion.section>
  );
};

export default SlideSection;