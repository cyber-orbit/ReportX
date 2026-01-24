@echo off
echo ========================================
echo   ReportX - Installation Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo √ Node.js is installed
node -v
echo √ npm is installed
npm -v
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo √ Installation completed successfully!
    echo ========================================
    echo.
    echo To start the application, run:
    echo   start.bat (or npm start)
    echo.
) else (
    echo.
    echo ========================================
    echo X Installation failed!
    echo ========================================
)

pause
