import { motion } from "framer-motion";
import {
  MapPin,
  Server,
  Zap,
  Cloud,
  Users,
  GraduationCap,
  BookOpen,
  Sparkles,
  Coffee,
  Braces,
  Database,
  Terminal,
  Calendar,
} from "lucide-react";
import useScreenSize from "../hooks/useScreenSize";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const { isMobile } = useScreenSize();

  const highlights = [
    {
      icon: Server,
      title: "Backend & Architecture",
      text: "Built scalable backend systems using Spring Boot, Hibernate, JPA, and REST APIs. Converted legacy SOAP services into modern microservices.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      text: "Improved application performance through SQL optimization and service refactoring, reducing API latency by 30%.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      text: "Migrated enterprise applications from on-premise to AWS cloud-ready architecture. Familiar with Docker, CI/CD, and Git.",
    },
    {
      icon: Users,
      title: "Agile Collaboration",
      text: "Worked in Agile Scrum teams, contributing to sprint planning, code reviews, mentoring juniors, and feature delivery.",
    },
  ];

  const techStack = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Zap },
    { name: "React", icon: Braces },
    { name: "MySQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Terminal },
  ];

  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-6xl max-h-fit px-4 sm:px-6 lg:px-8 py-8 sm:py-12 "
    >
      {/* Heading */}
      <motion.h1
        variants={itemVariant}
        className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900"
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.div variants={itemVariant} className="mt-4 sm:mt-6 space-y-2">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h2 className="text-base sm:text-xl lg:text-2xl font-semibold text-zinc-900 flex items-center gap-2">
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F78154]" />
      Hi, I'm Aaditya Mohan.
    </h2>

    <div className="flex items-center font-semibold gap-2 text-xs sm:text-sm lg:text-lg text-zinc-600">
      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F78154]" />
      <span>Greater Noida, India</span>
      <span className="relative flex h-2 w-2 ml-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
    </div>
  </div>

  <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-zinc-700">
    A results-driven <b className="text-zinc-900">Java Full Stack Developer</b> with
    over <b className="text-[#F78154]">3 years of experience</b> building scalable
    web applications. I specialize in <b>Java, Spring Boot, React, RESTful APIs,
    microservices, MySQL</b>, and have hands-on experience
    with <b>AWS cloud migration</b> and performance optimization.
  </p>


        {/* Tech Stack */}
        <motion.div
          variants={itemVariant}
          className="flex flex-wrap gap-1.5 sm:gap-2 pt-2"
        >
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={isMobile ? {} : { scale: 1.08, y: -2 }}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm hover:border-zinc-300 hover:shadow-md transition-all cursor-default"
              >
                <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-500" />
                {tech.name}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Highlights - 2 columns on all screens */}
      <motion.div
        variants={itemVariant}
        className="mt-6 sm:mt-8 lg:mt-10 grid lg:grid-cols-2 gap-2 sm:gap-3  lg:gap-4"
      >
        {highlights.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
            className="group rounded-lg sm:rounded-xl bg-white border border-zinc-200 sm:border-2 p-2.5 sm:p-4 lg:p-5 transition-all duration-300 hover:border-[#F78154]/30 hover:shadow-lg"
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-zinc-100 group-hover:bg-[#F78154]/10 transition-colors flex-shrink-0">
                <card.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-zinc-700 group-hover:text-[#F78154] transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-xs sm:text-sm lg:text-base font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm leading-relaxed text-zinc-600">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariant} className="mt-6 sm:mt-8 lg:mt-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-zinc-700" />
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold tracking-tight">
            Education
          </h2>
        </div>

        <div className="relative bg-white border border-zinc-200 sm:border-2 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:border-[#F78154]/30 hover:shadow-md transition-all duration-300">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F78154] to-amber-400 rounded-r-full" />

          <div className="pl-2 sm:pl-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#F78154] flex-shrink-0" />
                <span className="font-semibold text-zinc-900 text-[11px] sm:text-sm lg:text-base">
                  Bachelor of Technology (B.Tech) – Computer Science
                </span>
              </div>
              <span className="text-zinc-600 text-[10px] sm:text-xs lg:text-sm">
                IEC College of Technology, Greater Noida
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 w-fit">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500" />
              <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-zinc-600">
                2018 – 2022
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;