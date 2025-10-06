@echo off
REM setup_creativemedia.bat - automates git init, commit, push to GitHub and opens Vercel import page
REM Usage: put this file inside the project folder and double-click it, or run from CMD.
SETLOCAL ENABLEDELAYEDEXPANSION

REM --- CONFIG ---
set REPO_URL=https://github.com/creativeMedia-en/Creative-Media.git
REM --- END CONFIG ---

echo.
echo 1) Initializing git repository...
git init
git add .
git commit -m "Initial commit - Creative Media Final"
git branch -M main
git remote add origin %REPO_URL%

echo.
echo 2) Pushing to GitHub (you may be asked for credentials or token)...
git push -u origin main

echo.
echo 3) Opening Vercel import page in your browser...
start https://vercel.com/new/git/import?repository-url=%REPO_URL%&project-name=creative-media

echo.
echo 4) Next steps (follow in browser):
echo - Add Environment Variables in Vercel dashboard: STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET, PAYPAL_CLIENT_ID, PAYPAL_SECRET, SITE_URL
echo - For telecom/carrier billing, add provider credentials as needed (Paymob / carrier keys).
echo.
echo Done. Press any key to close.
pause >nul
