import { useState, memo, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { PrefetchLink } from "@/components/common/PrefetchLink";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = useCallback((path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const getLinkClassName = useCallback((path: string) => {
    const baseClasses = "text-sm font-medium transition-colors hover:text-primary";
    const activeClasses = "text-purple-600 font-semibold";
    return isActiveLink(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
  }, [isActiveLink]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <PrefetchLink to="/" className="mr-6 flex items-center">
          <img
            src="/iil.png"
            alt="India Innovates 2026 Logo"
            className="h-40 w-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </PrefetchLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center space-x-8">
            <PrefetchLink to="/" className={getLinkClassName("/")}>
              Home
            </PrefetchLink>

            {/* Cohorts Dropdown */}


            {/* Crash Courses Dropdown */}


            <a
              href="/#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Politics
            </a>

            <a
              href="/#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              II26 Awards
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Cities
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              India 2047
            </a>
            <PrefetchLink to="/exhibitor-registration" className={getLinkClassName("/exhibitor-registration")}>
              Expo
            </PrefetchLink>

            <div className="group relative">
              <button className={`flex items-center transition-colors hover:text-primary ${isActiveLink("/cohorts") ? "text-purple-600 font-semibold" : ""}`}>
                Competitions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <PrefetchLink to="/school-competitions" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/school-competitions") ? "text-purple-600 font-semibold" : ""}`}>
                    School
                  </PrefetchLink>
                  <PrefetchLink to="/cohorts/management-consultancy" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/cohorts/management-consultancy") ? "text-purple-600 font-semibold" : ""}`}>
                    Universities + Professionals
                  </PrefetchLink>
                </div>
              </div>
            </div>


          </div>
        </div>



        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild className="hover:bg-purple-50 hover:text-purple-600">
              <PrefetchLink to="/agenda">Agenda</PrefetchLink>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <PrefetchLink to="/delegate-pass">Delegate Pass</PrefetchLink>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden flex-1 justify-end items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <PrefetchLink
              to="/"
              className={`block py-2 text-sm font-medium ${isActiveLink("/") ? "text-purple-600 font-semibold" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </PrefetchLink>
            <a
              href="/#testimonials"
              className="block py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Politics
            </a>
            <a
              href="/#faq"
              className="block py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              II26 Awards
            </a>
            <a
              href="/#faq"
              className="block py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Cities
            </a>
            <a
              href="/#faq"
              className="block py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              India 2047
            </a>
            <PrefetchLink
              to="/exhibitor-registration"
              className={`block py-2 text-sm font-medium ${isActiveLink("/exhibitor-registration") ? "text-purple-600 font-semibold" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Expo
            </PrefetchLink>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Competitions</div>
              <PrefetchLink
                to="/school-competitions"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/school-competitions") ? "text-purple-600 font-semibold" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                School
              </PrefetchLink>
              <PrefetchLink
                to="/cohorts/management-consultancy"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/cohorts/management-consultancy") ? "text-purple-600 font-semibold" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Universities + Professionals
              </PrefetchLink>
            </div>
            <div className="pt-4 border-t space-y-2">
              <PrefetchLink
                to="/agenda"
                className="block py-2 text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </PrefetchLink>
              <PrefetchLink
                to="/delegate-pass"
                className="block py-2 text-sm font-medium text-purple-600 hover:text-purple-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Delegate Pass
              </PrefetchLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default memo(Navbar);
