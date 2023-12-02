import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faLaptopCode,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const devSkills = [
  {
    title: "Electronics Engineer",
    description:
      "I’m a passionate last semester electronics engineering student with a interest in IoT, autonomous systems, data science and robotics.",
    subTitle: "Tools and Skills",
    techs: [
      "C/C++",
      "Arduino",
      "Python",
      "Micropython",
      "Easy Eda",
      "Electronics",
    ],
    icon: faBolt,
  },

  {
    title: "Data Analysis",
    description:
      "I like to work with data. The fact that everything on the world is based on data, is an important insight",
    subTitle: "Languages and Tools",
    techs: [
      "Python",
      "Power BI",
      "Looker Studio",
      "SQL",
      "PostgreSQL",
      "Mongo DB",
    ],
    icon: faProjectDiagram,
  },

  {
    title: "Web Development",
    description:
      "I love hardware, but I have found in web development a place to design and place my ideas quickly",
    subTitle: "Languages and Tools",
    techs: [
      "Javascript",
      "HTML & CSS",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
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
