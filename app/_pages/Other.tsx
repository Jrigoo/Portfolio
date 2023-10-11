import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

const projects = [
  {
    id: 1,
    title: "Google Clone",
    description:
      "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Google-clone-v2",
    deploy: "https://jrigoo-google.vercel.app/",
    image:
      "https://github.com/Jrigoo/Google-clone-v2/raw/main/public/images/Google%20Main.png",
    techstack: ["Next.js", "Tailwind CSS", "Google API"],
  },
  {
    id: 2,
    title: "Google Clone",
    description:
      "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Google-clone-v2",
    deploy: "https://jrigoo-google.vercel.app/",
    image:
      "https://github.com/Jrigoo/Google-clone-v2/raw/main/public/images/Google%20Main.png",
    techstack: ["Next.js", "Tailwind CSS", "Google API", "Javascript"],
  },
  {
    id: 2,
    title: "Google Clone",
    description:
      "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Google-clone-v2",
    deploy: "https://jrigoo-google.vercel.app/",
    image:
      "https://github.com/Jrigoo/Google-clone-v2/raw/main/public/images/Google%20Main.png",
    techstack: ["Next.js", "Tailwind CSS", "Google API", "Javascript"],
  },
  {
    id: 2,
    title: "Google Clone",
    description:
      "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Google-clone-v2",
    deploy: "https://jrigoo-google.vercel.app/",
    image:
      "https://github.com/Jrigoo/Google-clone-v2/raw/main/public/images/Google%20Main.png",
    techstack: ["Next.js", "Tailwind CSS", "Google API", "Javascript"],
  },
];

export const Other = () => {
  return (
    <section className="min-h-screen mb-20 grid place-content-center">
      <header className="">
        <h1>Other Projects</h1>
        <p className="font-mono md:my-3">Other Projects I have Made</p>
      </header>

      <div className="my-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, key) => (
          <div
            key={key}
            className="relative block bg-blue p-6 rounded-md transition-all delay-75 ease-linear hover:scale-105"
          >
            <a
              href={project.deploy}
              className="w-full h-full absolute top-0 left-0 rounded-md"
            ></a>

            <header className="flex justify-between items-center pb-3">
              <FontAwesomeIcon
                icon={faFolder}
                className="text-3xl text-green"
              />

              <a href={project.github} className="z-10">
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
            </header>
            <h3>Google Clon</h3>
            <p>
              I am a professional focused on the development and leadership of
              training programs in the business field with a strong background
              in electronic engineering and a passion for data analysis.
            </p>

            {/* Tech stack */}
            <ul className="flex flex-wrap gap-x-2 font-mono text-sm text-pink mt-3">
              {project.techstack.map((language, key) => (
                <li key={key}>{language}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
