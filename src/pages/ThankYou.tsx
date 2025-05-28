
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Clock } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="zen-card max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              
              <h1 className="text-4xl font-light text-foreground mb-6">
                Thank You!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                We've received your inquiry and will respond within 24 hours.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Clock size={20} className="text-accent" />
                  <span>Expected response time: 24 hours</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Mail size={20} className="text-accent" />
                  <span>For urgent matters: 
                    <a href="mailto:contact@merlaz.com" className="text-accent hover:text-accent/80 transition-colors ml-1">
                      contact@merlaz.com
                    </a>
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/">Return to Homepage</Link>
                </Button>
                
                <div>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/start-audit">Start Another Audit</Link>
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/30">
                <h3 className="text-lg font-medium text-foreground mb-4">What happens next?</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>✓ Our compliance experts will review your submission</p>
                  <p>✓ We'll prepare a preliminary assessment</p>
                  <p>✓ You'll receive a detailed response within 24 hours</p>
                  <p>✓ We'll schedule a consultation call if needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
