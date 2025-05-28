
import React from 'react';

const CoverageSection = () => {
  const coverageAreas = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-accent/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-accent/20 group-hover:to-accent/30 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent transition-colors duration-300">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287L12 3Z"/>
          </svg>
        </div>
      ),
      title: 'AI Models & Systems',
      subtitle: 'Smart Technology Compliance',
      description: 'From ChatGPT integrations to complex machine learning pipelines, we ensure your AI meets EU AI Act risk categories and transparency requirements. Get ahead of 2026 enforcement with expert guidance on high-risk AI classification, documentation requirements, and human oversight protocols.',
      highlight: 'EU AI Act Ready'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-600 transition-colors duration-300">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
      ),
      title: 'Data Processing',
      subtitle: 'Privacy-First Architecture',
      description: 'Comprehensive GDPR compliance for collection, storage, and processing of EU citizen data across all your digital touchpoints. We audit your data flows, establish lawful basis, implement privacy by design, and create bulletproof consent mechanisms that actually work.',
      highlight: 'GDPR Bulletproof'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-purple-100 group-hover:to-purple-200 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600 transition-colors duration-300">
            <path d="M9 12l2 2 4-4"/>
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
          </svg>
        </div>
      ),
      title: 'Automated Decision-Making',
      subtitle: 'Algorithm Transparency',
      description: 'Navigate Article 22 GDPR compliance for algorithmic decisions that affect real people. Whether it\'s hiring algorithms, credit scoring, or recommendation engines, we ensure proper human oversight, explainability requirements, and legitimate interest assessments.',
      highlight: 'Article 22 Compliant'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-red-100 group-hover:to-red-200 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-600 transition-colors duration-300">
            <path d="M12 2a2 2 0 0 0-2-2 7 7 0 0 0-7 7c0 5 3.5 7.5 6 9.5M12 2a2 2 0 0 1 2-2 7 7 0 0 1 7 7c0 5-3.5 7.5-6 9.5M12 2v14"/>
          </svg>
        </div>
      ),
      title: 'High-Risk AI Applications',
      subtitle: 'Mission-Critical Compliance',
      description: 'Specialized audits for AI in recruitment, healthcare diagnostics, financial services, and law enforcement under the EU AI Act. We handle conformity assessments, CE marking requirements, and the complex documentation needed for high-stakes AI deployment.',
      highlight: 'High-Risk Certified'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-cyan-100 group-hover:to-cyan-200 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-600 transition-colors duration-300">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      ),
      title: 'Cross-Border Data Transfers',
      subtitle: 'Global Data Freedom',
      description: 'Navigate the complex world of international data transfers with confidence. We implement Standard Contractual Clauses (SCCs), assess adequacy decisions, and create Transfer Impact Assessments (TIAs) that actually hold up under regulatory scrutiny.',
      highlight: 'Globally Compliant'
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-orange-100 group-hover:to-orange-200 group-hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-600 transition-colors duration-300">
            <rect x="3" y="4" width="18" height="12" rx="1"/>
            <line x1="7" y1="8" x2="13" y2="8"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>
      ),
      title: 'Privacy by Design',
      subtitle: 'Built-In Protection',
      description: 'Embed privacy into your product DNA from day one. We architect GDPR compliance into your systems, ensuring data protection principles are baked into your code, workflows, and business processes—not bolted on as an afterthought.',
      highlight: 'Future-Proof Design'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            EU Compliance for Digital Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive audits ensuring your technology meets EU AI Act and GDPR requirements 
            for lawful operation in the European Union. From startups to enterprises, we make compliance simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverageAreas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-zen border border-border/20 p-8 hover:shadow-zen-lg transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full border border-accent/20">
                {area.highlight}
              </div>

              {area.icon}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-4">
                  {area.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {area.description}
                </p>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to ensure your innovation meets EU standards?
          </p>
          <div className="inline-flex items-center gap-4 bg-white rounded-full shadow-zen border border-border/20 px-8 py-4">
            <span className="text-sm font-medium text-foreground">Get started in 48 hours</span>
            <div className="h-1 w-1 bg-accent rounded-full"></div>
            <span className="text-sm text-accent font-medium">Fixed-price audits from £4,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
