
import Section from '@/components/layouts/Section'
import { AllUpcomingEvents } from '@/components/ui/Cad/AllUpcomingEvents'
import React from 'react'
import { MdChevronRight } from 'react-icons/md'

const OtherEvents = () => {
  return (
    <div id='home' className=" bg-Celo-AD-primary text-[#0C0C0C] pt-20">
    <Section>
        <div className='mx-6 xl:mx-0'>
            <div className='flex flex-col sm:flex-row justify-between max-md:items-center '>
                <div className='flex flex-col justify-center w-full md:w-3/5  text-left'>
                    <h2 className='font-gt-alpina-trial italic  sm:w-4/6 text-center md:text-right text-[1.9rem] sm:text-6xl text-[#0C0C0C]'>
                    Reaching to Africa <br />
                    through Events 
                    </h2>
                    <p className='text-[#565656] font-Inter py-8 w-full max-md:text-center  sm:w-4/6 font-sans text-base sm:text-lg'>A decentralized autonomous organization dedicated
                    Explore the various events we (co) organize in leading African countries and around major events
                    </p>
                   
                </div>
                <div className='w-2/5  order-first md:order-last mb-8 sm:mb-12 md:mb-0'>
                    <img src="Event-hero.svg" alt="Celo_Africa_DAO" className='cad' />
                </div>
            </div>
            <AllUpcomingEvents/>
        </div>
    </Section>
</div>
)
}

export default OtherEvents