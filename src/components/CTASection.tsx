
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
          Ready to ensure compliance?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start your comprehensive compliance audit today and join hundreds of 
          companies that trust Parcivy for their certification needs.
        </p>

        {/* Preview Form with Overlay */}
        <div className="relative zen-card text-left mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input placeholder="Company Name" disabled />
            <Input placeholder="Contact Email" disabled />
            <Input placeholder="Platform URL" disabled />
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Platform Type" />
              </SelectTrigger>
            </Select>
          </div>
          <Textarea 
            placeholder="Brief description of your platform and compliance requirements..."
            rows={4}
            disabled
            className="mb-6"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Target Jurisdictions" />
              </SelectTrigger>
            </Select>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Priority Timeline" />
              </SelectTrigger>
            </Select>
          </div>
          
          {/* Overlay */}
          <Link to="/start-audit" className="absolute inset-0 bg-card/50 backdrop-blur-sm rounded-xl flex items-center justify-center group hover:bg-card/60 transition-all duration-300">
            <div className="text-center">
              <p className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                View Full Intake Form →
              </p>
              <p className="text-sm text-muted-foreground">
                Complete your compliance assessment
              </p>
            </div>
          </Link>
        </div>

        <Button 
          asChild
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
        >
          <Link to="/start-audit">Begin Your Audit</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
