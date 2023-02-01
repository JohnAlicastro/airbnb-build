import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Search = () => {
  return (
    <div>
      <Header />

      <main className='flex'>
        <section>
          <p className='text-xs'>300+ Stays for 5 number of guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

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
