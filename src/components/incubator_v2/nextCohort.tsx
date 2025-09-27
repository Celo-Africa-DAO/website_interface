import React from 'react';
import { Button } from '../ui/button';

const NextCohort = () => {
  return (
      <div 
        className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-8 lg:px-0 overflow-hidden mb-12 sm:mb-16 lg:mb-24"
        style={{ 
          backgroundImage: "url('/img/Subtract.png')",
          backgroundSize: '150% cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style jsx>{`
          @media (min-width: 1024px) {
            div {
              background-position: center center !important;
              background-size: fill !important;
            }
          }
        `}</style>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto sm:mx-0">
            <h2 className="font-gt-alpina-trial text-xl sm:text-2xl md:text-3xl font-thin text-white mb-3 text-center sm:text-left">
              Anticipating next Cohort
            </h2>
            <p className="text-white text-sm sm:text-base mb-6 text-center sm:text-left">
              Submit email to receive updates about our upcoming cohort and when applications become active.
            </p>
            <div className="relative w-full max-w-sm sm:max-w-md lg:w-96 bg-white/10 border border-white/20 rounded-[20px] overflow-hidden mx-auto sm:mx-0 mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-20 sm:pr-24 bg-transparent text-white placeholder-white/70 focus:outline-none text-xs sm:text-sm"
              />
              <button className="absolute right-1 top-1 bg-Celo-AD-primary text-celo-AD-choclate px-2 sm:px-4 py-1 sm:py-2 rounded-[16px] font-semibold hover:bg-Celo-AD-primary/90 text-xs sm:text-sm transition-colors">
                <span className="hidden sm:inline">Receive Updates</span>
                <span className="sm:hidden">Updates</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NextCohort;