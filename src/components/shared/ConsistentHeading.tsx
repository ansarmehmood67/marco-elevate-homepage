import React from 'react';

interface ConsistentHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const ConsistentHeading: React.FC<ConsistentHeadingProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  className = "",
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 transition-all duration-300 hover:scale-105 shadow-lg ${
          isDark 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-primary/10 text-primary border border-primary/20'
        }`}>
          {badge}
        </div>
      )}
      
      <h2 className={`text-section-title font-black leading-constrained-tight tracking-tight mb-12 ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
        {highlightedText && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </>
        )}
      </h2>
      
      {subtitle && (
        <p className={`text-section-subtitle leading-constrained-relaxed max-w-3xl mx-auto ${
          isDark ? 'text-white/80' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default ConsistentHeading;