"use client";

import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const KnowMore = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeCohort, setActiveCohort] = useState<string | null>(null);

    useEffect(() => {
        // Set active cohort based on current route
        if (pathname === '/prevIncubator') {
            setActiveCohort('Cohort 1');
        } else if (pathname === '/incubatorv2') {
            setActiveCohort('Cohort 2');
        }
    }, [pathname]);

    const handleCohortClick = (cohort: string) => {
        if (cohort === 'Cohort 1') {
            router.push('/prevIncubator');
        } else if (cohort === 'Cohort 2') {
            router.push('/incubatorv2');
        }
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-transparent text-[#0C0C0C] px-2 sm:px-10 py-0 text-xs sm:text-base font-semibold flex items-center gap-2 transition-colors hover:text-[#0C0C0C]"
            >
                Know More
                {isDropdownOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            </button>
            
            {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-transparent z-50">
                    <div className="py-2 grid grid-cols-2 gap-3">
                        <button
                            onClick={() => handleCohortClick('Cohort 1')}
                            className={` rounded-2xl text-left px-4 py-3 text-[#0C0C0C] hover:bg-Celo-AD-gray/30 transition-colors font-medium whitespace-nowrap ${
                                activeCohort === 'Cohort 1' ? 'bg-Celo-AD-yellow text-[#090808]' : ''
                            }`}
                        >
                            Cohort 1
                        </button>
                        <button
                            onClick={() => handleCohortClick('Cohort 2')}
                            className={` rounded-2xl text-left px-4 py-3 text-[#0C0C0C] hover:bg-Celo-AD-gray/30 transition-colors font-medium whitespace-nowrap ${
                                activeCohort === 'Cohort 2' ? 'bg-Celo-AD-yellow text-[#090808]' : ''
                            }`}
                        >
                            Cohort 2
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default KnowMore;
