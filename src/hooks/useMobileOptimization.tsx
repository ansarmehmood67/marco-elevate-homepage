import { useEffect, useState } from 'react';

interface ConnectionInfo {
  effectiveType?: '2g' | '3g' | '4g';
  downlink?: number;
  saveData?: boolean;
}

interface MobileOptimizationConfig {
  shouldLoadVideo: boolean;
  videoQuality: 'low' | 'medium' | 'high';
  shouldPreloadImages: boolean;
  shouldUseAnimations: boolean;
  connectionType: string;
}

/**
 * Mobile-specific performance optimization hook
 * Detects mobile device, connection speed, and adapts loading strategy
 */
export const useMobileOptimization = (): MobileOptimizationConfig => {
  const [isMobile, setIsMobile] = useState(false);
  const [connection, setConnection] = useState<ConnectionInfo>({});
  const [config, setConfig] = useState<MobileOptimizationConfig>({
    shouldLoadVideo: true,
    videoQuality: 'high',
    shouldPreloadImages: true,
    shouldUseAnimations: true,
    connectionType: 'unknown'
  });

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent) || window.innerWidth < 768);
    };

    // Get connection information
    const checkConnection = () => {
      const nav = navigator as any;
      if (nav.connection) {
        setConnection({
          effectiveType: nav.connection.effectiveType,
          downlink: nav.connection.downlink,
          saveData: nav.connection.saveData
        });
      }
    };

    checkMobile();
    checkConnection();

    // Listen for resize events
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Configure optimization based on device and connection
    const newConfig: MobileOptimizationConfig = {
      shouldLoadVideo: true,
      videoQuality: 'high',
      shouldPreloadImages: true,
      shouldUseAnimations: true,
      connectionType: connection.effectiveType || 'unknown'
    };

    if (isMobile) {
      // Mobile-specific optimizations
      if (connection.saveData || connection.effectiveType === '2g') {
        newConfig.shouldLoadVideo = false;
        newConfig.videoQuality = 'low';
        newConfig.shouldPreloadImages = false;
        newConfig.shouldUseAnimations = false;
      } else if (connection.effectiveType === '3g') {
        newConfig.shouldLoadVideo = true;
        newConfig.videoQuality = 'medium';
        newConfig.shouldPreloadImages = false;
        newConfig.shouldUseAnimations = false;
      } else if (connection.effectiveType === '4g' || !connection.effectiveType) {
        newConfig.shouldLoadVideo = true;
        newConfig.videoQuality = 'high';
        newConfig.shouldPreloadImages = true;
        newConfig.shouldUseAnimations = true;
      }

      // Additional mobile restrictions
      if (window.innerWidth < 640) {
        newConfig.shouldUseAnimations = false;
      }
    }

    setConfig(newConfig);
  }, [isMobile, connection]);

  // Add mobile performance optimizations
  useEffect(() => {
    if (isMobile) {
      // Reduce animation frame rate on mobile
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          * {
            animation-duration: 0.2s !important;
            transition-duration: 0.2s !important;
          }
          
          .animate-pulse {
            animation-duration: 1s !important;
          }
          
          /* Disable expensive CSS effects on mobile */
          .backdrop-blur-xl,
          .backdrop-blur-lg,
          .backdrop-blur-md {
            backdrop-filter: none !important;
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
          
          /* Simplify gradients on mobile */
          .bg-gradient-to-r,
          .bg-gradient-to-br,
          .bg-gradient-to-t {
            background: var(--primary) !important;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isMobile]);

  return config;
};