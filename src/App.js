import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
    </div>
  );
}

export default App;
