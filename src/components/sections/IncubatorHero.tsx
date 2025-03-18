import React from "react";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";
import Image from "next/image";
import Section from "../layouts/Section";

const IncubatorHero = () => {
  return (
    <div className=" bg-[#E7E3D4] text-[#0C0C0C] pt-10 md:pt-20">
      <Section>
        <div className="mx-6 xl:mx- font-gt-alpina-trial">
          <div className="flex flex-col sm:flex-row justify-center  md:justify-between  ">
            <div className="flex flex-col justify-center  w-full md:w-3/5 text-center md:text-left">
              <div className="flex flex-col justify-center font-GT-Alpina text-[2.2rem] sm:text-6xl text-[#0C0C0C]">
                <i className="-my-5 md:my-0">Incubator Program</i>
                <p className="ml-[10px] xs:ml-16 sm:ml-20  text-[2.2rem] sm:text-6xl">
                  {" "}
                  - Cohort 1
                </p>{" "}
              </div>

              <div className="md:hidden flex  my-12 sm:mb-12 md:mb-0 text-center justify-center ">
                <Image
                  src="./CeloAfrica Roadmap.png"
                  alt="Celo_Africa_DAO"
                  className="w-100 h-80"
                />
              </div>
              <p className="text-[#565656] font-Inter pb-8 md:py-8 w-full  sm:w-5/6 font-sans      text-base sm:text-lg">
                An early stage program  that seeks to support early stage
                founders  building web 3 projects in Africa. The aim is to take
                them to the next level of support where we can have them 
                creating meaningful use cases across Africa.
              </p>
            </div>
            <div className="w-2/5 hidden md:block mb-8 sm:mb-12 md:mb-0">
              <Image
                src="./CeloAfrica Roadmap.png"
                alt="Celo_Africa_DAO"
                className="cad"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default IncubatorHero;