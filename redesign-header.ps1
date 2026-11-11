$path = 'src\layout\headers\HeaderFour.tsx'
$c = Get-Content $path -Raw -Encoding UTF8

if ($c.Contains('fid-mobile-cta')) {
  Write-Host "Already patched - nothing changed." -ForegroundColor Yellow
  exit 0
}

# ---- 1. Replace hamburger block (adds mobile CTA, drops auto margin on hamburger) ----
$old1 = @'
          {/* Mobile toggle */}
          <button
            className="fid-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "#0F172A",
              marginLeft: "auto",
            }}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
'@

$new1 = @'
          {/* Mobile CTA */}
          <Link
            href="https://app.eazyclassroom.net/signup"
            className="fid-mobile-cta"
            style={{
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#0F172A",
              textDecoration: "none",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              flexShrink: 0,
              marginLeft: "auto",
            }}
          >
            Start Free <Icon name="arrow" size={12} />
          </Link>

          {/* Mobile toggle */}
          <button
            className="fid-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "#0F172A",
            }}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
'@

if (-not $c.Contains($old1)) {
  Write-Host "ERROR: hamburger block not found. Nothing changed." -ForegroundColor Red
  exit 1
}
$c = $c.Replace($old1, $new1)

# ---- 2. Add new CSS rules ----
$old2 = @'
        body { overflow-x: hidden; }
      `}</style>
'@

$new2 = @'
        body { overflow-x: hidden; }

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
      `}</style>
'@

if (-not $c.Contains($old2)) {
  Write-Host "ERROR: style block not found. Reverting." -ForegroundColor Red
  $c = $c.Replace($new1, $old1)
  Set-Content $path $c -Encoding UTF8
  exit 1
}
$c = $c.Replace($old2, $new2)

Set-Content $path $c -Encoding UTF8
Write-Host "OK - mobile header redesigned" -ForegroundColor Green