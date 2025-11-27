import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

// ============================================================================
// CONFIGURATION - Easy to maintain and update
// ============================================================================

const NAVBAR_CONFIG = {
  // India Innovates 2026 Dropdown
  ii26: [
    {
      label: 'II26, New Delhi',
      href: '/#about',
      description: 'About India Innovates 2026',
    },
    {
      label: 'Partners',
      href: '/join-our-team',
      description: 'Why partner with II26',
    },
    {
      label: 'Speakers',
      href: '/all-speakers',
      description: null,
    },
    {
      label: 'Buy Delegate Passes',
      href: '/delegate-pass',
      description: null,
    },
    {
      label: 'FAQs',
      href: '/#faqs',
      description: null,
    },
    {
      label: 'Contact Us',
      href: '/#footer',
      description: null,
    },
  ],

  // Events Dropdown
  events: [
    {
      label: 'Future of Governance and Politics',
      href: '/#about',
      description: 'Shaping the political landscape',
    },
    {
      label: 'II26 Awards',
      href: '/highlights',
      description: 'Recognizing excellence in innovation',
    },
    {
      label: 'Future of Cities and Mobilities',
      href: '/#about',
      description: 'Building smart urban infrastructure',
    },
    {
      label: 'India 2047',
      href: '/#about',
      description: 'Vision for India at 100 years',
    },
  ],

  // Competitions Dropdown
  competitions: [
    {
      label: 'School Competitions',
      href: '/school-competitions',
      description: 'Innovation challenges for school students',
    },
    {
      label: 'University Competitions',
      href: '/university-competitions',
      description: 'Advanced challenges for university students',
    },
  ],

  // More Dropdown
  more: [
    {
      label: 'Highlights',
      href: '/highlights',
      description: null,
    },
    {
      label: 'Join Our Team',
      href: '/join-our-team',
      description: null,
    },
    {
      label: 'Agenda',
      href: '/agenda',
      description: null,
    },
  ],
};

// Responsive breakpoint for desktop/mobile
const DESKTOP_BREAKPOINT = 'lg';

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileActive, setMobileActive] = React.useState<string | null>(null);
  const scrolled = useScroll(10);
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Handle mobile menu scroll lock
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close dropdowns on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (activeDropdown && !target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  // Close dropdowns on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) setActiveDropdown(null);
    };

    if (activeDropdown) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeDropdown]);

  // Close dropdowns on Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeDropdown]);

  // Clear timeout on unmount
  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileSection = (section: string) => {
    setMobileActive((prev) => (prev === section ? null : section));
  };

  const handleDropdownMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownContentMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  // Handle FAQ navigation
  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeDropdown();
    closeMobileMenu();

    if (location.pathname === '/') {
      const faqSection = document.getElementById('faqs');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/#faqs');
      setTimeout(() => {
        const faqSection = document.getElementById('faqs');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Handle Contact Us / Footer navigation
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeDropdown();
    closeMobileMenu();

    if (location.pathname === '/') {
      const footerSection = document.getElementById('footer');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/#footer');
      setTimeout(() => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
          footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // ============================================================================
  // RENDER FUNCTIONS
  // ============================================================================

  const renderDropdownButton = (label: string, dropdownKey: string) => (
    <button
      onClick={() => handleDropdownToggle(dropdownKey)}
      aria-expanded={activeDropdown === dropdownKey}
      aria-haspopup="true"
      className={cn(
        'text-sm font-medium transition-all duration-200 hover:text-white hover:bg-purple-800/50 px-3 lg:px-4 py-2 rounded-md text-white flex items-center gap-1.5 whitespace-nowrap',
        activeDropdown === dropdownKey && 'bg-purple-800 text-white'
      )}
    >
      {label}
      <svg
        className={cn(
          'h-4 w-4 transition-transform duration-200 flex-shrink-0',
          activeDropdown === dropdownKey && 'rotate-180'
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  const renderDropdownMenu = (items: typeof NAVBAR_CONFIG.ii26, dropdownKey: string) => {
    if (activeDropdown !== dropdownKey) return null;

    return (
      <div
        role="menu"
        aria-orientation="vertical"
        className="absolute left-0 mt-2 w-72 rounded-lg border border-gray-200 bg-white shadow-xl z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 overflow-hidden"
        onMouseEnter={handleDropdownContentMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <div className="py-1">
          {items.map((item, index) => {
            const isHashLink = item.href.startsWith('/#');
            const isFAQ = item.href === '/#faqs';
            const isContact = item.href === '/#footer';

            if (isHashLink) {
              const handleClick = isFAQ ? handleFAQClick : isContact ? handleContactClick : closeDropdown;
              
              return (
                <a
                  key={index}
                  href={item.href}
                  role="menuitem"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-150 hover:bg-purple-50 hover:text-purple-900 focus:bg-purple-50 focus:text-purple-900 focus:outline-none"
                  onClick={handleClick}
                >
                  {item.description ? (
                    <div className="space-y-1">
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-xs text-gray-500 font-normal">{item.description}</div>
                    </div>
                  ) : (
                    <div>{item.label}</div>
                  )}
                </a>
              );
            }

            return (
              <Link
                key={index}
                to={item.href}
                role="menuitem"
                className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-150 hover:bg-purple-50 hover:text-purple-900 focus:bg-purple-50 focus:text-purple-900 focus:outline-none"
                onClick={closeDropdown}
              >
                {item.description ? (
                  <div className="space-y-1">
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-xs text-gray-500 font-normal">{item.description}</div>
                  </div>
                ) : (
                  <div>{item.label}</div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  // ============================================================================
  // DESKTOP NAVIGATION
  // ============================================================================

  const DesktopNavigation = () => (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      {/* India Innovates 2026 Dropdown */}
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownMouseEnter('ii26')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {renderDropdownButton('India Innovates 2026', 'ii26')}
        {renderDropdownMenu(NAVBAR_CONFIG.ii26, 'ii26')}
      </div>

      {/* Events Dropdown */}
      {/*
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownMouseEnter('events')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {renderDropdownButton('Events', 'events')}
        {renderDropdownMenu(NAVBAR_CONFIG.events, 'events')}
      </div>
      */}

      {/* Speakers - Direct Link */}
      <Link
        to="/all-speakers"
        className="text-sm font-medium transition-all duration-200 hover:text-white hover:bg-purple-800/50 px-3 lg:px-4 py-2 rounded-md text-white whitespace-nowrap"
      >
        Speakers
      </Link>

      {/* Competitions Dropdown */}
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownMouseEnter('competitions')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {renderDropdownButton('Competitions', 'competitions')}
        {renderDropdownMenu(NAVBAR_CONFIG.competitions, 'competitions')}
      </div>

      {/* More Dropdown */}
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownMouseEnter('more')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {renderDropdownButton('More', 'more')}
        {renderDropdownMenu(NAVBAR_CONFIG.more, 'more')}
      </div>

      {/* Delegate Pass Button */}
      <Link to="/delegate-pass" className="ml-2">
        <Button className="bg-white text-purple-800 hover:bg-white/90 hover:text-purple-900 font-semibold px-4 lg:px-6 whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200">
          Delegate Pass
        </Button>
      </Link>
    </div>
  );

  // ============================================================================
  // MOBILE NAVIGATION
  // ============================================================================

  const MobileNavigation = () => (
    <div
      className={cn(
        'lg:hidden bg-purple-900 fixed inset-0 z-50 flex flex-col overflow-hidden',
        open ? 'block' : 'hidden'
      )}
      style={{ top: 'var(--navbar-height, 64px)' }}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:slide-in-from-top-4',
          'data-[slot=closed]:animate-out data-[slot=closed]:fade-out-0 data-[slot=closed]:slide-out-to-top-4',
          'flex h-full w-full flex-col justify-between overflow-y-auto duration-300'
        )}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col px-4 py-6 space-y-1">
          {/* India Innovates 2026 - collapsible on mobile */}
          <div className="border-b border-purple-800/50 pb-1">
            <button
              onClick={() => toggleMobileSection('ii26')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-purple-800/30 rounded-md transition-colors"
              aria-expanded={mobileActive === 'ii26'}
            >
              <span>India Innovates 2026</span>
              <svg
                className={cn('h-5 w-5 transition-transform duration-200', mobileActive === 'ii26' && 'rotate-180')}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileActive === 'ii26' && (
              <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {NAVBAR_CONFIG.ii26.map((item, index) => {
                  const isHashLink = item.href.startsWith('/#');
                  const isFAQ = item.href === '/#faqs';
                  const isContact = item.href === '/#footer';

                  if (isHashLink) {
                    const handleClick = isFAQ ? handleFAQClick : isContact ? handleContactClick : closeMobileMenu;
                    
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-purple-800/30 rounded-md transition-colors"
                        onClick={handleClick}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-purple-800/30 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Speakers - Direct Link */}
          <Link
            to="/all-speakers"
            className="px-4 py-3 text-sm font-semibold text-white hover:bg-purple-800/30 rounded-md transition-colors border-b border-purple-800/50"
            onClick={closeMobileMenu}
          >
            SPEAKERS
          </Link>

          {/* Competitions - collapsible */}
          <div className="border-b border-purple-800/50 pb-1">
            <button
              onClick={() => toggleMobileSection('competitions')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-purple-800/30 rounded-md transition-colors"
              aria-expanded={mobileActive === 'competitions'}
            >
              <span>Competitions</span>
              <svg
                className={cn(
                  'h-5 w-5 transition-transform duration-200',
                  mobileActive === 'competitions' && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileActive === 'competitions' && (
              <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {NAVBAR_CONFIG.competitions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-purple-800/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* More - collapsible */}
          <div className="border-b border-purple-800/50 pb-1">
            <button
              onClick={() => toggleMobileSection('more')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-purple-800/30 rounded-md transition-colors"
              aria-expanded={mobileActive === 'more'}
            >
              <span>More</span>
              <svg
                className={cn('h-5 w-5 transition-transform duration-200', mobileActive === 'more' && 'rotate-180')}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileActive === 'more' && (
              <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {NAVBAR_CONFIG.more.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-purple-800/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile CTA Button - Sticky at bottom */}
        <div className="sticky bottom-0 bg-purple-900 border-t border-purple-800/50 p-4 shadow-lg">
          <Link to="/delegate-pass" onClick={closeMobileMenu} className="block">
            <Button className="w-full bg-white text-purple-800 hover:bg-white/90 hover:text-purple-900 font-semibold py-3 text-base shadow-md">
              Get Delegate Pass
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-purple-900 border-b border-purple-950 transition-all duration-300',
        {
          'bg-purple-900/95 supports-[backdrop-filter]:bg-purple-900/90 backdrop-blur-lg shadow-lg':
            scrolled && !open,
          'bg-purple-900 shadow-md': !scrolled,
        }
      )}
      style={
        {
          '--navbar-height': '64px',
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-7xl">
        <nav
          className={cn(
            'flex h-16 w-full items-center justify-between gap-4 px-4 transition-all duration-300',
            'sm:px-6 lg:h-20 lg:px-8',
            {
              'lg:h-16': scrolled,
            }
          )}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 duration-200"
              aria-label="Home"
              onClick={closeMobileMenu}
            >
              <img
                src="https://res.cloudinary.com/dgo3wykbm/image/upload/v1763362888/iilw_bi8sj8.svg"
                alt="India Innovates"
                className={cn(
                  'h-24 w-auto transition-all duration-300',
                  'sm:h-32 lg:h-32',
                  scrolled && 'lg:h-24'
                )}
              />
              <img
                src="/hnb.png"
                alt="HNB"
                className={cn(
                  'h-6 w-auto transition-all duration-300',
                  'sm:h-7 lg:h-9',
                  scrolled && 'lg:h-7'
                )}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile Menu Toggle */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            className="lg:hidden flex-shrink-0 text-white border-white/80 hover:bg-purple-800 hover:text-white hover:border-white transition-all duration-200 h-10 w-10"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuToggleIcon open={open} className="h-5 w-5" duration={300} />
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </header>
  );
}

Navbar.displayName = 'Navbar';

export default Navbar;
