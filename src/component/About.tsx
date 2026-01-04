import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// const item = {
//   hidden: { opacity: 0, y: 14 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

function About() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.h1
       
        className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.div className="mt-6 space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl lg:text-2xl">
            Hi, I’m Aaditya Mohan.
          </h2>

          <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 sm:text-base">
            <span>📍</span>
            <span>Greater Noida, India</span>
          </div>
        </div>

        <p className="max-w-4xl text-sm leading-relaxed text-zinc-700 sm:text-base lg:text-lg">
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
          <span className="font-semibold">AWS cloud migration</span>,
          performance tuning, and database optimization—focused on clean,
          maintainable, production-ready code.
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div
        
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {[
          {
            title: "Backend & Architecture",
            text:
              "Built scalable backend systems using Spring Boot, Hibernate, JPA, and REST APIs. Converted legacy SOAP services into modern microservices.",
          },
          {
            title: "Performance Optimization",
            text:
              "Improved application performance through SQL optimization and service refactoring, reducing API latency by 30%.",
          },
          {
            title: "Cloud & DevOps",
            text:
              "Migrated enterprise applications from on-premise to AWS cloud-ready architecture. Familiar with Docker, CI/CD, and Git.",
          },
          {
            title: "Agile Collaboration",
            text:
              "Worked in Agile Scrum teams, contributing to sprint planning, code reviews, mentoring juniors, and feature delivery.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-sm font-semibold text-zinc-900 sm:text-base">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {card.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.h2
        
        className="mt-12 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl"
      >
        Education
      </motion.h2>

      <motion.p
        
        className="mt-4 text-sm text-zinc-700 sm:text-base"
      >
        <span className="font-semibold">
          Bachelor of Technology (B.Tech) – Computer Science
        </span>
        <br />
        IEC College of Technology, Greater Noida (2018 – 2022)
      </motion.p>

      {/* Quote */}
      <motion.p
       
        className="mt-12 max-w-3xl text-sm italic text-zinc-600"
      >
        “Passionate about leveraging technology to solve real-world problems and
        continuously learning to stay ahead in the evolving tech landscape.”
      </motion.p>
    </motion.section>
  );
}

export default About;
