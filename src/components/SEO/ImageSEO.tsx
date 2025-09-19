import { useEffect } from 'react';

interface ImageSEOProps {
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
}

const ImageSEO: React.FC<ImageSEOProps> = ({ images }) => {
  useEffect(() => {
    // Add image meta tags for better SEO
    images.forEach((image, index) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', `og:image:${index}`);
      meta.setAttribute('content', image.src);
      document.head.appendChild(meta);

      if (image.width) {
        const widthMeta = document.createElement('meta');
        widthMeta.setAttribute('property', `og:image:width:${index}`);
        widthMeta.setAttribute('content', image.width.toString());
        document.head.appendChild(widthMeta);
      }

      if (image.height) {
        const heightMeta = document.createElement('meta');
        heightMeta.setAttribute('property', `og:image:height:${index}`);
        heightMeta.setAttribute('content', image.height.toString());
        document.head.appendChild(heightMeta);
      }

      const altMeta = document.createElement('meta');
      altMeta.setAttribute('property', `og:image:alt:${index}`);
      altMeta.setAttribute('content', image.alt);
      document.head.appendChild(altMeta);
    });

    // Cleanup function
    return () => {
      // Remove the meta tags when component unmounts
      const metaTags = document.querySelectorAll('meta[property^="og:image:"]');
      metaTags.forEach(tag => tag.remove());
    };
  }, [images]);

  return null;
};

export default ImageSEO;