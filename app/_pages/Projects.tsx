import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { PrismaClient, Prisma } from "@prisma/client";

export const Projects = async () => {
  /*  
  const prisma = new PrismaClient();
  const featuredProjects = await prisma.projects.findMany({
    where: {
      isFeatured: true,
    },
  }); */

  const featuredProjects = [
    {
      id: 1,
      title: "Google Clone",
      description:
        "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
      isFeatured: true,
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
      isFeatured: true,
      github: "https://github.com/Jrigoo/Google-clone-v2",
      deploy: "https://jrigoo-google.vercel.app/",
      image:
        "https://github.com/Jrigoo/Google-clone-v2/raw/main/public/images/Google%20Main.png",
      techstack: ["Next.js", "Tailwind CSS", "Google API", "Javascript"],
    },
  ];
  return (
    <section className="min-h-screen mb-5" id="Projects">
      <header>
        <h1>Projects</h1>
        <p className="font-mono md:my-3">Things I have Made</p>
      </header>

      {/* Featured Projects */}
      <div className="my-10 w-full flex flex-wrap justify-center">
        {featuredProjects.map((fproject) => (
          <div
            key={fproject.title}
            className="max-w-4xl my-10 grid place-items-center sm:grid-cols-[57%,43%]"
          >
            {/* Imagen del proyecto */}
            <a href={fproject.deploy} className="w-full h-full ">
              <Image
                src={fproject.image}
                alt={`${fproject.title} project image preview`}
                width={320}
                height={200}
                className="w-full h-full object-cover rounded-t-md sm:rounded-md"
              />
            </a>

            {/* Contenido y Descripción */}
            <div className="px-4 py-5 bg-blue rounded-b-md sm:rounded-md sm:bg-transparent">
              <div className="flex justify-between items-center">
                {/* Github Logo */}
                <a href={fproject?.github ? fproject?.github : ""}>
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>

                {/* Title of featured project */}
                <div className="text-right">
                  <p className="text-green">Featured Project</p>
                  <h3>{fproject.title}</h3>
                </div>
              </div>

              {/* Parrafo */}
              <p className="max-w-3xl relative text-justify sm:bg-blue sm:p-3 sm:rounded-md sm:w-[155%] sm:right-[55%] md:w-[135%] md:right-[35%] md:p-4 lg:px-6 lg:py-5">
                {fproject.description}
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-x-2 font-mono text-sm text-pink mt-3">
                {fproject.techstack.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
