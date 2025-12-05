import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Memes from './components/Memes';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-christmas-red overflow-hidden relative selection:bg-gold selection:text-christmas-red">
      <Snowfall />
      <Header />
      <main className="flex flex-col gap-8">
        <Hero />
        <About />
        <HowToBuy />
        <Memes />
        <Chart />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;