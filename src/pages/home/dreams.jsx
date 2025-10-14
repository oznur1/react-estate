import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const Dreams = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/dream-bg.jpg')", // kendi görselinle değiştir
      }}
    >
      {/* Karanlık transparan katman */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* İçerik */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-10">
          Explore Homes That Fit Your Dreams
        </h1>

        <div className="flex justify-center gap-6">
          <Button label="Projects" />
          <Button label="Contact Us" />
        </div>
      </motion.div>
    </section>
  );
};

export default Dreams;
