
import React from 'react';
import { Upload, Search, Shield } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Submit & Assess',
      subtitle: '24h initial review',
      description: 'Quick 24-hour initial review of your digital platform against key compliance indicators and regulatory requirements.'
    },
    {
      icon: Search,
      title: 'Comprehensive Audit',
      subtitle: 'detailed testing',
      description: 'In-depth testing against all relevant standards, with detailed gap analysis and expert recommendations for remediation.'
    },
    {
      icon: Shield,
      title: 'Receive Certification',
      subtitle: 'badge & ongoing support',
      description: 'Get your Parcivy Verified Badge, comprehensive compliance report, and detailed remediation roadmap for ongoing success.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Your Path to Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed to get you certified quickly while ensuring 
            thorough compliance coverage and actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border/50 -z-10" />
                )}
              </div>
              
              <h3 className="text-2xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-accent font-medium mb-4">
                {step.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
