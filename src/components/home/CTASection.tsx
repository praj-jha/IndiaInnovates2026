import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="bg-background p-8 md:p-12 rounded-xl shadow-xl border max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Begin Your <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">Learning Journey</span> Today
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Join thousands of finance professionals already advancing their careers with our expert-led courses. Get exclusive insights and updates on new financial training programs. Enter your phone Number to get added.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Icon icon="lucide:phone" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" width={18} />
              <Input
                type="email"
                placeholder="Enter your phone"
                className="pl-10"
              />
            </div>
            <Button 
              size="lg"
              className="font-light tracking-wide"
            >
              Get Started
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:shield-check" className="text-green-500" width={20} />
              <span className="text-sm font-light">7-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:credit-card" className="text-primary" width={20} />
              <span className="text-sm font-light">Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:clock" className="text-green-500" width={20} />
              <span className="text-sm font-light">Lifetime access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;