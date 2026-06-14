import {
  BellRing,
  Camera,
  EyeOff,
  Footprints,
  Lock,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PolicySectionItem = {
  title: string;
  paragraphs: string[];
};

/// 集中维护公开站的品牌文案，后续只需要改这一处即可同步首页、支持页和隐私页。
export const siteContent = {
  brandName: "PeekSentry",
  chineseName: "防窥哨兵",
  subtitle: "Desktop privacy protection for focused work on Mac.",
  heroDescription:
    "A native macOS privacy guard for sensitive desktop work. PeekSentry stays local, detects nearby risk signals, and reacts with a configurable privacy overlay, evidence snapshots, and low-disruption alerts.",
  storeBadge: "Offline-first · Native macOS · App Store ready",
  supportEmail: "support@your-domain.com",
  updatedAt: "2026-06-12",
  marketingHighlights: [
    "Local face-count awareness",
    "Optional footstep monitoring",
    "Screen dimming and blur overlay",
    "Evidence snapshots for review",
  ],
  features: [
    {
      title: "On-device detection",
      description:
        "Camera and microphone signals are processed locally so the App Store edition can stay offline-first with no account or backend dependency.",
      icon: ShieldCheck,
    },
    {
      title: "Fast privacy response",
      description:
        "Trigger a dimming + blur overlay, camouflage launch, and evidence capture when a shoulder-surfing risk is detected.",
      icon: EyeOff,
    },
    {
      title: "Configurable for real desks",
      description:
        "Tune face thresholds, overlay duration, screenshot retention, startup behavior, and mode switching for your own workspace.",
      icon: MonitorSmartphone,
    },
    {
      title: "Built for long sessions",
      description:
        "Native macOS architecture focuses on stability, lower overhead, and practical always-on monitoring during work hours.",
      icon: Sparkles,
    },
  ] satisfies FeatureItem[],
  supportFacts: [
    {
      label: "Support scope",
      value: "App Store build, installation guidance, permissions, and troubleshooting",
      icon: BellRing,
    },
    {
      label: "Platforms",
      value: "macOS desktop environments focused on productivity and privacy",
      icon: Camera,
    },
    {
      label: "Primary contact",
      value: "Update the support email before App Store submission",
      icon: Lock,
    },
  ],
  faq: [
    {
      question: "Why does PeekSentry ask for camera permission?",
      answer:
        "Camera access is used for local face-count based shoulder-surfing detection. The App Store edition does not depend on a cloud recognition backend.",
    },
    {
      question: "Why does PeekSentry ask for microphone permission?",
      answer:
        "Microphone access enables optional nearby footstep and approach awareness. Users can disable microphone monitoring at any time.",
    },
    {
      question: "Why is screen recording permission required?",
      answer:
        "Screen recording is used to capture evidence snapshots and to render the privacy overlay behavior correctly on the current display.",
    },
    {
      question: "Does the App Store version require an account?",
      answer:
        "No. The App Store release is designed to work offline-first without login, subscription syncing, or a remote backend.",
    },
    {
      question: "Where are evidence snapshots stored?",
      answer:
        "Snapshots are stored locally on the device and can be managed through the app's built-in retention settings.",
    },
  ] satisfies FAQItem[],
  policySections: [
    {
      title: "Overview",
      paragraphs: [
        "PeekSentry is designed as a native, privacy-focused macOS application for desktop anti-peek protection.",
        "The App Store edition is intended to operate locally and does not require user accounts, membership login, or cloud data processing to deliver core protection features.",
      ],
    },
    {
      title: "Permissions we use",
      paragraphs: [
        "Camera permission is used for local face-count based risk detection.",
        "Microphone permission is used for optional footstep and nearby activity awareness.",
        "Notification permission is used to deliver local alerts when the main window is not visible.",
        "Screen recording permission is used for screenshots, evidence capture, and privacy overlay related rendering.",
      ],
    },
    {
      title: "Data storage",
      paragraphs: [
        "Configuration values such as protection mode, thresholds, overlay settings, and screenshot retention are stored locally on the device.",
        "Evidence screenshots and alert history, when enabled, are stored locally and managed by the app according to user settings.",
      ],
    },
    {
      title: "No account requirement",
      paragraphs: [
        "The App Store build does not require a user account, does not provide membership login, and does not rely on a mandatory cloud backend for basic protection features.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For privacy-related questions, please contact the publisher through the support information provided on the support page.",
        "Replace the placeholder support email in this site before final public launch.",
      ],
    },
  ] satisfies PolicySectionItem[],
  screenshots: [
    {
      title: "Professional Mode",
      description:
        "A denser control center for tuning thresholds, overlay behavior, evidence management, and monitoring status.",
      src: "/screenshots/professional.png",
    },
    {
      title: "Simple Mode",
      description:
        "A focused quick-start experience for daily users who want fast protection with minimal setup.",
      src: "/screenshots/simple.png",
    },
    {
      title: "Onboarding",
      description:
        "A guided setup flow that helps users understand permissions and first-run protection strategy.",
      src: "/screenshots/onboarding.png",
    },
  ],
  links: {
    home: "/",
    support: "/support",
    privacy: "/privacy",
  },
};

export const marketingBullets = [
  { text: "Local monitoring", icon: Camera },
  { text: "Footstep awareness", icon: Footprints },
  { text: "Privacy overlay", icon: EyeOff },
  { text: "Offline-first", icon: ShieldCheck },
];
