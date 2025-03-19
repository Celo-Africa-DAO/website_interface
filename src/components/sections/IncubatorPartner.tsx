import { Partner } from "../incubator_v2/partner";
import Section from "../layouts/Section";


const  IncubatorPartner=()=>{
    return (
        <div id='partner' className=" max-h-full  bg-celo-AD-white text-[#0C0C0C] pt-0">
            <div className=" flex justify-end items-start">
                <div className="h-32 w-32 bg-Celo-AD-primary">

                </div>

            </div>
            <Section>
                <div className="flex flex-col items-center bg-transparent justify-center gap-8 mx-40 text-black">
                    <h1 className="text-3xl    font-GT-Alpina    font-thin ">Incubation Partners</h1>
                    <Partner/>
                </div>

            </Section>

        </div>
    )
}

export default IncubatorPartner