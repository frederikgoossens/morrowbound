
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Verify = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState<'none' | 'valid' | 'invalid'>('none');

  const handleVerify = () => {
    // Mock verification logic
    if (serialNumber === '2024-001' || serialNumber === 'PV-2024-WEB-001') {
      setVerificationResult('valid');
    } else {
      setVerificationResult('invalid');
    }
  };

  const mockValidBadge = {
    serialNumber: 'PV-2024-WEB-001',
    companyName: 'TechCorp Solutions',
    platformName: 'E-commerce Platform',
    platformType: 'Web Application',
    auditDate: '2024-01-15',
    expiryDate: '2025-01-15',
    standards: ['GDPR', 'WCAG 2.2 AA', 'CCPA'],
    status: 'Active'
  };

  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
              Verify Parcivy Badge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter a badge serial number to verify the compliance certification 
              status and view detailed audit information.
            </p>
          </div>

          <div className="zen-card max-w-2xl mx-auto mb-12">
            <div className="flex gap-4 mb-6">
              <Input
                placeholder="Enter badge serial (e.g., PV-2024-WEB-001)"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleVerify}
                className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
              >
                <Search size={16} />
                Verify
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Example serial numbers to try: <code>2024-001</code> or <code>PV-2024-WEB-001</code>
            </p>
          </div>

          {verificationResult === 'valid' && (
            <div className="zen-card animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-medium text-foreground">
                  Valid Badge Verified
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Badge Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Serial Number:</span>
                      <span className="font-mono">{mockValidBadge.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-green-600 font-medium">{mockValidBadge.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Audit Date:</span>
                      <span>{mockValidBadge.auditDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expires:</span>
                      <span>{mockValidBadge.expiryDate}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Platform Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span>{mockValidBadge.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform:</span>
                      <span>{mockValidBadge.platformName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{mockValidBadge.platformType}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <h3 className="font-medium text-foreground mb-3">Compliance Standards</h3>
                <div className="flex flex-wrap gap-2">
                  {mockValidBadge.standards.map((standard, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {verificationResult === 'invalid' && (
            <div className="zen-card animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-medium text-foreground">
                  Invalid Badge
                </h2>
              </div>
              
              <p className="text-muted-foreground">
                The serial number you entered does not match any valid Parcivy badges. 
                Please check the serial number and try again. If you believe this is an error, 
                please contact our support team.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Verify;
