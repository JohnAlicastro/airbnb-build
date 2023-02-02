import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const Search = ({ searchresults }) => {
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

{
  /* we would usually use 'context' as a param in getServerSideProps
so that we could access the query params in Search above (location, startDate, etc...) and use them,
but here we are calling an API with static results so there is no need */
}

// export async function getServerSideProps(context) {... code here}

// getting server side props and sending into Search func above
export async function getServerSideProps() {
  const searchresults = await fetch('https://links.papareact.com/isz').then((res) => res.json());

  return {
    props: { searchresults },
  };
}
