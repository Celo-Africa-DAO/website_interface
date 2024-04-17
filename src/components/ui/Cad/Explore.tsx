"use client"
import React, { useState } from 'react';
import CeloFirst from '../../../../public/img/explore.svg';
import Image from "next/image";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const events = [
    {
        title: "Celo campus connect",
        location: "Kenya",
        date: "Sat, March 16th 2024",
        img: <CeloFirst />,
        icon: <IoIosArrowRoundForward />
    },
    {
        title: "Celo campus connect",
        location: "Kenya",
        date: "Sat, March 16th 2024",
        img: <CeloFirst />,
        icon: <IoIosArrowRoundForward />
    },
];

const Explore = () => {
    const [isViewBtnHover, setIsViewBtnHover] = useState(false)
    const handleViewBtn = () => {
        setIsViewBtnHover(true)
    }
    const handleViewBtnDefault = () => {
        setIsViewBtnHover(false)
    }
    return (
        <div className='bg-[#DEE2D8]'>
            <h1 className='md:mb-[60px] mb-[45px] pl-[12px] pr-[92px] md:pl-48 pt-16 font-GT_Alpina_Trial italic text-[36px] md:text-[64px] font-[250] leading-[45px] md:leading-[80px]'>Explore our recent Event</h1>
            <hr />
            {events.map((event, index) => (
                <div key={index} className='border-b-[1.5px] md:border-b-2 border-t-[1.5px] md:border-t-2 flex flex-col md:flex-row border-[#000000] md:border-[#f4f2f2a7] justify-around p-10 md:p-[60px, 0px, 60px, 0px] '>
                    <div>
                        {/* {event.img} */}
                        <Image src={'img/explore.svg'} className='w-full' width={400} height={200} alt='Celo campus connect' />
                    </div>
                    <div>
                        <h2 className='font-GT_Alpina_Trial text-[24px] leading-[24px] max-md:mt-7 font-extralight md:text-[32px] text-[#000000]'>{event.title}</h2>
                        <p className='text-[20px] hidden md:block'>{event.location}</p>
                        <h3 className='text-[16px] hidden md:block'>{event.date}</h3>
                    </div>
                    <div className='text-[30px] mt-[20px] w-[35.94px] h-[29.69px] hidden md:block'>{event.icon}</div>
                </div>
            ))}
            <div className='flex items-center justify-center'>

            <button
                onMouseEnter={handleViewBtn} onMouseLeave={handleViewBtnDefault} className="flex items-center justify-center gap-2 py-[14px] md:py-[28px] px-[40px] sm:px-[70px] md:px-[122px] rounded-[100px] bg-inherit"
            >
                <p className="font-medium text-xl">View all event</p>

                {isViewBtnHover ?
                    (
                        <Image src={'img/yellow-arrow-icon.svg'} width={21} height={21} alt='yellow arrow icon' />
                    ) : (
                        <Image src={'img/black-arrow-icon.svg'} width={21} height={21} alt='black arrow icon' />
                    )}
            </button>
            </div>
        </div>
    );
};

export default Explore;
