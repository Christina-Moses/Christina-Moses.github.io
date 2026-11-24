import React, { useEffect } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { KJV_VERSES, type KjvVerse } from '../data/portfolioData';
import { PixelFlowerSvg } from './MinecraftBotanicalDoodles';

interface KjvVersePopoverProps {
  verse: KjvVerse | null;
  bloomedCount: number;
  totalVerses: number;
  onClose: () => void;
  onNavigateVerse: (verseId: string) => void;
}

export const KjvVersePopover: React.FC<KjvVersePopoverProps> = ({
  verse,
  bloomedCount,
  totalVerses,
  onClose,
  onNavigateVerse,
}) => {
  useEffect(() => {
    if (!verse) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [verse, onClose]);

  if (!verse) return null;

  const currentIdx = KJV_VERSES.findIndex((v) => v.id === verse.id);
  const prevVerse =
    KJV_VERSES[(currentIdx - 1 + KJV_VERSES.length) % KJV_VERSES.length];
  const nextVerse = KJV_VERSES[(currentIdx + 1) % KJV_VERSES.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1B18]/45 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kjv-verse-reference"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#FFFDF9] border border-[#E5DDD1] shadow-2xl p-6 sm:p-9 text-[#1F1B18]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E5DDD1]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F9EDF0] border border-[#E5DDD1]">
              <PixelFlowerSvg
                motif={verse.motif}
                isBloomed
                className="w-7 h-7"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-[#9C722E] tracking-wide">
                {verse.flowerName} · {verse.theme}
              </p>
              <p className="text-xs text-[#5E554D] tabular-nums">
                King James Version · {bloomedCount} of {totalVerses} bloomed
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Scripture card"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#5E554D] hover:text-[#1F1B18] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verse Body */}
        <div className="py-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5E554D]">
            <BookOpen className="w-3.5 h-3.5 text-[#9C722E]" />
            <span id="kjv-verse-reference" className="tracking-wide">
              {verse.reference} (KJV)
            </span>
          </div>

          <blockquote className="font-serif italic text-2xl sm:text-[28px] leading-[1.38] text-[#1F1B18] text-balance">
            “{verse.text}”
          </blockquote>

          <p className="text-sm leading-relaxed text-[#5E554D]">
            {verse.reflection}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-5 border-t border-[#E5DDD1]">
          <button
            type="button"
            onClick={() => onNavigateVerse(prevVerse.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#5E554D] hover:text-[#1F1B18] hover:bg-[#FAF7F2] transition-colors cursor-pointer whitespace-nowrap"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Verse</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateVerse(nextVerse.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Next Verse</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
