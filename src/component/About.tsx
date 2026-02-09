import { motion } from "framer-motion";
import {
  MapPin,
  Server,
  Zap,
  Cloud,
  Users,
  GraduationCap,
  Quote,
  Briefcase,
  Calendar,
  Award,
  BookOpen,
  ArrowRight,
  Code2,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Coffee,
  Braces,
  Database,
  Terminal,
} from "lucide-react";
import useScreenSize from "../hooks/useScreenSize";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function About() {
  const { isMobile } = useScreenSize();

  const highlights = [
    {
      icon: Server,
      title: "Backend & Architecture",
      text: "Built scalable backend systems using Spring Boot, Hibernate, JPA, and REST APIs. Converted legacy SOAP services into modern microservices.",
      accent: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      borderHover: "hover:border-blue-300",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      text: "Improved application performance through SQL optimization and service refactoring, reducing API latency by 30%.",
      accent: "from-amber-500/10 to-orange-500/10",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      borderHover: "hover:border-amber-300",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      text: "Migrated enterprise applications from on-premise to AWS cloud-ready architecture. Familiar with Docker, CI/CD, and Git.",
      accent: "from-emerald-500/10 to-green-500/10",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderHover: "hover:border-emerald-300",
    },
    {
      icon: Users,
      title: "Agile Collaboration",
      text: "Worked in Agile Scrum teams, contributing to sprint planning, code reviews, mentoring juniors, and feature delivery.",
      accent: "from-purple-500/10 to-violet-500/10",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      borderHover: "hover:border-purple-300",
    },
  ];

  const stats = [
    { value: "3+", label: "Years Exp", icon: Calendar },
    { value: "30%", label: "Faster APIs", icon: TrendingUp },
    { value: "10+", label: "Projects", icon: Briefcase },
    { value: "5+", label: "Tech Stack", icon: Code2 },
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
      viewport={{ once: true, amount: 0.05 }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 "
    >
      {/* ── Header Area ── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
        <div>
          {/* Section label */}
          <motion.div variants={item} className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#F78154]" />
            <span className="text-xs sm:text-sm font-semibold text-[#F78154] uppercase tracking-[0.15em]">
              Get to know me
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900"
          >
            About{" "}
            <span className="relative inline-block">
              Me
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-[4px] rounded-full bg-[#F78154]/60"
              />
            </span>
          </motion.h1>
        </div>

        {/* Location badge */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm w-fit"
        >
          <MapPin className="w-4 h-4 text-[#F78154]" />
          <span className="text-sm font-semibold text-zinc-700">
            Greater Noida, India
          </span>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
        </motion.div>
      </div>

      {/* ── Intro Card ── */}
      <motion.div
        variants={scaleIn}
        className="relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-sm mb-8"
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#F78154]/5 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-zinc-100 to-transparent rounded-tr-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#F78154]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#F78154]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                Hi, I'm Aaditya Mohan
              </h2>
              <p className="text-sm text-zinc-500 font-medium">
                Java Full Stack Developer
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-4xl">
            A results-driven{" "}
            <span className="font-semibold text-zinc-900 bg-zinc-100 px-1 rounded">
              Java Full Stack Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-[#F78154]">
              3 years of experience
            </span>{" "}
            crafting scalable, high-performance web applications. I specialize in
            building robust backend systems with{" "}
            <span className="font-semibold text-zinc-900">
              Java and Spring Boot
            </span>
            , creating intuitive user experiences with{" "}
            <span className="font-semibold text-zinc-900">React</span>, and
            delivering reliable solutions using{" "}
            <span className="font-semibold text-zinc-900">RESTful APIs</span>,{" "}
            <span className="font-semibold text-zinc-900">
              microservices architecture
            </span>
            , and{" "}
            <span className="font-semibold text-zinc-900">MySQL</span>. I also
            have hands-on experience with{" "}
            <span className="font-semibold text-zinc-900">
              AWS cloud migration
            </span>
            , performance tuning, and database optimization.
          </p>

          {/* Tech stack pills */}
          
        </div>
      </motion.div>

     

      {/* ── Highlights Grid ── */}
      <motion.div variants={item} className="mb-3">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-zinc-700" />
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
            What I Bring
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {highlights.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
              className={`group relative overflow-hidden rounded-xl bg-white border border-zinc-200 p-5 sm:p-6 transition-all duration-300 ${card.borderHover} hover:shadow-lg cursor-default`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
                      {card.title}
                      <ChevronRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      
    </motion.section>
  );
}

export default About;