"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import NavLinks from "./NavLinks";
import { Button } from "../button";
import { url } from "inspector";

const navList = [
  { 
    title: "About", 
    path: "#about", 
    Image: "img/navlinks-hover-icon.svg" 
  },
  {
    title: "Incubator Program",
    path: "#incubation",
    Image: "img/navlinks-hover-icon.svg",
  },
  { title: "Events", path: "#event", Image: "img/navlinks-hover-icon.svg" },
  {
    title: "Community",
    path: "https://celoafricadao.slack.com/canvas/C051YRQ3F6Z",
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
      <header className="py-[30px] bg-Celo-AD-primary px-[20px] md:px-[40px] flex justify-between items-center fixed top-0 w-full left-0 z-50">
        {" "}
        <Image
          src={"CAD_logo.svg"}
          alt="Celo Africa DAO Logo"
          // fill
          className="md:w-[248px] cursor-pointer w-[116px]"
          onClick={handleHomeLogo}
          width={228}
          height={28}
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
        }  h-screen w-[70%] md:w-[600px] transition-opacity transform flex flex-col justify-between pt-24 pb-6 ease-in-out duration-500 bg-Celo-AD-primary fixed left-0 top-0 z-10`}
      >
        <ul className="flex flex-col sm:mx-3 px-8 md:px-[65px] font-GT-Alpina">
          {navList.map((item, index) => (
            <NavLinks key={index} item={item} onClick={handleCloseClick}/>
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
            <p className="text-base font-medium md:text-lg text-[#342828]">Let&apos;s Innovate together!</p>
          </div>

          <Button 
          className="rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75
           text-[#090808] hover:bg-Celo-AD-yellow px-16 sm:px-28 w-fit my-2  
           text-base sm:text-lg" onClick={handleJoin}>
            Join us
           <img src="./chevron-black.svg" className='ml-6' alt="left-icon" />
           </Button>
        </div>

        {/* </nav> */}
      </aside>
    </>
  );
};

export default Header;