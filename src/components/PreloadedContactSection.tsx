import React from 'react';
import MailerLiteContactSectionAnimated from './MailerLiteContactSectionAnimated';

interface PreloadedContactSectionProps {
  className?: string;
}

/**
 * Preloaded contact section without lazy loading to prevent loading cascades
 */
const PreloadedContactSection: React.FC<PreloadedContactSectionProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <MailerLiteContactSectionAnimated />
    </div>
  );
};

export default PreloadedContactSection;