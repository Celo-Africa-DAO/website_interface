import React from 'react'
import { IoLogoYoutube } from "react-icons/io";


export const Feature = () => {

    const handleIconClick = () => {
        console.log('YouTube icon clicked!');
        // You can also add more actions here, like redirecting to a URL
        window.open();
    };

  return (
    <div className='bg-[#476520] w-full lg:p-20 p-5'>
        <h1 className='text-[#FCF6F1] lg:text-[44px] md:text-[20px] sm:text-[16px] pt-10 italic font-gt-alpina leading-5'>Featured Event</h1>

        <div className='flex items-center justify-center py-20'>
        <div className='bg-[#D9D9D94D] lg:w-[400px] lg:h-[200px] w-[280px]'>
            <div className='flex items-center justify-center'>
            <IoLogoYoutube 
                className='w-[120px] 
                h-[84px] 
                text-[red] 
                m-12 cursor-pointer'
                onClick={handleIconClick}
            />
            </div>
       
        </div>

       </div>
    </div>
  )
}
