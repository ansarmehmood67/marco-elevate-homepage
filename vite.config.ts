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
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable source maps in production for better performance
    sourcemap: mode === 'development',
    
    // Modern build target for better optimization
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
    
    rollupOptions: {
      output: {
        // Advanced code splitting for optimal caching
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            
            // UI components
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            
            // Animation and carousel libraries
            if (id.includes('embla-carousel') || id.includes('framer-motion')) {
              return 'animations';
            }
            
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
              return 'forms';
            }
            
            // Charts and data visualization
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts';
            }
            
            // Utilities
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority') || id.includes('date-fns')) {
              return 'utils';
            }
            
            // Icons
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            
            // Query and state management
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            
            // Other vendor libraries
            return 'vendor';
          }
          
          // App chunks by route/feature
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0].replace('.tsx', '');
            return `page-${pageName}`;
          }
          
          // Component chunks
          if (id.includes('/components/')) {
            return 'components';
          }
        },
        
        // Optimize chunk and asset naming for better caching
        chunkFileNames: (chunkInfo) => {
          return `assets/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') ?? [];
          const extType = info[info.length - 1];
          
          // CSS files
          if (/css/.test(extType)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          
          // Image files
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          
          // Font files
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          // Other assets
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    
    // Advanced asset optimization
    assetsInlineLimit: 2048, // Inline smaller assets (2KB)
    cssCodeSplit: true, // Split CSS per component for better caching
    minify: 'esbuild', // Fast and efficient minification
    
    // Compression and tree-shaking
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000, // Warn for chunks over 1MB
  },
  
  // Enhanced performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-accordion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'embla-carousel-react',
      'lucide-react'
    ],
    // Exclude heavy dependencies from pre-bundling
    exclude: ['@tanstack/react-query-devtools']
  },
  
  // Modern browser features
  esbuild: {
    // Remove console logs and debugger in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  }
}));
