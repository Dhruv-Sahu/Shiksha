import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Advantages from './components/Advantages';




const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Advantages/>
      {/* <Selections /> */}
      <Carousel />
      {/* <Footer /> */}
    </>
  );
};

export default App;
