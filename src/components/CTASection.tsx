
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="zen-card text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            Ready for EU compliance? Plans from €350
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey to comprehensive EU AI Act and GDPR compliance with our expert team. 
            Get certified, stay compliant, and build user trust.
          </p>
          
          {/* Form Preview */}
          <div className="relative mb-8 p-6 bg-muted/30 rounded-xl">
            <div className="absolute inset-0 bg-card/50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium text-foreground mb-2">
                  View Full EU Compliance Assessment →
                </p>
                <p className="text-muted-foreground">
                  Complete assessment in 5 minutes
                </p>
              </div>
            </div>
            <div className="opacity-30 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-card border border-border rounded-lg">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-input rounded"></div>
                </div>
                <div className="p-3 bg-card border border-border rounded-lg">
                  <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
                  <div className="h-8 bg-input rounded"></div>
                </div>
              </div>
              <div className="p-3 bg-card border border-border rounded-lg">
                <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
                <div className="h-20 bg-input rounded"></div>
              </div>
            </div>
          </div>
          
          <Button 
            asChild
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
          >
            <Link to="/start-audit">Start Your EU Compliance Audit</Link>
          </Button>
          
          <p className="text-muted-foreground mt-4">Transparent pricing from €350 to Enterprise</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
