import { motion } from "framer-motion";
import { MapPin, Server, Zap, Cloud, Users, GraduationCap, Quote } from "lucide-react";

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
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border bg-zinc-50 rounded-2xl shadow-lg"
    >
      {/* Heading */}
      <motion.h1 
        variants={itemVariant}
        className="text-2xl sm:text-3xl text-zinc-900 lg:text-5xl font-bold tracking-tight"
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.div variants={itemVariant} className="mt-6 space-y-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-900">
            Hi, I'm Aaditya Mohan.
          </h2>

          <div className="flex items-center font-semibold gap-2 text-sm sm:text-lg text-zinc-600">
            <MapPin className="w-5 h-5 text-zinc-700" />
            <span>Greater Noida, India</span>
          </div>
        </div>

        <p className="max-w-5xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-700">
          A results-driven{" "}
          <span className="font-semibold text-zinc-900">
            Java Full Stack Developer
          </span>{" "}
          with over <span className="font-semibold">3 years of experience</span>{" "}
          crafting scalable, high-performance web applications. I specialize in
          building robust backend systems with{" "}
          <span className="font-semibold">Java and Spring Boot</span>, creating
          intuitive user experiences with{" "}
          <span className="font-semibold">React</span>, and delivering reliable
          solutions using{" "}
          <span className="font-semibold">RESTful APIs</span>,{" "}
          <span className="font-semibold">microservices architecture</span>, and{" "}
          <span className="font-semibold">MySQL</span>. I also have hands-on
          experience with{" "}
          <span className="font-semibold">AWS cloud migration</span>, performance
          tuning, and database optimization.
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div variants={itemVariant} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
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
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={itemVariant}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group rounded-xl bg-white border-2 border-zinc-200 p-4 sm:p-5 transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-100 group-hover:bg-zinc-200 transition-colors">
                <card.icon className="w-5 h-5 text-zinc-700" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-sm sm:text-base font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariant} className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-700" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            Education
          </h2>
        </div>

        <div className="bg-white border-2 border-zinc-200 rounded-xl p-4 sm:p-5">
          <p className="text-sm sm:text-base text-zinc-700">
            <span className="font-semibold text-zinc-900">
              Bachelor of Technology (B.Tech) – Computer Science
            </span>
            <br />
            <span className="text-zinc-600">
              IEC College of Technology, Greater Noida (2018 – 2022)
            </span>
          </p>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div 
        variants={itemVariant}
        className="mt-6 flex gap-3 items-start bg-zinc-100 border-l-4 border-zinc-400 rounded-r-xl p-4"
      >
        <Quote className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-1" />
        <p className="text-sm sm:text-base italic text-zinc-700">
          Passionate about leveraging technology to solve real-world problems and
          continuously learning to stay ahead in the evolving tech landscape.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;