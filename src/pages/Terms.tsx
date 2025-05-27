
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="zen-card">
            <h1 className="text-4xl font-light text-foreground mb-8">Terms of Service</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-lg">
                These terms govern your use of Morrowbound's digital compliance audit services.
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Service Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Morrowbound provides comprehensive compliance audits for digital platforms. Our services are 
                    advisory in nature and do not constitute legal advice. We assess compliance against applicable 
                    regulations but recommendations should be reviewed with qualified legal counsel.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Badge Usage</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Compliance badges issued upon successful audit completion are valid for 12 months from the 
                    audit date. Continued badge usage requires re-audit and renewal. Misuse of badges or 
                    false compliance claims may result in immediate revocation.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Fees & Payment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment is due upon service delivery. All fees are clearly communicated before audit 
                    commencement. Additional work outside the agreed scope may incur supplementary charges.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Liability Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our audit reports are advisory and do not guarantee compliance or immunity from regulatory 
                    action. While we maintain professional standards, compliance ultimately remains the client's 
                    responsibility. Our liability is limited to the fees paid for services.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict confidentiality regarding all audit data and client information. 
                    Information is only shared as necessary to complete the audit or as required by law.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For EU/UK clients, these terms are governed by UK law. For APAC clients, Hong Kong law applies. 
                    Disputes will be resolved in the appropriate jurisdiction based on client location.
                  </p>
                </section>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Morrowbound is operated by Muggleman LTD (UK Company No. [number]) and Merlaz Limited (Hong Kong)
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

export default Terms;
