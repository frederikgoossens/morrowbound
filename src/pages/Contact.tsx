
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                    Email: <a href="mailto:hello@morrowbound.com" className="text-accent hover:text-accent/80 transition-colors">hello@morrowbound.com</a>
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
                    Or email: <a href="mailto:audit@morrowbound.com" className="text-accent hover:text-accent/80 transition-colors">audit@morrowbound.com</a>
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
                      <a href="mailto:eu@morrowbound.com" className="text-accent hover:text-accent/80 transition-colors">eu@morrowbound.com</a>
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
                      <a href="mailto:apac@morrowbound.com" className="text-accent hover:text-accent/80 transition-colors">apac@morrowbound.com</a>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
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
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Send Message
                    </Button>
                  </form>
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
