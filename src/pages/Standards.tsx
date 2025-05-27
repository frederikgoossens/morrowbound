
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Standards = () => {
  const standardsCategories = [
    {
      title: 'Privacy & Data Protection',
      standards: [
        {
          flag: '🇪🇺',
          name: 'GDPR',
          fullName: 'General Data Protection Regulation',
          description: 'Comprehensive data protection law governing personal data processing in the EU'
        },
        {
          flag: '🇺🇸',
          name: 'CCPA',
          fullName: 'California Consumer Privacy Act',
          description: 'California state law enhancing privacy rights for consumers'
        },
        {
          flag: '🇭🇰',
          name: 'PDPO',
          fullName: 'Personal Data (Privacy) Ordinance',
          description: 'Hong Kong\'s primary data protection legislation'
        },
        {
          flag: '🇸🇬',
          name: 'PDPA',
          fullName: 'Personal Data Protection Act',
          description: 'Singapore\'s comprehensive personal data protection framework'
        },
        {
          flag: '🇬🇧',
          name: 'UK GDPR',
          fullName: 'UK General Data Protection Regulation',
          description: 'Post-Brexit data protection law for the United Kingdom'
        }
      ]
    },
    {
      title: 'Accessibility Standards',
      standards: [
        {
          flag: '🌏',
          name: 'WCAG 2.2',
          fullName: 'Web Content Accessibility Guidelines',
          description: 'International standard for web accessibility and inclusive design'
        },
        {
          flag: '🇺🇸',
          name: 'ADA',
          fullName: 'Americans with Disabilities Act',
          description: 'US federal law prohibiting discrimination based on disability'
        },
        {
          flag: '🇺🇸',
          name: 'Section 508',
          fullName: 'US Federal Accessibility Standards',
          description: 'Federal law requiring accessible technology for government agencies'
        },
        {
          flag: '🇪🇺',
          name: 'EN 301 549',
          fullName: 'European Accessibility Standard',
          description: 'European standard for ICT accessibility requirements'
        },
        {
          flag: '🇬🇧',
          name: 'Equality Act',
          fullName: 'UK Equality Act 2010',
          description: 'UK legislation protecting against discrimination and promoting equality'
        }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      standards: [
        {
          flag: '🇪🇺',
          name: 'EU AI Act',
          fullName: 'Artificial Intelligence Act',
          description: 'Comprehensive AI regulation framework for risk-based governance'
        },
        {
          flag: '🌏',
          name: 'ISO/IEC 23053',
          fullName: 'Framework for AI using ML',
          description: 'International framework for trustworthy AI and machine learning'
        },
        {
          flag: '🇸🇬',
          name: 'Singapore Model AI',
          fullName: 'Model AI Governance Framework',
          description: 'Voluntary framework for responsible AI deployment in organizations'
        },
        {
          flag: '🌏',
          name: 'IEEE Standards',
          fullName: 'Ethical AI Standards',
          description: 'Technical standards for ethical design in autonomous systems'
        }
      ]
    },
    {
      title: 'Industry Standards',
      standards: [
        {
          flag: '🌏',
          name: 'ISO 27001',
          fullName: 'Information Security Management',
          description: 'International standard for information security management systems'
        },
        {
          flag: '🌏',
          name: 'SOC 2',
          fullName: 'Service Organization Control',
          description: 'Auditing standard for service organizations\' security controls'
        },
        {
          flag: '🌏',
          name: 'Privacy by Design',
          fullName: 'Privacy Framework',
          description: 'Proactive approach to embedding privacy into system design'
        },
        {
          flag: '🇺🇸',
          name: 'NIST Framework',
          fullName: 'Cybersecurity Framework',
          description: 'US framework for improving critical infrastructure cybersecurity'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
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

        {/* Standards Categories */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto space-y-16">
            {standardsCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h2 className="text-3xl font-light text-foreground text-center mb-12">
                  {category.title}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.standards.map((standard, standardIndex) => (
                    <div 
                      key={standardIndex}
                      className="bg-card rounded-xl shadow-zen border border-border/50 p-8 hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{standard.flag}</span>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{standard.name}</h3>
                          <p className="text-sm text-muted-foreground">{standard.fullName}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
