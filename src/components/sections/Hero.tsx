import { Link as LucideLink } from "lucide-react";
import Section from "../layouts/Section";
import StatsComponent from "../ui/Cad/StatsComponent";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className=" bg-Celo-AD-primary text-[#0C0C0C] pt-10 md:pt-20 "
    >
      <Section>
        <div className="mx-6 xl:mx-0">
          <div className="flex flex-col sm:flex-row justify-center  md:justify-between  ">
            <div className="flex flex-col justify-center  w-full md:w-3/5 text-center md:text-left">
              <div className="flex flex-col justify-center font-gt-alpina-trial text-[2.8rem] sm:text-6xl text-[#0C0C0C]">
                <p className="font-light md:text-left">
                  <i>Scaling</i>
                </p>
                <p className="-my-5 md:my-0">Celo Innovation</p>
                <p>
                  <i className="ml-1 xs:ml-16 sm:ml-20  ">in Africa</i>
                </p>
              </div>

              <div className="md:hidden flex  my-12 sm:mb-12 md:mb-0 text-center justify-center ">
                <Image
                  src="./CAD-hero.png"
                  alt="Celo_Africa_DAO"
                  className="w-100 h-80"
                />
              </div>
              <p className="text-[#565656] font-Inter pb-8 md:py-8 w-full  sm:w-4/6 font-sans      text-base sm:text-lg">
                A decentralized autonomous organization dedicated to fostering
                the growth and adoption of the CELO blockchain across the
                Africa.
              </p>
              <div className="flex flex-row gap-4 justify-center md:justify-start">
                <Button className=" rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808] hover:bg-Celo-AD-yellow px-4 sm:px-10  w-fit mt-4 text-xs  sm:text-base">
                  Join our community
                </Button>
                <Link href="/incubator">
                  <Button className="bg-trasparent text-[#090808] border p-1  w-fit mt-4 hover:bg-transparent text-xs  sm:text-base">
                    {" "}
                    <span className="px-4">Incubator program</span>
                    <span className="bg-[#090808] p-1 rounded-full ml-1">
                      <MdChevronRight className="text-white" size={28} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-2/5 hidden md:block order-first md:order-last mb-8 sm:mb-12 md:mb-0">
              <Image src="./CAD-hero.png" alt="Celo_Africa_DAO" className="cad" />
            </div>
          </div>
        </div>
      </Section>
      <StatsComponent />
    </div>
  );
};

export default Hero;
