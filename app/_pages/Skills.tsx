import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faLaptopCode,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const devSkills = [
  {
    title: "Data Science & Analysis",
    description:
      "I also have experience in data analysis, transforming raw data into meaningful insights.",
    subTitle: "Languages and Tools",
    techs: ["Python", "Pandas", "Sklearn", "Alteryx", "Power BI", "SQL"],
    icon: faProjectDiagram,
  },
  {
    title: "Analytics Engineer",
    description:
      "I’m a experienced analytics engineer working as a bridge between data engineering and data analysis.",
    subTitle: "Tools and Skills",
    techs: ["Pentaho PDI", "SQL Server", "Alteryx", "Python", "Databricks"],
    icon: faBolt,
  },
  {
    title: "Software Development",
    description:
      "I love to create stuff (like this website). I like to build web apps and automate tasks.",
    subTitle: "Languages and Tools",
    techs: ["Javascript", "HTML & CSS", "Typescript", "Figma"],
    icon: faLaptopCode,
  },
];

export const Skills = () => {
  return (
    <section className="min-h-screen  mb-20" id="Skills">
      <header className="text-center">
        <h1>Skills</h1>
        <p className="font-mono md:my-3">Some of the Skills I have</p>
      </header>

      <div className="my-4 place-content-center grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {devSkills.map((skill, key) => (
          <div
            key={key}
            className="px-4 py-5 bg-blue flex flex-col items-center rounded-md text-center max-w-[365px] sm:h-full sm:justify-center"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-6xl pb-4 text-green"
            />
            <h3 className="mb-1">{skill.title}</h3>
            <p className="mb-2">{skill.description}</p>
            <div className="font-mono">
              <h5 className=" text-green">{skill.subTitle}</h5>
              <p>
                {skill.techs.map((tech) => (
                  <>
                    {tech} <br />
                  </>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
