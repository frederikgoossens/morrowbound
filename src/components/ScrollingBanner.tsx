
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ScrollingBanner = () => {
  const regulations = [
    // Row 1
    ['GDPR', 'CCPA', 'China PIPL', 'EU AI Act', 'Singapore PDPA', 'UAE DPL'],
    // Row 2
    ['Canada PIPEDA', 'Australia Privacy Act', 'UK DPA', 'Japan APPI', 'Brazil LGPD', 'India DPDP'],
    // Row 3
    ['WCAG 2.2', 'SOC 2', 'ISO 27001', 'Qatar DPL', 'Saudi PDPL', 'Korea PIPA']
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Global Compliance Coverage
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified expertise across 70+ regulations in Americas, Europe, Asia-Pacific, Middle East & Africa
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-6 mb-6">
          <div className="space-y-4">
            {regulations.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                {row.map((regulation, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-background border-border/50 text-foreground hover:border-accent hover:text-accent transition-colors px-3 py-1 text-sm"
                  >
                    {regulation}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <span className="text-accent font-medium text-lg">+50 more...</span>
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Link to="/standards">View All Standards →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScrollingBanner;
