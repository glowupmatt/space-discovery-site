import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { crewData } from "./crewData";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="md:w-full md:self-start">
        <p>
          <span>02</span> Meet your crew
        </p>
      </div>
      <div className="md:flex md:flex-col-reverse md:items-center md:h-full">
        <div className="flex flex-col items-center md:w-full">
          <Image
            width={500}
            height={500}
            quality={100}
            alt=""
            src={crewData[selectedCrew].img}
            className="w-[70%]"
          />
          <hr className="border-white w-full md:hidden" />
        </div>
        <div className="flex justify-between w-[7rem]">
          {crewData.map((crew, index) => {
            const onClickHandler = () => {
              setSelectedCrew(index);
            };
            return (
              <div
                onClick={onClickHandler}
                key={index}
                className={clsx("p-2 rounded-full", {
                  "bg-[rgba(255,255,255,0.5)]": selectedCrew !== index,
                  "bg-white": selectedCrew === index,
                })}
              ></div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4 h-[15rem]">
          <div className="flex flex-col items-center">
            <h4 className="font-medium text-[20px]">
              {crewData[selectedCrew].title}
            </h4>
            <h4>{crewData[selectedCrew].name}</h4>
          </div>
          <p className="text-center text-[15px] md:px-[12rem] md:py-0 md:text-[16px]">
            {crewData[selectedCrew].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
