"use client";

import Header from "@/Components/Header";
import Image from "next/image";

import Crew from "@/Components/Crew";

const CrewPage = () => {
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
        width={500}
        height={500}
        quality={100}
        src="/starter-code/assets/crew/background-crew-tablet.jpg"
        alt=""
        className="hidden md:block md:w-full md:absolute md:left-0 md:top-0 md:right-0 md:bottom-0 lg:hidden"
      />
      <Image
        fill
        src="/starter-code/assets/crew/background-crew-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden w-full">
        <Header />
      </div>
      <div className="absolute w-full flex justify-between items-center md:p-0">
        <Crew />
      </div>
    </main>
  );
};

export default CrewPage;
