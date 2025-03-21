import Section from "../layouts/Section"
import Program from "../incubator_v2/program"

const IncubatorProgram =()=>{
    return (
        <div id='program' className="  bg-Celo-AD-olive-cream text-[#0C0C0C] pt-0">
            <div className=" flex justify-end items-start">
                <div className="h-20 md:w-1/2 bg-celo-AD-olive-green">

                </div>
                </div>
            <Section>               
                
<div className="mx-6 md:mx-14">
<div className="flex flex-col w-1/2 items-start justify-start h-20">
<p className="text-xs sm:text-sm text-gray-600">
    Designed to support startup.
    </p>
    <div className=" font-GT-Alpina font-thin text-4xl">
    <p className="text-black">
        Program
    </p>
    <p className="text-black italic ml-4">
        Highlight
    </p>
    </div>
    

</div>
<Program/>

</div>


                

           
            </Section>
            



        </div>)
}

export default IncubatorProgram