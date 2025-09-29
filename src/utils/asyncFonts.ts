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
      // Add font-display: swap overrides after MailerLite CSS loads
      addFontDisplayOverrides();
    };
    document.head.appendChild(link);
  };
  
  // Add CSS overrides for font-display: swap
  const addFontDisplayOverrides = () => {
    if (document.querySelector('[data-ml-font-display-fixed]')) return;
    
    const style = document.createElement('style');
    style.textContent = `
      /* Override MailerLite fonts to use font-display: swap for better performance */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.mailerlite.com/fonts/s/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.mailerlite.com/fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a7du3mhPy0.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://fonts.mailerlite.com/fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtuXOmHS91iw.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
    document.documentElement.setAttribute('data-ml-font-display-fixed', 'true');
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