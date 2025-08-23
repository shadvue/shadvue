#!/bin/bash

# Cloudflare Pages Build Script for VitePress
set -e

echo "🚀 Starting Cloudflare Pages build for shadcn-vue..."

# Print Node.js and npm versions
echo "📋 Environment Info:"
node --version
npm --version
pnpm --version || echo "pnpm not available, installing..."

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

# Set environment variables
export VITE_APP_ENV=production

# Install dependencies (force include devDependencies for build tools)
echo "📦 Installing dependencies with devDependencies..."
NODE_ENV=development pnpm install --ignore-scripts --prod=false

# Build registry (if needed)
echo "🔧 Building registry..."
pnpm run build:registry || echo "Registry build failed, continuing..."

# Fallback: mirror src/registry to registry for code snippet includes (<<< @/registry/...)
if [ -d "src/registry" ]; then
  echo "📁 Preparing registry mirror for code snippets..."
  rm -rf registry
  cp -R src/registry registry || true
fi

# Type check
echo "🔍 Type checking..."
pnpm run typecheck || echo "Type check failed, continuing with build..."

# Build VitePress site
echo "🏗️ Building VitePress site..."
pnpm run build

# Verify build output
if [ -d ".vitepress/dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output directory: .vitepress/dist"
    ls -la .vitepress/dist/
else
    echo "❌ Build failed - output directory not found"
    exit 1
fi

echo "🎉 Cloudflare Pages build completed!"