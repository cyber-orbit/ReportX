@echo off
echo ========================================
echo   ReportX - Cleaning Project
echo ========================================
echo.

echo Removing node_modules...
if exist "node_modules\" (
    rmdir /s /q node_modules
    echo √ node_modules removed
) else (
    echo - node_modules not found
)

echo Removing build folder...
if exist "build\" (
    rmdir /s /q build
    echo √ build folder removed
) else (
    echo - build folder not found
)

echo Removing package-lock.json...
if exist "package-lock.json" (
    del /f /q package-lock.json
    echo √ package-lock.json removed
) else (
    echo - package-lock.json not found
)

echo.
echo ========================================
echo √ Clean completed!
echo ========================================
echo.
echo Run install.bat to reinstall dependencies
echo.

pause
