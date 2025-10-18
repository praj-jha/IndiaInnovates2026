import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DelegatePass from "./pages/DelegatePass";
import DelegateRegistration from "./pages/DelegateRegistration";
import ExhibitorRegistration from "./pages/ExhibitorRegistration";
import SchoolCompetitionRegistration from "./pages/SchoolCompetitionRegistration";
import SchoolCompetitions from "./pages/SchoolCompetitions";
import Agenda from "./pages/Agenda";
import AllSpeakers from "./pages/AllSpeakers";
import LazyComponents from "@/utils/lazyComponents";
import Navbar from "./components/layout/Navbar";

const queryClient = new QueryClient();

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
                <div className="min-h-screen bg-background">
                  <ConditionalNavbar />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/delegate-pass" element={<DelegatePass />} />
                    <Route path="/delegate-registration" element={<DelegateRegistration />} />
                    <Route path="/exhibitor-registration" element={<ExhibitorRegistration />} />
                    <Route path="/school-competitions-register" element={<SchoolCompetitionRegistration />} />
                    <Route path="/school-competitions" element={<SchoolCompetitions />} />
                    <Route path="/agenda" element={<Agenda />} />
                    <Route path="/all-speakers" element={<AllSpeakers />} />

                    {/* Legacy SEO Landing Pages - kept for SEO purposes */}
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
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
