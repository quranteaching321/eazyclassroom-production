/** Analytics helpers - push events to GTM dataLayer. */
export type AnalyticsParams = { [key: string]: unknown };

declare global {
interface Window {
dataLayer?: unknown[];
}
}

function safePush(payload: { [key: string]: unknown }) {
if (typeof window === 'undefined') return;
window.dataLayer = window.dataLayer ?? [];
window.dataLayer.push(payload);
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
safePush({ event: eventName, ...params });
}

export function trackPageView(path: string) {
safePush({
event: 'spa_page_view',
page_path: path,
page_location: typeof window === 'undefined' ? path : window.location.href,
});
}

export function trackSignupClick(linkUrl: string, linkText: string) {
trackEvent('begin_signup', { link_url: linkUrl, link_text: linkText });
}

export function trackLoginClick(linkUrl: string, linkText: string) {
trackEvent('begin_login', { link_url: linkUrl, link_text: linkText });
}

export function trackDownloadClick(fileName: string, linkUrl: string) {
const parts = fileName.split('.');
const ext = parts.length ? parts[parts.length - 1].toLowerCase() : 'unknown';
trackEvent('download', { file_name: fileName, file_extension: ext, link_url: linkUrl });
}

export function trackDownloadComplete(fileName: string) {
trackEvent('download_complete', { file_name: fileName });
}

export function trackLeadSubmit(formId: string) {
trackEvent('generate_lead', { form_id: formId });
}