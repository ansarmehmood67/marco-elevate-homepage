import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'testimonial' | 'hero';
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type = 'card', 
  className = '' 
}) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`space-y-4 ${className}`}>
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-12 w-32" />
        </div>
      );
      
    case 'testimonial':
      return (
        <div className={`space-y-4 ${className}`}>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4 rounded-full" />
            ))}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      );
      
    case 'card':
      return (
        <div className={`space-y-4 p-4 ${className}`}>
          <Skeleton className="h-32 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      );
      
    case 'image':
      return (
        <Skeleton className={`aspect-video w-full rounded-lg ${className}`} />
      );
      
    case 'text':
      return (
        <div className={`space-y-2 ${className}`}>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      );
      
    default:
      return <Skeleton className={`h-20 w-full ${className}`} />;
  }
};

export default SkeletonLoader;