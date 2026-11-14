'use client';
import { useEffect } from 'react';
import {
trackSignupClick,
trackLoginClick,
trackDownloadClick,
trackDownloadComplete,
} from '@/lib/analytics';

const SIGNUP_HOST = 'app.eazyclassroom.net';
const SIGNUP_PATH = '/signup';
const SIGNIN_PATH = '/signin';
const DOWNLOAD_HOST = 'api.eazyclassroom.net';
const DOWNLOAD_PREFIX = '/downloads/';

export default function LinkTracker() {
useEffect(function() {
function handleClick(e: MouseEvent) {
const target: any = e.target;
const el = target ? target.closest('a') : null;
if (!el) return;
let url: URL;
try {
url = new URL(el.href, window.location.href);
} catch (err) {
return;
}
const text = (el.textContent ?? '').trim().slice(0, 80);
if (url.host === SIGNUP_HOST) {
if (url.pathname.indexOf(SIGNUP_PATH) === 0) {
trackSignupClick(url.toString(), text);
return;
}
if (url.pathname.indexOf(SIGNIN_PATH) === 0) {
trackLoginClick(url.toString(), text);
return;
}
}
if (url.host === DOWNLOAD_HOST) {
if (url.pathname.indexOf(DOWNLOAD_PREFIX) === 0) {
const parts = url.pathname.split('/');
const fileName = parts.length ? parts[parts.length - 1] : 'unknown';
trackDownloadClick(fileName, url.toString());
        trackDownloadComplete(fileName);
}
}
}
document.addEventListener('click', handleClick, true);
return function() {
document.removeEventListener('click', handleClick, true);
};
}, []);
return null;
}