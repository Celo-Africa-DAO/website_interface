
import Section from '../layouts/Section';
import { Button } from '../ui/button';
import { MdChevronRight } from "react-icons/md";

const Hero = () => {
    return (
        <div id='home' className=" bg-cover bg-center bg-no-repeat bg-[url('/HeroImage.png')] sm:h-[820px] object-cover  bg-gray-700 text-gray-50 pt-20  h-screen">
            <Section>
                <div className='mx-6 xl:mx-0'>
                    <div className='flex flex-col sm:flex-row justify-between '>
                        <div className='flex flex-col justify-center w-full md:w-3/5  text-left'>
                            <h1 className='font-GT-Alpina  text-[1.9rem] sm:text-6xl'>
                                <span className=''><i className='font-GT-Alpina-Thin-Italic'>Scaling</i> </span>Celo <br />
                                <span className='ml-14 xs:ml-16 ms:ml-20'>Innovation in <i> Africa</i></span>
                            </h1>
                            <p className='font-Inter py-4 w-full  sm:w-4/6 text-lg'>A decentralized autonomous organization dedicated
                                to fostering the growth and adoption of the CELO
                                blockchain  across the Africa.
                            </p>
                            <div className='flex flex-row  items-center  sm:gap-6'>
                                <Button
                                    className=" rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808]
                                     hover:bg-Celo-AD-yellow px-2 sm:px-8 md:px-10  w-fit mt-4 text-xs  sm:text-base"
                                >
                                    Join our community
                                </Button>
                                <Button className="bg-trasparent px-8 ms:px-10 w-fit mt-4 hover:bg-transparent text-xs  sm:text-base">Incubator program
                                    <span className='bg-gray-50 mx-2 rounded-full w-6 h-6 flex justify-center items-center'>
                                        <MdChevronRight className='text-black text-3xl'/>
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <div className='w-2/5 order-first md:order-last mb-8 sm:mb-12 md:mb-0'>
                            <img src="./heroCAP.png" alt="Celo_Africa_DAO" className='cad' />
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block sm:absolute text-celo-AD-choclate  bg-Celo-AD-primary p-4 w-full sm:w-3/5 right-0 mt-28'>
                    <div className=' grid grid-cols-1 gap-2 sm:grid-cols-3'>
                        <div className=' border rounded-lg border-gray-800 sm:border-none flex flex-row items-center justify-center '>
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
        </div>
    )
}

export default Hero