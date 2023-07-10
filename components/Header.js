import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetAllSearchInput = () => {
    setSearchInput('');
    setStartDate(new Date());
    setEndDate(new Date());
    setNumberOfGuests(1);
  };

  const submitSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5 shadow-md md:px-10'>
      {/* Left - Logo */}
      <div onClick={() => router.push('/')} className='relative my-auto flex h-10 cursor-pointer items-center '>
        <Image
          src='https://links.papareact.com/qd3'
          fill
          // objectFit='contain'
          // objectPosition='left'
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          alt=''
        />
      </div>

      {/* Middle - Search */}
      <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          className='flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none'
          placeholder={placeholder || 'Start your search'}
        />
        <MagnifyingGlassIcon className='hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex' />
      </div>

      {/* Right - Login */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden cursor-pointer md:inline'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 rounded-full border-2 p-2'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {/* Calendar */}
      {searchInput && (
        <div className='col-span-3 mx-auto flex flex-col'>
          <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#FD5B61']} onChange={handleSelect} />
          <div className='mb-4 flex items-center border-b'>
            <h2 className='flex-grow text-2xl font-semibold'>Number of Guests</h2>
            <UserIcon className='h-5' />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg text-red-400 outline-none'
            />
          </div>
          <div className='flex'>
            <button onClick={resetAllSearchInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button
              onClick={() => {
                submitSearch();
                resetAllSearchInput();
              }}
              className='flex-grow text-red-400'
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// export default Header;
