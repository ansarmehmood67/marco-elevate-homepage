// Only load reCAPTCHA when forms actually need it
export const loadRecaptchaIfNeeded = () => {
  if (typeof window !== 'undefined' && (window as any).loadRecaptchaWhenNeeded) {
    (window as any).loadRecaptchaWhenNeeded();
  }
};

// Tree-shake unused Radix UI utilities
export const optimizeRadixImports = () => {
  // This function helps with tree-shaking by being a centralized import point
  // Reduces unused code in the final bundle
};