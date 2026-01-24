@echo off
echo ========================================
echo   ReportX - Starting Development Server
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

echo Starting development server...
echo The application will open in your browser at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start
