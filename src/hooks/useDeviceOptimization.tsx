import { useState, useEffect } from 'react';

interface DeviceOptimization {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  connectionType: string;
  isSlowConnection: boolean;
  shouldReduceAnimations: boolean;
  shouldOptimizeImages: boolean;
  shouldLazyLoad: boolean;
}

export const useDeviceOptimization = (): DeviceOptimization => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceOptimization>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEndDevice: false,
    prefersReducedMotion: false,
    connectionType: '4g',
    isSlowConnection: false,
    shouldReduceAnimations: false,
    shouldOptimizeImages: false,
    shouldLazyLoad: false,
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      // Screen size detection
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      const isTablet = screenWidth >= 768 && screenWidth < 1024;
      const isDesktop = screenWidth >= 1024;

      // Device performance detection
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const isLowEndDevice = hardwareConcurrency <= 2;

      // Motion preference detection
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Connection detection
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const connectionType = connection?.effectiveType || '4g';
      const isSlowConnection = ['slow-2g', '2g', '3g'].includes(connectionType) || connection?.downlink < 1.5;

      // Optimization decisions
      const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice || isSlowConnection;
      const shouldOptimizeImages = isMobile || isSlowConnection || isLowEndDevice;
      const shouldLazyLoad = isMobile || isSlowConnection;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEndDevice,
        prefersReducedMotion,
        connectionType,
        isSlowConnection,
        shouldReduceAnimations,
        shouldOptimizeImages,
        shouldLazyLoad,
      });
    };

    updateDeviceInfo();

    // Listen for changes
    window.addEventListener('resize', updateDeviceInfo);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateDeviceInfo);

    // Listen for connection changes
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      connection.addEventListener('change', updateDeviceInfo);
    }

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      mediaQuery.removeEventListener('change', updateDeviceInfo);
      if (connection) {
        connection.removeEventListener('change', updateDeviceInfo);
      }
    };
  }, []);

  return deviceInfo;
};

// Hook for conditional rendering based on device capabilities
export const useConditionalRendering = () => {
  const device = useDeviceOptimization();

  return {
    ...device,
    renderHeavyAnimations: !device.shouldReduceAnimations,
    renderHighQualityImages: !device.shouldOptimizeImages,
    renderVideoBackgrounds: device.isDesktop && !device.isSlowConnection,
    renderCarouselAutoplay: !device.shouldReduceAnimations,
    renderParticleEffects: device.isDesktop && !device.isLowEndDevice && !device.prefersReducedMotion,
  };
};