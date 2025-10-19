import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Event",
      links: [
        { name: "About India Innovates", href: "/#about" },
        { name: "Speakers", href: "/#speakers" },
        { name: "Agenda", href: "/agenda" },
        { name: "Delegate Pass", href: "/delegate-pass" },
        { name: "FAQ", href: "/#faq" }
      ]
    },
    {
      title: "Participate",
      links: [
        { name: "School Competitions", href: "/school-competitions" },
        { name: "Exhibitor Registration", href: "/exhibitor-registration" },
        { name: "Delegate Registration", href: "/delegate-registration" },
        { name: "Sponsors & Partners", href: "/#partners" },
        { name: "Testimonials", href: "/#testimonials" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Code of Conduct", href: "#" }
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
            <div className="flex items-center mb-4 -ml-4">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/optimized/iil-sm.avif 120w, /optimized/iil.avif 200w"
                  sizes="200px"
                />
                <source
                  type="image/webp"
                  srcSet="/optimized/iil-sm.webp 120w, /optimized/iil.webp 200w"
                  sizes="200px"
                />
                <img
                  src="/iil.png"
                  alt="India Innovates Logo"
                  className="h-40 w-auto"
                  loading="lazy"
                  width="200"
                  height="160"
                />
              </picture>
            </div>

            <p className="text-foreground/70 mb-6 max-w-md font-light -mt-12">
              India's premier innovation and technology summit bringing together young innovators, industry leaders, and visionaries. Join us at Bharat Mandapam, New Delhi on 28-29 March 2026.
            </p>

            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="hover:opacity-80 transition-opacity" aria-label={social.name}>
                  <Icon icon={social.icon} width={24} height={24} />
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-foreground/60" width={16} />
                <span className="text-sm font-light">contact@indiainnovates.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-foreground/60" width={16} />
                <span className="text-sm font-light">Bharat Mandapam, New Delhi</span>
              </div>
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
            © {currentYear} India Innovates. All rights reserved.
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