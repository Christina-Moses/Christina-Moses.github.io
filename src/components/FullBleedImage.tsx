import React, { useState } from 'react';

interface FullBleedImageProps {
  src: string;
  alt: string;
  fallbackGradient: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  fallbackGradient,
  className = '',
  imgClassName = '',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: fallbackGradient }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-full h-full flex items-center justify-center opacity-40"
        >
          <div className="w-24 h-24 rounded-full border border-[#9C722E]/30" />
        </div>
      )}
    </div>
  );
};
