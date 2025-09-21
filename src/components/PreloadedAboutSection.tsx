import React from 'react';
import AboutSection from './AboutSection';

interface PreloadedAboutSectionProps {
  className?: string;
}

/**
 * Preloaded about section without lazy loading to prevent loading cascades
 */
const PreloadedAboutSection: React.FC<PreloadedAboutSectionProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <AboutSection />
    </div>
  );
};

export default PreloadedAboutSection;