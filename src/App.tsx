import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PublicRoute from "@/components/auth/PublicRoute";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LazyComponents from "@/utils/lazyComponents";
import Navbar from "./components/layout/Navbar";

const queryClient = new QueryClient();

// Component to conditionally render navbar
const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup'];
  
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }
  
  return <Navbar />;
};

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="crackthru-ui-theme">
            <AuthProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter
                  future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                  }}
                >
                  <div className="min-h-screen bg-background">
                    <ConditionalNavbar />
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/login" element={
                        <PublicRoute>
                          <LazyComponents.Login />
                        </PublicRoute>
                      } />
                      <Route path="/signup" element={
                        <PublicRoute>
                          <LazyComponents.Signup />
                        </PublicRoute>
                      } />
                      <Route path="/dashboard" element={
                        <ProtectedRoute>
                          <LazyComponents.Dashboard />
                        </ProtectedRoute>
                      } />
                      <Route path="/cohorts/investment-banking" element={<LazyComponents.CohortIB />} />
                      <Route path="/cohorts/management-consultancy" element={<LazyComponents.CohortMC />} />
                      <Route path="/cohorts/product-management" element={<LazyComponents.CohortPM />} />
                      <Route path="/crash-courses/track-1" element={<LazyComponents.CrashCourse1 />} />
                      <Route path="/crash-courses/track-2" element={<LazyComponents.CrashCourse2 />} />
                      <Route path="/crash-courses/track-3" element={<LazyComponents.CrashCourse3 />} />
                           {/* SEO Landing Pages */}
                  <Route path="/investment-banking-course" element={<LazyComponents.InvestmentBankingCoursePage />} />
                  <Route path="/management-consulting-course" element={<LazyComponents.ManagementConsultingCoursePage />} />
                  <Route path="/cohort-in-india" element={<LazyComponents.CohortInIndiaPage />} />
                  <Route path="/investment-banking-cohort-india" element={<LazyComponents.InvestmentBankingCohortIndiaPage />} />
                  <Route path="/management-consulting-cohort-india" element={<LazyComponents.ManagementConsultingCohortIndiaPage />} />
                      
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </BrowserRouter>
              </TooltipProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
