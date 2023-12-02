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
      className="min-h-screen grid place-items-center md:grid-cols-2 mb-20 pr-10"
      id="About Me"
    >
      {/* About Me Text */}
      <div className="pb-4 md:order-last">
        <h1>About Me</h1>
        <div className="flex gap-x-3 items-center">
          <FontAwesomeIcon icon={faMap} className="text-sm text-green" />
          <h4 className="font-mono text-rich-gradient font-bold">Panamá</h4>
        </div>
        <p className="py-3 text-justify">
          I am an electronics engineer student with some management experience,
          a passion for electronics, data science and software. My combination
          of technical and interpresonal skills allows me to approach projects
          holistically and provide effective solutions.
        </p>
      </div>

      {/* CV Stage */}
      <div className="flex flex-col items-center">
        <a href="https://drive.google.com/file/d/1HyRPwsgVJbi2RxGgKUgu0nv9scOwWCbA/view?usp=sharing">
          <Image className="h-[170px]" priority src={CV} alt="CV laptop icon" />
        </a>
        <Image className="h-[35px]" priority src={Arrow} alt="Arrow icon" />
        <h3 className={nanum.className}>Download cv.</h3>
      </div>
    </section>
  );
};
