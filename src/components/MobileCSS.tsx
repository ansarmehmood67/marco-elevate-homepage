import { useEffect } from 'react';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

/**
 * Component to inject mobile-specific CSS optimizations
 * Reduces animation overhead and simplifies expensive CSS effects on mobile
 */
const MobileCSS = () => {
  const config = useMobileOptimization();

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'mobile-optimizations';
    
    let cssContent = '';

    // Base mobile optimizations
    cssContent += `
      @media (max-width: 768px) {
        /* Reduce animation complexity on mobile */
        * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
        
        /* Keep essential animations at normal speed */
        .animate-pulse,
        .animate-spin {
          animation-duration: 1s !important;
        }
        
        /* Simplify text sizing for better performance */
        .text-7xl { font-size: 3rem !important; }
        .text-6xl { font-size: 2.5rem !important; }
        .text-5xl { font-size: 2rem !important; }
        .text-4xl { font-size: 1.75rem !important; }
        
        /* Optimize layout calculations */
        .min-h-screen { min-height: 100vh !important; }
        .min-h-\\[85vh\\] { min-height: 85vh !important; }
        .min-h-\\[90vh\\] { min-height: 90vh !important; }
      }
    `;

    // Connection-based optimizations
    if (config.connectionType === '2g' || config.connectionType === '3g') {
      cssContent += `
        @media (max-width: 768px) {
          /* Disable all backdrop filters on slow connections */
          .backdrop-blur-xl,
          .backdrop-blur-lg,
          .backdrop-blur-md,
          .backdrop-blur-sm {
            backdrop-filter: none !important;
            background-color: rgba(0, 0, 0, 0.7) !important;
          }
          
          /* Simplify gradients to solid colors */
          .bg-gradient-to-r,
          .bg-gradient-to-br,
          .bg-gradient-to-t,
          .bg-gradient-to-b {
            background: hsl(var(--primary)) !important;
          }
          
          /* Remove shadows for better performance */
          .shadow-xl,
          .shadow-2xl,
          .shadow-lg {
            box-shadow: none !important;
          }
          
          /* Disable transform animations */
          .hover\\:scale-105:hover,
          .hover\\:scale-110:hover {
            transform: none !important;
          }
        }
      `;
    }

    // Disable animations completely on very slow connections
    if (!config.shouldUseAnimations) {
      cssContent += `
        @media (max-width: 768px) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
          
          .animate-ping,
          .animate-pulse,
          .animate-spin {
            animation: none !important;
          }
        }
      `;
    }

    style.textContent = cssContent;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('mobile-optimizations');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [config]);

  return null;
};

export default MobileCSS;