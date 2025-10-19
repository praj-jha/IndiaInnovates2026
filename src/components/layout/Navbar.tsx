import { useState, memo, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-6 flex items-center">
          <img
            src="/iil.png"
            alt="CRACKTHRU Logo"
            className="h-40 w-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className={getLinkClassName("/")}>
              Home
            </Link>

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
            <Link to="/exhibitor-registration" className={getLinkClassName("/exhibitor-registration")}>
              Expo
            </Link>

            <div className="group relative">
              <button className={`flex items-center transition-colors hover:text-primary ${isActiveLink("/cohorts") ? "text-purple-600 font-semibold" : ""}`}>
                Competitions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/school-competitions" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/school-competitions") ? "text-purple-600 font-semibold" : ""}`}>
                    School
                  </Link>
                  <Link to="/cohorts/management-consultancy" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/cohorts/management-consultancy") ? "text-purple-600 font-semibold" : ""}`}>
                    Universities + Professionals
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>



        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild className="hover:bg-purple-50 hover:text-purple-600">
              <Link to="/agenda">Agenda</Link>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/delegate-pass">Delegate Pass</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden flex-1 justify-end items-center space-x-4">
          <ThemeToggle />
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
            <Link
              to="/"
              className={`block py-2 text-sm font-medium ${isActiveLink("/") ? "text-purple-600 font-semibold" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
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
            <Link
              to="/exhibitor-registration"
              className={`block py-2 text-sm font-medium ${isActiveLink("/exhibitor-registration") ? "text-purple-600 font-semibold" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Expo
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Competitions</div>
              <Link
                to="/school-competitions"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/school-competitions") ? "text-purple-600 font-semibold" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                School
              </Link>
              <Link
                to="/cohorts/management-consultancy"
                className={`block py-1 pl-4 text-sm ${isActiveLink("/cohorts/management-consultancy") ? "text-purple-600 font-semibold" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Universities + Professionals
              </Link>
            </div>
            <div className="pt-4 border-t space-y-2">
              <Link
                to="/agenda"
                className="block py-2 text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link
                to="/delegate-pass"
                className="block py-2 text-sm font-medium text-purple-600 hover:text-purple-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Delegate Pass
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default memo(Navbar);
