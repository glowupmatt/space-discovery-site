"use client";

import Header from "@/Components/Header";
import Technology from "@/Components/Technology";
import Image from "next/image";
import React, { useState } from "react";

type ShowNav = boolean;

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showNav, setShowNav] = useState<ShowNav>(false);
  return (
    <main>
      <Image
        fill
        src="/starter-code/assets/technology/background-technology-mobile.jpg"
        alt=""
        className="absolute h-[57.125rem] md:w-0 md:h-0 md:hidden"
      />
      <Image
        fill
        src="/starter-code/assets/technology/background-technology-tablet.jpg"
        alt=""
        className="hidden md:block md:w-full md:h-full lg:hidden lg:w-0 lg:h-0"
      />
      <Image
        fill
        src="/starter-code/assets/technology/background-technology-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden w-full">
        <Header setShowNav={setShowNav} showNav={showNav} />
      </div>
      <div className="absolute flex justify-between items-center">
        <Technology />
      </div>
    </main>
  );
};

export default page;
