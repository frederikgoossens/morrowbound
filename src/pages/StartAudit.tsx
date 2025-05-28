import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const StartAudit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-foreground mb-4">
              Start Your Compliance Audit
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Step {currentStep} of {totalSteps}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Our audits range from £4,000 (GDPR only) to £75,000 (Enterprise AI systems)
            </p>
            <Progress value={progressPercentage} className="mt-4" />
          </div>

          <div className="zen-card">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Company & Contact Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Email *
                    </label>
                    <Input type="email" placeholder="contact@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input placeholder="Your Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Website
                  </label>
                  <Input placeholder="https://yourcompany.com" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Platform Details
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Platform URL/Access *
                  </label>
                  <Input placeholder="https://your-platform.com or App Store link" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Platform Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="mobile-ios">iOS Mobile App</SelectItem>
                      <SelectItem value="mobile-android">Android Mobile App</SelectItem>
                      <SelectItem value="voice-ai">Voice AI/Chatbot</SelectItem>
                      <SelectItem value="vr-ar">VR/AR Experience</SelectItem>
                      <SelectItem value="ai-ml">AI/ML Model</SelectItem>
                      <SelectItem value="iot">IoT Device</SelectItem>
                      <SelectItem value="other">Other (specify below)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Platform Description *
                  </label>
                  <Textarea 
                    placeholder="Brief description of your platform, its main features, and target users..."
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    User Base Size
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Estimated number of users" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Pre-launch/Startup</SelectItem>
                      <SelectItem value="small">1-1,000 users</SelectItem>
                      <SelectItem value="medium">1,000-10,000 users</SelectItem>
                      <SelectItem value="large">10,000-100,000 users</SelectItem>
                      <SelectItem value="enterprise">100,000+ users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Compliance Requirements
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Target Jurisdictions *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'United States', 'European Union', 'Canada', 'United Kingdom',
                      'Australia', 'Singapore', 'Hong Kong', 'Other'
                    ].map((jurisdiction) => (
                      <div key={jurisdiction} className="flex items-center space-x-2">
                        <Checkbox id={jurisdiction} />
                        <label htmlFor={jurisdiction} className="text-sm">
                          {jurisdiction}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Required Compliance Standards *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'GDPR', 'CCPA', 'WCAG 2.2', 'ADA', 'EU AI Act', 
                      'ISO 27001', 'SOC 2', 'HIPAA'
                    ].map((standard) => (
                      <div key={standard} className="flex items-center space-x-2">
                        <Checkbox id={standard} />
                        <label htmlFor={standard} className="text-sm">
                          {standard}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Specific Compliance Concerns
                  </label>
                  <Textarea 
                    placeholder="Any specific areas of concern or requirements you'd like us to focus on..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Timeline & Additional Information
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Timeline *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rush">Rush (1-2 weeks)</SelectItem>
                      <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                      <SelectItem value="flexible">Flexible (4-8 weeks)</SelectItem>
                      <SelectItem value="planning">Planning phase (2+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Estimated budget for this audit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gdpr">£4,000 - GDPR Only</SelectItem>
                      <SelectItem value="professional">£15,000 - Professional (AI Act + GDPR)</SelectItem>
                      <SelectItem value="enterprise">£75,000 - Enterprise (High-risk AI)</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Information
                  </label>
                  <Textarea 
                    placeholder="Any additional context, previous compliance work, or specific questions..."
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8 mt-8 border-t border-border/30">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
                >
                  Next
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Submit Audit Request
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartAudit;
