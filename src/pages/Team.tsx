
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Frederik Goossens, MBA',
      title: 'Founder & CEO',
      bio: "Frederik brings 14+ years of experience leading AI and digital products across heavily regulated environments. His journey into compliance began in 2011 when navigating European e-commerce regulations at Noovigo. After leading AI governance initiatives at HSBC (1M+ users) and building EU AI Act-ready platforms at BNP Paribas, he recognized the critical need for agile compliance solutions. With deep expertise in conversational AI, Web3 privacy, and cross-border regulatory frameworks, Frederik founded Parcivy to make compliance as innovative as the technologies it serves.",
      linkedin: 'https://www.linkedin.com/in/frederikgoossens/',
      image: '/placeholder.svg' // You would replace this with actual image
    },
    {
      name: 'Aymeric Massiani, MBA',
      title: 'Partner & Head of Strategic Operations',
      bio: "Aymeric brings a unique perspective to digital compliance through his 10+ years as a senior procurement consultant and turnaround specialist. Having led transformation projects for global enterprises across media, healthcare, finance, and technology sectors, he understands the critical intersection of operational excellence and regulatory requirements. His Cambridge MBA and expertise in risk management, process optimization, and international negotiations ensure Parcivy's audits deliver both compliance certainty and business value. As a member of the Turnaround Management Association, Aymeric helps organizations transform compliance from a burden into a competitive advantage.",
      linkedin: 'https://www.linkedin.com/in/aymeric-massiani-mba-95bb4613/',
      image: '/placeholder.svg' // You would replace this with actual image
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground mb-6 leading-tight">
              The Compliance Experts
              <br />
              <span className="text-muted-foreground">Behind Parcivy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining decades of digital innovation with deep regulatory expertise 
              to simplify compliance for tomorrow's technologies.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="zen-card text-center lg:text-left animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full border-4 border-accent/20 object-cover hover:scale-102 transition-transform duration-300 shadow-zen"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-4">
                        {member.title}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        LinkedIn Profile
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="zen-card">
              <h2 className="text-3xl font-light text-foreground mb-4">
                Ready to ensure your compliance?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let our expert team guide you through your compliance journey with confidence and clarity.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-6 text-lg"
              >
                <Link to="/start-audit">Start Your Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
