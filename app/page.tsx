"use client";

import Image from "next/image";
import Header from "@/components/Header";
import React, { useState } from "react";

type ShowNav = boolean;

export default function Home() {
  const [showNav, setShowNav] = useState<ShowNav>(false);
  return (
    <main>
      <Image
        fill
        src="/starter-code/assets/home/background-home-mobile.jpg"
        alt=""
        className="w-full md:w-0 md:h-0 md:hidden"
      />
      <Image
        width={500}
        height={500}
        quality={100}
        src="/starter-code/assets/home/background-home-tablet.jpg"
        alt=""
        className="hidden md:block md:min-h-screen md:h-[60rem] md:w-full md:absolute md:left-0 md:top-0 md:right-0 md:bottom-0 lg:hidden"
      />
      <Image
        fill
        src="/starter-code/assets/home/background-home-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden">
        <Header setShowNav={setShowNav} showNav={showNav} />
      </div>
      <div className="absolute h-[85%] flex flex-col justify-between items-center p-7 md:p-0 md:w-full md:justify-center md:h-[52rem] md:gap-[6rem]">
        <div className="flex flex-col justify-between items-center gap-4 md:w-[28.125rem] md:justify-center">
          <p className="text-white">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-[80px] md:text-[9.375rem]">SPACE</h1>
          <p className="text-center text-[12px] md:text-[1rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="rounded-full bg-white p-[4rem] flex items-center w-[10rem] justify-center bottom-0 relative md:p-[6rem] md:w-[14rem]">
          <h2 className="text-[20px] z-50 text-black">EXPLORE</h2>
        </div>
      </div>
    </main>
  );
}
