// Web Vitals Reporting Utilities

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

/**
 * Report web vitals to analytics (production only)
 */
export const reportWebVitals = (metric: WebVitalMetric) => {
  if (process.env.NODE_ENV !== 'production') return;

  // Example: Send to Google Analytics 4
  if ('gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: { metric_rating: metric.rating }
    });
  }

  // Example: Send to your analytics service
  // fetch('/api/analytics/web-vitals', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(metric)
  // });
};

/**
 * Initialize web vitals tracking
 */
export const initWebVitalsTracking = async () => {
  if (typeof window === 'undefined') return;

  try {
    const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');
    
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  } catch (error) {
    console.warn('Web Vitals library not available:', error);
  }
};