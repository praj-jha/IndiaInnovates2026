import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import { prefetchRoutes } from "@/components/common/PrefetchLink";
import { initializeVersionChecker } from "@/utils/versionChecker";

// Eagerly load critical pages (no lazy loading for instant navigation)
import Index from "./pages/Index";
import UniversityCompetitions from "./pages/UniversityCompetitions";
import SchoolCompetitions from "./pages/SchoolCompetitions";

// Lazy load less critical pages
const NotFound = lazy(() => import("./pages/NotFound"));
const DelegatePass = lazy(() => import("./pages/DelegatePass"));
const DelegateRegistration = lazy(() => import("./pages/DelegateRegistration"));
const ExhibitorRegistration = lazy(() => import("./pages/ExhibitorRegistration"));
const SchoolCompetitionRegistration = lazy(() => import("./pages/SchoolCompetitionRegistration"));
const UniversityCompetitionRegistration = lazy(() => import("./pages/UniversityCompetitionRegistration"));
const Agenda = lazy(() => import("./pages/Agenda"));
const AllSpeakers = lazy(() => import("./pages/AllSpeakers"));

// Ultra-lightweight loading fallback
const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to conditionally render navbar
const ConditionalNavbar = () => {
  return <Navbar />;
};

// Component to prefetch critical routes after initial load
const RoutePrefetcher = () => {
  useEffect(() => {
    // Prefetch registration pages immediately (they're frequently accessed)
    const timer = setTimeout(() => {
      prefetchRoutes([
        "/delegate-registration",
        "/school-competitions-register",
        "/university-competitions-register",
      ], 500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

const App = () => {
  // Initialize version checker on app mount
  useEffect(() => {
    initializeVersionChecker();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <ScrollToTop />
              <RoutePrefetcher />
              <div className="min-h-screen bg-white">
                <ConditionalNavbar />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/delegate-pass" element={<DelegatePass />} />
                    <Route path="/delegate-registration" element={<DelegateRegistration />} />
                    <Route path="/exhibitor-registration" element={<ExhibitorRegistration />} />
                    <Route path="/school-competitions-register" element={<SchoolCompetitionRegistration />} />
                    <Route path="/school-competitions" element={<SchoolCompetitions />} />
                    <Route path="/university-competitions" element={<UniversityCompetitions />} />
                    <Route path="/university-competitions-register" element={<UniversityCompetitionRegistration />} />
                    <Route path="/agenda" element={<Agenda />} />
                    <Route path="/all-speakers" element={<AllSpeakers />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
