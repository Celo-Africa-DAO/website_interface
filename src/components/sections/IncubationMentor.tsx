"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";

const IncubationMentor = () => {
  const mentors = [
    {
      name: "Duncan Muchangi",
      role: "Head Of BD, Fonbnk",
      image: "/img/Duncan.jpg",
    },
    {
      name: "Jovan Mwesigwa",
      role: "Founder Oneramp",
      image: "/Jovan.png",
    },
    {
      name: " Keega Gachutha",
      role: "Crypto Regulation Expert",
      image: "/img/Keega.jpeg",
    },
    {
      name: "Derrick Bundi",
      role: "Co-Founder Pretium ",
      image: "/bundi.jpeg",
    },
    {
      name: "Joshua C. Tebepina",
      role: "Co-Founder  Bingteller",
      image: "/Joshua.png",
    },
    {
      name: "Naheem Oloyede",
      role: "Celo Africa DAO Core-Contributor",
      image: "/Naheem.jpg",
    },
    {
      name: "Muhido Galien",
      role: "Senior Software Engineer",
      image: "/img/MUhindo.png",
    },
    {
      name: "Daniel Kimotho",
      role: "Celo Africa Ecosystem Lead",
      image: "/img/Kimotho.png",
    },
    {
      name: " Ronald Nzioki ",
      role: "Incubator Program Manager",
      // image: "/img/ronald.png",
      image: "/img/ronald.png"
    },
    {
      name: "Agbona Igwemoh",
      role: "CEO finna protocol",
      image: "/img/Agbona.jpeg",
    },
  ];

  const handleMentor = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  return (
    <div
      id="incubation"
      className=" relative bg-center bg-no-repeat  px-4 sm:px-8 md:px-12 lg:pl-16 xl:pl-64 py-16 md:py-24 pt-32  lg:pb-44 lg:pr-10 "
      style={{
        backgroundImage: "url(./IncubatorMentor-bg.png)",
        backgroundSize: "150%", 
         backgroundPosition: "center",
      }}
    >
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-sm text-[#0C0C0C] mb-1">Uniquely selected</p>
              <h2 className="text-2xl md:text-3xl font-GT-Alpina  font-thin text-[#0C0C0C]">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div 
                key={mentor.name} 
                className="bg-Celo-AD-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-Celo-AD-yellow transition-all duration-300">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority={index < 4}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-celo-AD-choclate transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {mentor.role}
                  </p>
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