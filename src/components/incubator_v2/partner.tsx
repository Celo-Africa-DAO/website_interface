import Image from "next/image";

export function Partner() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-GT-Alpina font-thin text-center px-4">Incubator Partners</h2>
        <div className="flex flex-col md:flex-row justify-center  items-center gap-16 md:gap-8  md:w-3/4 text-black ">
            
            <div onClick={() => window.open("https://verda.ventures/", "_blank")} className="cursor-pointer">
                <Image
                    src="/verda3.svg"
                    alt="icon"
                     className="w-40 md:w-48 lg:w-56"
                    width={200}
                    height={40}
                />
            </div>
            <div onClick={() => window.open("https://www.celocamp.com/", "_blank")} className="cursor-pointer" >
                <Image
                    src="/celoCamp.svg"
                    alt="icon"
                    
                    width={200}
                    height={40}
                />
            </div>
            <div onClick={() => window.open("https://www.prezenti.xyz/", "_blank")} className="cursor-pointer">
                <Image
                    src="/prezenti.svg"
                    alt="icon"
                    
                    width={200}
                    height={40}
                />
            </div>
        </div>
        </div>
    );
}
