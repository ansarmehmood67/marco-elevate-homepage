import React from 'react';

interface ConsistentHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  className?: string;
}

const ConsistentHeading: React.FC<ConsistentHeadingProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  className = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold mb-8 bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
          {badge}
        </div>
      )}
      
      <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-12">
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
        <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default ConsistentHeading;