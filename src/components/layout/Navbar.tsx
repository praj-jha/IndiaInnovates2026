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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
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

  // ============================================================================
  // RENDER FUNCTIONS
  // ============================================================================

  const renderDropdownButton = (label: string, dropdownKey: string) => (
    <button
      onClick={() => handleDropdownToggle(dropdownKey)}
      aria-expanded={activeDropdown === dropdownKey}
      aria-haspopup="true"
      className={cn(
        'text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-md text-white flex items-center gap-1',
        activeDropdown === dropdownKey && 'bg-purple-800'
      )}
    >
      {label}
      <svg
        className={cn(
          'h-4 w-4 transition-transform duration-200',
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
        className="absolute left-0 mt-1 w-64 rounded-md border bg-white shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
        onMouseEnter={handleDropdownContentMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {items.map((item, index) => {
          const isHashLink = item.href.startsWith('/#');
          const isFAQ = item.href === '/#faqs';

          if (isHashLink) {
            return (
              <a
                key={index}
                href={item.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm font-normal text-gray-700 transition-colors hover:bg-purple-50 first:rounded-t-md last:rounded-b-md focus:bg-purple-50 focus:outline-none"
                onClick={isFAQ ? handleFAQClick : closeDropdown}
              >
                {item.description ? (
                  <>
                    <div>{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </>
                ) : (
                  item.label
                )}
              </a>
            );
          }

          return (
            <Link
              key={index}
              to={item.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-normal text-gray-700 transition-colors hover:bg-purple-50 first:rounded-t-md last:rounded-b-md focus:bg-purple-50 focus:outline-none"
              onClick={closeDropdown}
            >
              {item.description ? (
                <>
                  <div>{item.label}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </>
              ) : (
                item.label
              )}
            </Link>
          );
        })}
      </div>
    );
  };

  // ============================================================================
  // DESKTOP NAVIGATION
  // ============================================================================

  const DesktopNavigation = () => (
    <div className="hidden items-center gap-3 md:flex">
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
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownMouseEnter('events')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {renderDropdownButton('Events', 'events')}
        {renderDropdownMenu(NAVBAR_CONFIG.events, 'events')}
      </div>

      {/* Speakers - Direct Link */}
      <Link
        to="/all-speakers"
        className="text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-md text-white"
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
      <Link to="/delegate-pass">
        <Button className="bg-white text-purple-800 hover:bg-white/90 hover:text-purple-900">
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
        'bg-purple-900 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-purple-950',
        open ? 'block' : 'hidden'
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
          'flex h-full w-full flex-col justify-between gap-y-2 p-4 overflow-y-auto'
        )}
      >
        <div className="grid gap-y-2">
          {/* India Innovates 2026 */}
          <div className="px-4 py-2 text-xs font-medium text-white uppercase tracking-wider">
            India Innovates 2026
          </div>
          {NAVBAR_CONFIG.ii26.map((item, index) => {
            const isHashLink = item.href.startsWith('/#');
            const isFAQ = item.href === '/#faqs';

            if (isHashLink) {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
                  onClick={isFAQ ? handleFAQClick : closeMobileMenu}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={index}
                to={item.href}
                className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="my-2 border-t border-purple-800"></div>

          {/* Events */}
          <div className="px-4 py-2 text-xs font-medium text-white uppercase tracking-wider">
            Events
          </div>
          {NAVBAR_CONFIG.events.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 border-t border-purple-800"></div>

          {/* Speakers */}
          <Link
            to="/all-speakers"
            className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
            onClick={closeMobileMenu}
          >
            Speakers
          </Link>

          <div className="my-2 border-t border-purple-800"></div>

          {/* Competitions */}
          <div className="px-4 py-2 text-xs font-medium text-white uppercase tracking-wider">
            Competitions
          </div>
          {NAVBAR_CONFIG.competitions.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 border-t border-purple-800"></div>

          {/* More */}
          <div className="px-4 py-2 text-xs font-medium text-white uppercase tracking-wider">
            More
          </div>
          {NAVBAR_CONFIG.more.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-sm font-medium text-white hover:text-white/90 px-3 py-2 rounded-md text-left"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="flex flex-col gap-2 pt-4">
          <Link to="/delegate-pass" onClick={closeMobileMenu}>
            <Button className="w-full bg-white text-purple-800 hover:bg-white/90 hover:text-purple-900">
              Delegate Pass
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
        'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b md:rounded-md md:border md:transition-all md:ease-out bg-purple-900 border-purple-950',
        {
          'bg-purple-900/95 supports-[backdrop-filter]:bg-purple-900/90 border-purple-950 backdrop-blur-lg md:top-4 md:max-w-6xl md:shadow':
            scrolled && !open,
          'bg-purple-900': open,
        }
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-6 md:h-24 md:transition-all md:ease-out',
          {
            'md:px-4': scrolled,
          }
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Home">
            <img
              src="https://res.cloudinary.com/dgo3wykbm/image/upload/v1763362888/iilw_bi8sj8.svg"
              alt="India Innovates"
              className="h-28 w-auto md:h-40"
            />
            <img src="/hnb.png" alt="HNB" className="h-7 w-auto md:h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Menu Toggle */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white border-white hover:bg-purple-800 hover:text-white"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </header>
  );
}

Navbar.displayName = 'Navbar';

export default Navbar;
