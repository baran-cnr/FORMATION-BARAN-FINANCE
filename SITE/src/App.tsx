
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './features/hero/Hero';
import Problem from './features/problem/Problem';
import Solution from './features/solution/Solution';
import Program from './features/program/Program';
import Authority from './features/authority/Authority';
import Guarantee from './features/guarantee/Guarantee';
import Faq from './features/faq/Faq';
import FinalCta from './features/cta/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Program />
        <Authority />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
