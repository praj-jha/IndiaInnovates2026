// Lazy loading wrapper for better code splitting
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Lazy load heavy components
export const LazyDashboard = lazy(() => import('@/pages/Dashboard'));
export const LazyLogin = lazy(() => import('@/pages/Login'));
export const LazySignup = lazy(() => import('@/pages/Signup'));

// Course pages - lazy loaded since they're not critical for initial page load
export const LazyCohortIB = lazy(() => import('@/pages/courses/CohortIB'));
export const LazyCohortMC = lazy(() => import('@/pages/courses/CohortMC'));
export const LazyCohortPM = lazy(() => import('@/pages/courses/CohortPM'));
export const LazyCrashCourse1 = lazy(() => import('@/pages/courses/CrashCourse1'));
export const LazyCrashCourse2 = lazy(() => import('@/pages/courses/CrashCourse2'));
export const LazyCrashCourse3 = lazy(() => import('@/pages/courses/CrashCourse3'));

// SEO Landing pages
export const LazyInvestmentBankingCoursePage = lazy(() => import('@/pages/seo/InvestmentBankingCoursePage'));
export const LazyManagementConsultingCoursePage = lazy(() => import('@/pages/seo/ManagementConsultingCoursePage'));
export const LazyCohortInIndiaPage = lazy(() => import('@/pages/seo/CohortInIndiaPage'));
export const LazyInvestmentBankingCohortIndiaPage = lazy(() => import('@/pages/seo/InvestmentBankingCohortIndiaPage'));
export const LazyManagementConsultingCohortIndiaPage = lazy(() => import('@/pages/seo/ManagementConsultingCohortIndiaPage'));

// HOC for lazy loading with suspense
export const withLazyLoading = (Component: React.LazyExoticComponent<any>) => {
  return (props: any) => (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default {
  Dashboard: withLazyLoading(LazyDashboard),
  Login: withLazyLoading(LazyLogin),
  Signup: withLazyLoading(LazySignup),
  CohortIB: withLazyLoading(LazyCohortIB),
  CohortMC: withLazyLoading(LazyCohortMC),
  CohortPM: withLazyLoading(LazyCohortPM),
  CrashCourse1: withLazyLoading(LazyCrashCourse1),
  CrashCourse2: withLazyLoading(LazyCrashCourse2),
  CrashCourse3: withLazyLoading(LazyCrashCourse3),
  InvestmentBankingCoursePage: withLazyLoading(LazyInvestmentBankingCoursePage),
  ManagementConsultingCoursePage: withLazyLoading(LazyManagementConsultingCoursePage),
  CohortInIndiaPage: withLazyLoading(LazyCohortInIndiaPage),
  InvestmentBankingCohortIndiaPage: withLazyLoading(LazyInvestmentBankingCohortIndiaPage),
  ManagementConsultingCohortIndiaPage: withLazyLoading(LazyManagementConsultingCohortIndiaPage),
};
