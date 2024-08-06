import React from "react";
import Image from "next/image";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CV from "../../public/CV.svg";
import Arrow from "../../public/Arrow.svg";

export const About = () => {
  return (
    <section
      className="min-h-screen grid place-items-center md:grid-cols-2 mb-20 sm:pr-10"
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
          I&apos;m currently ending electronics engineering. I enjoy bringing
          ideas to life, exploring data, and experimenting with software. My
          skills enable me to approach projects from various perspectives and
          find effective solutions. Download my Curriculum by clicking the
          laptop beside this text
        </p>
      </div>

      {/* CV Stage */}
      <div className="flex flex-col items-center">
        <a href="https://drive.google.com/file/d/1I-MHzRkJoH_0DnzWCe-dWiAHchIQEZqK/view?usp=drivesdk">
          <Image className="h-[170px]" priority src={CV} alt="CV laptop icon" />
        </a>
        <Image className="h-[35px]" priority src={Arrow} alt="Arrow icon" />
        <h3 className="font-nanum font-light">Download cv.</h3>
      </div>
    </section>
  );
};
