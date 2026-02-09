import { ExternalLink, Github, Code2 } from 'lucide-react';

function Project() {
  const project_data = [
    {
      name: "FinanceFlow",
      desc: "A web app to manage expenses, track budgets, and visualize financial data with interactive charts.",
      tech: "NextJs, Prisma, PostgreSQL, Clerk",
      link: "https://finance-flow-olive.vercel.app/",
    },
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

      <p className="mt-4 max-w-4xl text-sm sm:text-2xl italic text-white">
        A selection of projects demonstrating my full-stack development
        experience. More projects are available on{" "}
        <a
          href="https://github.com/AadityaMohan-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-zinc-900"
        >
          GitHub
          <Github className="w-5 h-5" />
        </a>
        .
      </p>

      {/* Projects Grid */}
      <div className="mt-10 bg-[#f6936b] p-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project_data.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              bg-white
              text-black
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:shadow-2xl
              hover:-translate-y-2
              border-2
              border-transparent
              hover:border-zinc-300
            "
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#f6936b] opacity-10 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
                <Code2 className="w-5 h-5 text-[#f6936b] opacity-60" />
              </div>

              <p className="mt-3 text-sm text-zinc-700 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-zinc-200">
                <p className="text-xs text-zinc-600">
                  <span className="font-semibold text-black">Tech Stack:</span>{" "}
                  {project.tech}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 
                  inline-flex 
                  items-center 
                  gap-2 
                  text-sm 
                  font-semibold 
                  text-[#f6936b]
                  hover:gap-3
                  transition-all
                  duration-200
                "
              >
                View Project 
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;