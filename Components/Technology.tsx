import React, { useState } from "react";
import { technologyData } from "./technologyData";
import Image from "next/image";
import clsx from "clsx";

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  return (
    <div className="w-full flex flex-col gap-[2rem] items-center">
      <p>
        <span>03</span> SPACE LAUNCH 101
      </p>
      <div className="flex flex-col items-center w-full">
        <Image
          width={500}
          height={500}
          quality={100}
          alt=""
          src={technologyData[selectedTech].img}
          className="w-full"
        />
        <hr className="border-white w-full" />
      </div>
      <div className="flex justify-between gap-4 w-[9.5rem]">
        {technologyData.map((crew, index) => {
          const onClickHandler = () => {
            setSelectedTech(index);
          };
          return (
            <div
              onClick={onClickHandler}
              key={index}
              className={clsx(
                "p-2 rounded-full w-[4rem] flex items-center justify-center",
                {
                  "bg-[rgba(255,255,255,0.5)]": selectedTech !== index,
                  "bg-white": selectedTech === index,
                }
              )}
            >
              {index}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-4 h-[15rem] p-4">
        <div className="flex flex-col items-center">
          <h4 className="font-medium text-[20px]">THE TERMINOLOGY…</h4>
          <h4>{technologyData[selectedTech].name}</h4>
        </div>
        <p className="text-center text-[15px]">
          {technologyData[selectedTech].desc}
        </p>
      </div>
    </div>
  );
};

export default Technology;
