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
    sourcemap: true, // Enable source maps for better debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunks
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          
          // UI library chunks
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip'
          ],
          
          // Carousel and animation chunks
          carousel: ['embla-carousel-react', 'embla-carousel-autoplay'],
          
          // Form and validation chunks
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Chart and data visualization
          charts: ['recharts'],
          
          // Utility chunks
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority', 'date-fns'],
          
          // Icons (split heavy icon library)
          icons: ['lucide-react'],
          
          // Query and state management
          query: ['@tanstack/react-query']
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId 
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') || 'chunk'
            : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        }
      }
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline smaller assets
    cssCodeSplit: true, // Split CSS for better caching
    target: 'es2020', // Modern JS target for better optimization
    minify: 'esbuild', // Faster minification
  },
  // Performance optimizations
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
      '@radix-ui/react-tooltip'
    ]
  }
}));
