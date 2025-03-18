import { Partner } from "../incubator_v2/partner";
import Section from "../layouts/Section";


const  IncubatorPartner=()=>{
    return (
        <div id='partner' className=" max-h-full  bg-celo-AD-white text-[#0C0C0C] pt-10">
            <Section>
                <div className="flex flex-col items-center bg-transparent justify-center gap-4 mx-40 text-black">
                    <h1 className="text-3xl    font-gt-alpina-trial   font-[250] ">Incubation Partners</h1>
                    <Partner/>
                </div>

            </Section>

        </div>
    )
}

export default IncubatorPartner