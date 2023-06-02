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
        className={clsx(
          "right-0 top-0 p-[5rem] bg-black fixed flex md:hidden z-[150]",
          {
            "h-full w-[79%]": showNav === true,
            "h-0 w-0 hidden": showNav === false,
          }
        )}
      >
        <nav
          className={clsx(
            "flex flex-col z-[100] h-[79%] items-end text-start gap-[4rem] justify-center md:hidden",
            {
              "w-0 hidden": showNav === false,
              "w-full": showNav === true,
            }
          )}
        >
          <a className="w-full" href="/">
            <span>00</span> HOME
          </a>
          <a className="w-full" href="/destination">
            <span>01</span> DESTINATION
          </a>
          <a className="w-full" href="/crew">
            <span>02</span> CREW
          </a>
          <a className="w-full" href="/technology">
            <span>03</span> TECHNOLOGY
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
