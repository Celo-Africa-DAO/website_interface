import React from 'react';

const StatsComponent = () => {
    return (
        <div className="overflow-x-auto  max-w-7xl mx-auto">
          <table className="min-w-full table-fixed">
            <thead className=''>
              <tr>
                <th className="w-1/4"></th>
                <th className="w-1/4"></th>
                <th className="w-1/4"></th>
                <th className="w-1/4"></th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className="text-center ">
                <td className="p-8 border-2 py-12 border-l-0 ">
                  <p className="text-4xl font-semibold font-gt-alpina-trial">10+</p>
                  <p className="text-gray-600 py-10">Sponsored events</p>
                </td>
                <td className="p-4 border-2">
                  <p className="text-4xl font-semibold font-gt-alpina-trial">5k</p>
                  <p className="text-gray-600 py-10">Community members</p>
                </td>
                <td className="p-4 border-2">
                  <p className="text-4xl font-semibold font-gt-alpina-trial">10k +  </p>
                  <p className="text-gray-600 py-10">Social meet ups</p>
                </td>
                <td className="p-4 border-2 border-r-0 ">
                  <p className="text-4xl font-semibold font-gt-alpina-trial ">4</p>
                  <p className="text-gray-600 py-10">Organised hackathons</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };

export default StatsComponent;
