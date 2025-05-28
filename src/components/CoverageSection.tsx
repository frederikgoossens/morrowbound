import React from 'react';

const CoverageSection = () => {
  const coverageAreas = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <rect x="3" y="3" width="18" height="14" rx="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="15" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
      ),
      title: 'Web & Mobile Apps',
      description: 'Ensure WCAG compliance, responsive design standards, and cross-platform accessibility for optimal user experience.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <rect x="9" y="2" width="6" height="11" rx="3"/>
            <path d="M5 10v2a7 7 0 0 0 14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
        </div>
      ),
      title: 'Voice & Chat Systems',
      description: 'Validate speech recognition, NLU transparency, and voice interface accessibility across diverse user populations.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
      ),
      title: 'VR/AR Experiences',
      description: 'Test immersive environments for motion safety, accessibility standards, and ethical design principles.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        </div>
      ),
      title: 'AI & ML Models',
      description: 'Assess algorithmic fairness, explainability requirements, and EU AI Act compliance for responsible AI deployment.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M5 12.55a11 11 0 0 1 14.08 0M8.53 16.11a6 6 0 0 1 6.95 0"/>
            <line x1="12" y1="20" x2="12.01" y2="20"/>
          </svg>
        </div>
      ),
      title: 'IoT Devices',
      description: 'Verify data security protocols, privacy-by-design implementation, and cross-border data regulation compliance.'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 group-hover:text-accent transition-colors duration-300">
            <path d="M20 7h-7l2-4H8l-6 9h7l-2 8 10-13z"/>
          </svg>
        </div>
      ),
      title: 'Custom Platforms',
      description: 'Tailored audits for unique digital experiences and emerging technologies with bespoke compliance frameworks.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Complete Compliance Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From traditional web apps to cutting-edge AI systems, we ensure your technology 
            meets all relevant compliance standards.
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
