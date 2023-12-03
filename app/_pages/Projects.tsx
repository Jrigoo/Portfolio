import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Autonomous from "../../public/Autonomous.png";
import TNGO from "../../public/TNGO.svg";

export const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Autonomous Trash Can",
      description:
        "The TNGO is an autonomous trash can that allows you to recycle waste. For this first version, the prototype is capable of classifying papers, cans and plastic bottles. The device uses audio and image neural networks for the classification.",
      isFeatured: true,
      github: "https://github.com/Jrigoo/TNGO-Neural-Networks",
      deploy: "https://github.com/Jrigoo/TNGO-Neural-Networks",
      image: TNGO,
      techstack: [
        "Fusion-360",
        "Python",
        "Tensorflow",
        "Keras",
        "Raspberry Pi",
        "Electronics",
      ],
    },
    {
      id: 2,
      title: "Autonomous Vehicle",
      description:
        "In this project I was capable to control a vehicle so it can read GPS data to move through a path autonomously. It was using the MORAI Sim simulator",
      isFeatured: true,
      github: "https://github.com/Jrigoo/Simple-Autonomous-Vehicle",
      deploy: "https://github.com/Jrigoo/Simple-Autonomous-Vehicle",
      image: Autonomous,
      techstack: [
        "Python",
        "UDP-Sockets",
        "Open CV",
        "Matplotlib",
        "Numpy",
        "Scipy",
        "Pyproj",
      ],
    },
  ];
  return (
    <section className="min-h-screen mb-5" id="Projects">
      <header>
        <h1>Projects</h1>
        <p className="font-mono md:my-3">Some projects I have worked on</p>
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
