'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export default function AnalyticsRouter() {
const pathname = usePathname();
useEffect(function() {
if (pathname) trackPageView(pathname);
}, [pathname]);
return null;
}