"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import NavLinks from "./NavLinks";

const navList = [
  { title: "About", path: "#about", Image: "img/navlinks-hover-icon.svg" },
  {
    title: "Incubator Program",
    path: "#",
    Image: "img/navlinks-hover-icon.svg",
  },
  { title: "Events", path: "#event", Image: "img/navlinks-hover-icon.svg" },
  {
    title: "Community",
    path: "#commubity",
    Image: "img/navlinks-hover-icon.svg",
  },
  {
    title: "Team and Partner",
    path: "#team",
    Image: "img/navlinks-hover-icon.svg",
  },
];

const Header = () => {
  const router = useRouter();
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleHomeLogo = () => {
    router.push("/");
  };
  const handleMenuClick = () => {
    setIsMenuToggled(true);
  };
  const handleCloseClick = () => {
    setIsMenuToggled(false);
  };

  const handleJoin = () => {
    window.open("https://celoafricadao.slack.com/canvas/C051YRQ3F6Z", "_blank");
  };

  return (
    <>
      <header className="py-[40px] bg-Celo-AD-primary px-[25px] md:px-[80px] flex justify-between items-center">
        {" "}
        <Image
          src={"Celo-AD-primary-logo.svg"}
          alt="Celo Africa DAO Logo"
          // fill
          className="md:w-[248px] cursor-pointer w-[116px]"
          onClick={handleHomeLogo}
          width={248}
          height={38}
        />
        {isMenuToggled ? (
          <button
            onClick={handleCloseClick}
            className={`transition-opacity transform ease-in-out duration-500 `}
          >
            <Image
              src={"img/close-menu-toggle.svg"}
              alt="Menu toggle icon"
              className="md:w-[104px] w-[58px]"
              width={104}
              height={30}
            />
          </button>
        ) : (
          <button
            onClick={handleMenuClick}
            className={` transition-opacity transform ease-in-out duration-500`}
          >
            <Image
              src={"img/menu-toggle.svg"}
              alt="Menu toggle icon"
              className="md:w-[85px] w-[49px]"
              height={30}
              width={85}
            />
          </button>
        )}
      </header>

      <aside
        className={` ${
          isMenuToggled ? "opacity-100" : "opacity-0 pointer-events-none"
        } h-screen w-[70%] md:w-[600px] transition-opacity transform flex flex-col justify-between pt-24 pb-6 ease-in-out duration-500 bg-Celo-AD-primary fixed left-0 top-0 z-10`}
      >
        <ul className="flex flex-col px-8 md:px-[65px] ">
          {navList.map((item, index) => (
            <NavLinks key={index} item={item} />
          ))}
        </ul>

        <div className="flex flex-col justify-center gap-3 items-center  ">
          <div className="flex gap-2 ">
            <Image
              src={"img/right-bottom-arrow.svg"}
              alt="right bottom arrow icon"
              width={17}
              height={17}
            />
            <p className="text-sm md:text-lg">Let's Innovate together!</p>
          </div>

          <button
            className="flex justify-center items-center gap-6 py-[14px] md:py-[28px] px-[40px] sm:px-[70px] md:px-[122px] rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75"
            onClick={handleJoin}
          >
            {" "}
            <p className="font-medium text-xl">Join us</p>
            <Image
              src={"img/arrow-icon.svg"}
              alt="arrow icon"
              width={21}
              height={21}
            />
          </button>
        </div>

        {/* </nav> */}
      </aside>
    </>
  );
};

export default Header;
