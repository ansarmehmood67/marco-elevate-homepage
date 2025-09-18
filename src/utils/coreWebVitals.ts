// Core Web Vitals Optimization Utilities

/**
 * Optimize Largest Contentful Paint (LCP)
 */
export const optimizeLCP = () => {
  if (typeof window === 'undefined') return;

  // Preload LCP candidates
  const preloadLCPCandidates = () => {
    const lcpCandidates = [
      // Hero section images
      'https://res.cloudinary.com/dc1zzgsjw/image/upload/f_auto,q_auto,w_800/v1758145901/sales_3_baw70d.png',
      // Hero background videos
      'https://res.cloudinary.com/dsergeqc9/image/upload/f_auto,q_auto,w_1200/v1758129785/homepage_background_poster.jpg'
    ];

    lcpCandidates.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  };

  // Optimize font loading for LCP
  const optimizeFontLoading = () => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    fontLink.as = 'style';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Add font-display: swap to existing font styles
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  };

  preloadLCPCandidates();
  optimizeFontLoading();
};

/**
 * Optimize Cumulative Layout Shift (CLS)
 */
export const optimizeCLS = () => {
  if (typeof window === 'undefined') return;

  // Reserve space for images before they load
  const reserveImageSpace = () => {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach((img: Element) => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.style.aspectRatio && !imgElement.width && !imgElement.height) {
        // Set default aspect ratio to prevent layout shift
        imgElement.style.aspectRatio = '16/9';
        imgElement.style.width = '100%';
        imgElement.style.height = 'auto';
      }
    });
  };

  // Ensure video elements have proper dimensions
  const reserveVideoSpace = () => {
    const videos = document.querySelectorAll('video:not([width]):not([height])');
    videos.forEach((video: Element) => {
      const videoElement = video as HTMLVideoElement;
      if (!videoElement.style.aspectRatio) {
        videoElement.style.aspectRatio = '16/9';
        videoElement.style.width = '100%';
        videoElement.style.height = 'auto';
      }
    });
  };

  // Run immediately and after DOM changes
  reserveImageSpace();
  reserveVideoSpace();

  // Observe for new images and videos
  const observer = new MutationObserver(() => {
    reserveImageSpace();
    reserveVideoSpace();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

/**
 * Optimize Total Blocking Time (TBT) and Input Delay
 */
export const optimizeTBT = () => {
  if (typeof window === 'undefined') return;

  // Defer non-critical scripts
  const deferNonCriticalScripts = () => {
    const scripts = document.querySelectorAll('script[data-defer="true"]');
    scripts.forEach(script => {
      script.setAttribute('defer', 'true');
    });
  };

  // Break up long tasks using scheduler API if available
  const scheduleWork = (callback: () => void) => {
    if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
      (window as any).scheduler.postTask(callback, { priority: 'background' });
    } else if ('requestIdleCallback' in window) {
      requestIdleCallback(callback);
    } else {
      setTimeout(callback, 0);
    }
  };

  deferNonCriticalScripts();
  
  return { scheduleWork };
};

/**
 * Initialize all Core Web Vitals optimizations
 */
export const initializeCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Run optimizations in order of priority
  optimizeLCP();
  optimizeCLS();
  const { scheduleWork } = optimizeTBT();

  // Schedule non-critical optimizations
  scheduleWork(() => {
    // Additional background optimizations can go here
    console.log('Core Web Vitals optimizations initialized');
  });
};