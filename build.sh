#!/bin/bash

echo "========================================"
echo "  ReportX - Building for Production"
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

echo "🔨 Building production bundle..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "✅ Build completed successfully!"
    echo "========================================"
    echo ""
    echo "Production files are in the 'build' folder"
    echo ""
else
    echo ""
    echo "========================================"
    echo "❌ Build failed!"
    echo "========================================"
    exit 1
fi
