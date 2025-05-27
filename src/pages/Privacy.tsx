
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="zen-card">
            <h1 className="text-4xl font-light text-foreground mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-lg">
                Morrowbound ("we", "our", "us") is committed to protecting your privacy. 
                This policy explains how we collect, use, and safeguard your information.
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect contact details and website data necessary to perform comprehensive compliance audits. 
                    This includes technical information about your digital platforms and any personal data processing activities.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">How We Use Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use collected information to perform thorough compliance audits, generate detailed reports, 
                    and continuously improve our services. All data handling is done in strict accordance with 
                    applicable privacy regulations.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We employ industry-standard encryption and secure storage practices to protect your information. 
                    Our security measures are regularly reviewed and updated to maintain the highest standards.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Audit records are retained for 2 years to support ongoing compliance verification and 
                    regulatory requirements. After this period, data is securely deleted unless legally required to retain.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or request deletion of your personal information. 
                    To exercise these rights or for any privacy-related inquiries, please contact us.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For privacy-related questions or concerns, please email us at:{' '}
                    <a href="mailto:privacy@morrowbound.com" className="text-accent hover:text-accent/80 transition-colors">
                      privacy@morrowbound.com
                    </a>
                  </p>
                </section>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Morrowbound is operated by Muggleman LTD (UK) and Merlaz Limited (Hong Kong)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
