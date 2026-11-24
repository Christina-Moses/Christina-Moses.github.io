import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import {
  KJV_VERSES,
  type Discipline,
  type PortfolioProject,
} from '../data/portfolioData';
import { FullBleedImage } from './FullBleedImage';
import { BotanicalDoodleButton } from './MinecraftBotanicalDoodles';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  bloomedIds: Set<string>;
  onClose: () => void;
  onSelectVerse: (verseId: string) => void;
  onInquireDiscipline: (discipline: Discipline) => void;
}

type CaseStudyTab = 'overview' | 'architecture' | 'impact';

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  bloomedIds,
  onClose,
  onSelectVerse,
  onInquireDiscipline,
}) => {
  const [activeTab, setActiveTab] = useState<CaseStudyTab>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const linkedVerse =
    KJV_VERSES.find((v) => v.id === project.linkedVerseId) ?? KJV_VERSES[0];

  const isDarkHero = project.surfaceTone === 'dark';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1F1B18]/65 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-auto rounded-2xl bg-[#FFFDF9] border border-[#E5DDD1] shadow-2xl overflow-hidden text-[#1F1B18]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full-Bleed Header with Overlaid Words */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <FullBleedImage
            src={project.fullBleedImage}
            alt={project.title}
            fallbackGradient={project.fallbackGradient}
            className="w-full h-full"
          />
          <div
            className={
              isDarkHero
                ? 'absolute inset-0 bg-gradient-to-t from-[#1E2420]/95 via-[#1E2420]/65 to-[#1E2420]/30'
                : 'absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/95 via-[#FAF7F2]/75 to-[#FAF7F2]/30'
            }
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFDF9]/90 text-[#1F1B18] border border-[#E5DDD1] hover:bg-[#FFFDF9] transition-colors shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div
                className={`flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide ${
                  isDarkHero ? 'text-[#E5DDD1]' : 'text-[#5E554D]'
                }`}
              >
                <span className="font-mono tabular-nums">
                  {project.indexNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.discipline}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.role}</span>
              </div>

              <h2
                id="case-study-title"
                className={`font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-balance ${
                  isDarkHero ? 'text-[#FAF7F2]' : 'text-[#1F1B18]'
                }`}
              >
                {project.title}
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  isDarkHero ? 'text-[#E5DDD1]' : 'text-[#5E554D]'
                }`}
              >
                {project.subtitle}
              </p>
            </div>

            <div className="shrink-0">
              <BotanicalDoodleButton
                motif={linkedVerse.motif}
                flowerName={linkedVerse.flowerName}
                verseId={linkedVerse.id}
                isBloomed={bloomedIds.has(linkedVerse.id)}
                onSelectVerse={onSelectVerse}
                labelPlacement="left"
              />
            </div>
          </div>
        </div>

        {/* Interactive Tab Switcher + Clean Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DDD1] pb-4">
            <div
              className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#FAF7F2] border border-[#E5DDD1]"
              role="tablist"
              aria-label="Case study sections"
            >
              {(
                [
                  { id: 'overview', label: 'Overview' },
                  { id: 'architecture', label: 'Architecture & Security' },
                  { id: 'impact', label: 'Impact & Craft' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#FFFDF9] text-[#1F1B18] shadow-sm ring-1 ring-[#E5DDD1]'
                      : 'text-[#5E554D] hover:text-[#1F1B18]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Unboxed keywords with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E554D]">
              {project.keywords.map((kw, idx) => (
                <React.Fragment key={kw}>
                  <span>{kw}</span>
                  {idx < project.keywords.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <p className="text-base sm:text-lg leading-relaxed text-[#1F1B18]">
                {project.summary}
              </p>

              {/* Quantitative Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E5DDD1] space-y-1.5"
                  >
                    <p className="text-xs font-medium text-[#5E554D]">
                      {metric.label}
                    </p>
                    <p className="font-mono text-2xl font-medium text-[#1F1B18] tabular-nums">
                      {metric.value}
                    </p>
                    <p className="text-xs leading-relaxed text-[#5E554D]">
                      {metric.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-[#1F1B18]">
                  Systems &amp; Model Architecture
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[#5E554D]">
                  {project.architectureNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#9C722E] shrink-0"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-[#1F1B18]">
                  Threat Defense &amp; HCI Rigor
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[#5E554D]">
                  {project.craftAndSecurityNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4E6650] shrink-0"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-7 rounded-xl bg-[#FAF7F2] border border-[#E5DDD1] space-y-4">
                <p className="font-serif italic text-xl sm:text-2xl leading-relaxed text-[#1F1B18]">
                  “{project.outcomeQuote.quote}”
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E554D]">
                  <span className="font-semibold text-[#1F1B18]">
                    {project.outcomeQuote.author}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.outcomeQuote.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.outcomeQuote.organization}</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F9EDF0]/70 border border-[#E5DDD1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#9C722E]">
                    Paired Scripture · {linkedVerse.reference} (KJV)
                  </p>
                  <p className="font-serif italic text-base text-[#1F1B18]">
                    “{linkedVerse.text}”
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectVerse(linkedVerse.id)}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-[#FFFDF9] border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect Scripture
                </button>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E5DDD1]">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F1B18] hover:text-[#9C722E] transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E554D] hover:text-[#1F1B18] transition-colors whitespace-nowrap"
              >
                <span>Technical Writeup</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onInquireDiscipline(project.discipline);
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Discuss {project.discipline} Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
