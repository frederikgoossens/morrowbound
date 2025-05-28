
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StandardsSection = () => {
  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 4L6 11L3 8" stroke="#D4B896" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const euRegulations = [
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#6B7280">EU</text>
        </svg>
      ),
      name: 'EU AI Act',
      standards: ['Risk categorization', 'Transparency obligations', 'Human oversight', 'Data governance', 'Technical documentation'],
      moreCount: '+5 more requirements'
    },
    {
      flag: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="transition-colors duration-300 group-hover:stroke-accent group-hover:text-accent">
          <rect x="0.5" y="0.5" width="39" height="23" rx="4" stroke="#6B7280" strokeWidth="1" fill="#F9FAFB"/>
          <text x="20" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">GDPR</text>
        </svg>
      ),
      name: 'GDPR',
      standards: ['Lawful basis', 'Data subject rights', 'Privacy notices', 'DPIAs', 'Breach procedures'],
      moreCount: '+8 more obligations'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Deep Expertise in EU Digital Law
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Comprehensive coverage of the EU AI Act and GDPR requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {euRegulations.map((regulation, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg border border-border/30 p-8 hover:shadow-zen transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{regulation.flag}</div>
                <h3 className="font-medium text-foreground text-xl">{regulation.name}</h3>
              </div>
              <div className="space-y-3 mb-6">
                {regulation.standards.map((standard, stdIndex) => (
                  <div key={stdIndex} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-muted-foreground">{standard}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-accent font-medium">
                {regulation.moreCount} →
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
            <Link to="/standards">Explore EU Compliance Framework</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
