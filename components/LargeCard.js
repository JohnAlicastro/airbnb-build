import Image from 'next/image';
import React from 'react';

export const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image src={img} fill className='rounded-2xl' style={{ objectFit: 'cover' }} alt='' />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <button>{buttonText}</button>
      </div>
    </section>
  );
};

// export default LargeCard
