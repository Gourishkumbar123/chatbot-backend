import React from 'react';
import { ArrowDown, ChevronRight, CreditCard, Wallet, Building2, Globe2, Users, Target, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;