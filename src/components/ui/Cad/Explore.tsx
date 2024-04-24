"use client"
import React, { useState } from 'react';
import CeloFirst from '../../../../public/img/explore.svg';
import Image from "next/image";
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
        <div id='event' className='bg-[#DEE2D8] lg:p-20 px-[12px] '>
            <h1 className='md:mb-[60px] mb-[45px] pl-[12px] pr-[92px] font-extralight md:pl-48 pt-16 font-gt-alpina italic text-[36px] md:text-[36px] leading-[45px] md:leading-[80px]'>Explore our recent Event</h1>
            <hr className='border-solid border border-gray-900 mb-7' />
            {events.map((event, index) => (
                <div key={index} className='border-t-1 p-14 border-b-2 border-gray-500 pl-[12px] pr-[12px] flex flex-col md:flex-row justify-around md:p-[60px, 0px, 60px, 0px] '>
                    <div>
                        {/* {event.img} */}
                        <Image src={'img/explore.svg'} className='w-full' width={400} height={200} alt='Celo campus connect' />
                    </div>
                    <div>
                        <h2 className='font-gt-alpina text-[24px] mb-[16px] leading-[24px] max-md:mt-7 font-extralight md:text-[32px] text-[#000000]'>{event.title}</h2>
                        <p className='text-[20px] mb-[5px] hidden md:block'>{event.location}</p>
                        <h3 className='text-[16px] hidden md:block'>{event.date}</h3>
                    </div>
                    <span className='text-[50px] mt-[20px] h-10 w-10 hidden md:block'>{event.icon}</span>
                </div>
            ))}
            <div className='flex items-center justify-center'>

            <button
                onMouseEnter={handleViewBtn} onMouseLeave={handleViewBtnDefault} className="flex items-center justify-center gap-2 py-[14px] md:py-[28px] px-[40px] sm:px-[70px] md:px-[122px] rounded-[100px] bg-inherit"
            >
                <p className="font-medium  text-xl">View all event</p>

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
