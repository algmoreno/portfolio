import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
