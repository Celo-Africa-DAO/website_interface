"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Section from "../layouts/Section";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";


const Incubation = () => {
  const handleLearnMore = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };
  const handleJoin = () => {
    window.open("https://forms.gle/jhXfS5zufJUdcYNf6", "_blank");
  };

  return (
    <div
      id="incubation"
      className=" bg-cover  md:bg-center bg-no-repeat px-3 md:px-32 py-36 "
      style={{
        backgroundImage: "url(./incubator-bg.png)",
      }}
    >
      <Section>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl text-[#0C0C0C] font-[100] font-gt-alpina-trial">
            <span className="italic">Incubator</span> Program
          </h2>
          <div className="flex flex-col md:flex-row justify-between  md:items-center gap-4 sm:gap-20">
            <div className="w-2/5 sm:w-2/4]">
              <p className="mb-[20px] text-lg  text-[#4F4E4E] font-ligth">
                Celo Africa DAO
                <span className="font-semibold"> Incubator Program</span>, which
                extends over a comprehensive{" "}
                <span className="font-semibold">12-week duration, </span>
                strategically crafted to empower and guide early-stage founders.
              </p>
              <div className='flex flex-row sm:gap-4'>
                <Button onClick={handleJoin}
                  className=" rounded-[100px] bg-trasparent border border-[#090808] text-[#090808] hover:bg-Celo-AD-yellow px-6 sm:px-10  w-fit mt-4 text-xs  sm:text-base"
                >
                  Join the cohort
                </Button>
                <Button onClick={handleLearnMore}
                  className="bg-trasparent text-[#090808] border p-1  w-fit mt-4 hover:bg-transparent text-xs  sm:text-base"> <span className='px-6'>Learn More</span>
                  <span className='bg-[#090808] p-1 rounded-full ml-2'>
                    <MdChevronRight className='text-white' size={38} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Incubation;