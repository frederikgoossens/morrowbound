
import React from 'react';

const TrustBar = () => {
  const standards = [
    'ISO 27001', 'ADA', 'EU AI Act', 'GDPR', 'CCPA', 
    'PDPO', 'PDPL', 'WCAG 2.2', 'SOC 2', 'NIST',
    'IEEE 2857', 'ISO/IEC 23053', 'EN 301 549'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground mb-8 text-lg">
          Certified expertise across 25+ global regulations and frameworks
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-x space-x-8 text-muted-foreground">
            {[...standards, ...standards].map((standard, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-card rounded-lg border border-border/30 font-medium"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
