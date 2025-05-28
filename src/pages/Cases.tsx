import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cases = () => {
  const expertiseAreas = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287L12 3Z"/>
        </svg>
      ),
      title: 'AI',
      description: 'EU AI Act compliance for machine learning systems, ensuring proper risk categorization and transparency requirements.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: 'Web',
      description: 'GDPR compliance for websites targeting EU users, including cookie consent, privacy notices, and data subject rights.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile',
      description: 'Privacy compliance for apps in EU app stores, ensuring GDPR compliance and proper data handling practices.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="22"></line>
        </svg>
      ),
      title: 'Voice',
      description: 'EU AI Act compliance for voice assistants and NLP systems, ensuring transparency and human oversight requirements.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <rect x="10" y="10" width="4" height="4" rx="1"></rect>
          <path d="M12 7v3"></path>
        </svg>
      ),
      title: 'Data',
      description: 'GDPR compliance for data controllers and processors, including lawful basis assessment and cross-border transfer mechanisms.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Identity',
      description: 'Digital identity verification and biometric processing compliance under GDPR and EU AI Act, including facial recognition, KYC systems, and identity management platforms.'
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
              EU Compliance Cases
              <br />
              <span className="text-muted-foreground">We Specialize In</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert EU AI Act and GDPR compliance solutions for digital innovation
            </p>
          </div>
        </section>

        {/* Expertise Areas Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-zen border border-border/50 p-8 hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-center group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 rounded-full p-3 transition-colors duration-300 group-hover:bg-accent/10">
                      <div className="text-gray-600 transition-colors duration-300 group-hover:text-accent">
                        {area.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {area.description}
                  </p>
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
                Every case is unique. Let's discuss your specific EU compliance needs.
              </h2>
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
              >
                <Link to="/start-audit">Start Your EU Compliance Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
