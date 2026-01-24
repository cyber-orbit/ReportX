#!/bin/bash

echo "========================================"
echo "  ReportX - Starting Development Server"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  Dependencies not found!"
    echo "Running installation first..."
    echo ""
    ./install.sh
    echo ""
fi

echo "🚀 Starting development server..."
echo "The application will open in your browser at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start
