import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Advanced code splitting for optimal caching
        manualChunks: (id) => {
          if (!id.includes('node_modules')) {
            return;
          }

          // React core and router bits
          if (/node_modules\/(react(?:-dom)?|scheduler|react-router(?:-dom)?)/.test(id)) {
            return 'react-vendor';
          }

          // Radix UI components - split by component type
          if (id.includes('node_modules/@radix-ui/react-dialog') || 
              id.includes('node_modules/@radix-ui/react-dropdown') ||
              id.includes('node_modules/@radix-ui/react-popover')) {
            return 'radix-dialogs';
          }

          if (id.includes('node_modules/@radix-ui/')) {
            return 'ui-vendor';
          }

          // Icon packs
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }

          // Form handling
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/@hookform/') || id.includes('node_modules/zod')) {
            return 'form-vendor';
          }

          // Animation and motion
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'animation';
          }

          // Charts and data viz
          if (id.includes('node_modules/recharts') || id.includes('node_modules/d3')) {
            return 'charts';
          }

          // Utilities
          if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge') || id.includes('node_modules/class-variance-authority')) {
            return 'utils';
          }

          // Query and state management
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'query';
          }

          // Theme handling
          if (id.includes('node_modules/next-themes')) {
            return 'theme';
          }

          // Fallback to Rollup defaults for everything else to avoid circular chunk graphs
          return undefined;
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        }
      }
    },
    // Optimized build settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info', 'console.debug', 'console.trace'] : [],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    sourcemap: mode === 'development',
    reportCompressedSize: false,
    target: 'es2020',
    cssMinify: true,
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable module preloading
    modulePreload: {
      polyfill: true,
    },
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['@splinetool/react-spline']
  },
  // Enable esbuild optimizations
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
  },
}));
