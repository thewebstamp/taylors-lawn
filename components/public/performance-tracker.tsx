// app/components/performance-tracker.tsx
'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Type definitions for PerformanceEntry with processingStart
interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
}

export function PerformanceTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Track page views
        const url = pathname + searchParams.toString();

        // Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
                page_path: url,
            });
        }

        // Track Core Web Vitals with proper error handling
        const trackWebVitals = () => {
            try {
                // Largest Contentful Paint (LCP)
                if ('PerformanceObserver' in window) {
                    // LCP Tracking
                    new PerformanceObserver((entryList) => {
                        const entries = entryList.getEntries();
                        const lastEntry = entries[entries.length - 1];

                        if ((window as any).gtag && lastEntry) {
                            (window as any).gtag('event', 'LCP', {
                                event_category: 'Web Vitals',
                                event_label: 'Largest Contentful Paint',
                                value: Math.round(lastEntry.startTime),
                                non_interaction: true,
                            });
                        }
                    }).observe({ entryTypes: ['largest-contentful-paint'] });

                    // First Input Delay (FID) - Fixed version
                    new PerformanceObserver((entryList) => {
                        for (const entry of entryList.getEntries()) {
                            const fidEntry = entry as PerformanceEventTiming;

                            if ((window as any).gtag && fidEntry.processingStart) {
                                const delay = fidEntry.processingStart - fidEntry.startTime;

                                (window as any).gtag('event', 'FID', {
                                    event_category: 'Web Vitals',
                                    event_label: 'First Input Delay',
                                    value: Math.round(delay),
                                    non_interaction: true,
                                });
                            }
                        }
                    }).observe({ entryTypes: ['first-input'] });

                    // Cumulative Layout Shift (CLS)
                    new PerformanceObserver((entryList) => {
                        for (const entry of entryList.getEntries()) {
                            if ((window as any).gtag && 'value' in entry) {
                                (window as any).gtag('event', 'CLS', {
                                    event_category: 'Web Vitals',
                                    event_label: 'Cumulative Layout Shift',
                                    value: (entry as any).value,
                                    non_interaction: true,
                                });
                            }
                        }
                    }).observe({ entryTypes: ['layout-shift'] });
                }
            } catch (error) {
                console.warn('Performance tracking error:', error);
            }
        };

        // Only track in production and if gtag is available
        if (process.env.NODE_ENV === 'production' && (window as any).gtag) {
            trackWebVitals();
        }
    }, [pathname, searchParams]);

    return null;
}