
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cases = () => {
  const expertiseAreas = [
    {
      icon: '🤖',
      title: 'AI',
      description: 'Ensure your AI systems meet EU AI Act requirements, demonstrate explainability, and maintain ethical standards across all deployments.'
    },
    {
      icon: '🌐',
      title: 'Web',
      description: 'Comprehensive web accessibility audits covering WCAG 2.2, ADA compliance, and multi-jurisdictional privacy regulations.'
    },
    {
      icon: '📱',
      title: 'Mobile',
      description: 'Mobile app compliance for iOS and Android, including accessibility, data protection, and app store requirements.'
    },
    {
      icon: '🎙️',
      title: 'Voice',
      description: 'Voice interface and conversational AI compliance, ensuring accessibility for speech recognition and NLU transparency.'
    },
    {
      icon: '🥽',
      title: 'XR',
      description: 'Virtual and augmented reality compliance covering motion safety, accessibility, and immersive content regulations.'
    },
    {
      icon: '⚡',
      title: 'Emerging Technologies',
      description: 'Stay ahead with compliance for IoT, blockchain, quantum computing, and other cutting-edge technologies.'
    },
    {
      icon: '♿',
      title: 'Accessibility',
      description: 'Universal design compliance ensuring your digital products are usable by everyone, regardless of ability.'
    },
    {
      icon: '🔐',
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
                  className="bg-card rounded-xl shadow-zen border border-border/50 p-8 hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-center"
                >
                  <div 
                    className="text-4xl mb-4 grayscale"
                    style={{ filter: 'grayscale(100%)' }}
                  >
                    {area.icon}
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
