import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FunnelComparison } from './components/FunnelComparison';
import { SocialProof } from './components/SocialProof';
import { PriceAnchoring } from './components/PriceAnchoring';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FunnelComparison />
      <SocialProof />
      <PriceAnchoring />
      <Footer />
    </main>
  );
};

export default App;