import React from 'react';

import bgVideo from '../assets/beachVid.mp4';
import hero from '../assets/school_girl1.jpg'
import Navbar from './Navbar';
// import Navbar2 from './Navbar2';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (<div>
    <header className='w-screen h-screen relative'>
      <img
        src={hero}
        className='w-full h-full object-cover'
        // autoPlay
        // loop
        // muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white mb-2'>Helping Indian Education Like Never Before!</h1>
        <h2 className='text-white mb-4'>Promising Transparent and Authentic Services</h2>
        <div className='flex-row gap-4'>
        <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded" onClick={() => navigate('Donate')}>Donate</button>
        
        <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded " onClick={() => navigate('Tables')}>Authenticate</button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Hero;
