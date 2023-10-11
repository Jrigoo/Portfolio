import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faLaptopCode,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const devSkills = [
  {
    title: "Electronics Engineer",
    description:
      "I’m a dedicated and passionate fourth-year electronics engineering student, with a keen eye for detail and a thirst for knowledge",
    subTitle: "Languages I speak",
    techs: ["Python", "C/C++", "Octave", "Arduino", "VHDL (basic)"],
    icon: faBolt,
  },
  {
    title: "Data Analyst",
    description:
      "I’m a dedicated data science enthusiast student with a huge interest in growing more and developing in this field",
    subTitle: "Languages and Tools",
    techs: ["Excel/Google Sheets", "Looker Studio", "SQL", "Python"],
    icon: faDatabase,
  },
  {
    title: "Fullstack Developer",
    description:
      "   I have some knowlege on web development (that’s how I made this website). I always loved to create things",
    subTitle: "Languages and Tools",
    techs: [
      "HTML-CSS-Javascript",
      "React.js",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
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

      <div className="my-4 place-items-center grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {devSkills.map((skill, key) => (
          <div
            key={key}
            className="px-4 py-5 bg-blue flex flex-col items-center rounded-md text-center max-w-[365px] sm:h-full sm:justify-between"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-6xl text-green my-3"
            />
            <h3 className="mb-2">{skill.title}</h3>
            <p className="mb-4">{skill.description}</p>
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
