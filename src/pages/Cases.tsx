
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
          <path d="M12 5a2 2 0 0 0-2-2 7 7 0 0 0-7 7c0 5 3.5 7.5 6 9.5M12 5a2 2 0 0 1 2-2 7 7 0 0 1 7 7c0 5-3.5 7.5-6 9.5M12 5v14M9 11h6M9 15h6"/>
        </svg>
      ),
      title: 'AI',
      description: 'Ensure your AI systems meet EU AI Act requirements, demonstrate explainability, and maintain ethical standards across all deployments.'
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
      description: 'Comprehensive web accessibility audits covering WCAG 2.2, ADA compliance, and multi-jurisdictional privacy regulations.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile',
      description: 'Mobile app compliance for iOS and Android, including accessibility, data protection, and app store requirements.'
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
      description: 'Voice interface and conversational AI compliance, ensuring accessibility for speech recognition and NLU transparency.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H7a2 2 0 0 0-2 2v1m0 4v8a2 2 0 0 0 2 2h1m8-17h1a2 2 0 0 1 2 2v1m0 4v8a2 2 0 0 1-2 2h-1m-6-13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2Z"/>
        </svg>
      ),
      title: 'XR',
      description: 'Virtual and augmented reality compliance covering motion safety, accessibility, and immersive content regulations.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287L12 3Z"/>
          <path d="M5 3v4M19 17v4M3 5h4M17 19h4"/>
        </svg>
      ),
      title: 'Emerging Technologies',
      description: 'Stay ahead with compliance for IoT, blockchain, quantum computing, and other cutting-edge technologies.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="8" r="2"></circle>
          <path d="M7 12.5L10 16l2-3 2 3 3-3.5"></path>
        </svg>
      ),
      title: 'Accessibility',
      description: 'Universal design compliance ensuring your digital products are usable by everyone, regardless of ability.'
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
      description: 'Privacy-by-design implementation, cross-border data transfer compliance, and comprehensive data protection audits.'
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
              Our Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized compliance solutions for every digital frontier
            </p>
          </div>
        </section>

        {/* Expertise Areas Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Every case is unique. Let's discuss your specific compliance needs.
              </h2>
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
              >
                <Link to="/start-audit">Start Your Custom Audit</Link>
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
