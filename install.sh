#!/bin/bash

echo "========================================"
echo "  ReportX - Installation Script"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "✅ Installation completed successfully!"
    echo "========================================"
    echo ""
    echo "To start the application, run:"
    echo "  ./start.sh (or npm start)"
    echo ""
else
    echo ""
    echo "========================================"
    echo "❌ Installation failed!"
    echo "========================================"
    exit 1
fi
