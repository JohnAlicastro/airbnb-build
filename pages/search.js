import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const Search = () => {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'MMMM dd yyyy');
  const formattedEndDate = format(new Date(endDate), 'MMMM dd yyyy');
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${numberOfGuests}`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays | {dateRange} | for {numberOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='searchPageButton'>Cancellation Flexibility</p>
            <p className='searchPageButton'>Type of Place</p>
            <p className='searchPageButton'>Price</p>
            <p className='searchPageButton'>Rooms and Beds</p>
            <p className='searchPageButton'>More filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
