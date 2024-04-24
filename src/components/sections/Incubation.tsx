"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Section from "../layouts/Section";
import { Button } from "../ui/button";

const Incubation = () => {
  const handleJoin = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  return (
    <div id="incubation"
      className=" bg-cover bg-right md:bg-center bg-no-repeat px-3 md:px-32 py-36 h-[260]"
      style={{
        backgroundImage: "url(img/incubation-bg.svg)",
      }}
    >
      <Section>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl text-[#FFFFFF] font-[100] font-gt-alpina-trial"><span className="italic">Incubator</span> Program</h2>
          <div className="flex flex-col md:flex-row justify-between  md:items-center gap-4 sm:gap-20">
            <div className=" w-full  h-fit">
              <img src="roadmap-incubator-program-1.svg" alt="incubator" className="w-full h-fit" />
            </div>

            <div className="w-[80%] sm:w-2/4]">
              <p className="mb-[20px] text-lg md:text-2xl text-white font-ligth">
                Celo Africa DAO
                <span className="font-semibold"> Incubator Program</span>,
                which extends over a
                comprehensive <span className="font-semibold">12-week duration, </span>strategically crafted to empower
                and guide early-stage founders.
              </p>

              <div className='flex flex-row gap- sm:gap-6'>
                <Button
                  className=" rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808] hover:bg-Celo-AD-yellow px-6 sm:px-10  w-fit mt-4 text-xs  sm:text-base"
                >
                  Join the cohort
                </Button>
                <Button className="bg-trasparent px-8 ms:px-10 w-fit mt-4 hover:bg-transparent text-xs  sm:text-base">Learn More <img src="./cheron-left-icon.png" className='ml-2' alt="left-icon" /></Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Incubation;
