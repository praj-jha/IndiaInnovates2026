import { useState, memo, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { PrefetchLink } from "@/components/common/PrefetchLink";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

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
    const baseClasses = "text-sm font-medium transition-colors hover:text-white/90";
    const activeClasses = "text-white font-semibold border-b-2 border-white";
    return isActiveLink(path) ? `${baseClasses} ${activeClasses}` : `${baseClasses} text-white/80`;
  }, [isActiveLink]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-900 bg-purple-800">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <PrefetchLink to="/" className="flex items-center md:mr-6 -ml-4 md:ml-0">
          <img
            src="/iilw.svg"
            alt="India Innovates 2026 Logo"
            className="h-48 w-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="240"
            height="192"
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
              className="text-sm font-medium transition-colors text-white/80 hover:text-white/90"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Politics
            </a>

            <a
              href="/#faq"
              className="text-sm font-medium transition-colors text-white/80 hover:text-white/90"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              II26 Awards
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium transition-colors text-white/80 hover:text-white/90"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Future of Cities
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium transition-colors text-white/80 hover:text-white/90"
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
              <button 
                className={`flex items-center transition-colors touch-manipulation ${isActiveLink("/school-competitions") || isActiveLink("/university-competitions") ? "text-white font-semibold" : "text-white/80 hover:text-white/90"}`}
                aria-label="Themes menu"
              >
                Themes <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <PrefetchLink to="/school-competitions" className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors ${isActiveLink("/school-competitions") ? "text-purple-600 font-semibold" : ""}`}>
                    School
                  </PrefetchLink>
                  <PrefetchLink to="/university-competitions" className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors ${isActiveLink("/university-competitions") ? "text-purple-600 font-semibold" : ""}`}>
                    Universities + Professionals
                  </PrefetchLink>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button 
                className={`flex items-center text-sm font-medium transition-colors touch-manipulation ${isActiveLink("/highlights") || isActiveLink("/join-our-team") ? "text-white font-semibold" : "text-white/80 hover:text-white/90"}`}
                aria-label="More menu"
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <PrefetchLink to="/highlights" className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors ${isActiveLink("/highlights") ? "text-purple-600 font-semibold" : ""}`}>
                    Highlights
                  </PrefetchLink>
                  <PrefetchLink to="/join-our-team" className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors ${isActiveLink("/join-our-team") ? "text-purple-600 font-semibold" : ""}`}>
                    Join Our Team
                  </PrefetchLink>
                </div>
              </div>
            </div>


          </div>
        </div>



        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild className="text-white hover:bg-purple-700 hover:text-white">
              <PrefetchLink to="/agenda">Agenda</PrefetchLink>
            </Button>
            <Button asChild className="bg-white text-purple-800 hover:bg-white/90 hover:text-purple-900">
              <PrefetchLink to="/delegate-pass">Delegate Pass</PrefetchLink>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-purple-700 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-purple-900 bg-purple-800">
          <div className="container py-4 space-y-4">
            <PrefetchLink
              to="/"
              className={`block py-2 text-sm font-medium ${isActiveLink("/") ? "text-white font-semibold" : "text-white/80"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </PrefetchLink>
            <a
              href="/#testimonials"
              className="block py-2 text-sm font-medium text-white/80"
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
              className="block py-2 text-sm font-medium text-white/80"
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
              className="block py-2 text-sm font-medium text-white/80"
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
              className="block py-2 text-sm font-medium text-white/80"
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
              className={`block py-2 text-sm font-medium ${isActiveLink("/exhibitor-registration") ? "text-white font-semibold" : "text-white/80"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Expo
            </PrefetchLink>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white/60">Themes</div>
              <PrefetchLink
                to="/school-competitions"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/school-competitions") ? "text-white font-semibold" : "text-white/80"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                School
              </PrefetchLink>
              <PrefetchLink
                to="/university-competitions"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/university-competitions") ? "text-white font-semibold" : "text-white/80"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Universities + Professionals
              </PrefetchLink>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white/60">More</div>
              <PrefetchLink
                to="/highlights"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/highlights") ? "text-white font-semibold" : "text-white/80"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Highlights
              </PrefetchLink>
              <PrefetchLink
                to="/join-our-team"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/join-our-team") ? "text-white font-semibold" : "text-white/80"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Our Team
              </PrefetchLink>
            </div>
            <div className="pt-4 border-t border-purple-700 space-y-2">
              <PrefetchLink
                to="/agenda"
                className="block py-2 text-sm font-medium text-white/80 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </PrefetchLink>
              <PrefetchLink
                to="/delegate-pass"
                className="block py-2 px-4 text-sm font-medium bg-white text-purple-800 hover:bg-white/90 rounded-md text-center"
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
