
import React from 'react';
import { ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Voice AI Startup achieves EU AI Act compliance',
      description: 'A conversational AI platform successfully navigated the complex EU AI Act requirements with our specialized audit framework.',
      category: 'AI Compliance',
      outcome: '100% compliant in 6 weeks'
    },
    {
      title: 'E-commerce platform passes accessibility audit',
      description: 'Major retail platform achieved WCAG 2.2 AA compliance across web and mobile, improving accessibility for 2M+ users.',
      category: 'Accessibility',
      outcome: 'WCAG 2.2 AA certified'
    },
    {
      title: 'VR training app certified across 5 jurisdictions',
      description: 'Immersive corporate training platform met privacy and safety standards across US, EU, Canada, Australia, and Singapore.',
      category: 'Multi-jurisdictional',
      outcome: 'Global compliance achieved'
    },
    {
      title: 'Healthcare IoT device meets HIPAA standards',
      description: 'Connected medical device achieved comprehensive HIPAA compliance with enhanced security and privacy controls.',
      category: 'Healthcare',
      outcome: 'HIPAA compliant deployment'
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
            with Parcivy's expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default UseCasesSection;
