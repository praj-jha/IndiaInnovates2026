import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DelegatePass = lazy(() => import("./pages/DelegatePass"));
const DelegateRegistration = lazy(() => import("./pages/DelegateRegistration"));
const ExhibitorRegistration = lazy(() => import("./pages/ExhibitorRegistration"));
const SchoolCompetitionRegistration = lazy(() => import("./pages/SchoolCompetitionRegistration"));
const SchoolCompetitions = lazy(() => import("./pages/SchoolCompetitions"));
const Agenda = lazy(() => import("./pages/Agenda"));
const AllSpeakers = lazy(() => import("./pages/AllSpeakers"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
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

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="india-innovates-ui-theme">
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
                <div className="min-h-screen bg-background">
                  <ConditionalNavbar />
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/delegate-pass" element={<DelegatePass />} />
                      <Route path="/delegate-registration" element={<DelegateRegistration />} />
                      <Route path="/exhibitor-registration" element={<ExhibitorRegistration />} />
                      <Route path="/school-competitions-register" element={<SchoolCompetitionRegistration />} />
                      <Route path="/school-competitions" element={<SchoolCompetitions />} />
                      <Route path="/agenda" element={<Agenda />} />
                      <Route path="/all-speakers" element={<AllSpeakers />} />

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </div>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
