import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

export const InfoCard = ({ img, location, title, description, star, price, total }) => {
  return (
    <div>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img} fill style={{ objectFit: 'cover' }} alt='' />
      </div>

      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

// export default InfoCard
