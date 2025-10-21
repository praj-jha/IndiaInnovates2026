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

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DelegatePass = lazy(() => import("./pages/DelegatePass"));
const DelegateRegistration = lazy(() => import("./pages/DelegateRegistration"));
const ExhibitorRegistration = lazy(() => import("./pages/ExhibitorRegistration"));
const SchoolCompetitionRegistration = lazy(() => import("./pages/SchoolCompetitionRegistration"));
const SchoolCompetitions = lazy(() => import("./pages/SchoolCompetitions"));
const UniversityCompetitions = lazy(() => import("./pages/UniversityCompetitions"));
const UniversityCompetitionRegistration = lazy(() => import("./pages/UniversityCompetitionRegistration"));
const Agenda = lazy(() => import("./pages/Agenda"));
const AllSpeakers = lazy(() => import("./pages/AllSpeakers"));

// Optimized loading fallback - lighter and faster
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin" />
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
    // Prefetch critical routes after a short delay (2 seconds after mount)
    // These are the most visited pages
    prefetchRoutes([
      "/delegate-pass",
      "/school-competitions",
      "/university-competitions",
      "/delegate-registration",
    ], 2000);

    // Prefetch remaining routes after 5 seconds (low priority)
    prefetchRoutes([
      "/exhibitor-registration",
      "/school-competitions-register",
      "/university-competitions-register",
      "/agenda",
      "/all-speakers",
    ], 5000);
  }, []);

  return null;
};

const App = () => {
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
