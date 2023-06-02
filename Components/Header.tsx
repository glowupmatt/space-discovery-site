"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setShowNav, showNav }) => {
  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className={clsx()}>
      <header className="flex justify-between relative z-[160] p-4 md:w-full md:p-0 md:gap-[10rem] ">
        <Image
          width={50}
          height={50}
          src="/starter-code/assets/shared/logo.svg"
          alt=""
          className="w-[15%] h-[15%] md:pt-4 md:pl-8"
        />
        <nav className="w-0 hidden h-0 md:relative md:text-white md:w-full md:h-[6rem] md:p-[2rem] md:flex md:justify-center md:gap-[2.5rem] md:items-center md:backdrop-blur md:bg-white/20">
          <a className="flex gap-2" href="/">
            <span className="md:hidden lg:block">00</span> HOME
          </a>
          <a className="flex gap-2" href="/destination">
            <span className="md:hidden lg:block">01</span> DESTINATION
          </a>
          <a className="flex gap-2" href="/crew">
            <span className="md:hidden lg:block">02</span> CREW
          </a>
          <a className="flex gap-2" href="/technology">
            <span className="md:hidden lg:block">03</span> TECHNOLOGY
          </a>
        </nav>
        {showNav ? (
          <CloseIcon
            onClick={showNavHandler}
            style={{ fill: "white", width: "15%", height: "100%" }}
            className="md:hidden w-0 h-0"
          />
        ) : (
          <MenuIcon
            onClick={showNavHandler}
            style={{ fill: "white", width: "15%", height: "100%" }}
            className="md:hidden w-0 h-0"
          />
        )}
      </header>
      <div
        className={clsx("right-0 top-0 p-[5rem] w-[18rem]", {
          "bg-black h-screen md:hidden fixed z-[150]": showNav === true,
          "h-0 w-0 hidden": showNav === false,
        })}
      >
        <nav
          className={clsx("text-white flex flex-col gap-[5rem]", {
            "w-0 hidden": showNav === false,
            "w-full block absolute z-[100]md:hidden": showNav === true,
          })}
        >
          <a href="/">
            <span>00</span> HOME
          </a>
          <a href="/destination">
            <span>01</span> DESTINATION
          </a>
          <a href="/crew">
            <span>02</span> CREW
          </a>
          <a href="/technology">
            <span>03</span> TECHNOLOGY
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
