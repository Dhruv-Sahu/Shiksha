import React, { useState } from 'react';
import first from '../assets/1.jpeg'
import second from '../assets/2.jpeg'
import third from '../assets/3.jpeg'
const CAROUSEL_DATA = [
  {
    url: first,
  },
  {
    url: second,
  },
  {
    url: third,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => {
    console.log(currentIndex);
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };
  const decrementIndex = () => {
    console.log(currentIndex);
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };
  return (
    <section className='container px-4 my-12 h-3/4 relative'>
      <img src={CAROUSEL_DATA[currentIndex].url} className='rounded-md' />
      <div
        onClick={decrementIndex}
        className='absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>

      <div
        onClick={incrementIndex}
        className='absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
