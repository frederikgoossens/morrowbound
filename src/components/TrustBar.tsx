
import React from 'react';

const TrustBar = () => {
  const regions = [
    {
      flag: '🇪🇺',
      name: 'European Union',
      standards: ['GDPR', 'AI Act', 'ePrivacy', 'Digital Services Act', 'EN 301 549']
    },
    {
      flag: '🇺🇸',
      name: 'United States',
      standards: ['ADA', 'CCPA', 'Section 508', 'COPPA', 'State Privacy Laws']
    },
    {
      flag: '🇬🇧',
      name: 'United Kingdom',
      standards: ['UK GDPR', 'DPA 2018', 'Equality Act', 'Online Safety Bill']
    },
    {
      flag: '🇭🇰',
      name: 'Hong Kong',
      standards: ['PDPO', 'Accessibility Guidelines']
    },
    {
      flag: '🇸🇬',
      name: 'Singapore',
      standards: ['PDPA', 'IM8', 'AI Governance']
    },
    {
      flag: '🌏',
      name: 'International',
      standards: ['ISO 27001', 'WCAG 2.2', 'ISO/IEC 23053', 'Privacy by Design']
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-8 text-lg">
            Certified expertise across 25+ global regulations and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg border border-border/30 p-6 hover:shadow-zen transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{region.flag}</span>
                <h3 className="font-medium text-foreground">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.standards.map((standard, stdIndex) => (
                  <span 
                    key={stdIndex}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-beige-50 rounded-full border border-border/30"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
