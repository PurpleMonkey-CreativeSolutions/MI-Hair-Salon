import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Restoration from './components/Restoration';
import OpeningHours from './components/OpeningHours';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Hero />
        <Services />
        <Restoration />
        <OpeningHours />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;