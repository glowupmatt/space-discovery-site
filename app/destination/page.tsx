"use client";

import Destination from "@/Components/Destination";
import Header from "@/Components/Header";
import Image from "next/image";

const DestinationPage = () => {
  return (
    <main>
      <Image
        width={500}
        height={500}
        src="/starter-code/assets/destination/background-destination-mobile.jpg"
        alt=""
        className="absolute h-[57.125rem] md:hidden"
      />
      <Image
        width={500}
        height={500}
        src="/starter-code/assets/destination/background-destination-tablet.jpg"
        alt=""
        className="hidden md:absolute md:block md:w-full md:min-h-[64rem] md:h-full lg:hidden lg:w-0 lg:h-0"
      />
      <Image
        fill
        src="/starter-code/assets/destination/background-destination-desktop.jpg"
        alt=""
        className="hidden lg:block lg:w-full lg:h-full "
      />
      <div className="relative overflow-hidden w-full">
        <Header />
      </div>
      <div className="absolute flex justify-between items-center p-7">
        <Destination />
      </div>
    </main>
  );
};

export default DestinationPage;
