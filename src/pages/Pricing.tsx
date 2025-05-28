import React from 'react';
import { Link } from 'react-router-dom';
import { Check, AlertTriangle, Lightbulb, Plus } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const Pricing = () => {
  const pricingTiers = [{
    name: "GDPR ONLY",
    price: "£4,000",
    delivery: "48-hour delivery",
    description: "Perfect for businesses NOT using ANY AI",
    popular: false,
    features: ["Businesses NOT using ANY AI", "Websites, apps, SaaS platforms", "Need rapid GDPR compliance", "Avoiding AI complexity entirely"],
    critical: ["NO chatbots or virtual assistants", "NO automated decision-making", "NO AI/ML in any form", "NO algorithmic processing", "NO predictive analytics"],
    includes: ["Comprehensive GDPR audit", "Data flow mapping & documentation", "Privacy notice optimization", "Cookie compliance assessment", "Data subject rights procedures", "Detailed remediation roadmap", "30-day implementation support"],
    buttonText: "Get GDPR Audit",
    buttonVariant: "outline" as const
  }, {
    name: "PROFESSIONAL",
    price: "£15,000",
    delivery: "5-day delivery",
    description: "Using AI tools (ChatGPT, Claude, etc.)",
    marketComparison: "Others charge £30-100k",
    popular: true,
    features: ["Using AI tools (ChatGPT, Claude, etc.)", "Automated customer service", "Recommendation systems", "Limited/minimal risk AI"],
    includes: ["Everything in GDPR, plus:", "Full EU AI Act compliance audit", "Risk categorization assessment", "Transparency requirements documentation", "Human oversight protocols", "Technical documentation package", "Conformity assessment preparation", "90-day expert support", "Quarterly check-in (first year)"],
    buttonText: "Get Full EU Audit",
    buttonVariant: "default" as const
  }, {
    name: "ENTERPRISE",
    price: "£75,000",
    delivery: "30-day delivery",
    description: "High-risk AI systems in regulated industries",
    marketComparison: "Big 4 charge £150-500k",
    popular: false,
    features: ["High-risk AI systems", "Regulated industries (healthcare, finance, HR)", "Multiple AI systems/models", "Public sector applications"],
    includes: ["Everything in Professional, plus:", "Deep-dive high-risk assessment", "Full conformity assessment support", "C-suite and technical reports", "Board presentation materials", "Complete documentation suite", "Incident response playbooks", "Monthly reviews (first year)", "On-call compliance hotline", "White-label everything", "Legislative update service"],
    buttonText: "Contact for Enterprise",
    buttonVariant: "outline" as const
  }];
  const testimonials = ["Saved our client €2M in potential fines", "75% less than our Big 4 quote, 10x faster", "The only firm that truly understands AI Act"];
  const faqItems = [{
    question: "Why the jump from GDPR to Professional?",
    answer: "EU AI Act compliance is exponentially more complex, requiring rare expertise"
  }, {
    question: "How are you faster than Big 4 consultancies?",
    answer: "Specialized focus, modern tools, no bureaucracy, expert team"
  }, {
    question: "Can we start with GDPR and add AI Act later?",
    answer: "No - if you use ANY AI, you need Professional from the start"
  }, {
    question: "What if we're not sure about our AI usage?",
    answer: "Book a free 15-minute consultation to determine the right tier"
  }];
  return <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-6">
            EU Compliance Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Fast, fixed-price audits at a fraction of consultancy costs
          </p>

          {/* Market Context Box */}
          <Card className="max-w-4xl mx-auto mb-8 border-2 border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Why our pricing?</h3>
                  <p className="text-muted-foreground">
                    Big 4 consultancies charge £75,000-250,000 for AI Act audits with 3-6 month delivery.
                    <br />
                    <strong>We deliver better, faster, for less.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Pricing Banner */}
          <Card className="max-w-4xl mx-auto mb-16 border-2 border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-4">
                <Plus className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-left w-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Special Pricing for Small Organizations
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    We believe EU compliance should be accessible to everyone. If you're a small organization, we offer special rates:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground">NGOs & Non-Profits</h4>
                      <p className="text-2xl font-bold text-green-600">£50</p>
                      <p className="text-sm text-muted-foreground">Basic GDPR compliance check</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground">Local Businesses (≤2 people)</h4>
                      <p className="text-2xl font-bold text-green-600">£100</p>
                      <p className="text-sm text-muted-foreground">Essential GDPR compliance review</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic mb-4">
                    * Available for registered NGOs, public educational institutions, and local businesses with 2 or fewer employees. 
                    Private educational institutions are not eligible. Verification required.
                  </p>
                  
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => <Card key={tier.name} className={`relative transition-all duration-300 hover:shadow-zen-lg hover:-translate-y-1 flex flex-col ${tier.popular ? 'ring-2 ring-accent scale-105' : ''}`}>
                {tier.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tier.price}
                  </div>
                  <div className="text-sm font-medium text-accent mb-3">
                    {tier.delivery}
                  </div>
                  <CardDescription className="text-muted-foreground mb-2">
                    {tier.description}
                  </CardDescription>
                  {tier.marketComparison && <div className="text-sm text-accent font-medium">
                      Market comparison: {tier.marketComparison}
                    </div>}
                </CardHeader>

                <CardContent className="pt-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    {/* Perfect for section */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>)}
                      </ul>
                    </div>

                    {/* Critical section for GDPR ONLY tier */}
                    {tier.critical && <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="flex items-start gap-2 mb-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <h4 className="font-semibold text-orange-800">Critical: This tier is ONLY for organizations with:</h4>
                        </div>
                        <ul className="space-y-1">
                          {tier.critical.map((item, itemIndex) => <li key={itemIndex} className="text-sm text-orange-700">
                              • {item}
                            </li>)}
                        </ul>
                      </div>}

                    {/* Includes section */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {tier.includes.map((include, includeIndex) => <li key={includeIndex} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{include}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Button aligned at bottom */}
                  <div className="mt-auto">
                    <Button asChild variant={tier.buttonVariant} className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}>
                      <Link to="/start-audit">
                        {tier.buttonText}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Value Justification */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="zen-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-semibold text-foreground mb-4">
                Value Justification
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Why Choose Us:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">10x faster than traditional consultancies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Fixed prices (no hidden fees)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">EU AI Act specialists (rare expertise)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Avoid fines up to €35M or 7% revenue</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-accent/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-4">ROI Example:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GDPR fine risk:</span>
                      <span className="font-medium">€20M average</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AI Act fine risk:</span>
                      <span className="font-medium">€35M maximum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Our highest fee:</span>
                      <span className="font-medium">£75,000</span>
                    </div>
                    <div className="border-t pt-2 mt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">Protection value:</span>
                        <span className="font-bold text-accent">400x+ return</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, index) => <Card key={index} className="zen-card">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    A: {faq.answer}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic">"{testimonial}"</p>
                  <div className="mt-3 text-sm font-medium text-accent">
                    {index === 0 && "- FinTech CEO"}
                    {index === 1 && "- Healthcare CTO"}
                    {index === 2 && "- Legal Director"}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Pricing;