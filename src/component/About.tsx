import { motion } from "framer-motion";
import {
  MapPin,
  Server,
  Zap,
  Cloud,
  Users,
  Calendar,
  Award,
  Briefcase,
  TrendingUp,
  Code2,
  ChevronRight,
  Sparkles,
  Coffee,
  Braces,
  Database,
  Terminal,
} from "lucide-react";
import useScreenSize from "../hooks/useScreenSize";

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

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10"
    >
      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#F78154]" />
            <span className="text-xs sm:text-sm font-semibold text-[#F78154] uppercase tracking-[0.15em]">
              Get to know me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900">
            About{" "}
            <span className="relative inline-block">
              Me
              <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-[#F78154]/60" />
            </span>
          </h1>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm w-fit">
          <MapPin className="w-4 h-4 text-[#F78154]" />
          <span className="text-sm font-semibold text-zinc-700">
            Greater Noida, India
          </span>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
        </div>
      </div>

      {/* ── Intro Card ── */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-sm mb-8">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#F78154]/5 to-transparent rounded-bl-full pointer-events-none" />

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
            crafting scalable, high-performance web applications using{" "}
            <span className="font-semibold text-zinc-900">
              Java, Spring Boot, React, REST APIs, Microservices, MySQL
            </span>{" "}
            and AWS cloud migration.
          </p>
        </div>
      </div>

      {/* ── Highlights ── */}
      <div className="mb-3 flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-zinc-700" />
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
          What I Bring
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {highlights.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-white border border-zinc-200 p-5 sm:p-6 transition-all duration-300 ${card.borderHover} hover:shadow-lg`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10 flex gap-4">
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    {card.title}
                    <ChevronRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-sm text-zinc-600">{card.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
