
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our compliance experts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="zen-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Mail className="text-accent" size={24} />
                    General Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    Email: <a href="mailto:contact@merlaz.com" className="text-accent hover:text-accent/80 transition-colors">contact@merlaz.com</a>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock size={16} />
                    Response time: Within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="zen-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Start an Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ready to begin your compliance journey?
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mb-4">
                    <Link to="/start-audit">Start Your Audit</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Or email: <a href="mailto:contact@merlaz.com" className="text-accent hover:text-accent/80 transition-colors">contact@merlaz.com</a>
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground">Regional Offices</h3>
                
                <Card className="zen-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <MapPin className="text-accent" size={20} />
                      Europe/UK
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Muggleman LTD<br />
                      London, United Kingdom<br />
                      <a href="mailto:contact@merlaz.com" className="text-accent hover:text-accent/80 transition-colors">contact@merlaz.com</a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="zen-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <MapPin className="text-accent" size={20} />
                      Asia-Pacific
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Merlaz Limited<br />
                      Hong Kong<br />
                      <a href="mailto:contact@merlaz.com" className="text-accent hover:text-accent/80 transition-colors">contact@merlaz.com</a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="zen-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <input type="hidden" name="access_key" value="88da350b-4eb7-4d98-9ca7-0458f69a1522" />
                    <input type="hidden" name="subject" value="Morrowbound - Contact Form" />
                    <input type="hidden" name="redirect" value="https://morrowbound.com/thank-you" />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry_subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="inquiry_subject"
                        name="inquiry_subject"
                        type="text"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-4 py-2"
                    >
                      Send Message
                    </button>
                  </form>
                  
                  <div className="text-center mt-4">
                    <a href="mailto:contact@merlaz.com?subject=Contact%20Form%20Inquiry" className="text-sm text-muted-foreground underline">
                      Prefer email? contact@merlaz.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
