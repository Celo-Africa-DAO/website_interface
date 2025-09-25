import React from 'react';

const Prize = () => {
  return (
    <div className="bg-Celo-AD-primary py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#0C0C0C] border-opacity-20">
          <div className="text-center p-8 border-r border-[#0C0C0C] border-opacity-20 last:border-r-0">
            <h3 className="font-gt-alpina-trial text-2xl font-thin text-[#0C0C0C] mb-2 italic">
              $12,000 Prize Pool
            </h3>
            <p className="text-[#565656] text-sm font-Inter">
              Awarded grants to Top five project in different Categories
            </p>
          </div>
          <div className="text-center p-8 border-r border-[#0C0C0C] border-opacity-20 last:border-r-0">
            <h3 className="font-gt-alpina-trial text-2xl font-thin text-[#0C0C0C] mb-2 italic">
              13 out of 25 Project
            </h3>
            <p className="text-[#565656] text-sm font-Inter">
              Carefully selected project from applicants
            </p>
          </div>
          <div className="text-center p-8">
            <h3 className="font-gt-alpina-trial text-2xl font-thin text-[#0C0C0C] mb-2 italic">
              Minipay
            </h3>
            <p className="text-[#565656] text-sm font-Inter">
              outstanding minipay projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;