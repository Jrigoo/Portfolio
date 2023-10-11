import React from "react";

import Image from "next/image";
import Riquelme from "../../public/Riquelme.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

export const Hero = () => {
  return (
    <section
      className="min-h-screen grow grid place-content-center mb-20"
      id="Home"
    >
      <div className="h-fit my-10 sm:grid sm:grid-cols-2 sm:place-items-center">
        {/* Personal Info  */}
        <article>
          <p className="px-2">Hello I&apos;m</p>
          <h1>Juan Riquelme</h1>
          <h2 className="text-rich-gradient">
            Software Developer & Data Enthusiast
          </h2>

          {/* Description */}
          <p className="my-3">
            I am a professional focused on the development and leadership of
            training programs in the business field with a strong background in
            electronic engineering and a passion for data analysis.
          </p>

          {/* Let's Connect */}
          <a
            href="mailto:pk.juanr@gmail.com"
            className="flex items-center gap-x-3 cursor-pointer"
          >
            <h6 className="text-rich-gradient">Let&apos;s Connect</h6>
            <FontAwesomeIcon
              icon={faCircleRight}
              className="text-2xl text-green"
            />
          </a>
        </article>

        {/* Personal Image */}
        <div className="relative hidden sm:block bg-blue w-[75%] md:w-[60%] justify-self-end mr-5">
          <Image
            src={Riquelme}
            width={347}
            height={421}
            alt="Juan Riquelme, me. Web page portfolio owner's image"
            className="w-full relative top-5 left-5 object-contain"
          />
          <div className="absolute w-full h-full top-5 left-5 z-10 bg-blue-filter"></div>
        </div>
      </div>

      {/* Socials */}
      <div className="w-full flex gap-x-5">
        <a href="https://github.com/Jrigoo">
          <FontAwesomeIcon icon={faGithub} className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/jrigoo/">
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
        </a>
      </div>
    </section>
  );
};
