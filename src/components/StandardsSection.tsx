
import React from 'react';

const StandardsSection = () => {
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
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            We Audit Against Leading Standards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage across global regulations and frameworks, 
            ensuring your compliance spans all relevant jurisdictions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-blue-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{region.flag}</span>
                <h3 className="font-medium text-foreground">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.standards.map((standard, stdIndex) => (
                  <span 
                    key={stdIndex}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-accent/10 rounded-full border border-accent/20"
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

export default StandardsSection;
