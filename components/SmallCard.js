import Image from 'next/image';
import React from 'react';

export const SmallCard = ({ img, location, distance }) => {
  return (
    <div className='m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100'>
      <div className='relative h-16 w-16'>
        <Image src={img} fill className='rounded-lg' alt='' />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
};

// export default SmallCard
