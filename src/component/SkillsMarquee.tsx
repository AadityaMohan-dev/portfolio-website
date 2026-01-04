import { motion } from "framer-motion";
import React from "react";

interface MarqueeRowProps {
  skills: string[];
  reverse?: boolean;
}

const skillsRow1: string[] = [
  "Java",
  "Spring Boot",
  "React",
  "Microservices",
  "REST APIs",
  "JWT",
  "MySQL",
  "AWS",
];

const skillsRow2: string[] = [
  "Docker",
  "Kubernetes",
  "Hibernate",
  "JPA",
  "WebSocket",
  "Git",
  "Linux",
  "PostgreSQL",
];

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  skills,
  reverse = false,
}) => {
  return (
    <motion.div
      className="flex gap-10 whitespace-nowrap text-3xl font-semibold text-gray-400"
      animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      }}
    >
      {[...skills, ...skills].map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </motion.div>
  );
};

const SkillsMarquee: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/3 left-0 w-full opacity-30">
        <MarqueeRow skills={skillsRow1} />
      </div>

      <div className="absolute top-1/2 left-0 w-full opacity-20">
        <MarqueeRow skills={skillsRow2} reverse />
      </div>
    </div>
  );
};

export default SkillsMarquee;
