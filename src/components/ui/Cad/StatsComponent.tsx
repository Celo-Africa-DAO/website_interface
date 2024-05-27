import React from 'react';

const StatsComponent = () => {
    return (
        <div className="overflow-x-hiden max-w-7xl mx-auto p-4 -mt-10 md:mt-0">
          <div className='-mx-10 md:mx-0 '>
            <table className="min-w-full table-fixed transform-table">
                <thead className='hidden md:table-header-group'>
                    <tr>
                        <th className="w-1/4"></th>
                        <th className="w-1/4"></th>
                        <th className="w-1/4"></th>
                        <th className="w-1/4"></th>
                    </tr>
                </thead>
                <tbody className='block md:table-row-group'>
                    <tr className="block md:table-row text-center">
                        <td className="p-8 border-2 py-12 border-l-0  border-r-0 border-b-0 md:border-b-2 md:w-1/4  block md:table-cell">
                            <p className="text-4xl font-semibold font-gt-alpina-trial">10+</p>
                            <p className="text-gray-600 py-10">Sponsored events</p>
                        </td>
                        <td className="p-4 border-2 md:border-r-2 border-l-0 md:border-l-2 border-r-0 border-b-0 md:border-b-2 md:w-1/4 block md:table-cell">
                            <p className="text-4xl font-semibold font-gt-alpina-trial">5k</p>
                            <p className="text-gray-600 py-10">Community members</p>
                        </td>
                        <td className="p-4 border-2 border-l-0 md:border-l-2 md:border-r-2 border-r-0 border-b-0 md:border-b-2 md:w-1/4 block md:table-cell">
                            <p className="text-4xl font-semibold font-gt-alpina-trial">10k+</p>
                            <p className="text-gray-600 py-10">Social meet ups</p>
                        </td>
                        <td className="p-4 border-2  border-l-0  border-r-0  md:border-b-2 md:w-1/4 block md:table-cell">
                            <p className="text-4xl font-semibold font-gt-alpina-trial">4</p>
                            <p className="text-gray-600 py-10">Organised hackathons</p>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    );
};

export default StatsComponent;
