import React from "react";

const PathCard = ({ member }: any) => {
  return (
    <div className="w-full flex flex-col items-center rounded-lg overflow-hidden">
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${member.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div className="w-full text-center p-2 px-[20px]">
        <h3 className="text-[20px] leading-[25px] inter font-normal text-[#3F3E3A] font-Inter text-left">{member.name}</h3>
        {member.position && <p className="w-[214px] opacity-[80%] text-[16px] inter font-normal leading-[20px] text-[#56544E] text-left">{member.position}</p>}
        {member.text && <p className="text-gray-600">{member.text}</p>}
      </div>
    </div>
  );
};

export default PathCard;
