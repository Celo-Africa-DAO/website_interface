
import Section from '../layouts/Section';
import StatsComponent from '../ui/Cad/StatsComponent';
import { Button } from '../ui/button';
import { MdChevronRight } from "react-icons/md";

const Hero = () => {
    return (
        <div id='home' className=" bg-Celo-AD-primary text-[#0C0C0C] pt-20">
            <Section>
                <div className='mx-6 xl:mx-0'>
                    <div className='flex flex-col sm:flex-row justify-between '>
                        <div className='flex flex-col justify-center w-full md:w-3/5  text-left'>
                            <h2 className='font-gt-alpina-trial  text-[1.9rem] sm:text-6xl text-[#0C0C0C]'>
                                <span className='font-light'><i>Scaling</i><br /></span>Celo
                                <span>Innovation<br /><i className='ml-14 xs:ml-16 ms:ml-20'>in Africa</i></span>
                            </h2>
                            <p className='text-[#565656] font-Inter py-8 w-full  sm:w-4/6 font-sans      text-base sm:text-lg'>A decentralized autonomous organization dedicated
                                to fostering the growth and adoption of the CELO
                                blockchain  across the Africa.
                            </p>
                            <div className='flex flex-row sm:gap-4'>

                                <Button
                                    className=" rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808]
                                     hover:bg-Celo-AD-yellow px-2 sm:px-8 md:px-10  w-fit mt-4 text-xs  sm:text-base"
                                >
                                    Join our community
                                </Button>

                                <Button className="bg-trasparent text-[#090808] border p-1  w-fit mt-4 hover:bg-transparent text-xs  sm:text-base"> <span className='px-6'>Incubator program</span>
                                    <span className='bg-[#090808] p-1 rounded-full ml-2'>
                                        <MdChevronRight className='text-white' size={38}/>
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <div className='w-2/5 order-first md:order-last mb-8 sm:mb-12 md:mb-0'>
                            <img src="./CAD-hero.png" alt="Celo_Africa_DAO" className='cad' />

                        </div>
                    </div>
                </div>
            </Section>
            <StatsComponent/>
        </div>
    )
}

export default Hero

