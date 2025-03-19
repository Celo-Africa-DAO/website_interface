"use client"; 

import { useRouter } from 'next/navigation';
import React from 'react';

const KnowMore = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.push('/prevIncubator')}>
            Know More
        </button>
    );
}

export default KnowMore;
