
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Risk Assessment',
      subtitle: '24h initial review',
      description: 'Categorize your AI system under the EU AI Act and identify all applicable GDPR obligations for your data processing activities.'
    },
    {
      number: 2,
      title: 'Gap Analysis',
      subtitle: 'detailed testing',
      description: 'Comprehensive testing against EU AI Act risk categories and GDPR requirements with expert recommendations for full compliance.'
    },
    {
      number: 3,
      title: 'Compliance Roadmap',
      subtitle: 'certificate & plan',
      description: 'Receive your EU compliance certificate, detailed compliance report, and step-by-step implementation roadmap.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Your Path to EU Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed to achieve EU AI Act and GDPR compliance 
            efficiently while ensuring thorough coverage and actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" fill="#D4B896" stroke="#C4A676" strokeWidth="2"/>
                    <text x="40" y="50" textAnchor="middle" fontSize="28" fontWeight="600" fill="white">
                      {step.number}
                    </text>
                  </svg>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-accent/30 -z-10" />
                )}
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
