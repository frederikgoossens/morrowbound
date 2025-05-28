
import React from 'react';

const CoverageSection = () => {
  const coverageAreas = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287L12 3Z"/>
          </svg>
        </div>
      ),
      title: 'AI Models & Systems',
      description: 'Ensure your AI meets EU AI Act risk categories and transparency requirements for compliant deployment.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
      ),
      title: 'Data Processing',
      description: 'GDPR compliance for collection, storage, and processing of EU citizen data across all systems.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M9 12l2 2 4-4"/>
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
          </svg>
        </div>
      ),
      title: 'Automated Decision-Making',
      description: 'Article 22 GDPR compliance for algorithmic decisions affecting individuals and their rights.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M12 2a2 2 0 0 0-2-2 7 7 0 0 0-7 7c0 5 3.5 7.5 6 9.5M12 2a2 2 0 0 1 2-2 7 7 0 0 1 7 7c0 5-3.5 7.5-6 9.5M12 2v14"/>
          </svg>
        </div>
      ),
      title: 'High-Risk AI Applications',
      description: 'Specialized audits for recruitment, healthcare, finance, and law enforcement AI under the EU AI Act.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      ),
      title: 'Cross-Border Data Transfers',
      description: 'Ensure lawful data flows between EU and third countries with adequacy decisions and safeguards.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <rect x="3" y="4" width="18" height="12" rx="1"/>
            <line x1="7" y1="8" x2="13" y2="8"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>
      ),
      title: 'Privacy by Design',
      description: 'Built-in GDPR compliance from architecture to implementation ensuring data protection principles.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            EU Compliance for Digital Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive audits ensuring your technology meets EU AI Act and GDPR requirements 
            for lawful operation in the European Union.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverageAreas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-blue-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {area.icon}
              <h3 className="text-xl font-medium text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
