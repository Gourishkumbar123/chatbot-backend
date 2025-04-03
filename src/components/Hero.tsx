import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Transforming <span className="text-sky-600">Fintech</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge banking and payment solutions. 
            Your trusted partner in digital financial transformation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition">
              Get Started
            </a>
            <a href="#about" className="border border-sky-600 text-sky-600 px-8 py-3 rounded-lg hover:bg-sky-50 transition">
              Learn More
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-sky-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;