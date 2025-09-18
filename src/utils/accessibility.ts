// Accessibility Utilities

/**
 * Generate proper heading hierarchy
 */
export const validateHeadingHierarchy = (container: HTMLElement = document.body): string[] => {
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const errors: string[] = [];
  let lastLevel = 0;

  headings.forEach((heading, index) => {
    const currentLevel = parseInt(heading.tagName.charAt(1));
    
    if (index === 0 && currentLevel !== 1) {
      errors.push(`First heading should be H1, found ${heading.tagName}`);
    } else if (currentLevel > lastLevel + 1) {
      errors.push(`Heading level jumps from H${lastLevel} to H${currentLevel} at "${heading.textContent?.slice(0, 50)}..."`);
    }
    
    lastLevel = currentLevel;
  });

  return errors;
};

/**
 * Add proper ARIA labels to interactive elements
 */
export const enhanceAccessibility = (container: HTMLElement = document.body) => {
  // Add missing ARIA labels to buttons without text
  const buttonsMissingLabels = container.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
  buttonsMissingLabels.forEach((button: Element) => {
    const buttonElement = button as HTMLButtonElement;
    const icon = buttonElement.querySelector('svg');
    const text = buttonElement.textContent?.trim();
    
    if (!text && icon) {
      // Try to infer label from icon or context
      const classes = icon.className || '';
      if (classes.includes('play')) {
        buttonElement.setAttribute('aria-label', 'Play video');
      } else if (classes.includes('close') || classes.includes('x')) {
        buttonElement.setAttribute('aria-label', 'Close');
      } else if (classes.includes('menu')) {
        buttonElement.setAttribute('aria-label', 'Open menu');
      } else {
        buttonElement.setAttribute('aria-label', 'Interactive button');
      }
    }
  });

  // Add ARIA labels to links without discernible text
  const linksMissingLabels = container.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
  linksMissingLabels.forEach((link: Element) => {
    const linkElement = link as HTMLAnchorElement;
    const text = linkElement.textContent?.trim();
    const icon = linkElement.querySelector('svg');
    
    if (!text && icon) {
      const href = linkElement.getAttribute('href') || '';
      if (href.includes('youtube.com') || href.includes('youtu.be')) {
        linkElement.setAttribute('aria-label', 'Watch video on YouTube');
      } else if (href.includes('tel:')) {
        linkElement.setAttribute('aria-label', 'Call phone number');
      } else if (href.includes('mailto:')) {
        linkElement.setAttribute('aria-label', 'Send email');
      } else {
        linkElement.setAttribute('aria-label', 'External link');
      }
    }
  });

  // Ensure form inputs have proper labels
  const inputsMissingLabels = container.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputsMissingLabels.forEach((input: Element) => {
    const inputElement = input as HTMLInputElement;
    const placeholder = inputElement.getAttribute('placeholder');
    const type = inputElement.getAttribute('type');
    
    if (placeholder) {
      inputElement.setAttribute('aria-label', placeholder);
    } else if (type) {
      inputElement.setAttribute('aria-label', `${type} input`);
    }
  });
};

/**
 * Improve color contrast for better accessibility
 */
export const checkColorContrast = (element: HTMLElement): boolean => {
  const styles = getComputedStyle(element);
  const backgroundColor = styles.backgroundColor;
  const color = styles.color;
  
  // Basic contrast check (simplified)
  if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
    return true; // Skip transparent backgrounds
  }
  
  // This is a simplified check - in production you'd use a proper contrast ratio calculator
  const isLightBackground = backgroundColor.includes('white') || backgroundColor.includes('255');
  const isLightText = color.includes('white') || color.includes('255');
  
  return isLightBackground !== isLightText;
};

/**
 * Add skip links for keyboard navigation
 */
export const addSkipLinks = () => {
  if (document.querySelector('.skip-link')) return; // Already exists

  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link absolute top-0 left-0 bg-primary text-white px-4 py-2 rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform z-50';
  skipLink.textContent = 'Skip to main content';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Ensure main content has the ID
  let mainContent = document.querySelector('#main-content');
  if (!mainContent) {
    mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      mainContent.id = 'main-content';
    }
  }
};

/**
 * Initialize all accessibility enhancements
 */
export const initializeAccessibility = () => {
  if (typeof window === 'undefined') return;

  // Run on DOM content loaded
  const runAccessibilityEnhancements = () => {
    enhanceAccessibility();
    addSkipLinks();
    
    // Check heading hierarchy in development
    if (process.env.NODE_ENV === 'development') {
      const headingErrors = validateHeadingHierarchy();
      if (headingErrors.length > 0) {
        console.warn('Heading hierarchy issues found:', headingErrors);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAccessibilityEnhancements);
  } else {
    runAccessibilityEnhancements();
  }

  // Re-run when new content is added
  const observer = new MutationObserver(() => {
    enhanceAccessibility();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};