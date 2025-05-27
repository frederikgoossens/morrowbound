
import React from 'react';

const ScrollingBanner = () => {
  const standards = [
    'GDPR', 'CCPA', 'China PIPL', 'EU AI Act', 'Singapore PDPA', 'UAE DPL', 
    'Canada PIPEDA', 'Australia Privacy Act', 'UK DPA', 'Japan APPI', 
    'Brazil LGPD', 'India DPDP', 'WCAG 2.2', 'SOC 2', 'ISO 27001', 
    'Qatar DPL', 'Saudi PDPL', 'NZ Privacy Act', 'Korea PIPA', 'Thailand PDPA', 
    'And 50+ more...'
  ];

  return (
    <div className="border-y border-border/50 bg-muted/20 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-muted/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted/20 to-transparent z-10" />
          
          <div className="animate-scroll whitespace-nowrap">
            <span className="text-muted-foreground text-sm">
              {standards.join(' • ')} • {standards.join(' • ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
