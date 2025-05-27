
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Standards = () => {
  const RegionalBadge = ({ code }: { code: string }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="1" y="1" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" fill="#F9FAFB"/>
      <text x="16" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#6B7280">{code}</text>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );

  const AccessibilityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="4" r="1"/>
      <path d="m18 19 1-7-6 2"/>
      <path d="m5 8 3-3 5 3 6-2"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  );

  const CircuitIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="6" height="6" rx="1"/>
      <rect x="14" y="4" width="6" height="6" rx="1"/>
      <rect x="14" y="14" width="6" height="6" rx="1"/>
      <rect x="4" y="14" width="6" height="6" rx="1"/>
      <line x1="10" y1="7" x2="14" y2="7"/>
      <line x1="7" y1="10" x2="7" y2="14"/>
      <line x1="17" y1="10" x2="17" y2="14"/>
      <line x1="10" y1="17" x2="14" y2="17"/>
    </svg>
  );

  const CertificateIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21v-6m8 6v-6"/>
      <path d="M12 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6Z"/>
      <path d="m10 9 1.5 1.5L14 8"/>
    </svg>
  );

  const standardsCategories = [
    {
      title: 'Privacy & Data Protection',
      icon: <ShieldIcon />,
      standards: [
        {
          badge: <RegionalBadge code="EU" />,
          name: 'GDPR',
          fullName: 'General Data Protection Regulation',
          description: 'Comprehensive data protection law governing personal data processing in the EU'
        },
        {
          badge: <RegionalBadge code="US" />,
          name: 'CCPA',
          fullName: 'California Consumer Privacy Act',
          description: 'California state law enhancing privacy rights for consumers'
        },
        {
          badge: <RegionalBadge code="HK" />,
          name: 'PDPO',
          fullName: 'Personal Data (Privacy) Ordinance',
          description: 'Hong Kong\'s primary data protection legislation'
        },
        {
          badge: <RegionalBadge code="SG" />,
          name: 'PDPA',
          fullName: 'Personal Data Protection Act',
          description: 'Singapore\'s comprehensive personal data protection framework'
        },
        {
          badge: <RegionalBadge code="UK" />,
          name: 'UK GDPR',
          fullName: 'UK General Data Protection Regulation',
          description: 'Post-Brexit data protection law for the United Kingdom'
        }
      ]
    },
    {
      title: 'Accessibility Standards',
      icon: <AccessibilityIcon />,
      standards: [
        {
          badge: <RegionalBadge code="INT" />,
          name: 'WCAG 2.2',
          fullName: 'Web Content Accessibility Guidelines',
          description: 'International standard for web accessibility and inclusive design'
        },
        {
          badge: <RegionalBadge code="US" />,
          name: 'ADA',
          fullName: 'Americans with Disabilities Act',
          description: 'US federal law prohibiting discrimination based on disability'
        },
        {
          badge: <RegionalBadge code="US" />,
          name: 'Section 508',
          fullName: 'US Federal Accessibility Standards',
          description: 'Federal law requiring accessible technology for government agencies'
        },
        {
          badge: <RegionalBadge code="EU" />,
          name: 'EN 301 549',
          fullName: 'European Accessibility Standard',
          description: 'European standard for ICT accessibility requirements'
        },
        {
          badge: <RegionalBadge code="UK" />,
          name: 'Equality Act',
          fullName: 'UK Equality Act 2010',
          description: 'UK legislation protecting against discrimination and promoting equality'
        }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      icon: <CircuitIcon />,
      standards: [
        {
          badge: <RegionalBadge code="EU" />,
          name: 'EU AI Act',
          fullName: 'Artificial Intelligence Act',
          description: 'Comprehensive AI regulation framework for risk-based governance'
        },
        {
          badge: <RegionalBadge code="INT" />,
          name: 'ISO/IEC 23053',
          fullName: 'Framework for AI using ML',
          description: 'International framework for trustworthy AI and machine learning'
        },
        {
          badge: <RegionalBadge code="SG" />,
          name: 'Singapore Model AI',
          fullName: 'Model AI Governance Framework',
          description: 'Voluntary framework for responsible AI deployment in organizations'
        },
        {
          badge: <RegionalBadge code="INT" />,
          name: 'IEEE Standards',
          fullName: 'Ethical AI Standards',
          description: 'Technical standards for ethical design in autonomous systems'
        }
      ]
    },
    {
      title: 'Industry Standards',
      icon: <CertificateIcon />,
      standards: [
        {
          badge: <RegionalBadge code="INT" />,
          name: 'ISO 27001',
          fullName: 'Information Security Management',
          description: 'International standard for information security management systems'
        },
        {
          badge: <RegionalBadge code="INT" />,
          name: 'SOC 2',
          fullName: 'Service Organization Control',
          description: 'Auditing standard for service organizations\' security controls'
        },
        {
          badge: <RegionalBadge code="INT" />,
          name: 'Privacy by Design',
          fullName: 'Privacy Framework',
          description: 'Proactive approach to embedding privacy into system design'
        },
        {
          badge: <RegionalBadge code="US" />,
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
                <div className="flex items-center justify-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-600 hover:text-accent transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-light text-foreground">
                      {category.title}
                    </h2>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.standards.map((standard, standardIndex) => (
                    <div 
                      key={standardIndex}
                      className="bg-card rounded-xl shadow-zen border border-border/50 p-8 hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="mr-3 text-gray-600 group-hover:text-accent transition-colors duration-300">
                          {standard.badge}
                        </div>
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
