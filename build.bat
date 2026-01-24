@echo off
echo ========================================
echo   ReportX - Building for Production
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Warning: Dependencies not found!
    echo Running installation first...
    echo.
    call install.bat
    echo.
)

echo Building production bundle...
call npm run build

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo √ Build completed successfully!
    echo ========================================
    echo.
    echo Production files are in the 'build' folder
    echo.
) else (
    echo.
    echo ========================================
    echo X Build failed!
    echo ========================================
)

pause
