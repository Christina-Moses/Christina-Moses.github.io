import React, { useState } from 'react';
import type { BotanicalMotif } from '../data/portfolioData';

interface PixelFlowerSvgProps {
  motif: BotanicalMotif;
  isBloomed?: boolean;
  isHovered?: boolean;
  className?: string;
}

export const PixelFlowerSvg: React.FC<PixelFlowerSvgProps> = ({
  motif,
  isBloomed = false,
  isHovered = false,
  className = 'w-11 h-11',
}) => {
  const active = isBloomed || isHovered;

  if (motif === 'cherry_blossom') {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={`${className} transition-transform duration-200 ease-out ${
          active ? 'scale-110 -rotate-3' : 'scale-100'
        }`}
      >
        {/* Voxel wooden twig */}
        <rect x="4" y="24" width="4" height="4" fill="#7D5C46" />
        <rect x="8" y="20" width="4" height="4" fill="#7D5C46" />
        <rect x="12" y="16" width="4" height="4" fill="#926D54" />
        <rect x="16" y="12" width="4" height="4" fill="#926D54" />
        {/* Sage leaves */}
        <rect x="6" y="16" width="4" height="4" fill="#84A982" />
        <rect x="20" y="16" width="4" height="4" fill="#6F956E" />
        {/* Cherry blossom voxel petals */}
        <rect x="14" y="4" width="4" height="4" fill="#F2B8C2" />
        <rect x="18" y="6" width="4" height="4" fill="#F7D2D9" />
        <rect x="10" y="8" width="4" height="4" fill="#F2B8C2" />
        <rect x="14" y="8" width="4" height="4" fill="#E38A9B" />
        <rect x="20" y="10" width="4" height="4" fill="#F2B8C2" />
        <rect x="22" y="4" width="4" height="4" fill="#F7D2D9" />
        {/* Golden stamen pixel */}
        <rect x="16" y="8" width="2" height="2" fill="#C8A25A" />
        {/* Bloom sparkle pixels */}
        <g
          className={`transition-opacity duration-200 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <rect x="6" y="6" width="2" height="2" fill="#C8A25A" />
          <rect x="26" y="12" width="2" height="2" fill="#F2B8C2" />
          <rect x="12" y="2" width="2" height="2" fill="#FFFDF9" />
        </g>
      </svg>
    );
  }

  if (motif === 'glow_vine') {
    return (
      <svg
        viewBox="0 0 32 48"
        fill="none"
        aria-hidden="true"
        className={`${className} transition-transform duration-200 ease-out ${
          active ? 'scale-105' : 'scale-100'
        }`}
      >
        {/* Hanging cave vine stem */}
        <rect x="14" y="0" width="4" height="10" fill="#5E8360" />
        <rect x="14" y="10" width="4" height="10" fill="#739A74" />
        <rect x="14" y="20" width="4" height="10" fill="#5E8360" />
        <rect x="14" y="30" width="4" height="8" fill="#84A982" />
        {/* Voxel leaves along vine */}
        <rect x="10" y="6" width="4" height="4" fill="#84A982" />
        <rect x="18" y="12" width="4" height="4" fill="#84A982" />
        <rect x="10" y="22" width="4" height="4" fill="#6F956E" />
        <rect x="18" y="28" width="4" height="4" fill="#9BB999" />
        {/* Glow berries in antique brass & warm gold */}
        <rect
          x="8"
          y="14"
          width="6"
          height="6"
          fill={active ? '#E8C574' : '#C8A25A'}
        />
        <rect x="10" y="16" width="2" height="2" fill="#FFFDF9" />
        <rect
          x="13"
          y="38"
          width="6"
          height="6"
          fill={active ? '#E8C574' : '#C8A25A'}
        />
        <rect x="15" y="40" width="2" height="2" fill="#FFFDF9" />
        {/* Subtle blossom accent */}
        <rect x="20" y="18" width="4" height="4" fill="#F2B8C2" />
      </svg>
    );
  }

  if (motif === 'pink_tulip') {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={`${className} transition-transform duration-200 ease-out ${
          active ? 'scale-110 translate-y-[-2px]' : 'scale-100'
        }`}
      >
        {/* Stem & leaves */}
        <rect x="14" y="16" width="4" height="12" fill="#6F956E" />
        <rect x="10" y="22" width="4" height="4" fill="#84A982" />
        <rect x="18" y="20" width="4" height="4" fill="#84A982" />
        {/* Tulip voxel cup */}
        <rect x="10" y="6" width="4" height="10" fill="#F2B8C2" />
        <rect x="14" y="8" width="4" height="8" fill="#E38A9B" />
        <rect x="18" y="6" width="4" height="10" fill="#F2B8C2" />
        <rect x="12" y="14" width="8" height="2" fill="#D47488" />
        <rect x="14" y="4" width="4" height="2" fill="#F7D2D9" />
        {/* Bloom sparkle */}
        <g
          className={`transition-opacity duration-200 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <rect x="6" y="8" width="2" height="2" fill="#C8A25A" />
          <rect x="24" y="6" width="2" height="2" fill="#F7D2D9" />
        </g>
      </svg>
    );
  }

  if (motif === 'lily_valley') {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={`${className} transition-transform duration-200 ease-out ${
          active ? 'scale-110 rotate-3' : 'scale-100'
        }`}
      >
        {/* Curved stem */}
        <rect x="14" y="6" width="4" height="22" fill="#6F956E" />
        <rect x="10" y="6" width="4" height="4" fill="#84A982" />
        <rect x="18" y="20" width="6" height="6" fill="#84A982" />
        <rect x="8" y="22" width="6" height="4" fill="#5E8360" />
        {/* Cream porcelain bells */}
        <rect x="6" y="10" width="4" height="4" fill="#FFFDF9" />
        <rect x="8" y="12" width="2" height="2" fill="#E5DDD1" />
        <rect x="18" y="10" width="4" height="4" fill="#FFFDF9" />
        <rect x="12" y="14" width="4" height="4" fill="#FFFDF9" />
        {/* Brass glow */}
        <g
          className={`transition-opacity duration-200 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <rect x="6" y="16" width="2" height="2" fill="#C8A25A" />
          <rect x="22" y="6" width="2" height="2" fill="#C8A25A" />
        </g>
      </svg>
    );
  }

  if (motif === 'spore_blossom') {
    return (
      <svg
        viewBox="0 0 36 32"
        fill="none"
        aria-hidden="true"
        className={`${className} transition-transform duration-200 ease-out ${
          active ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Ceiling stem */}
        <rect x="16" y="0" width="4" height="6" fill="#5E8360" />
        {/* Broad sage calyx */}
        <rect x="8" y="6" width="20" height="4" fill="#739A74" />
        <rect x="4" y="10" width="6" height="4" fill="#84A982" />
        <rect x="26" y="10" width="6" height="4" fill="#84A982" />
        {/* Hanging pink spore petals */}
        <rect x="10" y="10" width="16" height="6" fill="#F2B8C2" />
        <rect x="12" y="16" width="12" height="4" fill="#E38A9B" />
        <rect x="15" y="12" width="6" height="4" fill="#C8A25A" />
        {/* Falling spore particles */}
        <g
          className={`transition-all duration-200 ${
            active ? 'opacity-100 translate-y-1' : 'opacity-60'
          }`}
        >
          <rect x="10" y="24" width="2" height="2" fill="#C8A25A" />
          <rect x="24" y="22" width="2" height="2" fill="#84A982" />
          <rect x="17" y="26" width="2" height="2" fill="#F2B8C2" />
        </g>
      </svg>
    );
  }

  // azalea
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`${className} transition-transform duration-200 ease-out ${
        active ? 'scale-110' : 'scale-100'
      }`}
    >
      {/* Voxel shrub foliage */}
      <rect x="6" y="10" width="20" height="14" fill="#6F956E" />
      <rect x="10" y="6" width="12" height="4" fill="#84A982" />
      <rect x="14" y="24" width="4" height="4" fill="#7D5C46" />
      {/* Azalea blooms */}
      <rect x="8" y="12" width="4" height="4" fill="#F2B8C2" />
      <rect x="18" y="8" width="4" height="4" fill="#E38A9B" />
      <rect x="20" y="16" width="4" height="4" fill="#F7D2D9" />
      <rect x="12" y="18" width="4" height="4" fill="#F2B8C2" />
      <rect x="14" y="12" width="2" height="2" fill="#C8A25A" />
    </svg>
  );
};

interface BotanicalDoodleButtonProps {
  motif: BotanicalMotif;
  flowerName: string;
  verseId: string;
  isBloomed: boolean;
  onSelectVerse: (verseId: string) => void;
  className?: string;
  sway?: boolean;
  labelPlacement?: 'top' | 'bottom' | 'left' | 'right';
}

export const BotanicalDoodleButton: React.FC<BotanicalDoodleButtonProps> = ({
  motif,
  flowerName,
  verseId,
  isBloomed,
  onSelectVerse,
  className = '',
  sway = false,
  labelPlacement = 'bottom',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipPosition =
    labelPlacement === 'top'
      ? '-top-8 left-1/2 -translate-x-1/2'
      : labelPlacement === 'left'
      ? 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
      : labelPlacement === 'right'
      ? 'top-1/2 -right-2 translate-x-full -translate-y-1/2'
      : '-bottom-8 left-1/2 -translate-x-1/2';

  return (
    <button
      type="button"
      onClick={() => onSelectVerse(verseId)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Bloom ${flowerName} to reveal KJV Scripture`}
      className={`group relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-1.5 rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9C722E] ${
        isBloomed
          ? 'bg-[#FFFDF9]/85 shadow-sm ring-1 ring-[#C8A25A]/50'
          : 'bg-[#FFFDF9]/55 hover:bg-[#FFFDF9]/90 ring-1 ring-[#E5DDD1]/80 hover:ring-[#C8A25A]/60'
      } backdrop-blur-sm ${sway ? 'animate-vine-sway' : ''} ${className}`}
    >
      <PixelFlowerSvg
        motif={motif}
        isBloomed={isBloomed}
        isHovered={isHovered}
        className={motif === 'glow_vine' ? 'w-8 h-12' : 'w-8 h-8'}
      />
      <span
        className={`pointer-events-none absolute ${tooltipPosition} whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-[#1F1B18] text-[#FAF7F2] shadow-md transition-all duration-150 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {flowerName} · KJV
      </span>
    </button>
  );
};
