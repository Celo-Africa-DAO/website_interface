"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";

const IncubationMentor = () => {
  const mentors = [
    {
      name: "Duncan Muchangi",
      role: "Head Of BLC Telkiks",
      image: "/Ducan.png",
    },
    {
      name: "Jovan Mwesigwa",
      role: "Founder Cletrship",
      image: "/Jovan.png",
    },
    {
      name: "S. A. Kakai",
      role: "Crypto Regulation Expert",
      image: "/Kaika.png",
    },
    {
      name: "Eliash Ezron",
      role: "Co-Founder Skafru",
      image: "/Eliza.png",
    },
    {
      name: "Joshua C. Tebepina",
      role: "Co-Founder, Engineer",
      image: "/Joshua.png",
    },
  ];

  const handleMentor = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  return (
    <div
      id="incubation"
      className=" relative bg-center bg-no-repeat  px-4 sm:px-8 md:px-12 lg:pl-16 xl:pl-64 py-16 md:py-24 pt-32  lg:py-36 lg:pr-10 "
      style={{
        backgroundImage: "url(./IncubatorMentor-bg.png)",
        backgroundSize: "cover", 
         backgroundPosition: "center",
      }}
    >
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-sm text-[#0C0C0C] mb-1">Uniquely selected</p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#0C0C0C]">
                Program
                <br />
                <span className="italic sm:pl-10">Mentors</span>
              </h2>
            </div>

            <div>
              <Button
                onClick={handleMentor}
                className="rounded-full bg-transparent border border-[#090808] text-[#090808] hover:bg-Celo-AD-yellow p-1 w-fit text-xs sm:text-base"
              >
                <span className="px-2 sm:px-4">Become a mentor</span>
                <span className="bg-[#090808] p-1 rounded-full ml-1">
                  <MdChevronRight className="text-white" size={20} />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-2 lg:gap-0">
            {mentors.map((mentor, index) => (
              <div 
                key={mentor.name} 
                className="text-center flex flex-col items-center w-full"
              >
                <div className="w-3/4 sm:w-full h-56 sm:h-48 md:h-52 lg:h-48 overflow-hidden mx-auto">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full object-center"
                    priority
                  />
                </div>
                <div className={`border-b sm:border-b-0 ${index !== mentors.length - 1 ? 'sm:border-r' : ''} border-black w-full`}>
                  <h3 className="font-medium text-sm w-full py-2">{mentor.name}</h3>
                  <p className="text-xs text-gray-600 w-full py-1 pb-4 sm:pb-2">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncubationMentor;