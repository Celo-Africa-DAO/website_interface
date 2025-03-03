"use client";
import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const MemberCard = ({ member, tab = null }: any) => {
  const handlePartnersPage = () => {
    if (tab !== "partners") return;
    window.open(member.url, "_blank");

  };

  return (
    <div
      onClick={handlePartnersPage}
      className={`shadow-md w-full flex ${
        tab !== "partners"
          ? "hover:bg-transparent bg-[#FCFF52]"
          : "bg-transparent cursor-pointer"
      } flex-col items-center rounded-sm`}
    >
      <div className=" h-60 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          className="h-full w-full rounded-tr-sm rounded-tl-sm"
          width={254}
          height={246}
        />
      </div>
      {tab !== "partners" && (
        <div className="w-full  p-4 ">
          <div>
            <h4 className="max-xsm:text-[10px] xsm:text-[14px] font-bold text-base  text-[#000000]">
              {member.name}
            </h4>

          </div>
          <div>
            <h5 className="max-2xsm:text-[7px] font-medium text-sm  text-[#000000] hover:text-[#56544E]">
              {member.position}
            </h5>
          </div>
          <div className="mt-2 flex gap-1 sm:gap-2 ">
            <div>
              <a
                href={`${member.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn  size={24} className=" bg-[#000000] rounded-full p-1"/>
              </a>
            </div>
            <div>
              <a
                href={`${member.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={24} className=" bg-[#000000] rounded-full p-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
