import { AnimateIn } from "./animate-in";

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 62 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M-1.938e-06 44.499C-1.207e-06 61.29 8.971 72.026 13.489 76.412C26.628 89.211 45.921 92.319 62 85.419L62 3.579C56.551 1.241 50.587 2.139e-06 44.489 2.406e-06C19.917 3.484e-06 -3.009e-06 19.922 -1.938e-06 44.499ZM44.489 53.969C39.281 53.969 35.025 49.752 35.025 44.499C35.025 39.269 39.26 35.033 44.489 35.033C49.687 35.033 53.957 39.241 53.957 44.499C53.957 49.749 49.694 53.969 44.489 53.969ZM53.957 23.576L53.957 29.764C51.135 27.945 47.88 26.985 44.489 26.985C34.818 26.985 26.979 34.826 26.979 44.499C26.979 54.173 34.817 62.014 44.489 62.014C47.873 62.014 51.13 61.056 53.957 59.234L53.957 65.426C51.022 66.758 47.794 67.461 44.489 67.461C31.811 67.461 21.536 57.173 21.536 44.499C21.536 31.818 31.811 21.541 44.489 21.541C47.797 21.541 51.025 22.245 53.957 23.576ZM53.957 9.296L53.957 14.969C34.078 8.536 13.489 23.455 13.489 44.499C13.489 61.621 27.371 75.506 44.489 75.506C47.684 75.506 50.918 75.013 53.957 74.029L53.957 79.702C50.866 80.541 47.612 80.95 44.489 80.95C24.369 80.95 8.047 64.624 8.047 44.499C8.047 24.366 24.361 8.049 44.489 8.049C47.601 8.049 50.855 8.454 53.957 9.296Z"
        fill="#0038FF"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="ml-2"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="#0038FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    title: "Ideas & Status Board",
    description:
      "Track ideas from NEW through UNDER_REVIEW, PLANNED, IN_PROGRESS to DONE. View as list, kanban, or timeline. Internal voting, file attachments, and threaded comments on every idea.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "RICE Scoring",
    description:
      "Three of four RICE dimensions are auto-computed. Reach from ARR-weighted company tiers, Impact from strategic objectives, and Confidence from votes and feedback signals. You only set Effort.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Company & Tier Tracking",
    description:
      "Register customers with ARR tiers and weighted scoring. Incoming feedback auto-links to companies by email domain. Bulk import via CSV. Reach updates in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C22.99 17.71 22.17 16.56 21 16.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13C17.17 3.56 18 4.71 18 6C18 7.29 17.17 8.44 16 8.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strategic Objectives",
    description:
      "Define your product goals and link ideas with LOW, MEDIUM, or HIGH impact levels. Impact score auto-updates as links change. RICE scores recalculate automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Public Roadmap",
    description:
      "Share a customer-facing roadmap with configurable visible statuses. Enable public voting, a feedback submission form, and follower notifications. No login required for voters.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Feedback Inbox",
    description:
      "Collect feedback from customers via a public form or internal submissions. Triage, link to existing ideas, and convert into actionable work. Feedback count feeds Confidence scoring.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Roadmap Planning",
    description:
      "Plan in monthly or quarterly periods with a timeline view. Choose RICE auto-scoring, MoSCoW categories, or fully custom drag-and-drop prioritization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Changelog",
    description:
      "Versioned release notes with rich text, linked to delivered ideas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Notifications",
    description:
      "In-app notification center and email alerts for comments, @mentions, status changes, assignments, and more. Per-type, per-channel preferences for every team member.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tasks & Assignments",
    description:
      "Break ideas into actionable tasks with assignees and due dates. A personal My Tasks view shows every open task assigned to you, sorted by deadline.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Comments & Reactions",
    description:
      "Threaded discussions on every idea with @mentions and emoji reactions. Mentioned teammates get notified instantly via email and in-app.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tags & Permissions",
    description:
      "Organize ideas with colored tags and filter by theme. Four role levels from Viewer to Owner give you fine-grained control over who can do what.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Capture ideas & feedback",
    description:
      "Collect ideas from your team and let customers submit feedback directly via a public form. No account needed. Every piece of input is stored, searchable, and ready to act on.",
  },
  {
    number: "2",
    title: "Score with RICE, automatically",
    description:
      "Auto computes Reach, Impact, and Confidence from real signals: linked company ARR tiers, strategic objective scores, upvotes, and feedback volume. You only set Effort.",
  },
  {
    number: "3",
    title: "Plan on a roadmap",
    description:
      "Assign ideas to monthly or quarterly planning periods. Your team has one clear, living view of what's coming. Not a stale slide deck.",
  },
  {
    number: "4",
    title: "Communicate decisions publicly",
    description:
      "Share a public roadmap with your customers. Post updates, celebrate shipped features with a versioned changelog, and keep your audience informed. No extra work.",
  },
];

const included = [
  "Unlimited ideas, feedback & changelog",
  "Unlimited team members",
  "Public roadmap & feedback form",
  "RICE, MoSCoW & custom prioritization",
  "In-app & email notifications",
  "Tasks, comments & file attachments",
  "Company tracking with CSV import",
  "Role-based permissions",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calibrato",
  url: "https://calibrato.app",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Turn customer feedback, company signals, and team input into a clear, data driven roadmap. RICE scoring with automatic signal computation.",
  offers: {
    "@type": "Offer",
    price: "5",
    priceCurrency: "EUR",
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    availability: "https://schema.org/InStock",
  },
  aggregateRating: undefined,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Calibrato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calibrato is a product prioritization tool for B2B SaaS teams. It turns customer feedback, company signals, and team input into a clear, data driven roadmap using RICE scoring with automatic signal computation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Calibrato cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calibrato costs €5 per workspace per month, or €50 per workspace per year (saving 17%). All features are included with no per-seat pricing. A 7-day free trial is available with no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "What is RICE scoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RICE scoring is a prioritization framework based on Reach, Impact, Confidence, and Effort. Calibrato auto-computes Reach, Impact, and Confidence from real signals like linked company ARR tiers, strategic objective scores, upvotes, and feedback volume. You only set Effort.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Nav */}
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4 md:py-5 max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 md:h-7 w-auto" />
          <span className="text-base md:text-lg font-semibold tracking-tight text-foreground">
            calibrato
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <a href="https://calibrato.app/sign-in" className="text-sm md:text-[15px] text-gray-600">Sign in</a>
          <a
            href="https://calibrato.app/sign-up"
            className="flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-blue text-white text-sm md:text-[15px] font-medium rounded-lg"
          >
            Start free trial
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center px-5 md:px-10 lg:px-20 pt-16 md:pt-24 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[100px] gap-6 md:gap-8 max-w-[1400px] mx-auto w-full">
        <AnimateIn>
          <div className="flex items-center px-3 md:px-4 py-1.5 rounded-full border border-gray-200 gap-2">
            <span className="text-xs md:text-sm font-medium text-blue">New</span>
            <span className="text-xs md:text-sm text-gray-500">
              RICE scoring with automatic signal computation
            </span>
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h1 className="text-[36px] md:text-[50px] lg:text-[64px] font-bold text-foreground text-center leading-[40px] md:leading-[54px] lg:leading-[68px] tracking-[-0.035em] max-w-[800px]">
            Prioritize what matters. Ship what counts.
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center leading-7 md:leading-8 max-w-[600px]">
            Turn customer feedback, company signals, and team input into a clear,
            data driven roadmap. No gut feelings required.
          </p>
        </AnimateIn>
        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
            <a
              href="https://calibrato.app/sign-up"
              className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-blue text-white text-base font-medium rounded-[10px] animate-gentle-pulse"
            >
              Start free trial
              <ArrowIcon />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 rounded-[10px] border border-gray-300 text-base font-medium text-foreground"
            >
              See how it works
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* Problem */}
      <div className="bg-gray-50 w-full">
      <section className="flex flex-col px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] gap-8 md:gap-12 max-w-[1400px] mx-auto">
        <AnimateIn>
          <div className="flex flex-col gap-4 md:gap-5 max-w-[680px]">
            <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
              The problem
            </span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[34px] md:leading-[42px] lg:leading-[50px] tracking-[-0.03em]">
              Product prioritization is broken
            </h2>
          </div>
        </AnimateIn>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {[
            {
              num: "01",
              title: "Decisions by gut feeling",
              desc: "Teams rely on instinct and the loudest voice in the room instead of data.",
            },
            {
              num: "02",
              title: "Spreadsheets drift out of sync",
              desc: "Roadmaps become static slides that nobody trusts or references.",
            },
            {
              num: "03",
              title: '"Why is this on the roadmap?"',
              desc: "Stakeholders can\u2019t see the rationale, eroding confidence in product decisions.",
            },
          ].map((item, i) => (
            <AnimateIn
              key={item.num}
              delay={i * 100}
              className="flex-1"
            >
              <div className="flex flex-col gap-3 p-6 md:p-8 bg-white rounded-xl h-full">
                <span className="text-[28px] font-light text-gray-300 tracking-tight">
                  {item.num}
                </span>
                <span className="text-[17px] font-semibold text-foreground leading-6">
                  {item.title}
                </span>
                <span className="text-[15px] text-gray-500 leading-6">
                  {item.desc}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="flex flex-col items-center px-5 md:px-10 lg:px-20 pt-16 md:pt-24 lg:pt-[120px] pb-6 gap-4 md:gap-5 scroll-mt-20 max-w-[1400px] mx-auto w-full">
        <AnimateIn>
          <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
            How it works
          </span>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[34px] md:leading-[42px] lg:leading-[50px] tracking-[-0.03em] text-center max-w-[700px]">
            From raw signal to shipped feature
          </h2>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="text-base md:text-lg text-gray-500 leading-7 text-center max-w-[540px]">
            Calibrato replaces the guesswork with a structured, signal driven
            workflow. Your team always knows what to build next, and why.
          </p>
        </AnimateIn>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-5 md:px-10 lg:px-20 pt-8 md:pt-12 pb-16 md:pb-20 lg:pb-[120px] max-w-[1400px] mx-auto w-full">
        {steps.map((step, i) => (
          <AnimateIn key={step.number} delay={i * 100}>
            <div className="flex flex-col gap-4 p-6 md:p-10 border border-gray-200 rounded-2xl h-full">
              <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-blue-light">
                <span className="text-base font-semibold text-blue">
                  {step.number}
                </span>
              </div>
              <span className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
                {step.title}
              </span>
              <span className="text-[15px] text-gray-500 leading-6">
                {step.description}
              </span>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* Features */}
      <div className="bg-gray-50 w-full">
      <section className="flex flex-col px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] gap-10 md:gap-16 max-w-[1400px] mx-auto">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-5 max-w-[520px]">
              <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                Features
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[34px] md:leading-[42px] lg:leading-[50px] tracking-[-0.03em]">
                Everything your product team needs
              </h2>
            </div>
            <p className="text-base text-gray-500 leading-[26px] max-w-[380px] md:text-right">
              One tool for the entire lifecycle. From capturing a raw idea to
              celebrating a shipped feature.
            </p>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 75}>
              <div className="flex flex-col gap-3.5 p-6 md:p-8 bg-white rounded-[14px] h-full">
                <div className="text-blue">{feature.icon}</div>
                <span className="text-[17px] font-semibold text-foreground">
                  {feature.title}
                </span>
                <span className="text-[15px] text-gray-500 leading-[23px]">
                  {feature.description}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
      </div>

      {/* Pricing */}
      <section className="flex flex-col items-center px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[120px] gap-10 md:gap-14 max-w-[1400px] mx-auto w-full">
        <AnimateIn>
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
              Pricing
            </span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[34px] md:leading-[42px] lg:leading-[50px] tracking-[-0.03em] text-center">
              Simple, honest pricing
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-7 text-center">
              One plan. All features. Pay per workspace.
            </p>
          </div>
        </AnimateIn>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-[800px]">
          <div className="flex flex-col gap-6 flex-1 p-6 md:p-10 border border-gray-200 rounded-2xl">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.05em]">
                Monthly
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  &euro;5
                </span>
                <span className="text-sm md:text-base text-gray-400">
                  / workspace / month
                </span>
              </div>
            </div>
            <a
              href="https://calibrato.app/sign-up"
              className="flex items-center justify-center py-3.5 px-7 border border-gray-300 rounded-[10px] text-[15px] font-medium text-foreground"
            >
              Start free trial
            </a>
          </div>

          <div className="flex flex-col gap-6 flex-1 p-6 md:p-10 border-2 border-blue rounded-2xl relative">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-blue rounded-md">
              <span className="text-xs font-semibold text-white">
                SAVE 17%
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.05em]">
                Annual
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  &euro;50
                </span>
                <span className="text-sm md:text-base text-gray-400">
                  / workspace / year
                </span>
              </div>
            </div>
            <a
              href="https://calibrato.app/sign-up"
              className="flex items-center justify-center py-3.5 px-7 bg-blue rounded-[10px] text-[15px] font-medium text-white animate-gentle-pulse"
            >
              Start free trial
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 max-w-[800px] w-full">
          <span className="text-[15px] font-semibold text-foreground">
            Everything included. No feature tiers. No per seat pricing.
          </span>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 gap-x-10">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-400">
            7 day free trial. No credit card required.
          </span>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-foreground w-full">
      <section className="flex flex-col items-center px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[120px] gap-6 md:gap-8 max-w-[1400px] mx-auto">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[38px] md:leading-[48px] lg:leading-[56px] tracking-[-0.03em] text-center max-w-[600px]">
            Ready to build the right thing?
          </h2>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="text-base md:text-lg text-gray-400 leading-7 text-center max-w-[480px]">
            Whether you&apos;re a solo PM or a growing team, Calibrato gives you
            one place to capture, score, plan, and communicate.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://calibrato.app/sign-up"
              className="flex items-center px-7 py-3.5 bg-blue text-white text-base font-medium rounded-[10px] animate-gentle-pulse"
            >
              Start your free trial
              <ArrowIcon />
            </a>
            <span className="text-sm text-gray-500">
              No credit card required. 7 day free trial.
            </span>
          </div>
        </AnimateIn>
      </section>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-10 lg:px-20 py-6 md:py-8 border-t border-gray-200 max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <Logo className="h-5 w-auto" />
          <span className="text-sm font-medium text-foreground">calibrato</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="https://calibrato.app/privacy" className="text-sm text-gray-500">Privacy</a>
          <a href="https://calibrato.app/terms" className="text-sm text-gray-500">Terms</a>
        </div>
        <span className="text-[13px] text-gray-400">
          &copy; {new Date().getFullYear()} Calibrato
        </span>
      </footer>
    </div>
  );
}
