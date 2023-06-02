"use client";

import React, { useState } from "react";
import { destinationData } from "./destinationData";
import Image from "next/image";
import classNames from "classnames";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);

  return (
    <div className="flex flex-col gap-4 justify-center items-center md:gap-[2rem]">
      <div className="md:w-full ">
        <p>
          <span>01</span> Pick your destination
        </p>
      </div>
      <Image
        width={500}
        height={500}
        quality={100}
        alt=""
        src={destinationData[selectedPlanet].img}
        className="w-1/2 md:w-[18.75rem]"
      />
      <div className="flex gap-4">
        {destinationData.map((info, index) => {
          const onClickHandler = () => {
            setSelectedPlanet(index);
          };
          return (
            <div className="flex flex-col gap-3" key={index}>
              <button onClick={onClickHandler} className="cursor-pointer">
                <p>{info.title}</p>
              </button>
              <hr
                className={classNames("border-white border-y-2", {
                  hidden: selectedPlanet !== index,
                })}
              />
            </div>
          );
        })}
      </div>
      <div className="text-center flex flex-col gap-8 md:gap-[3rem]">
        <div>
          <h2 className="text-[56px] md:text-[5rem]">
            {destinationData[selectedPlanet].title}
          </h2>
          <p className="text-[15px] md:px-[6rem]">
            {destinationData[selectedPlanet].desc}
          </p>
        </div>
        <hr className="border-white" />
        <div className="flex flex-col gap-6 justify-center items-center h-full md:flex-row md:gap-[6.5rem]">
          <div>
            <p className="text-[14px]">Average. Distance</p>
            <h4>{destinationData[selectedPlanet].distance}</h4>
          </div>
          <div>
            <p className="text-[14px]">EST. TRAVEL TIME</p>
            <h4>{destinationData[selectedPlanet].travelTime}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
