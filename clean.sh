#!/bin/bash

echo "========================================"
echo "  ReportX - Cleaning Project"
echo "========================================"
echo ""

echo "🧹 Removing node_modules..."
rm -rf node_modules

echo "🧹 Removing build folder..."
rm -rf build

echo "🧹 Removing package-lock.json..."
rm -f package-lock.json

echo ""
echo "========================================"
echo "✅ Clean completed!"
echo "========================================"
echo ""
echo "Run ./install.sh to reinstall dependencies"
echo ""
