
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const StandardsSection = () => {
  const [expandedCategories, setExpandedCategories] = useState(['privacy']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const categories = [
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      standards: ['GDPR', 'CCPA', 'PDPO', 'LGPD', 'PIPEDA', 'Privacy Act 1988', 'PDPL']
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      standards: ['WCAG 2.2', 'ADA', 'EN 301 549', 'Section 508', 'AODA', 'DDA']
    },
    {
      id: 'ai-ethics',
      title: 'AI & Ethics',
      standards: ['EU AI Act', 'ISO/IEC 23053', 'IEEE 2857', 'NIST AI RMF', 'UNESCO AI Ethics']
    },
    {
      id: 'security',
      title: 'Security & Risk',
      standards: ['ISO 27001', 'SOC 2', 'NIST Cybersecurity Framework', 'PCI DSS', 'HITRUST']
    },
    {
      id: 'industry',
      title: 'Industry Frameworks',
      standards: ['Privacy by Design', 'Fair Information Practices', 'OECD Guidelines', 'Data Minimization']
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            We Audit Against Leading Standards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach covers global regulations and industry best practices 
            across all major compliance domains.
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="border border-border/50 rounded-xl overflow-hidden bg-beige-50 transition-all duration-300 hover:shadow-zen"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
              >
                <h3 className="text-xl font-medium text-foreground">
                  {category.title}
                </h3>
                {expandedCategories.includes(category.id) ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedCategories.includes(category.id) && (
                <div className="px-8 pb-6 bg-card border-t border-border/30">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                    {category.standards.map((standard, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 bg-beige-50 rounded-lg text-sm font-medium text-muted-foreground border border-border/30"
                      >
                        {standard}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
