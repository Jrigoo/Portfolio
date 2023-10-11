import React from "react";
import Image from "next/image";

import CV from "../../public/CV.svg";
import Arrow from "../../public/Arrow.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

import { Nanum_Pen_Script } from "next/font/google";
const nanum = Nanum_Pen_Script({ weight: ["400"], subsets: ["latin"] });

export const About = () => {
  return (
    <section
      className="min-h-screen grid place-items-center md:grid-cols-2 mb-20"
      id="About Me"
    >
      {/* About Me Text */}
      <div className="pb-4 md:order-last">
        <h1>About Me</h1>
        <div className="flex gap-x-3 items-center">
          <FontAwesomeIcon icon={faMap} className="text-sm text-green" />
          <h4 className="font-mono text-rich-gradient font-bold">Panamá</h4>
        </div>
        <p className="py-3">
          I am a <b>professional</b> focused on the development and leadership
          of programs in the business field with a background in electronic
          engineering and a passion for data analysis.
          <br />
          <br />
          My experience as a manager of a leadership program has allowed me to
          develop solid skills in team management and learning facilitation. I
          have designed and executed strategies that have helped develop my
          leadership and teamwork skills. My focus has been on personal
          development, fostering effective communication skills, problem
          solving, and decision making.
        </p>
      </div>

      {/* CV Stage */}
      <div className="flex flex-col items-center">
        <a href="">
          <Image className="h-[170px]" priority src={CV} alt="CV laptop icon" />
        </a>
        <Image className="h-[35px]" priority src={Arrow} alt="Arrow icon" />
        <h3 className={nanum.className}>Download cv.</h3>
      </div>
    </section>
  );
};
