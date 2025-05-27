
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CoverageSection from '@/components/CoverageSection';
import StandardsSection from '@/components/StandardsSection';
import ProcessSection from '@/components/ProcessSection';
import UseCasesSection from '@/components/UseCasesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <CoverageSection />
      <StandardsSection />
      <ProcessSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
