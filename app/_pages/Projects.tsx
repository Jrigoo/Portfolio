import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Autonomous from "../../public/Autonomous.png";
import TNGO from "../../public/TNGO.svg";

export const Projects = () => {
  const featuredProjects = [
  {
    id: 1,
    title: "Sales Outliers Report",
    description:
      "Developed a strategic BI solution to mitigate Trade Loading risks and normalize monthly sales pacing. The project addressed a historical trend where % of monthly sales was concentrated in the Last 7 Days (L7D), impacting supply chain health and inventory levels.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    image:
      "https://media.licdn.com/dms/image/v2/D4E2DAQHetndhyHagpw/profile-treasury-image-shrink_800_800/B4EZvw2OppGsAY-/0/1769272306712?e=1769904000&v=beta&t=IwJD15lt4UUC6O6AjQau_rvlRYiM01e2cF26vL3JOHU",
    techstack: ["SQL", "Python", "Power BI", "SQL Server"],
  },
  {
    id: 2,
    title: "Wholesalers & Retailers Inventory Report",
    description:
      "Designed and developed a comprehensive Power BI dashboard providing sales executives with actionable visibility into retail and wholesale inventories within the Traditional Channel.",
    isFeatured: true,
    github: "https://www.linkedin.com/in/jrigoo/details/projects/",
    deploy: "https://www.linkedin.com/in/jrigoo/details/projects/",
    image:
      "https://media.licdn.com/dms/image/v2/D4E2DAQHJIBxrU_PNjw/profile-treasury-image-shrink_800_800/B4EZvxJC9hI8AY-/0/1769277239646?e=1769904000&v=beta&t=X1gmXEXgkHeWYYxYsKLM7_AW70taTGyreQdinQfv0Ic",
    techstack: ["SQL", "SQL Server", "Power BI", "Power Platform"],
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
