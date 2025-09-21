import React, { Suspense, useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface LazyRouteProps {
  children: React.ReactNode;
}

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-lg">Loading page...</p>
    </div>
  </div>
);

const TimeoutError = ({ onRetry }: { onRetry: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#0A2E4F] via-[#1E4A6B] to-[#2E8BC0] flex items-center justify-center">
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Loading timeout</h2>
      <p className="text-lg mb-6">The page is taking longer than expected to load</p>
      <button 
        onClick={onRetry}
        className="bg-white text-[#0A2E4F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
      >
        Try Again
      </button>
      <button 
        onClick={() => window.location.href = '/'}
        className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A2E4F] transition-colors"
      >
        Go Home
      </button>
    </div>
  </div>
);

const LazyRoute: React.FC<LazyRouteProps> = ({ children }) => {
  const [key, setKey] = useState(0);

  const handleRetry = () => {
    setKey(prev => prev + 1);
  };

  return (
    <ErrorBoundary fallback={<TimeoutError onRetry={handleRetry} />}>
      <Suspense key={key} fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyRoute;