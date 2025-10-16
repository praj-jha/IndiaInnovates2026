#!/bin/bash

# Performance testing and optimization script for CRACKTHRU

echo "🚀 CRACKTHRU Performance Optimization Suite"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "Starting performance optimization..."

# 1. Optimize images
print_status "Step 1: Optimizing images..."
if [ -f "scripts/optimize-images.js" ]; then
    node scripts/optimize-images.js
    if [ $? -eq 0 ]; then
        print_success "Images optimized successfully"
    else
        print_warning "Image optimization failed"
    fi
else
    print_warning "Image optimization script not found"
fi

# 2. Install dependencies if needed
print_status "Step 2: Checking dependencies..."
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# 3. Build the project
print_status "Step 3: Building optimized bundle..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
    
    # Analyze bundle size
    print_status "Bundle analysis:"
    if [ -d "dist/assets" ]; then
        echo "JavaScript bundles:"
        find dist/assets -name "*.js" -exec ls -lh {} \; | awk '{print $9 ": " $5}'
        echo ""
        echo "CSS bundles:"
        find dist/assets -name "*.css" -exec ls -lh {} \; | awk '{print $9 ": " $5}'
        echo ""
        
        # Calculate total size
        total_size=$(find dist -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec cat {} \; | wc -c)
        total_size_kb=$((total_size / 1024))
        echo "Total bundle size: ${total_size_kb}KB"
        
        if [ $total_size_kb -lt 1000 ]; then
            print_success "Bundle size is optimal (< 1MB)"
        elif [ $total_size_kb -lt 2000 ]; then
            print_warning "Bundle size is moderate (1-2MB)"
        else
            print_error "Bundle size is large (> 2MB) - consider code splitting"
        fi
    fi
else
    print_error "Build failed"
    exit 1
fi

# 4. Check for optimized images
print_status "Step 4: Verifying optimized images..."
if [ -d "public/optimized" ]; then
    optimized_count=$(find public/optimized -name "*.webp" | wc -l)
    print_success "Found ${optimized_count} optimized WebP images"
    
    # Show size comparison
    echo ""
    echo "Image optimization results:"
    echo "Original images:"
    find public -maxdepth 1 \( -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" \) -exec ls -lh {} \; | head -5 | awk '{print $9 ": " $5}'
    echo ""
    echo "Optimized images:"
    find public/optimized -name "*.webp" -exec ls -lh {} \; | head -5 | awk '{print $9 ": " $5}'
else
    print_warning "No optimized images found in public/optimized"
fi

# 5. Performance recommendations
print_status "Step 5: Performance recommendations..."
echo ""
echo "✅ Implemented optimizations:"
echo "   • Image optimization with WebP format"
echo "   • Lazy loading for images and components"
echo "   • Code splitting for better caching"
echo "   • Bundle optimization with Vite"
echo "   • Responsive image loading"
echo "   • Hardware acceleration for animations"
echo ""
echo "🔧 Next steps for further optimization:"
echo "   • Run Lighthouse audit: lighthouse http://localhost:8081"
echo "   • Test on mobile devices"
echo "   • Monitor Core Web Vitals in production"
echo "   • Consider implementing CDN for static assets"
echo ""

# 6. Start development server with performance monitoring
print_status "Step 6: Starting development server..."
print_success "Performance optimization complete!"
echo ""
echo "🌐 Starting development server on http://localhost:8081"
echo "📊 Performance monitoring is active in development mode"
echo "🔍 Check browser console for performance metrics"
echo ""
print_warning "Press Ctrl+C to stop the server"

# Start the dev server
npm run dev
