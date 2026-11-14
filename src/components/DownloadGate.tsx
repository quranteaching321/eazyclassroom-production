"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { trackDownloadComplete } from "@/lib/analytics";

const DOWNLOAD_HOST = "api.eazyclassroom.net";
const DOWNLOAD_PATH_PREFIX = "/downloads/";
const SESSION_KEY = "turnstile_download_ok";

export default function DownloadGate() {
  const widgetRef = useRef<TurnstileInstance>(null);
  const [token, setToken] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const verifyAndGo = useCallback(async (t: string, href: string) => {
    try {
      const res = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: t }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem(SESSION_KEY, "1");
        try {
          const u = new URL(href);
          const parts = u.pathname.split("/");
          const fileName = parts.length ? parts[parts.length - 1] : "unknown";
          trackDownloadComplete(fileName);
        } catch (e) {
          trackDownloadComplete("unknown");
        }
        setTimeout(() => { window.location.href = href; }, 400);
      } else {
        setError("Security check failed. Please try again.");
        widgetRef.current?.reset();
        setToken(null);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(null);
    }
  }, []);

  useEffect(() => {
    function isDownloadLink(a: HTMLAnchorElement) {
      try {
        const u = new URL(a.href, window.location.href);
        return u.host === DOWNLOAD_HOST && u.pathname.startsWith(DOWNLOAD_PATH_PREFIX);
      } catch { return false; }
    }
    function onClick(e: Event) {
      const el = (e.target as HTMLElement | null)?.closest("a") as HTMLAnchorElement | null;
      if (!el || !isDownloadLink(el)) return;
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        e.preventDefault();
        setTimeout(() => { window.location.href = el.href; }, 400);
        try {
          const u = new URL(el.href);
          const parts = u.pathname.split("/");
          trackDownloadComplete(parts.length ? parts[parts.length - 1] : "unknown");
        } catch (e) {
          trackDownloadComplete("unknown");
        }
        return;
      }
      e.preventDefault();
      setError(null);
      setPending(el.href);
      if (token) void verifyAndGo(token, el.href);
      else widgetRef.current?.execute();
    }
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onClick, true);
    };
  }, [token, verifyAndGo]);

  return (
    <div aria-live="polite" style={{ position: "fixed", bottom: 16, right: 16, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
      {pending && !error && (
        <div style={{ background: "#0F172A", color: "#fff", padding: "10px 14px", borderRadius: 8, fontSize: 13 }}>Verifying…</div>
      )}
      {error && (
        <div style={{ background: "#FEE2E2", color: "#991B1B", padding: "10px 14px", borderRadius: 8, fontSize: 13, maxWidth: 280 }}>{error}</div>
      )}
      <Turnstile
        ref={widgetRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        options={{ execution: "execute", appearance: "interaction-only", size: "flexible" }}
        onSuccess={(t) => { setToken(t); if (pending) void verifyAndGo(t, pending); }}
        onError={() => { setError("Security check failed. Please retry."); setPending(null); }}
        onExpire={() => setToken(null)}
      />
    </div>
  );
}