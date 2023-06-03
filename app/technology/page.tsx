"use client";

import Header from "@/Components/Header";
import Technology from "@/Components/Technology";
import Image from "next/image";

const TechnologyPage = () => {
  return (
    <main>
      <Image
        width={500}
        height={500}
        src="/starter-code/assets/technology/background-technology-mobile.jpg"
        alt=""
        className="absolute h-[43rem] min-h-screen md:w-0 md:h-0 md:hidden"
      />
      <Image
        width={500}
        height={500}
        src="/starter-code/assets/technology/background-technology-tablet.jpg"
        alt=""
        className="hidden md:absolute md:block md:w-full md:max-h-[74rem] lg:hidden lg:w-0 lg:h-0"
      />
      <Image
        fill
        src="/starter-code/assets/technology/background-technology-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden w-full">
        <Header />
      </div>
      <div className="absolute flex justify-between items-center">
        <Technology />
      </div>
    </main>
  );
};

export default TechnologyPage;
