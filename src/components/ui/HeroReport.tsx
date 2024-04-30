import React from 'react'
import Section from '../layouts/Section'

export const HeroReport = () => {
    return (
        <Section>
            <div className='block sm:hidden relative text-[#000000]  px-4 w-full  sm:w-3/5 right-0 -mt-24 z-1 text-celo-Ad-choclate'>
                <div className=' grid grid-cols-1 gap-2 sm:grid-cols-3'>
                    <div className=' border rounded-lg border-gray-800 sm:border-none flex flex-row items-center justify-center bg-Celo-AD-primary'>
                        <div className='m-6 flex flex-col items-center justify-center  text-center'>
                            <h1 className='font-bold text-4xl'>10+</h1>
                            <p className='font-light text-lg '>Sponsored Event</p>
                        </div>
                        <img className='ml-10 hidden sm:block' src="./imageBorder.svg" alt="Border" />
                    </div>
                    <div className=' border rounded-lg border-gray-800 sm:border-none flex flex-row items-center justify-center'>
                        <div className='m-6 flex flex-col items-center justify-center  text-center'>
                            <h1 className='font-bold text-4xl'>5k</h1>
                            <p>Community Members</p>
                        </div>
                        <img className='ml-10 hidden sm:block ' src="./borderimage_up.svg" alt="Border" />

                    </div><div className='hidden sm:block'></div><div className='hidden sm:block'></div>
                    <div className=' border rounded-lg border-gray-800 sm:border-none flex flex-row items-center justify-center'>
                        <div className='m-6 flex flex-col items-center justify-center  text-center'>
                            <h1 className='font-bold text-4xl'>10+</h1>
                            <p>Social meet ups</p>
                        </div>
                        <img className='ml-16 hidden sm:block' src="./imageBorder.svg" alt="Border" />
                    </div>
                    <div className=' border rounded-lg border-gray-800 sm:border-none flex flex-row items-center justify-center'>
                        <div className='m-6 flex flex-col items-center justify-center  text-center'>
                            <h1 className='font-bold text-4xl'>4</h1>
                            <p>Organised Hackathons</p>
                        </div>
                        <img className='ml-10 hidden sm:block' src="./borderimage_up.svg" alt="Border" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
