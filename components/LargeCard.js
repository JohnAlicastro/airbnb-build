import Image from 'next/image';
import React from 'react';

export const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className='relative cursor-pointer py-16'>
      <div className='relative h-96 min-w-[300px]'>
        <Image src={img} fill className='rounded-2xl' style={{ objectFit: 'cover' }} alt='' />
      </div>

      <div className='absolute top-32 left-12'>
        <h3 className='mb-3 w-64 text-4xl'>{title}</h3>
        <p>{description}</p>
        <button className='mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white'>{buttonText}</button>
      </div>
    </section>
  );
};

// export default LargeCard
