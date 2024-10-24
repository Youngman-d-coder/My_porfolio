import React from "react";

const projects: any[] = [
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built using react and tailwind css",
    link: "https://github.com",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built using react and tailwind css",
    link: "https://github.com",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built using react and tailwind css",
    link: "https://github.com",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built using react and tailwind css",
    link: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-blue-800 mt-[60px] text-white p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-blue-800 shadow-md rounded-lg p-4"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.linl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
