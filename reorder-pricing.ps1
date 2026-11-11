$path = 'src\app\pricing\page.tsx'
$c = Get-Content $path -Raw

if ($c.Contains('pricing-page')) {
  Write-Host "Already patched. Skipping." -ForegroundColor Yellow
  exit
}

$oldMain = '<main style={{ background: "#FFFFFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>'
if (-not $c.Contains($oldMain)) {
  Write-Host "ERROR: <main> tag not found. Nothing changed." -ForegroundColor Red
  exit 1
}

$newMain = '<main className="pricing-page" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>'

$styleBlock = @'
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 991px) {
            .pricing-page > section:nth-of-type(1) { order: 1; }
            .pricing-page > section:nth-of-type(2) { order: 3; }
            .pricing-page > section:nth-of-type(3) { order: 2; }
            .pricing-page > section:nth-of-type(4) { order: 4; }
            .pricing-page > section:nth-of-type(5) { order: 5; }
          }
        ` }} />
'@

$c = $c.Replace($oldMain, $newMain + [Environment]::NewLine + $styleBlock)
Set-Content $path $c -Encoding UTF8
Write-Host "OK - mobile reorder applied" -ForegroundColor Green