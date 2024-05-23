import React from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import CeloLogo from "../../public/img/celoLogo.svg";

const Footer = () => {
  const FooterLinK = [
    { 
      title: "Home", 
      path: "#home" 
    },
    {
      title: "Incubation program",
      path: "#incubation" 
    },
    { 
      title: "Recent events", 
      path: "#event"
    },
  ];

  const FooterLinKs = [
    { 
      title: "Team", 
      path: "#team" 
    },
    { 
      title: "Upcoming event", 
      path: "#up-coming-events"
     },
    { 
      title: "Report", 
      path: "/"
     },
  ];

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div
      className="p-10 text-white overflow-x-hidden bg-cover bg-center px-[1rem] md:px-[10rem]"
      style={{ backgroundImage: "url(img/celo.svg)" }}
    >
      <div className="mb-20">
        <div className="max-md:flex max-md:justify-start max-md:items-center md:flex-none mt-[10rem] ">
          <CeloLogo />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row ">
        <div>
          <p>Subcribe to our newsletter</p>
          <div className="border-solid border-2 flex justify-between rounded-3xl mt-3 ">
            <input
              type="text"
              placeholder="Email"
              className="border-none bg-transparent focus:outline-none w-48 p-2"
            />
            <IoIosArrowDroprightCircle color="yellow" size={40} />
          </div>
        </div>

        <div>
          <div className="mb-3 mt-6 md:mt-0">
            <p>Menu</p>
          </div>
          <div className="flex justify-between gap-2">
            {FooterLinK.map((linkItem, index) => (
              <button key={index} className="border-2 p-2 px-5 rounded-3xl">
                <Link href={linkItem.path} className="text-white ">
                  {linkItem.title}
                </Link>
              </button>
            ))}
          </div>

          <div>
            <div className="flex  justify-between gap-2 mt-7">
              {FooterLinKs.map((linkItem, index) => (
                <button key={index} className="border-2 p-2  px-5 rounded-3xl">
                  {/* <Link href={linkItem.path}> */}
                  <Link href={linkItem.path} className="text-white ">
                    {linkItem.title}
                  </Link>
                  {/* </Link> */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

        <div className=" flex flex-col items-center sm:flex-row mt-[2.5rem] justify-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="">&copy; {currentYear} CELO AFRICA DAO.</h1>
          </div>

          <div className="flex gap-10">
            <h2>Terms of use</h2>
            <h3>Privacy Policy</h3>
          </div>
        </div>
      </div>
      <hr className=" hidden md:block border-gray-100 -mt-0" />
    </div>
  );
};

export default Footer;
