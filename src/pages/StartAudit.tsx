
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
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="88da350b-4eb7-4d98-9ca7-0458f69a1522" />
              <input type="hidden" name="subject" value="Morrowbound - Full Audit Request" />
              <input type="hidden" name="redirect" value="https://morrowbound.com/thank-you" />
              
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
                      <Input name="company_name" placeholder="Your Company Name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contact Email *
                      </label>
                      <Input type="email" name="email" placeholder="contact@company.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contact Name *
                      </label>
                      <Input name="contact_name" placeholder="Your Full Name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input name="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Website
                    </label>
                    <Input name="website" placeholder="https://yourcompany.com" />
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
                    <Input name="platform_url" placeholder="https://your-platform.com or App Store link" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Platform Type *
                    </label>
                    <select 
                      name="platform_type" 
                      required
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select platform type</option>
                      <option value="web">Web Application</option>
                      <option value="mobile-ios">iOS Mobile App</option>
                      <option value="mobile-android">Android Mobile App</option>
                      <option value="voice-ai">Voice AI/Chatbot</option>
                      <option value="vr-ar">VR/AR Experience</option>
                      <option value="ai-ml">AI/ML Model</option>
                      <option value="iot">IoT Device</option>
                      <option value="other">Other (specify below)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Platform Description *
                    </label>
                    <Textarea 
                      name="platform_description"
                      placeholder="Brief description of your platform, its main features, and target users..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      User Base Size
                    </label>
                    <select 
                      name="user_base_size"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Estimated number of users</option>
                      <option value="startup">Pre-launch/Startup</option>
                      <option value="small">1-1,000 users</option>
                      <option value="medium">1,000-10,000 users</option>
                      <option value="large">10,000-100,000 users</option>
                      <option value="enterprise">100,000+ users</option>
                    </select>
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
                          <input type="checkbox" id={jurisdiction} name="jurisdictions" value={jurisdiction} />
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
                          <input type="checkbox" id={standard} name="standards" value={standard} />
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
                      name="compliance_concerns"
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
                    <select 
                      name="timeline" 
                      required
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">When do you need this completed?</option>
                      <option value="rush">Rush (1-2 weeks)</option>
                      <option value="standard">Standard (2-4 weeks)</option>
                      <option value="flexible">Flexible (4-8 weeks)</option>
                      <option value="planning">Planning phase (2+ months)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select 
                      name="budget"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Estimated budget for this audit</option>
                      <option value="gdpr">£4,000 - GDPR Only</option>
                      <option value="professional">£15,000 - Professional (AI Act + GDPR)</option>
                      <option value="enterprise">£75,000 - Enterprise (High-risk AI)</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <Textarea 
                      name="additional_info"
                      placeholder="Any additional context, previous compliance work, or specific questions..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-8 mt-8 border-t border-border/30">
                <Button
                  type="button"
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
                    type="button"
                    onClick={nextStep}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
                  >
                    Next
                    <ArrowRight size={16} />
                  </Button>
                ) : (
                  <button 
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-4 py-2"
                  >
                    Submit Audit Request
                  </button>
                )}
              </div>
            </form>
            
            <div className="text-center mt-4">
              <a href="mailto:contact@merlaz.com?subject=EU%20Compliance%20Inquiry" className="text-sm text-muted-foreground underline">
                Prefer email? contact@merlaz.com
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartAudit;
