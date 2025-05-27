
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Standards = () => {
  const regions = [
    {
      flag: '🇪🇺',
      name: 'European Union',
      standards: ['GDPR', 'AI Act', 'ePrivacy', 'Digital Services Act', 'EN 301 549'],
      description: 'Comprehensive data protection and AI governance frameworks'
    },
    {
      flag: '🇺🇸',
      name: 'United States',
      standards: ['ADA', 'CCPA', 'Section 508', 'COPPA', 'State Privacy Laws'],
      description: 'Federal and state-level accessibility and privacy requirements'
    },
    {
      flag: '🇬🇧',
      name: 'United Kingdom',
      standards: ['UK GDPR', 'DPA 2018', 'Equality Act', 'Online Safety Bill'],
      description: 'Post-Brexit data protection and online safety regulations'
    },
    {
      flag: '🇭🇰',
      name: 'Hong Kong',
      standards: ['PDPO', 'Accessibility Guidelines'],
      description: 'Personal data and accessibility standards for APAC markets'
    },
    {
      flag: '🇸🇬',
      name: 'Singapore',
      standards: ['PDPA', 'IM8', 'AI Governance'],
      description: 'Leading ASEAN privacy and AI governance frameworks'
    },
    {
      flag: '🌏',
      name: 'International',
      standards: ['ISO 27001', 'WCAG 2.2', 'ISO/IEC 23053', 'Privacy by Design'],
      description: 'Global standards for security, accessibility, and privacy'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground mb-6 leading-tight">
              Compliance Standards
              <br />
              <span className="text-muted-foreground">We Audit Against</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across 25+ global regulations and frameworks, 
              ensuring your compliance spans all relevant jurisdictions.
            </p>
          </div>
        </section>

        {/* Standards Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <div 
                  key={index}
                  className="zen-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{region.flag}</span>
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{region.name}</h3>
                      <p className="text-sm text-muted-foreground">{region.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {region.standards.map((standard, stdIndex) => (
                      <div 
                        key={stdIndex}
                        className="p-3 bg-accent/5 rounded-lg border border-accent/10 hover:bg-accent/10 transition-colors"
                      >
                        <span className="font-medium text-foreground">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="zen-card">
              <h2 className="text-3xl font-light text-foreground mb-4">
                Ready to get certified?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our expert team will guide you through compliance requirements 
                across all relevant standards for your platform.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
              >
                <Link to="/start-audit">Start Your Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Standards;
