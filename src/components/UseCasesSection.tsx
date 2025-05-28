
import React from 'react';

const UseCasesSection = () => {
  const caseStudies = [
    {
      client: 'Voice AI Startup',
      achievement: 'Achieved EU AI Act compliance for their multilingual customer service bot in just 48 hours',
      metric: '48 hours to EU compliance'
    },
    {
      client: 'E-commerce Platform', 
      achievement: 'Passed GDPR audit and implemented data subject rights across their EU operations',
      metric: 'Full GDPR compliance'
    },
    {
      client: 'Healthcare AI Company',
      achievement: 'Certified for EU AI Act high-risk category compliance for medical diagnostic systems',
      metric: 'High-risk AI certified'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Trusted by EU Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, we help forward-thinking companies 
            navigate EU AI Act and GDPR compliance with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-blue-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium text-foreground mb-3">
                {study.client}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {study.achievement}
              </p>
              <p className="text-accent font-medium">
                {study.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8 max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-light text-foreground mb-6 italic">
            "Morrowbound transformed our EU compliance journey. What could have taken months of confusion 
            was completed in days with crystal clarity."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-medium text-foreground">Sarah Chen</p>
              <p className="text-muted-foreground">CTO, VoiceFirst AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
