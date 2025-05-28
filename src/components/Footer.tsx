
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Link to="/" className="text-2xl font-semibold text-foreground mb-8 inline-block">
            Morrowbound
          </Link>
          
          <p className="text-muted-foreground text-sm mb-8">
            EU AI Act & GDPR Compliance Experts • Serving EU & UK markets
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground text-sm mb-8">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/verify" className="hover:text-foreground transition-colors">
              Verify Badge
            </Link>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 Morrowbound. Operated by Muggleman LTD (UK) & Merlaz Limited (HK). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
