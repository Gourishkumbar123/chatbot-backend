import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About VA Tech Ventures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2012 and acquired by CRED in 2021, we're a team of 160+ Engineers & 20+ PMs 
            dedicated to revolutionizing fintech solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Users className="text-sky-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              180+ dedicated professionals including engineers and product managers working towards excellence.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Target className="text-sky-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative fintech solutions that empower businesses and transform digital banking.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Award className="text-sky-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and customer-centricity drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;