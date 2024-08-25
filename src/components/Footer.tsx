import React from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import CeloLogo from "../../public/img/celoLogo.svg";
import Image from "next/image";

const Footer = () => {
  const FooterLinK = [
    { title: "Home", path: "#home" },
    { title: "Incubation program", path: "#incubation" },
    { title: "Recent events", path: "#event" },
    { title: "Team", path: "#team" },
    { title: "Upcoming event", path: "#up-coming-events" },
    { title: "Report", path: "/" },
  ];

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="relative z-20">
      <Image
        src="/img/celo.svg"
        className="absolute -z-20 h-full w-full object-cover"
        alt="incubator focus bg"
        layout="fill"
      />
      <div className="p-10 z-40 text-white overflow-x-hidden px-[1rem] md:px-[10rem]">
        <div className="mx-6 xl:mx-0">
          <div className="mb-20">
            <div className="max-md:flex justify-center md:justify-start max-md:items-center md:flex-none mt-[10rem]">
              <CeloLogo className="max-w-200" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="">
              <p className="text-lg">Subscribe to our newsletter</p>
              <div className="border-solid border-2 flex justify-between rounded-full mt-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="palceholder:text-white ml-2 border-none bg-transparent focus:outline-none w-48 p-3"
                />
                <IoIosArrowDroprightCircle color="yellow" size={50} />
              </div>
            </div>

            <div className="md:w-[38%]">
              <div className="mb-3 mt-6 md:mt-0">
                <p className="text-lg">Menu</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FooterLinK.map((linkItem, index) => (
                  <button key={index} className="border-2 p-2 px-5 rounded-full">
                    <Link href={linkItem.path} className="text-white">
                      {linkItem.title}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row mt-[2.5rem] justify-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1>&copy; {currentYear} CELO AFRICA DAO.</h1>
            </div>

            <div className="text-center sm:text-left space-x-8 pt-4">
              <span>Terms of use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
