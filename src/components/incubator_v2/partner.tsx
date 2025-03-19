import Image from "next/image";

export function Partner() {
    return (
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
    );
}
