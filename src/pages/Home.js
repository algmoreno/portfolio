import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/ContactForm';
// import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <div className="container">
      <About /> 
      <Projects />
    </div>

  );
};

export default Home;
