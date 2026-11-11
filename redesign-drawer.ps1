$path = 'src\layout\headers\HeaderFour.tsx'
$c = Get-Content $path -Raw -Encoding UTF8

if ($c.Contains('fid-drawer-body')) {
  Write-Host "Already patched - nothing changed." -ForegroundColor Yellow
  exit 0
}

# === 1. Remove mobile CTA from header ===
$s = $c.IndexOf('{/* Mobile CTA */}')
$e = $c.IndexOf('{/* Mobile toggle */}')
if ($s -gt 0 -and $e -gt $s) {
  $c = $c.Substring(0, $s) + $c.Substring($e)
  Write-Host "Removed mobile CTA." -ForegroundColor Green
}

# === 2. Update CSS block ===
$oldCss = @'
        .fid-mobile-cta { display: none !important; }
        @media (max-width: 1023px) {
          .fid-mobile-cta {
            display: inline-flex !important;
            margin-left: auto !important;
          }
          .fid-mobile-toggle {
            background: #F1F5F9 !important;
            border-radius: 10px !important;
          }
          .fid-mobile-toggle:active {
            background: #E2E8F0 !important;
          }
        }
'@

$newCss = @'
        @media (max-width: 1023px) {
          .fid-mobile-toggle {
            margin-left: auto !important;
            background: #F1F5F9 !important;
            border-radius: 10px !important;
          }
          .fid-mobile-toggle:active {
            background: #E2E8F0 !important;
          }
        }

        .fid-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100dvh;
          background: #FFFFFF;
          z-index: 2000;
          display: flex;
          flex-direction: column;
        }
        .fid-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid #F1F5F9;
          flex-shrink: 0;
        }
        .fid-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px 20px 24px;
        }
        .fid-drawer-footer {
          display: flex;
          gap: 10px;
          padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
          border-top: 1px solid #F1F5F9;
          background: #FFFFFF;
          flex-shrink: 0;
        }
'@
$c = $c.Replace($oldCss, $newCss)
Write-Host "Updated CSS." -ForegroundColor Green

# === 3. Replace entire drawer block ===
$newDrawer = @'
      {/* ============ MOBILE DRAWER ============ */}
      {mobileOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fid-drawer"
        >
          {/* Top bar */}
          <div className="fid-drawer-header">
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src="/assets/img/logo/logo_header_opt.png" alt="EazyClassroom" style={{ height: "32px", width: "auto", objectFit: "contain" }} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                width: "40px", height: "40px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#F1F5F9", border: "none", borderRadius: "10px",
                cursor: "pointer", color: "#0F172A", padding: 0,
              }}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="fid-drawer-body">
            {/* Prominent cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", flexDirection: "column", gap: "6px",
                  padding: "14px",
                  background: "#F8FAFC", border: "1px solid #E2E8F0",
                  borderRadius: "12px", textDecoration: "none",
                }}
              >
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="file" size={14} />
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>Pricing</div>
                <div style={{ fontSize: "11px", color: "#64748B" }}>Free tier available</div>
              </Link>
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", flexDirection: "column", gap: "6px",
                  padding: "14px",
                  background: "#0F172A",
                  borderRadius: "12px", textDecoration: "none",
                }}
              >
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="download" size={14} />
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>Download</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>EazyRecorder</div>
              </Link>
            </div>

            {/* Section label */}
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#94A3B8", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px", paddingLeft: "4px" }}>
              Explore
            </div>

            {/* Product */}
            <button
              onClick={() => setMobileSection(mobileSection === "product" ? null : "product")}
              aria-expanded={mobileSection === "product"}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px", fontSize: "16px", fontWeight: 600, color: "#0F172A", background: "transparent", border: "none", borderTop: "1px solid #F1F5F9", cursor: "pointer", fontFamily: "inherit" }}
            >
              Product
              <Icon name="chevron" size={14} style={{ transform: mobileSection === "product" ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#94A3B8" }} />
            </button>
            {mobileSection === "product" && (
              <div style={{ paddingBottom: "12px" }}>
                {PRODUCT_GROUPS.map((group, gi) => (
                  <div key={gi} style={{ marginBottom: "12px" }}>
                    <div style={{ fontSize: "10px", fontWeight: 800, color: "#94A3B8", letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 4px" }}>
                      {group.category}
                    </div>
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                        style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 4px", textDecoration: "none" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(37,99,235,0.08)", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon name={item.icon} size={15} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A" }}>{item.label}</div>
                          <div style={{ fontSize: "11px", color: "#64748B", marginTop: "1px" }}>{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Resources */}
            <button
              onClick={() => setMobileSection(mobileSection === "resources" ? null : "resources")}
              aria-expanded={mobileSection === "resources"}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px", fontSize: "16px", fontWeight: 600, color: "#0F172A", background: "transparent", border: "none", borderTop: "1px solid #F1F5F9", cursor: "pointer", fontFamily: "inherit" }}
            >
              Resources
              <Icon name="chevron" size={14} style={{ transform: mobileSection === "resources" ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#94A3B8" }} />
            </button>
            {mobileSection === "resources" && (
              <div style={{ paddingBottom: "12px" }}>
                {RESOURCES.map((r) => (
                  <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 4px", textDecoration: "none" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(37,99,235,0.08)", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={r.icon} size={15} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A" }}>{r.label}</div>
                      <div style={{ fontSize: "11px", color: "#64748B", marginTop: "1px" }}>{r.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Company */}
            <button
              onClick={() => setMobileSection(mobileSection === "company" ? null : "company")}
              aria-expanded={mobileSection === "company"}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px", fontSize: "16px", fontWeight: 600, color: "#0F172A", background: "transparent", border: "none", borderTop: "1px solid #F1F5F9", borderBottom: "1px solid #F1F5F9", cursor: "pointer", fontFamily: "inherit" }}
            >
              Company
              <Icon name="chevron" size={14} style={{ transform: mobileSection === "company" ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#94A3B8" }} />
            </button>
            {mobileSection === "company" && (
              <div style={{ padding: "8px 0" }}>
                {COMPANY.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 4px", textDecoration: "none" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(37,99,235,0.08)", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={c.icon} size={15} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A" }}>{c.label}</div>
                      <div style={{ fontSize: "11px", color: "#64748B", marginTop: "1px" }}>{c.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sticky footer CTAs */}
          <div className="fid-drawer-footer">
            <Link
              href="https://app.eazyclassroom.net/signin"
              onClick={() => setMobileOpen(false)}
              style={{ flex: 1, display: "block", padding: "14px", textAlign: "center", fontSize: "14px", fontWeight: 600, color: "#0F172A", textDecoration: "none", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px" }}
            >
              Sign In
            </Link>
            <Link
              href="https://app.eazyclassroom.net/signup"
              onClick={() => setMobileOpen(false)}
              style={{ flex: 1.4, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "14px", fontSize: "14px", fontWeight: 600, color: "#FFFFFF", background: "#0F172A", textDecoration: "none", borderRadius: "10px" }}
            >
              Start Free <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      )}
'@

$s = $c.IndexOf('{/* ============ MOBILE DRAWER ============ */}')
$e = $c.LastIndexOf('    </>')
if ($s -gt 0 -and $e -gt $s) {
  $c = $c.Substring(0, $s) + $newDrawer + $c.Substring($e)
  Write-Host "Replaced drawer." -ForegroundColor Green
} else {
  Write-Host "ERROR: drawer markers not found. Reverting." -ForegroundColor Red
  exit 1
}

Set-Content $path $c -Encoding UTF8
Write-Host "DONE" -ForegroundColor Green