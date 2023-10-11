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
          "Currently Studying my last semester at Universidad Tecnológica de Panamá. My GPA is 2.5 of 3",
      },
      {
        date: "2022",
        title: "Platzi",
        description:
          "I'm always like to learn by myself. Currently doing the Data Analysis and Data Science with Python routes",
      },
    ],
  },
  {
    type: "Experience",
    content: [
      {
        date: "2022-2023",
        title: "Program Manager",
        description:
          "Worked as a Program Manager in AIESEC, managed team of more than 20 volunteers, and deliver a program for more than 45 clients",
      },
      {
        date: "2020-2021",
        title: "Business Intelligence for AM",
        description:
          "Worked as a Business Intelligence Analyst in charge of developing tools for partners to generate growth",
      },
    ],
  },
];

export const Education = () => {
  return (
    <section className="mb-20 min-h-screen">
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
