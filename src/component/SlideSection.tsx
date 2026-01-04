import { motion } from "framer-motion";
import type { ReactNode } from "react";


/* ------------------ Types ------------------ */

interface SlideSectionProps {
  children: ReactNode;
  z: number;
}

/* ------------------ Component ------------------ */

const SlideSection: React.FC<SlideSectionProps> = ({ children, z }) => {
  return (
    <motion.section
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sticky top-24"
      style={{ zIndex: z }}
    >
      <div>
        {children}
      </div>
    </motion.section>
  );
};

export default SlideSection;
