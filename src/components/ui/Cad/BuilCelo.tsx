import Section from '@/components/layouts/Section'
import React from 'react'

const BuilCelo = () => {
    return (
        <Section >
            <div className='mx-6 xl:mx-0 -mb-20'>
                <div className="flex md:flex-row flex-col items-center justify-center gap-6 pb-20">
                    <img className="w-2/5 md:w-1/5 self-start" src="./skew-left.png" alt="" />
                    <div className="w-full md:w-3/5 text-center text-[#0C0C0C] text-[32px] md:text-[64px] font-gt-alpina-trial font-[250]">
                        <p className="italic -my-2 md:-my-8">Together</p>
                        <p className="-my-4 md:-my-8">
                            let’s build and prosper
                        </p>
                        <p className="italic -my-2 md:-my-8">with celo africa dao</p>
                    </div>
                    <img className="w-2/5 md:w-1/5 self-end" src="./skew-right.png" alt="" />
                </div>
            </div>
        </Section>
    )
}

export default BuilCelo