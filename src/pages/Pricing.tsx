
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "STARTER",
      price: "Starting from €350",
      description: "GDPR basics for small websites and simple data processing",
      popular: false,
      features: [
        "Small websites (up to 25 pages)",
        "Basic GDPR assessment",
        "Cookie consent review",
        "Privacy notice audit",
        "72-hour delivery",
        "Automated scanning",
        "Compliance report",
        "Fix recommendations",
        "30-day email support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "PROFESSIONAL",
      price: "Starting from €950",
      description: "GDPR + Basic AI Act assessment for growing businesses",
      popular: true,
      features: [
        "Growing businesses",
        "GDPR + EU AI Act basics",
        "Data processing assessment",
        "Basic AI risk categorization",
        "48-hour delivery",
        "Everything in Starter",
        "Manual expert review",
        "Priority roadmap",
        "EU compliance badge",
        "60-day support"
      ],
      buttonText: "Most Popular",
      buttonVariant: "default" as const
    },
    {
      name: "ENTERPRISE",
      price: "Starting from €2,500",
      description: "Full EU AI Act compliance for high-risk systems",
      popular: false,
      features: [
        "High-risk AI systems",
        "Complete EU AI Act compliance",
        "Full GDPR assessment",
        "Cross-border data transfers",
        "24-hour delivery",
        "Everything in Professional",
        "Dedicated expert team",
        "Technical documentation",
        "Quarterly reviews",
        "Ongoing support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-6">
            EU Compliance Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Right-sized EU AI Act and GDPR audits for every business
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative transition-all duration-300 hover:shadow-zen-lg hover:-translate-y-1 ${
                  tier.popular ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    variant={tier.buttonVariant}
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : ''
                    }`}
                  >
                    <Link to="/start-audit">
                      {tier.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="zen-card text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-foreground mb-4">
                Need something specific?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-6">
                Every EU compliance case is unique. Our pricing scales based on:
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">AI risk category</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Data processing scope</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Cross-border transfers</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Audit frequency</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/start-audit">
                  Get a Custom Quote
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
