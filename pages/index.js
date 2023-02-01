/* eslint-disable react/jsx-key */
import Head from 'next/head';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { SmallCard } from '../components/SmallCard';
import { MediumCard } from '../components/MediumCard';

// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        {/* <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* SmallCard section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* below we are destructuring the exploreData props passed into Home func above */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        {/* MediumCard section */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/* below we are destructuring the cardsData props passed into Home func above */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// getting static props and sending into Home function above
export async function getStaticProps() {
  // smallcard
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());
  // medium card
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());

  return { props: { exploreData, cardsData } };
}
