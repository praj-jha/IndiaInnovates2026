import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/components/auth/AuthProvider";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "text-sm font-medium transition-colors hover:text-primary";
    const activeClasses = "text-orange-600 font-semibold";
    return isActiveLink(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-6 flex items-center">
          <img 
            src="/iil.png" 
            alt="CRACKTHRU Logo" 
            className="h-40 w-auto"
            loading="lazy"
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

             <div className="group relative">
              <button className={`flex items-center transition-colors hover:text-primary ${isActiveLink("/cohorts") ? "text-orange-600 font-semibold" : ""}`}>
                Competitions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/cohorts/investment-banking" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/cohorts/investment-banking") ? "text-orange-600 font-semibold" : ""}`}>
                    School
                  </Link>
                  <Link to="/cohorts/management-consultancy" className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${isActiveLink("/cohorts/management-consultancy") ? "text-orange-600 font-semibold" : ""}`}>
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
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-navy-600 text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild className="hover:bg-orange-50 hover:text-orange-600">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
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
            <Link to="/" className={`block py-2 text-sm font-medium ${isActiveLink("/") ? "text-orange-600 font-semibold" : ""}`}>
              Home
            </Link>
            <div className="space-y-2">
              <div className={`text-sm font-medium text-muted-foreground ${isActiveLink("/cohorts") ? "text-orange-600" : ""}`}>Cohorts</div>
              <Link to="/cohorts/investment-banking" className={`block py-1 pl-4 text-sm ${isActiveLink("/cohorts/investment-banking") ? "text-orange-600 font-semibold" : ""}`}>
                Investment Banking
              </Link>
              <Link to="/cohorts/management-consultancy" className={`block py-1 pl-4 text-sm ${isActiveLink("/cohorts/management-consultancy") ? "text-orange-600 font-semibold" : ""}`}>
                Management Consultancy
              </Link>
              <Link to="/cohorts/product-management" className={`block py-1 pl-4 text-sm ${isActiveLink("/cohorts/product-management") ? "text-orange-600 font-semibold" : ""}`}>
                Product Management
              </Link>
            </div>
            <div className="space-y-2">
              <div className={`text-sm font-medium text-muted-foreground ${isActiveLink("/crash-courses") ? "text-orange-600" : ""}`}>Crash Courses</div>
              <Link to="/crash-courses/track-1" className={`block py-1 pl-4 text-sm ${isActiveLink("/crash-courses/track-1") ? "text-orange-600 font-semibold" : ""}`}>
                Track 1
              </Link>
              <Link to="/crash-courses/track-2" className={`block py-1 pl-4 text-sm ${isActiveLink("/crash-courses/track-2") ? "text-orange-600 font-semibold" : ""}`}>
                Track 2
              </Link>
              <Link to="/crash-courses/track-3" className={`block py-1 pl-4 text-sm ${isActiveLink("/crash-courses/track-3") ? "text-orange-600 font-semibold" : ""}`}>
                Track 3
              </Link>
            </div>
            <a 
              href="/#testimonials" 
              className="block py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Testimonials
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
              FAQs
            </a>
            <div className="pt-4 border-t space-y-2">
              {user ? (
                <>
                  <Link to="/dashboard" className="block py-2 text-sm font-medium">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="block py-2 text-sm font-medium text-left w-full">
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <Link to="/login" className="block py-2 text-sm font-medium hover:text-orange-600">
                    Login
                  </Link>
                  <Link to="/signup" className="block py-2 text-sm font-medium text-orange-600 hover:text-orange-700">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
