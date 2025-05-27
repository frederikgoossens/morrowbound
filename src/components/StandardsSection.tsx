
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StandardsSection = () => {
  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 4L6 11L3 8" stroke="#D4B896" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const regions = [
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#6B7280">EU</text>
        </svg>
      ),
      name: 'European Union',
      standards: ['GDPR', 'AI Act', 'ePrivacy', 'Digital Services Act', 'EN 301 549'],
      moreCount: '+10 more standards'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#6B7280">US</text>
        </svg>
      ),
      name: 'United States',
      standards: ['ADA', 'CCPA', 'Section 508', 'COPPA', 'State Privacy Laws'],
      moreCount: '+12 more regulations'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#6B7280">UK</text>
        </svg>
      ),
      name: 'United Kingdom',
      standards: ['UK GDPR', 'DPA 2018', 'Equality Act', 'Online Safety Bill'],
      moreCount: '+5 more laws'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">APAC</text>
        </svg>
      ),
      name: 'Asia-Pacific',
      standards: ['China PIPL', 'Japan APPI', 'Singapore PDPA', 'Australia Privacy Act'],
      moreCount: '+15 more frameworks'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">MENA</text>
        </svg>
      ),
      name: 'Middle East',
      standards: ['UAE Federal DPL', 'Saudi PDPL', 'Qatar DPL', 'AI Ethics Guidelines'],
      moreCount: '+7 more standards'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">INTL</text>
        </svg>
      ),
      name: 'International',
      standards: ['ISO 27001', 'WCAG 2.2', 'ISO/IEC 23053', 'Privacy by Design'],
      moreCount: '+20 more protocols'
    }
  ];

  const regionalCoverage = [
    { region: 'Americas', count: '15+ laws', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { region: 'Europe', count: '12+ regs', color: 'bg-green-50 text-green-700 border-green-200' },
    { region: 'APAC', count: '20+ standards', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { region: 'MENA', count: '8+ laws', color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { region: 'Africa', count: '5+ emerging', color: 'bg-gray-50 text-gray-700 border-gray-200' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Global Compliance Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            70+ regulations across 40+ jurisdictions — all in one audit
          </p>
          
          {/* Regional Coverage Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {regionalCoverage.map((region, index) => (
              <div 
                key={index}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 hover:shadow-md ${region.color}`}
              >
                <span className="font-semibold">{region.region}:</span> {region.count}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg border border-border/30 p-6 hover:shadow-zen transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{region.flag}</div>
                <h3 className="font-medium text-foreground">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {region.standards.map((standard, stdIndex) => (
                  <span 
                    key={stdIndex}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-beige-50 rounded-full border border-border/30"
                  >
                    {standard}
                  </span>
                ))}
              </div>
              <div className="text-sm text-accent font-medium">
                {region.moreCount} →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
          >
            <Link to="/standards">Explore All 70+ Standards</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
