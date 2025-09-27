import Section from "../layouts/Section";
import DevelopmentSection from "../DevelopmentSection";

const IncubatorComm = () => {
  return (
    <div id='partner' className=" max-h-full  bg-celo-AD-white text-[#0C0C0C] pt-0">
            <div className=" flex justify-end items-start">
                <div className="h-32 w-32 bg-Celo-AD-primary">

                </div>

            </div>
            <Section>
                <div className="flex flex-col items-center bg-transparent justify-center gap-8 mx-40 text-black">
            
                    <DevelopmentSection />
                </div>

            </Section>

        </div>
  )
}

export default IncubatorComm