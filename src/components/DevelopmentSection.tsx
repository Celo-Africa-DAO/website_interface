import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const DevelopmentSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center  mt-20">
        <h3 className="text-[64px]">Join our development</h3>
        <div className="flex justify-center max-md:items-center">
          <button className="border-solid border-2 p-6 h-20">
            <RiTwitterXLine />
          </button>
          <button className="border-solid border-2 p-6 h-20">
            <FaSlack />
          </button>
          <button className="border-solid border-2 p-6 h-20">
            <FaHashnode />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;
