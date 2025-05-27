
import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Voice AI Startup achieves EU AI Act compliance',
      description: 'Achieved EU AI Act compliance for their multilingual customer service bot in just 48 hours, enabling rapid European market expansion.',
      category: 'AI Compliance',
      outcome: '100% compliant in 48 hours'
    },
    {
      title: 'Global E-commerce Platform passes accessibility audit',
      description: 'Passed WCAG 2.2 Level AA across 12 markets and improved conversion by 23% through enhanced accessibility features.',
      category: 'Accessibility',
      outcome: 'WCAG 2.2 AA + 23% conversion boost'
    },
    {
      title: 'VR Training Platform certified across regions',
      description: 'Certified for accessibility standards across US, EU, and APAC regions, enabling global enterprise deployment.',
      category: 'Multi-jurisdictional',
      outcome: 'Global compliance achieved'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Trusted by Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how forward-thinking companies have achieved compliance success 
            with Parcivy's expert guidance and accelerated their market entry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="zen-card group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  {useCase.category}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm font-medium text-accent">
                  {useCase.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <div className="zen-card text-center animate-on-scroll">
            <Quote className="w-8 h-8 text-accent mx-auto mb-6" />
            <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
              "Parcivy transformed our compliance journey. What could have taken months of confusion 
              was completed in days with crystal clarity."
            </blockquote>
            <footer className="text-muted-foreground">
              <strong className="text-foreground">Sarah Chen</strong>, CTO at VoiceFirst AI
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
