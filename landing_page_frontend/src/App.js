import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgentIllustration from './components/AgentIllustration';
import ProductPillars from './components/ProductPillars';
import Timeline from './components/Timeline';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="illustration"><AgentIllustration /></section>
        <section id="pillars"><ProductPillars /></section>
        <section id="timeline"><Timeline /></section>
        <section id="usecases"><UseCases /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="cta"><FinalCTA /></section>
      </main>
    </div>
  );
}

export default App;
