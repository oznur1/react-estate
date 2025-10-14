import React from 'react';
import Header from '../../components/Header';
import Dreams from '../home/Dreams';
import About from '../About';
import Projects from '../Projects';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/header_img.png')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

        {/* İçerik */}
        <div className="relative z-10">
          <Header />
          <Dreams />
        </div>
      </div>

      <About />
      <Projects/>
    </div>
  );
};

export default Home;

