import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Financial Models", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Free Guides", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Accessibility", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { name: "Twitter", icon: "logos:twitter", href: "#" },
    { name: "LinkedIn", icon: "logos:linkedin-icon", href: "#" },
    { name: "Instagram", icon: "logos:instagram-icon", href: "#" },
    { name: "YouTube", icon: "logos:youtube-icon", href: "#" }
  ];

  return (
    <footer className="bg-content2/50 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/CTLOGO.svg" 
                alt="CRACKTHRU Logo" 
                className="h-16 w-auto"
                loading="lazy"
              />
              <p className="font-light text-xl tracking-wide">CRACK<span className="font-semibold">THRU</span></p>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-md font-light">
              Elevating financial education with industry-leading courses in Investment Banking, Finance, and Product Management. Learn from Wall Street veterans and transform your career.
            </p>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="hover:opacity-80 transition-opacity">
                  <Icon icon={social.icon} width={24} height={24} />
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Icon icon="lucide:mail" className="text-foreground/60" width={16} />
              <span className="text-sm font-light">contact@crackthru.com</span>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 font-light">
            © {currentYear} CRACKTHRU. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors font-light">
              Terms
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors font-light">
              Privacy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors font-light">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;