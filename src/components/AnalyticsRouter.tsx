'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackEvent } from '@/lib/analytics';

export default function AnalyticsRouter() {
const pathname = usePathname();
useEffect(function() {
if (pathname) {
      trackPageView(pathname);
      if (pathname === '/download') {
        trackEvent('download', { source: 'page_view' });
      }
    }
}, [pathname]);
return null;
}