# ============================================================
# Campus Kartt - ONE CLICK RESTORE TO STABLE VERSION
# Run this script if you ever break the live website
# ============================================================
# HOW TO RUN:
#   Right-click this file → "Run with PowerShell"
#   OR in terminal: .\RESTORE_STABLE.ps1
# ============================================================

Write-Host ""
Write-Host "  CAMPUS KARTT - RESTORE TO STABLE" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  This will restore your website to the last" -ForegroundColor White
Write-Host "  known WORKING version (stable branch)." -ForegroundColor White
Write-Host ""

$confirm = Read-Host "  Are you sure? Type YES to continue"
if ($confirm -ne "YES") {
    Write-Host ""
    Write-Host "  Cancelled. No changes made." -ForegroundColor Green
    exit
}

Write-Host ""
Write-Host "  Restoring from stable branch..." -ForegroundColor Cyan

# Restore all files from stable branch onto main
git fetch origin
git checkout origin/stable -- .
git add .
git commit -m "restore: emergency rollback to stable version"
git push origin main

Write-Host ""
Write-Host "  SUCCESS! Your website is being restored." -ForegroundColor Green
Write-Host "  Vercel will redeploy in ~30 seconds." -ForegroundColor Green
Write-Host ""
Write-Host "  Live site: https://ecoxchange-rho.vercel.app" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to close"
