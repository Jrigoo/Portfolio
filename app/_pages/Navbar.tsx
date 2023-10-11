"use client";
import React from "react";
import Image from "next/image";
import wave from "../../public/Wave.svg";

export const Navbar = () => {
  const [btn, setBtn] = React.useState(false);

  return (
    <nav className="w-full bg-dark h-fit py-6 sticky top-0 left-0 opacity-95 md:flex md:items-center md:justify-between z-20">
      <div className="flex justify-between md:w-fit">
        {/* Logo */}
        <div>
          <h3 className="h-fit text-lg text-rich-gradient">Jrigoo.</h3>
          <Image
            priority
            src={wave}
            alt="Wave design svg for logo complement"
          />
        </div>

        {/* Burger Button */}
        <button
          className={`relative group peer flex flex-col justify-center items-end md:hidden`}
          onClick={() => setBtn((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-7 rich-gradient transition-all ease-in ${
              btn && "absolute -rotate-45"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 rich-gradient my-2 ${btn && "invisible"}`}
          ></span>
          <span
            className={`h-0.5 w-5 rich-gradient transition-all ease-in ${
              btn && "absolute w-7 rotate-45"
            }`}
          ></span>
        </button>
      </div>

      {/* Navbar navigation */}

      <ul
        className={`absolute transition-all duration-100 md:visible md:w-fit md:flex md:justify-between md:gap-x-5 md:static w-full ${
          btn ? "block bg-dark w-full py-5" : "invisible"
        }`}
      >
        {["Home", "About Me", "Skills", "Projects", "Contact"].map(
          (navLink, key) => (
            <li key={key} className={`nav-link  ${btn && "opacity-100"}`}>
              <a href={`#${navLink}`}>{navLink}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
