import chatpal from "../assets/chatpal.png";

function Project() {
  const project_data = [
    {
      name: "Auth App",
      desc: "An authentication application to manage authentication of your sass app.",
      tech: "Java, Spring Boot, MySQL, JPA, REST APIs",
      link: "https://github.com/your-username/expense-splitter",
      img: chatpal,
    },
    {
      name: "ChatPal",
      desc: "A GenAI chatbot that answers user queries using LLMs with real-time messaging support.",
      tech: "Java, Spring Boot, WebSocket, React, Gemini AI API",
      link: "https://github.com/AadityaMohan-dev/ChatPal",
      img: chatpal,
    },
    {
      name: "ByteBlog",
      desc: "A full-stack blog application supporting post creation, editing, publishing, and user engagement.",
      tech: "Next Js , Tailwind Css, Prisma , Postgres , Clerk.",
      link: "https://github.com/AadityaMohan-dev/ByteBlog",
      img: chatpal,
    },
    {
      name: "Expense Manager",
      desc: "A web application to manage group expenses, track balances, and simplify settlements.",
      tech: "React , Tailwind Css",
      link: "https://expense-tracker-mu-sandy.vercel.app/",
      img: chatpal,
    },
  ];

  return (
    <div className="px-5">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight py-10">
        Personal Projects
      </h1>

        <h2 className="text-sm sm:text-3xl italic pb-5 text-zinc-900 mb-6">
  "A selection of key projects demonstrating my full-stack development experience.
  Additional projects are available on <a href="https://github.com/AadityaMohan-dev?tab=repositories" className="text-white">GitHub</a>."
</h2>

      <div className="grid p-16  rounded-2xl bg-[#f6936b] grid-cols-1 sm:grid-cols-2 gap-6">
        {project_data.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl  shadow-sm"
          >
            {/* Project Image */}
         
            <div
              className="
                
               group
              rounded-2xl
              border
              bg-white
              text-zinc-900
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
                
                
              "
            >
              <h3 className="text-xl font-semibold ">
                {project.name}
              </h3>

              <p className="mt-3 text-sm  leading-relaxed">
                {project.desc}
              </p>

              <p className="mt-3 text-xs ">
                <span className="font-semibold ">Tech:</span>{" "}
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-300"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Project;
