# ============================================================
# Campus Kartt - MARK CURRENT VERSION AS STABLE
# Run this AFTER you verify the live site is working perfectly
# ============================================================
# HOW TO RUN:
#   Right-click this file → "Run with PowerShell"
#   OR in terminal: .\SAVE_STABLE.ps1
# ============================================================

Write-Host ""
Write-Host "  CAMPUS KARTT - SAVE STABLE VERSION" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  This will save your CURRENT live website" -ForegroundColor White
Write-Host "  as the new stable (safe) version." -ForegroundColor White
Write-Host ""
Write-Host "  Only run this when the site looks PERFECT." -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "  Is the live site working perfectly? Type YES to save"
if ($confirm -ne "YES") {
    Write-Host ""
    Write-Host "  Cancelled. Stable version unchanged." -ForegroundColor Cyan
    exit
}

Write-Host ""
Write-Host "  Saving current main as stable..." -ForegroundColor Cyan

git fetch origin
git push origin main:stable --force

$date = Get-Date -Format "yyyy-MM-dd HH:mm"
Write-Host ""
Write-Host "  SAVED! Stable checkpoint updated at $date" -ForegroundColor Green
Write-Host ""
Write-Host "  Your safety net is now up to date." -ForegroundColor Green
Write-Host "  If anything breaks in future, run RESTORE_STABLE.ps1" -ForegroundColor DarkGray
Write-Host ""
Read-Host "Press Enter to close"
