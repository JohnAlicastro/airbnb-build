import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { InfoCard } from '../components/InfoCard';
import { MapDisplay } from '../components/MapDisplay';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  useEffect(() => {
    if (!(location || startDate || endDate || numberOfGuests)) {
      router.push('/');
    }
  });

  const formattedStartDate = format(new Date(startDate || new Date()), 'MMMM dd yyyy');
  const formattedEndDate = format(new Date(endDate || new Date()), 'MMMM dd yyyy');
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${numberOfGuests} guests`} />

      <main className='flex'>
        <section className='flex-grow px-6 pt-14'>
          <p className='text-xs'>
            300+ Stays | {dateRange} | for {numberOfGuests} guests
          </p>
          <h1 className='mt-2 mb-6 text-3xl font-semibold'>Stays in {location}</h1>

          <div className='mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex'>
            <p className='searchPageButton'>Cancellation Flexibility</p>
            <p className='searchPageButton'>Type of Place</p>
            <p className='searchPageButton'>Price</p>
            <p className='searchPageButton'>Rooms and Beds</p>
            <p className='searchPageButton'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard key={img} img={img} location={location} title={title} description={description} star={star} price={price} total={total} />
            ))}
          </div>
        </section>

        <section className='sticky top-[76px] hidden h-[calc(100vh-76px)] lg:inline-flex lg:min-w-[40%]'>
          <MapDisplay searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) => res.json());
  return { props: { searchResults } };
}
