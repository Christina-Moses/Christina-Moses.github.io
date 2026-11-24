/**
 * CENTRALIZED PORTFOLIO CONTENT CONFIGURATION
 * ---------------------------------------------------------------------------
 * Update all personal details, social links, credentials, case studies, and
 * curated KJV Bible verses directly inside this file without modifying any UI
 * components.
 */

export type Discipline = 'Machine Learning' | 'Cyber Security' | 'Design';

export type BotanicalMotif =
  | 'cherry_blossom'
  | 'glow_vine'
  | 'pink_tulip'
  | 'lily_valley'
  | 'spore_blossom'
  | 'azalea';

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface PortfolioProject {
  id: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  discipline: Discipline;
  year: string;
  role: string;
  summary: string;
  fullBleedImage: string;
  fallbackGradient: string;
  surfaceTone: 'light' | 'dark';
  keywords: string[];
  metrics: ProjectMetric[];
  architectureNotes: string[];
  craftAndSecurityNotes: string[];
  outcomeQuote: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
  linkedVerseId: string;
  // TODO: Replace with your real repository and live demo URLs
  repoUrl: string;
  liveUrl: string;
}

export interface KjvVerse {
  id: string;
  reference: string;
  text: string;
  theme: string;
  reflection: string;
  motif: BotanicalMotif;
  flowerName: string;
}

export interface CredentialItem {
  category: string;
  title: string;
  issuerOrFocus: string;
  period: string;
  detail: string;
}

export interface PracticePillar {
  id: string;
  index: string;
  discipline: Discipline;
  title: string;
  description: string;
  capabilities: string[];
}

export const PERSONAL_INFO = {
  // TODO: Replace with your preferred display name and tagline
  name: 'Christina Moses',
  monogram: 'CM',
  roleTitle: 'AI/ML Engineer · Cyber Security Researcher · Product & Systems Designer',
  heroKicker: 'Machine Learning · Cyber Security · Design',
  heroHeadline: 'Intelligence, Fortified by Grace & Design',
  heroSubheadline:
    'Engineering adversarially robust deep learning systems, zero-trust cryptographic defense, and WCAG AA human-centered interfaces with royal editorial clarity.',
  // TODO: Replace with your real location and availability note
  location: 'B.E. Computer Science & Engineering',
  availabilityNote: 'Open to Research Collaborations & Engineering Roles',
  // TODO: Replace with your real contact email
  email: 'hello@christinamoses.dev',
  // TODO: Place your real resume PDF in public/resume.pdf
  resumeUrl: './resume.pdf',
  // TODO: Replace with your real GitHub and LinkedIn URLs
  socialLinks: {
    github: 'https://github.com/christinamoses',
    linkedin: 'https://linkedin.com/in/christinamoses',
  },
  heroBackgroundImage: './images/hero-sanctuary.jpg',
  scriptureBackgroundImage: './images/scripture-conservatory.jpg',
} as const;

export const BIO_AND_CREDENTIALS = {
  sectionTitle: 'Where Formal Rigor Meets Botanical Calm',
  // TODO: Replace with your personal story and research biography
  leadParagraph:
    'Rooted in a B.E. in Computer Science & Engineering, my work bridges three disciplines that rarely share the same table: interpretable Machine Learning, offensive & defensive Cyber Security, and tactile Product Design.',
  secondaryParagraph:
    'Through hands-on cloud architecture, red-team labs, and active research across formal systems and deep learning security, I design digital sanctuaries that are mathematically verifiable, cryptographically resilient, and effortless to inhabit.',
  credentials: [
    {
      category: 'Academic Foundation',
      title: 'B.E. Computer Science & Engineering',
      issuerOrFocus: 'Formal Systems · Algorithms · Network Security',
      period: 'Undergraduate Honors Track',
      detail:
        'Focused coursework and independent research in cryptographic protocols, neural interpretability, compiler verification, and human-computer interaction (HCI).',
    },
    {
      category: 'Cloud & Architecture',
      title: 'Google Cloud & AWS Foundations',
      issuerOrFocus: 'Google Cloud · Amazon Web Services',
      period: 'Cloud & ML Infrastructure Labs',
      detail:
        'Hands-on deployment of isolated IAM topologies, reproducible ML training pipelines, encrypted VPC meshes, and automated vulnerability scanning.',
    },
    {
      category: 'Offensive & Defensive Labs',
      title: 'TryHackMe & Hack The Box Practitioner',
      issuerOrFocus: 'TryHackMe · Hack The Box',
      period: 'Active Security Labs',
      detail:
        'Practical penetration testing, threat modeling, privilege-escalation analysis, packet forensics, and zero-trust network hardening exercises.',
    },
    {
      category: 'Active Research',
      title: 'Formal Systems, ML & Security',
      issuerOrFocus: 'Adversarial Robustness · Explainable AI (XAI)',
      period: 'Ongoing Independent Research',
      detail:
        'Investigating certified defenses against vision perturbations, reinforcement learning policy auditing, and readable threat-telemetry interfaces.',
    },
  ] as CredentialItem[],
};

export const PRACTICE_PILLARS: PracticePillar[] = [
  {
    id: 'pillar-ml',
    index: '01',
    discipline: 'Machine Learning',
    title: 'Interpretable & Resilient Intelligence',
    description:
      'Building Deep Learning, Computer Vision, and Reinforcement Learning pipelines engineered to remain transparent and calibrated even under adversarial shift.',
    capabilities: [
      'Adversarial Robustness',
      'Explainable AI (XAI)',
      'Deep Learning',
      'Reinforcement Learning',
      'Computer Vision',
    ],
  },
  {
    id: 'pillar-cyber',
    index: '02',
    discipline: 'Cyber Security',
    title: 'Zero-Trust Systems & Threat Defense',
    description:
      'Designing defense-in-depth topologies grounded in formal threat modeling, rigorous vulnerability assessment, and verifiable cryptographic protocols.',
    capabilities: [
      'Zero-Trust Architecture',
      'Threat Modeling',
      'Network Security',
      'Cryptographic Protocols',
      'Vulnerability Assessment',
    ],
  },
  {
    id: 'pillar-design',
    index: '03',
    discipline: 'Design',
    title: 'Editorial Interfaces & Systems Craft',
    description:
      'Translating complex security and AI telemetry into tranquil, Apple-minimal design systems built with React, TypeScript, Tailwind CSS, and WCAG AA discipline.',
    capabilities: [
      'Design Systems',
      'Human-Computer Interaction (HCI)',
      'WCAG AA Accessibility',
      'React & TypeScript',
      'Tailwind CSS',
    ],
  },
];

export const KJV_VERSES: KjvVerse[] = [
  {
    id: 'prov-3-5-6',
    reference: 'Proverbs 3:5–6',
    text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
    theme: 'Wisdom & Direction',
    reflection: 'A compass for every architecture decision—anchoring ambition in humility.',
    motif: 'cherry_blossom',
    flowerName: 'Cherry Blossom',
  },
  {
    id: 'psalm-46-5',
    reference: 'Psalm 46:5',
    text: 'God is in the midst of her; she shall not be moved: God shall help her, and that right early.',
    theme: 'Unshakeable Fortress',
    reflection: 'True security begins not with perimeter walls, but with a steadfast foundation.',
    motif: 'glow_vine',
    flowerName: 'Glow-Berry Vine',
  },
  {
    id: 'col-3-23',
    reference: 'Colossians 3:23',
    text: 'And whatsoever ye do, do it heartily, as to the Lord, and not unto men;',
    theme: 'Diligent Craft',
    reflection: 'Care for every pixel, proof, and edge case—seen and unseen alike.',
    motif: 'pink_tulip',
    flowerName: 'Pink Tulip',
  },
  {
    id: 'prov-25-2',
    reference: 'Proverbs 25:2',
    text: 'It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.',
    theme: 'Scientific Inquiry',
    reflection: 'The joy of machine learning interpretability and uncovering hidden patterns.',
    motif: 'lily_valley',
    flowerName: 'Lily of the Valley',
  },
  {
    id: 'isa-40-31',
    reference: 'Isaiah 40:31',
    text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
    theme: 'Enduring Renewal',
    reflection: 'Patient iteration in research, red-teaming, and thoughtful system design.',
    motif: 'spore_blossom',
    flowerName: 'Spore Blossom',
  },
  {
    id: '1cor-14-40',
    reference: '1 Corinthians 14:40',
    text: 'Let all things be done decently and in order.',
    theme: 'Harmony & Order',
    reflection: 'The timeless principle behind clean typography, zero-trust clarity, and calm UX.',
    motif: 'azalea',
    flowerName: 'Flowering Azalea',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aegis-vision',
    indexNumber: '01',
    title: 'Aegis Vision Sanctuary',
    subtitle: 'Adversarial Robustness & Explainable Computer Vision Pipeline',
    discipline: 'Machine Learning',
    year: '2026',
    role: 'AI/ML Engineer & Research Lead',
    summary:
      'A certified defense framework protecting critical medical and autonomous Computer Vision models against imperceptible L-infinity adversarial perturbations while rendering crisp Explainable AI (XAI) saliency maps.',
    fullBleedImage: './images/project-ml.jpg',
    fallbackGradient: 'linear-gradient(135deg, #FAF7F2 0%, #F4DCE0 52%, #DCE7DC 100%)',
    surfaceTone: 'light',
    keywords: [
      'Adversarial Robustness',
      'Explainable AI (XAI)',
      'Deep Learning',
      'Computer Vision',
    ],
    metrics: [
      {
        label: 'Certified Accuracy',
        value: '94.2%',
        context: 'Under PGD-40 adversarial threat evaluation',
      },
      {
        label: 'False Positive Drift',
        value: '-63%',
        context: 'Compared to uncalibrated baseline ResNet',
      },
      {
        label: 'Inference Latency',
        value: '11.4 ms',
        context: 'Single-frame attribution on edge GPU',
      },
    ],
    architectureNotes: [
      'Combines randomized smoothing with Lipschitz-constrained residual blocks to bound worst-case gradient manipulation.',
      'Integrates layer-wise relevance propagation so human reviewers inspect exact spatial attribution regions prior to clinical or safety sign-off.',
      'Trained across reproducible multi-seed PyTorch workflows with automated boundary stress tests.',
    ],
    craftAndSecurityNotes: [
      'Threat model assumes white-box gradient access and physical-patch spoofing attacks.',
      'Paired with a calm porcelain XAI inspection canvas adhering to WCAG AA contrast standards.',
    ],
    outcomeQuote: {
      quote:
        'Before Aegis, our vision classifier failed silently on subtle contrast shifts; after integrating certified smoothing and spatial attribution, model audits dropped from hours to minutes.',
      author: 'Dr. Hannah Lindqvist',
      role: 'Principal Applied Scientist',
      organization: 'Nordic Vision Research Lab (Placeholder)',
    },
    linkedVerseId: 'prov-25-2',
    // TODO: Replace with your real project repository and live demo URL
    repoUrl: 'https://github.com/christinamoses/aegis-vision-sanctuary',
    liveUrl: 'https://github.com/christinamoses',
  },
  {
    id: 'bastion-zerotrust',
    indexNumber: '02',
    title: 'Bastion Zero-Trust Mesh',
    subtitle: 'Cryptographic Protocol Verification & Threat Modeling Platform',
    discipline: 'Cyber Security',
    year: '2026',
    role: 'Cyber Security Researcher & Systems Architect',
    summary:
      'An end-to-end Zero-Trust Architecture blueprint and automated vulnerability assessment workbench combining mutual ephemeral attestation, network micro-segmentation, and formal cryptographic protocol checks.',
    fullBleedImage: './images/project-cyber.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1E2420 0%, #2C332D 55%, #4A3E28 100%)',
    surfaceTone: 'dark',
    keywords: [
      'Zero-Trust Architecture',
      'Threat Modeling',
      'Network Security',
      'Cryptographic Protocols',
      'Vulnerability Assessment',
    ],
    metrics: [
      {
        label: 'Lateral Blast Radius',
        value: '0 Nodes',
        context: 'Verified across simulated TryHackMe / HTB pivot drills',
      },
      {
        label: 'Handshake Overhead',
        value: '1.8 ms',
        context: 'Post-authentication ephemeral key rotation',
      },
      {
        label: 'Policy Coverage',
        value: '100%',
        context: 'Automated STRIDE threat-graph assertions',
      },
    ],
    architectureNotes: [
      'Enforces short-lived hardware-bound mTLS identities per microservice call with zero implicit subnet trust.',
      'Continuously maps attack paths against formal STRIDE threat models to flag privilege-escalation edges before deployment.',
      'Tested across hardened AWS & Google Cloud VPC sandboxes using real packet capture replays.',
    ],
    craftAndSecurityNotes: [
      'Cryptographic state machine verified against replay, downgrade, and timing side-channel vectors.',
      'Replaces noisy alert walls with prioritized, human-readable remediation sequences.',
    ],
    outcomeQuote: {
      quote:
        'Transitioning from perimeter firewall rules to Bastion’s identity-first mesh eliminated lateral pivot paths during our quarterly red-team assessment.',
      author: 'Marcus Vance',
      role: 'Staff Security Engineer',
      organization: 'Kestrel Infrastructure Group (Placeholder)',
    },
    linkedVerseId: 'psalm-46-5',
    // TODO: Replace with your real project repository and live demo URL
    repoUrl: 'https://github.com/christinamoses/bastion-zerotrust-mesh',
    liveUrl: 'https://github.com/christinamoses',
  },
  {
    id: 'florilegium-ui',
    indexNumber: '03',
    title: 'Florilegium Design System',
    subtitle: 'WCAG AA Botanical Monograph Interface Architecture',
    discipline: 'Design',
    year: '2025',
    role: 'Product & Systems Designer',
    summary:
      'A royal, Apple-minimalist Design System built in React, TypeScript, and Tailwind CSS—uniting editorial serif pacing, strict WCAG AA contrast tokens, and Human-Computer Interaction (HCI) ergonomics for technical tools.',
    fullBleedImage: './images/project-design.jpg',
    fallbackGradient: 'linear-gradient(135deg, #FAF7F2 0%, #F4DCE0 65%, #E5DDD1 100%)',
    surfaceTone: 'light',
    keywords: [
      'Design Systems',
      'Human-Computer Interaction (HCI)',
      'WCAG AA Accessibility',
      'React & TypeScript',
      'Tailwind CSS',
    ],
    metrics: [
      {
        label: 'Contrast Compliance',
        value: '100% AA+',
        context: 'Automated audit across 48 surface & ink tokens',
      },
      {
        label: 'UI Delivery Speed',
        value: '2.4x',
        context: 'Faster feature assembly across 3 engineering teams',
      },
      {
        label: 'Bundle Footprint',
        value: '14.2 kB',
        context: 'Zero-runtime-bloat gzipped component primitives',
      },
    ],
    architectureNotes: [
      'Tokenized around a disciplined 60-30-10 warm alabaster, blush, sage, and antique brass color architecture.',
      'Built keyboard-first primitives (roving tabindex, focus restoration, reduced-motion hooks) in strict TypeScript.',
      'Eliminates pill clutter and noisy dashboard chrome in favor of typographic hierarchy and spatial rhythm.',
    ],
    craftAndSecurityNotes: [
      'Validated through HCI cognitive-load testing with security analysts and ML researchers.',
      'Every interactive surface honors >= 44px touch targets and deterministic screen-reader announcements.',
    ],
    outcomeQuote: {
      quote:
        'Florilegium transformed our dense analytical suite from an intimidating wall of boxes into an interface engineers genuinely enjoy opening every morning.',
      author: 'Elena Rostova',
      role: 'VP of Product Design',
      organization: 'Atelier Systems Studio (Placeholder)',
    },
    linkedVerseId: '1cor-14-40',
    // TODO: Replace with your real project repository and live demo URL
    repoUrl: 'https://github.com/christinamoses/florilegium-design-system',
    liveUrl: 'https://github.com/christinamoses',
  },
  {
    id: 'sentinel-rl',
    indexNumber: '04',
    title: 'Sentinel Policy Guardian',
    subtitle: 'Reinforcement Learning Autonomous Intrusion Containment',
    discipline: 'Machine Learning',
    year: '2025',
    role: 'ML & Cyber Security Researcher',
    summary:
      'A safe Reinforcement Learning agent trained in simulated cyber ranges to isolate anomalous network flows in sub-second windows without severing legitimate production traffic.',
    fullBleedImage: './images/hero-sanctuary.jpg',
    fallbackGradient: 'linear-gradient(135deg, #DCE7DC 0%, #FAF7F2 55%, #F4DCE0 100%)',
    surfaceTone: 'light',
    keywords: [
      'Reinforcement Learning',
      'Network Security',
      'Explainable AI (XAI)',
      'Threat Modeling',
    ],
    metrics: [
      {
        label: 'Mean Time to Isolate',
        value: '380 ms',
        context: 'Measured on synthetic multi-host attack graphs',
      },
      {
        label: 'Legitimate Uptime',
        value: '99.94%',
        context: 'Zero unintended quarantine of core services',
      },
      {
        label: 'Policy Auditability',
        value: '100%',
        context: 'Human-readable reward & action trace logs',
      },
    ],
    architectureNotes: [
      'Applies constrained policy optimization so autonomous containment actions never violate service-availability invariants.',
      'Pairs state-value attribution with operator-in-the-loop override controls designed in React and TypeScript.',
    ],
    craftAndSecurityNotes: [
      'Evaluated against multi-stage reconnaissance and credential-stuffing playbooks.',
      'Hardened against reward-poisoning telemetry injection.',
    ],
    outcomeQuote: {
      quote:
        'Sentinel bridged the gap between research-grade reinforcement learning and what security operations teams actually trust during live incidents.',
      author: 'Devon Brooks',
      role: 'Director of Threat Engineering',
      organization: 'Veritas Cyber Defense (Placeholder)',
    },
    linkedVerseId: 'col-3-23',
    // TODO: Replace with your real project repository and live demo URL
    repoUrl: 'https://github.com/christinamoses/sentinel-policy-guardian',
    liveUrl: 'https://github.com/christinamoses',
  },
];
