import React from "react";
import Image from "next/image";
import Calendar from "../../public/Calendar.svg";
import { BulletLine } from "../_components/BulletLine";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const eduExp = [
  {
    type: "Education",
    content: [
      {
        date: "2019-2024",
        title: "Electronics Engineering",
        description:
          "Currently studying the last semester of the Electronics Engineering degree with a GPA of 2.52 out of 3",
      },
      {
        date: "2022",
        title: "Platzi",
        description:
          "I'm always like to learn by myself. Currently doing the Data Science with Python route",
      },
    ],
  },
  {
    type: "Experience",
    content: [
      {
        date: "Jun 2022 - Jul 2023",
        title: "Product Specialist in AIESEC",
        description:
          "Director of Leaders Lab, a program for young people based on Design Thinking and Project Management",
      },
      {
        date: "Jan 2022 - Jul 2022",
        title: "Data Developer in AIESEC",
        description:
          "In this role I was responsible for generating software solutions to efficiently automate processes that drive sales growth",
      },
    ],
  },
];

export const Education = () => {
  return (
    <section className="min-h-screen">
      <header className="text-center mb-5">
        <h1>Education & Experience</h1>
        <p className="font-mono md:my-3">My personal journey</p>
      </header>

      {/* Education and Experience  -> To understand code check tablet or grid view*/}
      <div
        className="
        grid grid-cols-[8%,92%] grid-rows-[repeat(6,fit-content(100%))] gap-y-3 place-items-center sm:grid-cols-[4%,46%,4%,46%] sm:grid-rows-[repeat(3,fit-content(100%))]"
      >
        {eduExp.map((eType, key) => {
          return (
            <>
              {/* Title  */}
              <h3
                key={key}
                className={`col-start-2 justify-self-start px-1 sm:row-start-1 ${
                  key * 3 + 1 == 1 ? "sm:col-start-2" : "sm:col-start-4"
                }`}
              >
                {eType.type}
              </h3>

              {/* Bullet Line */}
              <BulletLine
                className={`col-start-1 row-span-2 w-[2px] h-full bg-green flex  flex-col justify-between sm:row-start-2 ${
                  key * 3 + 2 == 2
                    ? "row-start-2 sm:col-start-1"
                    : "row-start-5 sm:col-start-3"
                } `}
              />

              {/* Content per title */}
              {eType.content.map((experience, idx) => {
                return (
                  <div
                    key={idx}
                    className={`col-start-2 h-full rounded border border-green p-3 ${
                      key * 2 + 2 == 2 ? "sm:col-start-2" : "sm:col-start-4"
                    } ${idx + 2 == 2 ? "sm:row-start-2" : "sm:row-start-3"}`}
                  >
                    <header className="flex items-center gap-x-2 mb-1">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-sm text-green"
                      />
                      <p className="text-green text-xs">{experience.date}</p>
                    </header>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
};
