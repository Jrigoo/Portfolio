import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

const projects = [
  {
    title: "Sales Outliers Report",
    description:
      "Developed a strategic BI solution to mitigate Trade Loading risks and normalize monthly sales pacing. The project addressed a historical trend where % of monthly sales was concentrated in the Last 7 Days (L7D), impacting supply chain health and inventory levels.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    techstack: ["Python", "SQL", "Power BI", "SQL Server"],
  },
  {
    title: "Wholesalers & Retailers Inventory Report",
    description:
      "Designed and developed a comprehensive Power BI dashboard providing sales executives with actionable visibility into retail and wholesale inventories within the Traditional Channel.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    techstack: ["Python", "SQL", "Power BI", "SQL Server"],
  },
  {
    title: "Stock & DOI Data Pipeline + Report",
    description:
      "Developed a data pipeline and Power BI report to provide Sales and Logistics teams with near real time visibility into stock availability. This solution enables stock redistribution across all Distribution Centers (DCs) to minimize supply chain losses and prevent stockouts.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    techstack: ["SAP ERP", "Azure", "Pentaho", "SQL", "Power BI", "SQL Server"],
  },
  {
    title: "Clients Dimension Table Extraction Refactorization",
    description:
      "Developed a full refactor and automation of the SAP clients dimensions table extraction process. Replaced a manual workflow based on SQVI exports and a single, highly complex Alteryx flow with a scalable and maintainable architecture.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    techstack: [
      "SAP ERP",
      "Alteryx",
      "Pentaho",
      "SQL",
      "Power BI",
      "SQL Server",
    ],
  },
  {
    title: "Autonomous Trash Can",
    description:
      "The TNGO is an autonomous trash can that allows you to recycle waste. For this first version, the prototype is capable of classifying papers, cans and plastic bottles. The device uses audio and image neural networks for the classification.",
    isFeatured: true,
    github: "https://github.com/Jrigoo/TNGO-Neural-Networks",
    deploy: "https://github.com/Jrigoo/TNGO-Neural-Networks",
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
    title: "Autonomous Vehicle",
    description:
      "In this project I was capable to control a vehicle so it can read GPS data to move through a path autonomously. It was using the MORAI Sim simulator",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Simple-Autonomous-Vehicle",
    deploy: "https://github.com/Jrigoo/Simple-Autonomous-Vehicle",
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
  {
    title: "AIESEC Exchanges Form",
    description:
      "This form provides AIESEC a tool to connect clients to internship or volunteer opportunities abroad and gather their info diretly into the Podio CRM",
    isFeatured: false,
    github: "https://github.com/Jrigoo/AIESEC-Exchanges",
    deploy: "https://aiesec-pty-register.vercel.app/",
    techstack: ["Next.js", "Typescript", "Tailwind CSS", "Podio API"],
  },
  {
    title: "Block Color Classifier",
    description:
      "In this project I was capable to control a robot using the Coppelia Sim simulator in order to classify a group of blocks based on their colors",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Blocks-Classifier",
    deploy: "https://github.com/Jrigoo/Blocks-Classifier",
    techstack: ["Python", "Coppelia Sim", "Open CV"],
  },
  {
    title: "Google Clone",
    description:
      "This Google Clone Project is a fullstack web application. It aims to replicate the core functionalities and design of the popular search engine Google.",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Google-Clone",
    deploy: "https://jrigoo-google.vercel.app/",
    techstack: ["Next.js", "Tailwind CSS", "Google API", "Javascript"],
  },

  {
    title: "Countries REST API",
    description:
      "This is a Javascript page that reads REST countries API using webpack as bundler and babel as compiler. This is one of the front end mentor challenges",
    isFeatured: false,
    github: "https://github.com/Jrigoo/Countries",
    deploy: "https://jrigoo-countries-api.netlify.app/",
    techstack: ["Javascript", "Rest API"],
  },
];

export const Other = () => {
  return (
    <section className="min-h-screen mb-20 grid place-content-center">
      <header className="">
        <h1>Projects</h1>
        <p className="font-mono md:my-3">Projects I have Made</p>
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
            <h3>{project.title}</h3>
            <p className="text-justify">{project.description}</p>

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
