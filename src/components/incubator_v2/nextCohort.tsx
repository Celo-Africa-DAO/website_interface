import React from 'react';
import { Button } from '../ui/button';

const NextCohort = () => {
  return (
      <div 
        className="relative py-40 px-16 overflow-hidden mb-24"
        style={{ 
          backgroundImage: "url('/img/Subtract.png')",
          backgroundSize: 'fill',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="max-w-xl">
            <h2 className="font-gt-alpina-trial text-2xl md:text-3xl font-thin text-white mb-3">
              Anticipating next Cohort
            </h2>
            <p className="text-white text-base mb-6">
              Submit email to receive updates about our upcoming cohort and when applications become active.
            </p>
            <div className="relative w-96 bg-white/10 border border-white/20 rounded-[20px] overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-24 bg-transparent text-white placeholder-white/70 focus:outline-none text-sm"
              />
              <button className="absolute right-1 top-1 bg-Celo-AD-primary text-celo-AD-choclate px-4 py-2 rounded-[16px] font-semibold hover:bg-Celo-AD-primary/90 text-sm transition-colors">
                Receive Updates
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NextCohort;