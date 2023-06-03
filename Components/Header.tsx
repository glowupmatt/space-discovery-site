"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { useState } from "react";

type ShowNav = boolean;

const Header = () => {
  const [showNav, setShowNav] = useState<ShowNav>(false);
  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div>
      <header className="flex justify-between relative z-[160] p-4 md:w-full md:p-0 md:gap-[10rem] md:items-center">
        <a className="w-full h-full flex" href="/">
          <Image
            width={500}
            height={500}
            quality={100}
            src="/starter-code/assets/shared/logo.svg"
            alt=""
            className="object-contain w-[40px] md:w-[40px]"
          />
        </a>

        <nav className="w-0 hidden h-0 md:relative md:text-white md:w-full md:h-[6rem] md:p-[2rem] md:flex md:justify-center md:gap-[2.5rem] md:items-center md:backdrop-blur md:bg-white/20">
          <a className="flex" href="/">
            <span className="md:hidden lg:block">00</span> HOME
          </a>
          <a className="flex" href="/destination">
            <span className="block md:hidden lg:block">01</span> DESTINATION
          </a>
          <a className="flex" href="/crew">
            <span className="block md:hidden lg:block">02</span> CREW
          </a>
          <a className="flex" href="/technology">
            <span className="block md:hidden lg:block">03</span> TECHNOLOGY
          </a>
        </nav>
        <div className="flex items-end justify-end md:hidden">
          {showNav ? (
            <CloseIcon
              onClick={showNavHandler}
              style={{ fill: "white", width: "30%", height: "100%" }}
            />
          ) : (
            <MenuIcon
              onClick={showNavHandler}
              style={{ fill: "white", width: "30%", height: "100%" }}
            />
          )}
        </div>
      </header>
      <div
        className={classNames(
          "right-0 top-0 p-[5rem] bg-black fixed flex md:hidden z-[150]",
          {
            "h-full w-[79%]": showNav === true,
            "h-0 w-0 hidden": showNav === false,
          }
        )}
      >
        <nav
          className={classNames(
            "flex flex-col z-[100] h-[79%] items-end text-start gap-[4rem] justify-center md:hidden",
            {
              "w-0 hidden": showNav === false,
              "w-full": showNav === true,
            }
          )}
        >
          <a className="w-full flex gap-4" href="/">
            <span>00</span> HOME
          </a>
          <a className="w-full flex gap-4" href="/destination">
            <span>01</span> DESTINATION
          </a>
          <a className="w-full flex gap-4" href="/crew">
            <span>02</span> CREW
          </a>
          <a className="w-full flex gap-4" href="/technology">
            <span>03</span> TECHNOLOGY
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
