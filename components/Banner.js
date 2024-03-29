import React from 'react';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div className='lg:[500px] relative h-[300px] sm:h-[400px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src='https://links.papareact.com/0fm' fill style={{ objectFit: 'cover' }} alt='' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90'>{`I'm flexible`}</button>
      </div>
    </div>
  );
};

// export default Banner
