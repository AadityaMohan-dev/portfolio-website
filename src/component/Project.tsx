function Project() {
  const project_data = [
    {
      name: "Auth App",
      desc: "An authentication application to manage authentication for SaaS platforms.",
      tech: "Java, Spring Boot, MySQL, JPA, REST APIs",
      link: "https://github.com/your-username/expense-splitter",
    },
    {
      name: "ChatPal",
      desc: "A GenAI-powered chatbot with real-time messaging and LLM-based responses.",
      tech: "Java, Spring Boot, WebSocket, React, Gemini AI API",
      link: "https://github.com/AadityaMohan-dev/ChatPal",
    },
    {
      name: "ByteBlog",
      desc: "A full-stack blogging platform with authentication, publishing, and engagement features.",
      tech: "Next.js, Tailwind CSS, Prisma, PostgreSQL, Clerk",
      link: "https://github.com/AadityaMohan-dev/ByteBlog",
    },
    {
      name: "Expense Manager",
      desc: "A web app to manage group expenses, balances, and settlements.",
      tech: "React, Tailwind CSS",
      link: "https://expense-tracker-mu-sandy.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Projects
      </h1>

      <p className="mt-4 max-w-4xl  text-sm sm:text-2xl italic text-white">
        A selection of projects demonstrating my full-stack development
        experience. More projects are available on{" "}
        <a
          href="https://github.com/AadityaMohan-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          GitHub
        </a>
        .
      </p>

      {/* Projects Grid */}
      <div className="mt-10 bg-[#f6936b]  p-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project_data.map((project, index) => (
          <div
            key={index}
            className="
              border
              rounded-xl
              bg-white
              text-black
              p-6
              transition
              hover:-translate-y-1
              hover:border-zinc-400
            "
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>

            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
              {project.desc}
            </p>

            <p className="mt-3 text-xs text-zinc-600">
              <span className="font-semibold">Tech:</span> {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:text-zinc-900"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
