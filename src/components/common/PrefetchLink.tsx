import { Link, LinkProps } from "react-router-dom";
import { MouseEvent, TouchEvent, useCallback } from "react";

// Route to chunk mapping - this should match your lazy imports in App.tsx
const routeChunkMap: Record<string, () => Promise<any>> = {
    "/": () => import("@/pages/Index"),
    "/delegate-pass": () => import("@/pages/DelegatePass"),
    "/delegate-registration": () => import("@/pages/DelegateRegistration"),
    "/exhibitor-registration": () => import("@/pages/ExhibitorRegistration"),
    "/school-competitions-register": () => import("@/pages/SchoolCompetitionRegistration"),
    "/school-competitions": () => import("@/pages/SchoolCompetitions"),
    "/agenda": () => import("@/pages/Agenda"),
    "/all-speakers": () => import("@/pages/AllSpeakers"),
};

// Track which routes have been prefetched
const prefetchedRoutes = new Set<string>();

/**
 * Prefetch a route's code chunk
 */
export const prefetchRoute = (path: string): void => {
    // Don't prefetch if already done
    if (prefetchedRoutes.has(path)) return;

    const loader = routeChunkMap[path];
    if (loader) {
        prefetchedRoutes.add(path);
        loader().catch(() => {
            // Prefetch failed - remove from set to allow retry
            prefetchedRoutes.delete(path);
        });
    }
};

interface PrefetchLinkProps extends LinkProps {
    prefetch?: boolean; // Default true
}

/**
 * Enhanced Link component that prefetches routes on hover for instant navigation
 */
export const PrefetchLink = ({
    to,
    prefetch = true,
    onMouseEnter,
    onTouchStart,
    ...props
}: PrefetchLinkProps) => {
    const path = typeof to === "string" ? to : to.pathname || "";

    const handleMouseEnter = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        if (prefetch) {
            prefetchRoute(path);
        }
        onMouseEnter?.(e);
    }, [path, prefetch, onMouseEnter]);

    const handleTouchStart = useCallback((e: TouchEvent<HTMLAnchorElement>) => {
        // Prefetch on touch devices too
        if (prefetch) {
            prefetchRoute(path);
        }
        onTouchStart?.(e);
    }, [path, prefetch, onTouchStart]);

    return (
        <Link
            to={to}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            {...props}
        />
    );
};

/**
 * Prefetch multiple routes in the background
 */
export const prefetchRoutes = (paths: string[], delay: number = 0): void => {
    setTimeout(() => {
        paths.forEach(path => prefetchRoute(path));
    }, delay);
};
