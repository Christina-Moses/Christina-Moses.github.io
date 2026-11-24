import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import {
  BIO_AND_CREDENTIALS,
  KJV_VERSES,
  PERSONAL_INFO,
  PORTFOLIO_PROJECTS,
  PRACTICE_PILLARS,
  type Discipline,
  type PortfolioProject,
} from './data/portfolioData';
import { FullBleedImage } from './components/FullBleedImage';
import {
  BotanicalDoodleButton,
  PixelFlowerSvg,
} from './components/MinecraftBotanicalDoodles';
import { KjvVersePopover } from './components/KjvVersePopover';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InquiryDrawer } from './components/InquiryDrawer';

type FilterOption = 'All' | Discipline;

const FILTER_OPTIONS: FilterOption[] = [
  'All',
  'Machine Learning',
  'Cyber Security',
  'Design',
];

const MARQUEE_KEYWORDS = [
  'Adversarial Robustness',
  'Zero-Trust Architecture',
  'Explainable AI (XAI)',
  'Cryptographic Protocols',
  'Design Systems',
  'Computer Vision',
  'Threat Modeling',
  'Human-Computer Interaction (HCI)',
  'Reinforcement Learning',
  'WCAG AA Accessibility',
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [activeVerseId, setActiveVerseId] = useState<string | null>(null);
  const [conservatoryVerseId, setConservatoryVerseId] = useState<string>(
    KJV_VERSES[0].id
  );
  const [bloomedIds, setBloomedIds] = useState<Set<string>>(
    () => new Set([KJV_VERSES[0].id])
  );
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryDiscipline, setInquiryDiscipline] = useState<
    Discipline | 'Multidisciplinary'
  >('Machine Learning');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.discipline === activeFilter);
  }, [activeFilter]);

  const activeVerse = useMemo(
    () => KJV_VERSES.find((v) => v.id === activeVerseId) ?? null,
    [activeVerseId]
  );

  const conservatoryVerse = useMemo(
    () =>
      KJV_VERSES.find((v) => v.id === conservatoryVerseId) ?? KJV_VERSES[0],
    [conservatoryVerseId]
  );

  const handleOpenVerse = (verseId: string) => {
    setBloomedIds((prev) => {
      const next = new Set(prev);
      next.add(verseId);
      return next;
    });
    setActiveVerseId(verseId);
  };

  const handleSelectConservatoryVerse = (verseId: string) => {
    setBloomedIds((prev) => {
      const next = new Set(prev);
      next.add(verseId);
      return next;
    });
    setConservatoryVerseId(verseId);
  };

  const handleOpenInquiry = (
    discipline: Discipline | 'Multidisciplinary' = 'Machine Learning'
  ) => {
    setInquiryDiscipline(discipline);
    setInquiryOpen(true);
    setMobileNavOpen(false);
  };

  const heroCherry = KJV_VERSES[0]; // Proverbs 3:5–6
  const heroVine = KJV_VERSES[1]; // Psalm 46:5
  const heroSpore = KJV_VERSES[4]; // Isaiah 40:31
  const practiceTulip = KJV_VERSES[2]; // Colossians 3:23
  const practiceLily = KJV_VERSES[3]; // Proverbs 25:2
  const aboutAzalea = KJV_VERSES[5]; // 1 Corinthians 14:40

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF7F2] text-[#1F1B18] selection:bg-[#F4DCE0] selection:text-[#1F1B18]">
        {/* TOP NAVIGATION — Strict 3-Zone Contract */}
        <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/88 backdrop-blur-md border-b border-[#E5DDD1]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
            {/* Zone 1: Single-element Brand Wordmark */}
            <a
              href="#top"
              className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1F1B18] whitespace-nowrap shrink-0"
            >
              {PERSONAL_INFO.name}
            </a>

            {/* Zone 2: 4 concise single-line nav links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E554D]"
            >
              <a
                href="#work"
                className="hover:text-[#1F1B18] transition-colors whitespace-nowrap shrink-0"
              >
                Work
              </a>
              <a
                href="#practice"
                className="hover:text-[#1F1B18] transition-colors whitespace-nowrap shrink-0"
              >
                Practice
              </a>
              <a
                href="#scripture"
                className="hover:text-[#1F1B18] transition-colors whitespace-nowrap shrink-0"
              >
                Scripture
              </a>
              <a
                href="#about"
                className="hover:text-[#1F1B18] transition-colors whitespace-nowrap shrink-0"
              >
                About
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleOpenInquiry('Machine Learning')}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Inquire
              </button>
              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileNavOpen}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E5DDD1] bg-[#FFFDF9] text-[#1F1B18] cursor-pointer"
              >
                {mobileNavOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {mobileNavOpen && (
            <nav
              aria-label="Mobile Navigation"
              className="md:hidden border-t border-[#E5DDD1] bg-[#FFFDF9] px-5 py-4 flex items-center justify-between gap-4 text-sm font-medium text-[#5E554D]"
            >
              <a
                href="#work"
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-[#1F1B18] whitespace-nowrap"
              >
                Work
              </a>
              <a
                href="#practice"
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-[#1F1B18] whitespace-nowrap"
              >
                Practice
              </a>
              <a
                href="#scripture"
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-[#1F1B18] whitespace-nowrap"
              >
                Scripture
              </a>
              <a
                href="#about"
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-[#1F1B18] whitespace-nowrap"
              >
                About
              </a>
            </nav>
          )}
        </header>

        <main id="top">
          {/* HERO SECTION — Full-Bleed Background with Overlaid Royal Typography & Interactive Side Doodles */}
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden border-b border-[#E5DDD1]">
            <FullBleedImage
              src={PERSONAL_INFO.heroBackgroundImage}
              alt="Sunlit royal limestone courtyard with hanging cherry blossoms and antique brass arches"
              fallbackGradient="linear-gradient(135deg, #FAF7F2 0%, #F4DCE0 50%, #DCE7DC 100%)"
              className="absolute inset-0 w-full h-full"
              priority
            />
            {/* Measured contrast scrim preserving open sunlit colonnade on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/96 via-[#FAF7F2]/84 to-[#FAF7F2]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/80 via-transparent to-[#FAF7F2]/20" />

            {/* Top Margin Hanging Minecraft Vines & Spore Blossom */}
            <div className="hidden lg:flex items-start gap-4 absolute top-0 right-12 z-20 pt-2">
              <BotanicalDoodleButton
                motif={heroSpore.motif}
                flowerName={heroSpore.flowerName}
                verseId={heroSpore.id}
                isBloomed={bloomedIds.has(heroSpore.id)}
                onSelectVerse={handleOpenVerse}
                sway
                labelPlacement="bottom"
              />
              <BotanicalDoodleButton
                motif={heroVine.motif}
                flowerName={heroVine.flowerName}
                verseId={heroVine.id}
                isBloomed={bloomedIds.has(heroVine.id)}
                onSelectVerse={handleOpenVerse}
                sway
                labelPlacement="left"
              />
            </div>

            {/* Left Side Margin Cherry Blossom Doodle */}
            <div className="hidden xl:block absolute left-6 bottom-12 z-20">
              <BotanicalDoodleButton
                motif={heroCherry.motif}
                flowerName={heroCherry.flowerName}
                verseId={heroCherry.id}
                isBloomed={bloomedIds.has(heroCherry.id)}
                onSelectVerse={handleOpenVerse}
                labelPlacement="right"
              />
            </div>

            <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl space-y-7"
              >
                <p className="text-xs sm:text-sm font-medium tracking-wide text-[#9C722E]">
                  {PERSONAL_INFO.heroKicker}
                </p>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold leading-[1.04] tracking-tight text-[#1F1B18] text-balance">
                  {PERSONAL_INFO.heroHeadline}
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-[#463E37] max-w-2xl">
                  {PERSONAL_INFO.heroSubheadline}
                </p>

                {/* Primary Focal CTA flanked by Interactive Blooming Minecraft Doodles */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors shadow-sm whitespace-nowrap shrink-0"
                  >
                    <span>Explore Selected Works</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-[#FFFDF9]/90 border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <FileText className="w-4 h-4 text-[#9C722E]" />
                    <span>Resume</span>
                  </a>

                  {/* Flanking Interactive Minecraft Botanical Doodles */}
                  <div className="flex items-center gap-2.5 pl-1">
                    <BotanicalDoodleButton
                      motif={heroCherry.motif}
                      flowerName={heroCherry.flowerName}
                      verseId={heroCherry.id}
                      isBloomed={bloomedIds.has(heroCherry.id)}
                      onSelectVerse={handleOpenVerse}
                      labelPlacement="top"
                    />
                    <BotanicalDoodleButton
                      motif={practiceTulip.motif}
                      flowerName={practiceTulip.flowerName}
                      verseId={practiceTulip.id}
                      isBloomed={bloomedIds.has(practiceTulip.id)}
                      onSelectVerse={handleOpenVerse}
                      labelPlacement="top"
                    />
                  </div>
                </div>

                {/* Unboxed quiet scripture & doodle invitation */}
                <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5E554D]">
                  <span>{PERSONAL_INFO.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PERSONAL_INFO.availabilityNote}</span>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => handleOpenVerse(heroCherry.id)}
                    className="font-medium text-[#9C722E] hover:text-[#78551D] underline underline-offset-4 cursor-pointer"
                  >
                    Bloom a flower to read KJV Scripture (
                    {bloomedIds.size}/{KJV_VERSES.length})
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* EDITORIAL MARQUEE RIBBON */}
          <div
            aria-hidden="true"
            className="w-full overflow-hidden border-b border-[#E5DDD1] bg-[#FFFDF9] py-3.5"
          >
            <div className="flex w-max animate-marquee whitespace-nowrap text-xs font-medium tracking-wide text-[#5E554D]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center gap-6 pr-6">
                  {MARQUEE_KEYWORDS.map((keyword) => (
                    <React.Fragment key={`${dup}-${keyword}`}>
                      <span>{keyword}</span>
                      <span className="text-[#9C722E]">·</span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 1: SELECTED WORKS — Full-Bleed Background Showcases + Interactive Filter */}
          <section
            id="work"
            className="relative max-w-[1360px] mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5DDD1] pb-8">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-medium tracking-wide text-[#9C722E]">
                  Selected Works · 2025–2026
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F1B18] text-balance">
                  Engineering &amp; Design Monographs
                </h2>
              </div>

              {/* Interactive Segmented Discipline Filter */}
              <div
                role="tablist"
                aria-label="Filter projects by discipline"
                className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#FFFDF9] border border-[#E5DDD1] self-start lg:self-auto"
              >
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === option}
                    onClick={() => setActiveFilter(option)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeFilter === option
                        ? 'bg-[#F4DCE0]/75 text-[#1F1B18] shadow-xs ring-1 ring-[#C8A25A]/40'
                        : 'text-[#5E554D] hover:text-[#1F1B18]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric Full-Bleed Editorial Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
              {filteredProjects.map((project, idx) => {
                const isLead =
                  idx === 0 || (filteredProjects.length === 4 && idx === 3);
                const colSpanClass = isLead
                  ? 'lg:col-span-12 min-h-[440px] sm:min-h-[500px]'
                  : 'lg:col-span-6 min-h-[430px]';
                const isDark = project.surfaceTone === 'dark';
                const pairedVerse =
                  KJV_VERSES.find((v) => v.id === project.linkedVerseId) ??
                  KJV_VERSES[0];

                return (
                  <article
                    key={project.id}
                    className={`group relative rounded-2xl overflow-hidden border border-[#E5DDD1] flex flex-col justify-between ${colSpanClass}`}
                  >
                    {/* Full Background Image */}
                    <FullBleedImage
                      src={project.fullBleedImage}
                      alt={`${project.title} — ${project.subtitle}`}
                      fallbackGradient={project.fallbackGradient}
                      className="absolute inset-0 w-full h-full"
                      imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Measured Directional Contrast Scrim */}
                    <div
                      className={
                        isDark
                          ? 'absolute inset-0 bg-gradient-to-t from-[#1E2420]/96 via-[#1E2420]/70 to-[#1E2420]/30'
                          : 'absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/96 via-[#FAF7F2]/78 to-[#FAF7F2]/28'
                      }
                    />

                    {/* Top Row: Unboxed Metadata + Side Botanical Doodle */}
                    <div className="relative z-10 flex items-start justify-between gap-4 p-6 sm:p-8">
                      <div
                        className={`flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide ${
                          isDark ? 'text-[#E5DDD1]' : 'text-[#463E37]'
                        }`}
                      >
                        <span className="font-mono tabular-nums">
                          {project.indexNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.discipline}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>

                      <BotanicalDoodleButton
                        motif={pairedVerse.motif}
                        flowerName={pairedVerse.flowerName}
                        verseId={pairedVerse.id}
                        isBloomed={bloomedIds.has(pairedVerse.id)}
                        onSelectVerse={handleOpenVerse}
                        labelPlacement="left"
                      />
                    </div>

                    {/* Bottom Row: Words Directly on Full-Bleed Background */}
                    <div className="relative z-10 p-6 sm:p-8 pt-16 space-y-5">
                      <div className="space-y-2.5 max-w-2xl">
                        <h3
                          className={`font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-balance ${
                            isDark ? 'text-[#FAF7F2]' : 'text-[#1F1B18]'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base font-medium ${
                            isDark ? 'text-[#F4DCE0]' : 'text-[#78551D]'
                          }`}
                        >
                          {project.subtitle}
                        </p>
                        <p
                          className={`text-sm leading-relaxed line-clamp-3 ${
                            isDark ? 'text-[#E5DDD1]' : 'text-[#463E37]'
                          }`}
                        >
                          {project.summary}
                        </p>
                      </div>

                      {/* Unboxed Metrics & Keywords + Working Action */}
                      <div
                        className={`flex flex-col sm:flex-row sm:items-end justify-between gap-5 pt-4 border-t ${
                          isDark
                            ? 'border-[#FAF7F2]/20'
                            : 'border-[#1F1B18]/12'
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div key={m.label} className="space-y-0.5">
                              <p
                                className={`font-mono text-lg font-medium tabular-nums ${
                                  isDark ? 'text-[#FAF7F2]' : 'text-[#1F1B18]'
                                }`}
                              >
                                {m.value}
                              </p>
                              <p
                                className={`text-[11px] ${
                                  isDark ? 'text-[#D6CFC5]' : 'text-[#5E554D]'
                                }`}
                              >
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isDark
                              ? 'bg-[#FAF7F2] text-[#1F1B18] hover:bg-[#F4DCE0]'
                              : 'bg-[#1F1B18] text-[#FAF7F2] hover:bg-[#9C722E]'
                          }`}
                        >
                          <span>Inspect Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* SECTION 2: THREE-PILLAR PRACTICE */}
          <section
            id="practice"
            className="relative border-y border-[#E5DDD1] bg-[#FFFDF9]"
          >
            {/* Side Botanical Margin Accents */}
            <div className="hidden xl:block absolute right-8 top-12 z-10">
              <BotanicalDoodleButton
                motif={practiceLily.motif}
                flowerName={practiceLily.flowerName}
                verseId={practiceLily.id}
                isBloomed={bloomedIds.has(practiceLily.id)}
                onSelectVerse={handleOpenVerse}
                labelPlacement="left"
              />
            </div>

            <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-wide text-[#9C722E]">
                    Core Disciplines
                  </p>
                  <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F1B18] text-balance">
                    Three Disciplines, One Architectural Standard
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                {PRACTICE_PILLARS.map((pillar, idx) => {
                  const accentBg =
                    idx === 0
                      ? 'bg-[#F9EDF0]/55'
                      : idx === 1
                      ? 'bg-[#E3ECE2]/55'
                      : 'bg-[#FAF7F2]';

                  return (
                    <div
                      key={pillar.id}
                      className={`p-7 sm:p-8 rounded-2xl border border-[#E5DDD1] ${accentBg} flex flex-col justify-between gap-8`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-medium text-[#5E554D]">
                          <span className="font-mono tabular-nums text-[#9C722E]">
                            {pillar.index}
                          </span>
                          <span>{pillar.discipline}</span>
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1B18] text-balance">
                          {pillar.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#5E554D]">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-[#E5DDD1] space-y-3">
                        <ul className="space-y-2 text-xs font-medium text-[#1F1B18]">
                          {pillar.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center justify-between py-1 border-b border-[#E5DDD1]/60 last:border-b-0"
                            >
                              <span>{cap}</span>
                              <span
                                aria-hidden="true"
                                className="text-[#9C722E]"
                              >
                                ·
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 3: FULL-BLEED KJV SCRIPTURE CONSERVATORY */}
          <section
            id="scripture"
            className="relative min-h-[600px] sm:min-h-[660px] flex items-center overflow-hidden border-b border-[#E5DDD1]"
          >
            <FullBleedImage
              src={PERSONAL_INFO.scriptureBackgroundImage}
              alt="Sunlit royal botanical glasshouse pavilion with hanging vines and cherry blossoms"
              fallbackGradient="linear-gradient(135deg, #E3ECE2 0%, #FAF7F2 50%, #F4DCE0 100%)"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-[#FAF7F2]/76 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/85 via-[#FAF7F2]/65 to-[#FAF7F2]/92" />

            {/* Top Hanging Minecraft Vines */}
            <div className="hidden md:flex items-start gap-6 absolute top-0 left-10 z-10 pt-2">
              <BotanicalDoodleButton
                motif="glow_vine"
                flowerName="Glow-Berry Vine"
                verseId="psalm-46-5"
                isBloomed={bloomedIds.has('psalm-46-5')}
                onSelectVerse={handleOpenVerse}
                sway
                labelPlacement="right"
              />
            </div>
            <div className="hidden md:flex items-start gap-6 absolute top-0 right-10 z-10 pt-2">
              <BotanicalDoodleButton
                motif="spore_blossom"
                flowerName="Spore Blossom"
                verseId="isa-40-31"
                isBloomed={bloomedIds.has('isa-40-31')}
                onSelectVerse={handleOpenVerse}
                sway
                labelPlacement="left"
              />
            </div>

            <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 sm:px-8 py-20 sm:py-24 text-center space-y-10">
              <div className="space-y-3">
                <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#9C722E]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Scripture &amp; Craft · King James Version</span>
                </p>
                <p className="text-xs text-[#5E554D]">
                  Select any Minecraft botanical specimen below to bloom its
                  paired verse
                </p>
              </div>

              {/* Active KJV Verse on Full-Bleed Conservatory Canvas */}
              <div className="max-w-3xl mx-auto space-y-5">
                <blockquote className="font-serif italic text-3xl sm:text-5xl font-medium leading-[1.24] text-[#1F1B18] text-balance">
                  “{conservatoryVerse.text}”
                </blockquote>
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#5E554D]">
                  <span className="text-[#9C722E] font-semibold">
                    {conservatoryVerse.reference} (KJV)
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{conservatoryVerse.theme}</span>
                </div>
                <p className="text-sm text-[#463E37] max-w-xl mx-auto">
                  {conservatoryVerse.reflection}
                </p>
              </div>

              {/* Interactive 6-Flower Botanical Conservatory Selector */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                {KJV_VERSES.map((v) => {
                  const isSelected = v.id === conservatoryVerse.id;
                  const isBloomed = bloomedIds.has(v.id);
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => handleSelectConservatoryVerse(v.id)}
                      className={`group flex flex-col items-center gap-2 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFFDF9] border-[#9C722E] shadow-sm'
                          : 'bg-[#FFFDF9]/75 border-[#E5DDD1] hover:bg-[#FFFDF9] hover:border-[#C8A25A]'
                      }`}
                    >
                      <PixelFlowerSvg
                        motif={v.motif}
                        isBloomed={isSelected || isBloomed}
                        className="w-8 h-8"
                      />
                      <span className="text-xs font-semibold text-[#1F1B18] whitespace-nowrap truncate max-w-full">
                        {v.reference}
                      </span>
                      <span className="text-[11px] text-[#5E554D] whitespace-nowrap truncate max-w-full">
                        {v.flowerName}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleOpenVerse(conservatoryVerse.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#FFFDF9] border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors cursor-pointer"
                >
                  <span>Open Full Verse Card</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9C722E]" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 4: ABOUT, ACADEMIC FOUNDATION & CREDENTIALS */}
          <section
            id="about"
            className="relative max-w-[1360px] mx-auto px-5 sm:px-8 py-20 sm:py-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Left Column: Biography & Links */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div className="space-y-5">
                  <p className="text-xs font-medium tracking-wide text-[#9C722E]">
                    About &amp; Credentials
                  </p>
                  <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F1B18] text-balance">
                    {BIO_AND_CREDENTIALS.sectionTitle}
                  </h2>
                  <p className="text-base leading-relaxed text-[#1F1B18]">
                    {BIO_AND_CREDENTIALS.leadParagraph}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#5E554D]">
                    {BIO_AND_CREDENTIALS.secondaryParagraph}
                  </p>
                </div>

                {/* Action Cluster flanked by Azalea Doodle */}
                <div className="space-y-6 pt-4 border-t border-[#E5DDD1]">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenInquiry('Multidisciplinary')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Start an Inquiry</span>
                    </button>

                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium bg-[#FFFDF9] border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors whitespace-nowrap shrink-0"
                    >
                      <FileText className="w-4 h-4 text-[#9C722E]" />
                      <span>Download Resume</span>
                    </a>

                    <BotanicalDoodleButton
                      motif={aboutAzalea.motif}
                      flowerName={aboutAzalea.flowerName}
                      verseId={aboutAzalea.id}
                      isBloomed={bloomedIds.has(aboutAzalea.id)}
                      onSelectVerse={handleOpenVerse}
                      labelPlacement="top"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#5E554D]">
                    <a
                      href={PERSONAL_INFO.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#1F1B18] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={PERSONAL_INFO.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#1F1B18] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="hover:text-[#1F1B18] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Academic, Cloud & Security Lab Credentials */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BIO_AND_CREDENTIALS.credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#E5DDD1] flex flex-col justify-between gap-5"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2 text-xs text-[#5E554D]">
                        <span className="font-medium text-[#9C722E]">
                          {cred.category}
                        </span>
                        <span className="tabular-nums">{cred.period}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[#1F1B18] text-balance">
                        {cred.title}
                      </h3>
                      <p className="text-xs font-medium text-[#4E6650]">
                        {cred.issuerOrFocus}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5E554D]">
                      {cred.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* QUIET EDITORIAL FOOTER */}
        <footer className="border-t border-[#E5DDD1] bg-[#FFFDF9]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-serif text-lg font-semibold text-[#1F1B18]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[#5E554D]">
                “Let all things be done decently and in order.” — 1 Corinthians
                14:40 (KJV)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#5E554D]">
              <a
                href="#work"
                className="hover:text-[#1F1B18] transition-colors"
              >
                Work
              </a>
              <a
                href="#practice"
                className="hover:text-[#1F1B18] transition-colors"
              >
                Practice
              </a>
              <a
                href="#scripture"
                className="hover:text-[#1F1B18] transition-colors"
              >
                Scripture
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1F1B18] transition-colors"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1F1B18] transition-colors"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={() => handleOpenInquiry('Multidisciplinary')}
                className="text-[#9C722E] hover:text-[#78551D] transition-colors cursor-pointer"
              >
                Inquire
              </button>
            </div>
          </div>
        </footer>

        {/* OVERLAYS & DRAWERS */}
        <KjvVersePopover
          verse={activeVerse}
          bloomedCount={bloomedIds.size}
          totalVerses={KJV_VERSES.length}
          onClose={() => setActiveVerseId(null)}
          onNavigateVerse={handleOpenVerse}
        />

        <CaseStudyModal
          project={selectedProject}
          bloomedIds={bloomedIds}
          onClose={() => setSelectedProject(null)}
          onSelectVerse={handleOpenVerse}
          onInquireDiscipline={handleOpenInquiry}
        />

        <InquiryDrawer
          isOpen={inquiryOpen}
          initialDiscipline={inquiryDiscipline}
          bloomedIds={bloomedIds}
          onClose={() => setInquiryOpen(false)}
          onSelectVerse={handleOpenVerse}
        />
      </div>
    </MotionConfig>
  );
}
