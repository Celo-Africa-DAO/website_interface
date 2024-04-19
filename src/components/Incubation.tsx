"use client";
import React, { useState } from "react";
import Image from "next/image";

const Incubation = () => {
  const handleJoin = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  return (
    <div
      className=" bg-[#FCF6F1] bg-cover bg-right md:bg-center bg-no-repeat px-3 md:px-32 py-36"
      style={{
        backgroundImage: "url(img/incubation-bg.svg)",
      }}
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl text-[#FFFFFF] font-[100] font-gt-alpina-trial"><span className="italic">Incubator</span> Program</h2>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-28 md:items-center ">
          <div className=" w-full md:w-[541px] ">
            <Image
              src={"img/roadmap-incubator-program-1.svg"}
              alt="incubation-road-map"
              width={541}
              height={374}
            />
          </div>

          <div className="w-[80%] md:w-[401px]">
            <p className="mb-[20px] text-lg md:text-2xl text-white">
              Celo Africa DAO  <strong>Incubator Program</strong>, which extends over a
              comprehensive <strong>12-week duration, </strong>strategically crafted to empower
              and guide early-stage founders.
            </p>

            <div className="flex gap-[10px]">
            <button
              className="flex justify-center  items-center gap-6  rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 py-2 px-6 md:p-4 md:px-8"
              onClick={handleJoin}
            >
              <p className="font-medium text-[12px] md:text-base">Join the cohorts</p>
              
            </button>

            <button
              className="flex justify-center items-center gap-6  rounded-[100px] "
            >
              <p className="font-medium text-[12px] md:text-base text-[#FFFFFF]">Know more</p>
              <Image
                src={"/img/white-arrow-icon.svg"}
                alt="arrow icon"
                className="w-[16px] md:w-[21px]"
                width={21}
                height={21}
              />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incubation;
