
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-beige-50/95 backdrop-blur-sm border-b border-border/50 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-foreground">
            Morrowbound
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Cases
            </Link>
            <Link to="/standards" className="text-muted-foreground hover:text-foreground transition-colors">
              Standards
            </Link>
            <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Link to="/verify" className="text-muted-foreground hover:text-foreground transition-colors">
              Verify Badge
            </Link>
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/start-audit">Start Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/cases" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cases
              </Link>
              <Link 
                to="/standards" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Standards
              </Link>
              <Link 
                to="/team" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/verify" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Verify Badge
              </Link>
              <Button 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                <Link to="/start-audit" onClick={() => setIsMobileMenuOpen(false)}>
                  Start Audit
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
