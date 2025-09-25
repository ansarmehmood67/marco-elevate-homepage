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
    if (typeof document === 'undefined' || !document.head) return;
    
    const createdElements: HTMLMetaElement[] = [];

    try {
      images.forEach((image, index) => {
        const baseProperty = `og:image${index > 0 ? `:${index}` : ''}`;
        
        // Avoid duplicates
        if (!document.querySelector(`meta[property="${baseProperty}"]`)) {
          const meta = document.createElement('meta');
          meta.setAttribute('property', baseProperty);
          meta.setAttribute('content', image.src);
          document.head.appendChild(meta);
          createdElements.push(meta);

          if (image.width) {
            const widthMeta = document.createElement('meta');
            widthMeta.setAttribute('property', `${baseProperty}:width`);
            widthMeta.setAttribute('content', image.width.toString());
            document.head.appendChild(widthMeta);
            createdElements.push(widthMeta);
          }

          if (image.height) {
            const heightMeta = document.createElement('meta');
            heightMeta.setAttribute('property', `${baseProperty}:height`);
            heightMeta.setAttribute('content', image.height.toString());
            document.head.appendChild(heightMeta);
            createdElements.push(heightMeta);
          }

          const altMeta = document.createElement('meta');
          altMeta.setAttribute('property', `${baseProperty}:alt`);
          altMeta.setAttribute('content', image.alt);
          document.head.appendChild(altMeta);
          createdElements.push(altMeta);
        }
      });
    } catch (error) {
      console.warn('Failed to add image SEO tags:', error);
    }

    // Cleanup function
    return () => {
      createdElements.forEach(element => {
        try {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        } catch (error) {
          console.warn('Failed to cleanup meta tag:', error);
        }
      });
    };
  }, [images]);

  return null;
};

export default ImageSEO;