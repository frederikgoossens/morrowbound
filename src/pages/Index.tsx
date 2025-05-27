
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ScrollingBanner from '@/components/ScrollingBanner';
import TrustBar from '@/components/TrustBar';
import CoverageSection from '@/components/CoverageSection';
import StandardsSection from '@/components/StandardsSection';
import GlobalProtectionSection from '@/components/GlobalProtectionSection';
import ProcessSection from '@/components/ProcessSection';
import UseCasesSection from '@/components/UseCasesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      <HeroSection />
      <ScrollingBanner />
      <TrustBar />
      <CoverageSection />
      <StandardsSection />
      <GlobalProtectionSection />
      <ProcessSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
