
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Clock, CheckCircle } from 'lucide-react';
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
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="88da350b-4eb7-4d98-9ca7-0458f69a1522" />
              <input type="hidden" name="subject" value="Morrowbound - Homepage Quick Check" />
              <input type="hidden" name="redirect" value="https://morrowbound.com/thank-you" />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input 
                  type="url" 
                  name="website" 
                  placeholder="Your Website/App URL" 
                  required 
                  className="flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <select 
                  name="platform" 
                  required 
                  className="sm:w-48 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Platform</option>
                  <option value="ai">AI Model</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="saas">SaaS Platform</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-8 py-6"
              >
                Start EU Compliance Audit
              </button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-3">GDPR audits from £4,000 • AI Act compliance from £15,000</p>
            
            <div className="text-center mt-4">
              <a href="mailto:contact@merlaz.com?subject=EU%20Compliance%20Inquiry" className="text-sm text-muted-foreground underline">
                Prefer email? contact@merlaz.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
