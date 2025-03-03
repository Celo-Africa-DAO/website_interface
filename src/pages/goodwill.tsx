import React from 'react'
import Thanks from '@/components/goodwill/Thanks'
import PhotoMoment from '@/components/goodwill/PhotoMoment';
import Letter from '@/components/goodwill/Letter';
import ContributorMsg from '@/components/goodwill/ContributorMsg';
import { Achievement } from '@/components/goodwill/Achievement';
import DevelopmentSection from '@/components/DevelopmentSection';


const goodwill = () => {
  return (
    <div className='bg-[#FFFFFF] text-[#0C0C0C]'>
        <Thanks />
        <Achievement/>
        <PhotoMoment />
        <Letter />
        <ContributorMsg />
        <DevelopmentSection />
    </div>
  )
}

export default goodwill