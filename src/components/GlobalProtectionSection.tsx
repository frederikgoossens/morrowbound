
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GlobalProtectionSection = () => {
  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 4L6 11L3 8" stroke="#D4B896" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const coverageItems = [
    'Privacy laws in 40+ countries',
    'AI regulations worldwide',
    'Accessibility standards globally',
    'Sector-specific compliance',
    'Emerging tech frameworks'
  ];

  const newIn2024 = [
    'China PIPL & AI rules',
    'India DPDP Act',
    'UAE Federal DPL',
    'US State AI laws',
    'Canada Bill 64'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            One Audit, Global Protection
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Coverage includes */}
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-6">Coverage includes:</h3>
            <div className="space-y-4">
              {coverageItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New in 2024 */}
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-6">New in 2024:</h3>
            <div className="space-y-4">
              {newIn2024.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-12 py-6 text-lg"
          >
            <Link to="/standards">See Complete Standards List</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlobalProtectionSection;
