// Async font loader to prevent render-blocking
export const loadMailerLiteFonts = () => {
  // Only load if MailerLite form is used and fonts aren't already loaded
  if (document.querySelector('[data-ml-fonts-loaded]')) return;
  
  const loadCSS = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print'; // Load without blocking render
    link.onload = () => {
      link.media = 'all'; // Apply styles after load
    };
    document.head.appendChild(link);
  };
  
  // Load MailerLite font CSS asynchronously
  loadCSS('https://assets.mlcdn.com/fonts.css?version=1756813');
  
  // Mark as loaded to prevent duplicate loading
  document.documentElement.setAttribute('data-ml-fonts-loaded', 'true');
};

// Auto-load fonts when page is idle or after delay
if (typeof window !== 'undefined') {
  const loadFonts = () => {
    // Only load if MailerLite components are present
    if (document.querySelector('.ml-form-embedContainer')) {
      loadMailerLiteFonts();
    }
  };
  
  // Use requestIdleCallback if available, otherwise setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadFonts, { timeout: 2000 });
  } else {
    setTimeout(loadFonts, 1000);
  }
}