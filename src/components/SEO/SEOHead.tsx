import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogType?: string;
  twitterCard?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  lang?: string;
}

interface SEOHeadProps {
  data: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ data }) => {
  const defaultOgImage = 'https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758146400/og-image-default.jpg';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="robots" content={data.noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Language and hreflang */}
      <html lang={data.lang || 'it-IT'} />
      <link rel="alternate" hrefLang="it-IT" href={data.canonical} />
      <link rel="alternate" hrefLang="x-default" href={data.canonical} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={data.canonical} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={data.ogTitle || data.title} />
      <meta property="og:description" content={data.ogDescription || data.description} />
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:image" content={data.ogImage || defaultOgImage} />
      <meta property="og:image:width" content={data.ogImageWidth || '1200'} />
      <meta property="og:image:height" content={data.ogImageHeight || '630'} />
      <meta property="og:url" content={data.canonical} />
      <meta property="og:site_name" content="Marco Business Consulting" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={data.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={data.ogTitle || data.title} />
      <meta name="twitter:description" content={data.ogDescription || data.description} />
      <meta name="twitter:image" content={data.twitterImage || data.ogImage || defaultOgImage} />
      
      {/* Structured Data */}
      {data.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(data.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;