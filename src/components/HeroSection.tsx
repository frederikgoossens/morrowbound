
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Clock, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
            EU AI Act & GDPR
            <br />
            <span className="text-muted-foreground">Compliance</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">Expert audits for AI systems and data protection in the European Union</p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-accent" />
              <span>EU AI Act Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>GDPR Certified Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <span>48-Hour Audits</span>
            </div>
          </div>

          {/* Quick Start Form */}
          <div className="zen-card max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input placeholder="Your AI System/Website URL" className="flex-1 border-border/50 focus:border-accent" />
              <Select>
                <SelectTrigger className="sm:w-48 border-border/50 focus:border-accent">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border/50">
                  <SelectItem value="ai">AI Model</SelectItem>
                  <SelectItem value="web">Web Application</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="saas">SaaS Platform</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 text-lg">
              <Link to="/start-audit">Start EU Compliance Audit</Link>
            </Button>
            
            <p className="text-sm text-muted-foreground mt-3">Starting at €350 for GDPR basics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
