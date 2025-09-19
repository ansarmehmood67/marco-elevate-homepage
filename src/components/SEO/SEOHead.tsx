import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

interface SEOHeadProps {
  data: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ data }) => {
  useEffect(() => {
    // Update document title
    document.title = data.title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', data.description);
    if (data.keywords) updateMeta('keywords', data.keywords);
    
    // Open Graph tags
    updateMeta('og:title', data.ogTitle || data.title);
    updateMeta('og:description', data.ogDescription || data.description);
    updateMeta('og:type', data.ogType || 'website');
    updateMeta('og:image', data.ogImage || 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg');
    updateMeta('og:url', window.location.href);
    updateMeta('og:site_name', 'Marco Business Consulting');

    // Twitter Card tags
    updateMeta('twitter:card', data.twitterCard || 'summary_large_image');
    updateMeta('twitter:title', data.ogTitle || data.title);
    updateMeta('twitter:description', data.ogDescription || data.description);
    updateMeta('twitter:image', data.twitterImage || data.ogImage || 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonical || window.location.href);

    // Robots meta
    if (data.noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      let robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    // Structured Data
    if (data.structuredData) {
      let script = document.querySelector('#structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'structured-data');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data.structuredData);
    }

  }, [data]);

  return null;
};

export default SEOHead;