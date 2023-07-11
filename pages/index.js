/* eslint-disable react/jsx-key */
import Head from 'next/head';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { SmallCard } from '../components/SmallCard';
import { MediumCard } from '../components/MediumCard';
import { LargeCard } from '../components/LargeCard';
import { Footer } from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='mx-auto max-w-7xl px-8 sm:px-16'>
        {/* SmallCard */}
        <section className='pt-6'>
          <h2 className='pb-5 text-4xl font-semibold'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        {/* MediumCard */}
        <section>
          <h2 className='py-8 text-4xl font-semibold'>Live Anywhere</h2>

          <div className='-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* LargeCard */}
        <LargeCard
          img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          title='The Greatest Outdoors'
          description='Wishlists curates by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());
  return { props: { exploreData, cardsData } };
}
