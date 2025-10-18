// Lazy loading wrapper for better code splitting
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// SEO Landing pages (kept for legacy routes)
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
  InvestmentBankingCoursePage: withLazyLoading(LazyInvestmentBankingCoursePage),
  ManagementConsultingCoursePage: withLazyLoading(LazyManagementConsultingCoursePage),
  CohortInIndiaPage: withLazyLoading(LazyCohortInIndiaPage),
  InvestmentBankingCohortIndiaPage: withLazyLoading(LazyInvestmentBankingCohortIndiaPage),
  ManagementConsultingCohortIndiaPage: withLazyLoading(LazyManagementConsultingCohortIndiaPage),
};
