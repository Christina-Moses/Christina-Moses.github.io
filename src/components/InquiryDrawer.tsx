import React, { useEffect, useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import {
  KJV_VERSES,
  PERSONAL_INFO,
  type Discipline,
} from '../data/portfolioData';
import { BotanicalDoodleButton } from './MinecraftBotanicalDoodles';

interface InquiryDrawerProps {
  isOpen: boolean;
  initialDiscipline?: Discipline | 'Multidisciplinary';
  bloomedIds: Set<string>;
  onClose: () => void;
  onSelectVerse: (verseId: string) => void;
}

const FOCUS_OPTIONS: Array<Discipline | 'Multidisciplinary'> = [
  'Machine Learning',
  'Cyber Security',
  'Design',
  'Multidisciplinary',
];

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  initialDiscipline = 'Machine Learning',
  bloomedIds,
  onClose,
  onSelectVerse,
}) => {
  const [focus, setFocus] = useState<Discipline | 'Multidisciplinary'>(
    initialDiscipline
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setFocus(initialDiscipline);
  }, [initialDiscipline]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim() || message.trim().length < 12) {
      nextErrors.message =
        'Please share a short project or research note (at least 12 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Portfolio Inquiry (${focus}) — ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Hello Christina,\n\nName: ${name.trim()}\nReply Email: ${email.trim()}\nFocus Area: ${focus}\n\nMessage:\n${message.trim()}\n`
    );
    const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmittedMailto(mailtoHref);
    // Open the user's default mail client with pre-filled draft
    window.location.href = mailtoHref;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2600);
    } catch {
      // Fallback for restricted clipboard environments
      const textarea = document.createElement('textarea');
      textarea.value = PERSONAL_INFO.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2600);
    }
  };

  const handleReset = () => {
    setSubmittedMailto(null);
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const colossiansVerse = KJV_VERSES[2];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1F1B18]/45 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-drawer-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg h-full bg-[#FFFDF9] border-l border-[#E5DDD1] shadow-2xl flex flex-col justify-between overflow-y-auto text-[#1F1B18]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 space-y-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E5DDD1]">
            <div className="space-y-1">
              <p className="text-xs font-medium text-[#9C722E] tracking-wide">
                Collaborations &amp; Research Inquiries
              </p>
              <h2
                id="inquiry-drawer-title"
                className="font-serif text-3xl font-semibold text-[#1F1B18]"
              >
                Begin a Conversation
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close inquiry drawer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#5E554D] hover:text-[#1F1B18] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Direct Email Copy Strip */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DDD1] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-4 h-4 text-[#9C722E] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[#1F1B18] truncate">
                {PERSONAL_INFO.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFDF9] border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4E6650]" />
                  <span>Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#5E554D]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {submittedMailto ? (
            <div className="p-6 rounded-2xl bg-[#E3ECE2]/50 border border-[#E5DDD1] space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4E6650]">
                  <Check className="w-4 h-4" />
                  <span>Inquiry Draft Prepared</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1F1B18]">
                  Thank you, {name.trim()}
                </h3>
                <p className="text-sm leading-relaxed text-[#5E554D]">
                  Your email client should open with a pre-filled draft for{' '}
                  <strong className="font-medium text-[#1F1B18]">
                    {focus}
                  </strong>
                  . If your browser blocked the mail launch, use the button below
                  or copy{' '}
                  <span className="font-medium text-[#1F1B18]">
                    {PERSONAL_INFO.email}
                  </span>{' '}
                  directly.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={submittedMailto}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Draft</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-lg text-xs font-medium bg-[#FFFDF9] border border-[#E5DDD1] text-[#1F1B18] hover:border-[#9C722E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Discipline Focus */}
              <div className="space-y-2">
                <span className="block text-xs font-medium text-[#5E554D]">
                  Discipline Focus
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {FOCUS_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFocus(option)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors border cursor-pointer whitespace-nowrap truncate ${
                        focus === option
                          ? 'bg-[#F9EDF0] border-[#9C722E] text-[#1F1B18]'
                          : 'bg-[#FAF7F2] border-[#E5DDD1] text-[#5E554D] hover:text-[#1F1B18]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="inquiry-name"
                  className="block text-xs font-medium text-[#5E554D]"
                >
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Dr. Ada Lovelace"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F2] border border-[#E5DDD1] text-[#1F1B18] placeholder:text-[#5E554D]/60 focus:border-[#9C722E] focus:outline-none"
                />
                {errors.name && (
                  <p className="text-xs font-medium text-[#8B2E3C]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="inquiry-email"
                  className="block text-xs font-medium text-[#5E554D]"
                >
                  Email Address
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="ada@researchlab.org"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F2] border border-[#E5DDD1] text-[#1F1B18] placeholder:text-[#5E554D]/60 focus:border-[#9C722E] focus:outline-none"
                />
                {errors.email && (
                  <p className="text-xs font-medium text-[#8B2E3C]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="inquiry-message"
                  className="block text-xs font-medium text-[#5E554D]"
                >
                  Project or Research Brief
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Share context on the role, security audit, ML model challenge, or design collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F2] border border-[#E5DDD1] text-[#1F1B18] placeholder:text-[#5E554D]/60 focus:border-[#9C722E] focus:outline-none resize-none"
                />
                {errors.message && (
                  <p className="text-xs font-medium text-[#8B2E3C]">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#9C722E] text-[#FFFDF9] hover:bg-[#78551D] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Email Draft</span>
                </button>
                <BotanicalDoodleButton
                  motif={colossiansVerse.motif}
                  flowerName={colossiansVerse.flowerName}
                  verseId={colossiansVerse.id}
                  isBloomed={bloomedIds.has(colossiansVerse.id)}
                  onSelectVerse={onSelectVerse}
                  labelPlacement="left"
                />
              </div>
            </form>
          )}
        </div>

        <div className="px-6 sm:px-8 py-5 border-t border-[#E5DDD1] bg-[#FAF7F2] text-xs text-[#5E554D]">
          <span>
            Works directly with your mail client — zero tracking, zero external
            forms.
          </span>
        </div>
      </div>
    </div>
  );
};
