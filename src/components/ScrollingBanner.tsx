
import React from 'react';

const ScrollingBanner = () => {
  const standards = [
    'GDPR', 'CCPA', 'China PIPL', 'EU AI Act', 'Singapore PDPA', 'UAE DPL', 
    'Canada PIPEDA', 'Australia Privacy Act', 'UK DPA', 'Japan APPI', 
    'Brazil LGPD', 'India DPDP', 'WCAG 2.2', 'SOC 2', 'ISO 27001', 'And 55+ more...'
  ];

  return (
    <div className="border-y border-border/50 bg-card/30 py-4 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        <span className="text-muted-foreground text-sm">
          {standards.join(' • ')} • {standards.join(' • ')}
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
