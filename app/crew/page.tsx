"use client";

import Header from "@/Components/Header";
import Image from "next/image";
import React, { useState } from "react";
import Crew from "@/Components/Crew";

type ShowNav = boolean;

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showNav, setShowNav] = useState<ShowNav>(false);
  return (
    <main>
      <Image
        width={500}
        height={500}
        src="/starter-code/assets/crew/background-crew-mobile.jpg"
        alt=""
        className="absolute min-h-[44.375rem] h-full md:w-0 md:h-0 md:hidden"
      />
      <Image
        fill
        src="/starter-code/assets/crew/background-crew-tablet.jpg"
        alt=""
        className="hidden md:block md:w-full md:h-full lg:hidden lg:w-0 lg:h-0"
      />
      <Image
        fill
        src="/starter-code/assets/crew/background-crew-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden w-full">
        <Header setShowNav={setShowNav} showNav={showNav} />
      </div>
      <div className="absolute w-full flex justify-between items-center p-7 md:p-0">
        <Crew />
      </div>
    </main>
  );
};

export default page;
