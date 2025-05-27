
import React from 'react';
import { Globe, Smartphone, Mic, Headphones, Brain, Settings } from 'lucide-react';

const CoverageSection = () => {
  const coverageAreas = [
    {
      icon: Globe,
      title: 'Web & Mobile Apps',
      description: 'Ensure WCAG compliance, responsive design standards, and cross-platform accessibility for optimal user experience.'
    },
    {
      icon: Mic,
      title: 'Voice AI Systems',
      description: 'Validate speech recognition, NLU transparency, and voice interface accessibility across diverse user populations.'
    },
    {
      icon: Headphones,
      title: 'VR/AR Experiences',
      description: 'Test immersive environments for motion safety, accessibility standards, and ethical design principles.'
    },
    {
      icon: Brain,
      title: 'AI & ML Models',
      description: 'Assess algorithmic fairness, explainability requirements, and EU AI Act compliance for responsible AI deployment.'
    },
    {
      icon: Settings,
      title: 'IoT Devices',
      description: 'Verify data security protocols, privacy-by-design implementation, and cross-border data regulation compliance.'
    },
    {
      icon: Smartphone,
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
              className="zen-card animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <area.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
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
