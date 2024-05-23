import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const DevelopmentSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center">


        <h1 className="text-[32px] md:text-[64px] font-gt-alpina-trial font-[250]">
          Join our <span className="italic">development</span>
        </h1>

        <table className=" table-fixed max-w-7xl mx-auto ">
          <thead className=''>
            <tr>
              <th className="w-1/3"></th>
              <th className="w-1/3"></th>
              <th className="w-1/3"></th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className="text-center ">
              <td className="py-6 px-7 border-2 border-gray-300  self-center">
                <a className="flex items-center"
                  href="https://twitter.com/CeloAfricaDao"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="bg-[#252020] rounded-md">
                    <RiTwitterXLine size={38} className="text-white p-1 "/>
                  </button>
                </a>
              </td>
              <td className="py-6 px-7 border-2 border-gray-300">
                <a className="flex items-center" href="https://join.slack.com/t/celoafricadao/shared_invite/zt-2hns4uonl-VhtnWt3Q1d7sOYh20uCqBg" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#252020] rounded-md">
                    <FaSlack size={38} className="text-white p-1"/>
                  </button>
                </a>
              </td>
              <td className="py-6 px-7 border-2 border-gray-300">
                <a className="flex items-center" href="https://celoafricadao.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#252020] rounded-md">
                    <FaHashnode size={38} className="text-white p-1"/>
                  </button>
                </a>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopmentSection;