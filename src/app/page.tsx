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

/* ─── Showcase sections: alternating screenshot + text ─── */
const showcases = [
  {
    label: "Idea Management",
    title: "Organize and prioritize every idea",
    description:
      "Track ideas from inception to delivery with a powerful kanban board. Filter by status, assignee, tags, or department. Every card shows its RICE score so you always know what matters most.",
    image: "/screenshots/image-3.jpg",
    alt: "Calibrato projects kanban board with RICE scores",
    features: [
      "Kanban and list views",
      "Auto-computed RICE scores",
      "Tags, departments & filters",
      "Drag-and-drop prioritization",
    ],
  },
  {
    label: "Data-Driven Scoring",
    title: "RICE scoring that computes itself",
    description:
      "Three of four RICE dimensions are automatic. Reach from ARR-weighted company tiers, Impact from strategic objectives, Confidence from votes and feedback. You only set Effort.",
    image: "/screenshots/image-4.jpg",
    alt: "Calibrato project detail with RICE score breakdown",
    features: [
      "Auto-computed Reach, Impact & Confidence",
      "ARR-weighted company signals",
      "Strategic objective alignment",
      "Real-time score updates",
    ],
  },
  {
    label: "Roadmap Planning",
    title: "A living roadmap, not a slide deck",
    description:
      "Plan in monthly or quarterly periods with a visual timeline. Drag unplanned ideas onto the roadmap. Filter by team, objective, or label. Share a public version with customers.",
    image: "/screenshots/image-11.jpg",
    alt: "Calibrato roadmap timeline view with filter panel",
    features: [
      "Monthly & weekly views",
      "Drag-and-drop scheduling",
      "RICE, MoSCoW & custom modes",
      "Public roadmap sharing",
    ],
  },
  {
    label: "Customer Feedback",
    title: "Close the loop with customers",
    description:
      "Collect feedback via a public form, link it to ideas, and auto-match companies by email domain. Every piece of feedback feeds into Confidence scoring and helps you prioritize.",
    image: "/screenshots/image-12.jpg",
    alt: "Calibrato feedback inbox with linked ideas and companies",
    features: [
      "Public feedback form",
      "Auto-link to companies",
      "Triage & convert to ideas",
      "Public voting with email verification",
    ],
  },
  {
    label: "Reporting & Insights",
    title: "Track progress and budget allocation",
    description:
      "See project progress by status, department, or planning period. Track budget allocation across your roadmap. Drill into a sortable project table grouped by department or objective.",
    image: "/screenshots/image-8.jpg",
    alt: "Calibrato reporting dashboard with charts and metrics",
    features: [
      "Progress by status & department",
      "Budget tracking & allocation",
      "Task resolution trends",
      "Filterable project tables",
    ],
  },
  {
    label: "Notes & Collaboration",
    title: "Document decisions, not just ideas",
    description:
      "Rich notes linked to projects, departments, and participants. Meeting summaries, sprint retrospectives, and customer interviews. AI-powered document generation from project data.",
    image: "/screenshots/image-13.jpg",
    alt: "Calibrato notes with meeting sync and notifications",
    features: [
      "Rich text editor with auto-save",
      "Link to projects & departments",
      "AI-generated documents",
      "Meeting bot integration",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Capture ideas & feedback",
    description:
      "Collect ideas from your team and let customers submit feedback via a public form. Every piece of input is stored, searchable, and ready to act on.",
  },
  {
    number: "2",
    title: "Score with RICE, automatically",
    description:
      "Auto-computes Reach, Impact, and Confidence from real signals: company ARR tiers, strategic objectives, upvotes, and feedback volume. You only set Effort.",
  },
  {
    number: "3",
    title: "Plan on a roadmap",
    description:
      "Assign ideas to monthly or quarterly periods. Your team has one clear, living view of what's coming next. Not a stale slide deck.",
  },
  {
    number: "4",
    title: "Communicate publicly",
    description:
      "Share a public roadmap with customers. Post updates, celebrate shipped features with a changelog, and keep everyone informed.",
  },
];

const allFeatures = [
  {
    title: "Ideas & Status Board",
    description: "Kanban, list view, drag-and-drop, and six workflow statuses.",
  },
  {
    title: "RICE Scoring",
    description: "Auto-computed Reach, Impact, Confidence. You only set Effort.",
  },
  {
    title: "Company Tracking",
    description: "ARR-weighted tiers, domain auto-linking, and CSV import.",
  },
  {
    title: "Strategic Objectives",
    description: "Link ideas to goals with LOW/MEDIUM/HIGH impact levels.",
  },
  {
    title: "Public Roadmap",
    description: "Customer-facing roadmap with voting and feedback submission.",
  },
  {
    title: "Feedback Inbox",
    description: "Collect, triage, and convert customer feedback into ideas.",
  },
  {
    title: "Roadmap Planning",
    description: "Monthly/quarterly timeline with RICE, MoSCoW, or custom.",
  },
  {
    title: "Tasks & Assignments",
    description: "Break ideas into tasks with assignees, due dates, and recurrence.",
  },
  {
    title: "Comments & Reactions",
    description: "Threaded discussions with @mentions and emoji reactions.",
  },
  {
    title: "Departments",
    description: "Organize by team. Filter boards, roadmaps, and reports.",
  },
  {
    title: "Notifications",
    description: "In-app + email alerts for comments, mentions, and status changes.",
  },
  {
    title: "Real-Time Sync",
    description: "Instant updates across all browsers. No refresh needed.",
  },
  {
    title: "Reporting & Budgets",
    description: "Progress dashboards, budget tracking, and project tables.",
  },
  {
    title: "Notes & Documents",
    description: "Rich notes linked to projects with AI generation and meeting bots.",
  },
  {
    title: "Bug Tracking",
    description: "Report bugs via form, browser extension, or embeddable widget.",
  },
  {
    title: "Tags & Permissions",
    description: "Color-coded tags and four-level role-based access control.",
  },
  {
    title: "File Attachments",
    description: "Upload images and PDFs to projects and feedback. Up to 10 MB.",
  },
  {
    title: "Changelog",
    description: "Versioned release notes linked to delivered ideas.",
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
  "Departments & role-based permissions",
  "Real-time collaboration",
  "Reporting & budget tracking",
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── Nav ─── */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 md:h-7 w-auto" />
            <span className="text-base md:text-lg font-semibold tracking-tight text-foreground">
              calibrato
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-500 hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-500 hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://calibrato.app/sign-in" className="text-sm text-gray-600 hover:text-foreground transition-colors">
              Sign in
            </a>
            <a
              href="https://calibrato.app/sign-up"
              className="flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-blue text-white text-sm font-medium rounded-lg hover:bg-blue/90 transition-colors"
            >
              Start free trial
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero-gradient pt-28 md:pt-36 lg:pt-40 pb-0">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 gap-6 md:gap-8 max-w-[1400px] mx-auto w-full">
          <AnimateIn>
            <div className="flex items-center px-3 md:px-4 py-1.5 rounded-full border border-blue/15 bg-blue-50/60 gap-2 animate-float">
              <span className="flex h-2 w-2 rounded-full bg-blue" />
              <span className="text-xs md:text-sm font-medium text-blue">New</span>
              <span className="text-xs md:text-sm text-gray-600">
                AI-powered document generation & meeting bots
              </span>
            </div>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="text-[36px] md:text-[52px] lg:text-[68px] font-bold text-foreground text-center leading-[1.08] tracking-[-0.035em] max-w-[900px]">
              Prioritize what matters.{" "}
              <span className="gradient-text">Ship what counts.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 text-center leading-7 md:leading-8 max-w-[620px]">
              Turn customer feedback, company signals, and team input into a
              clear, data-driven roadmap. RICE scoring that computes itself.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
              <a
                href="https://calibrato.app/sign-up"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-blue text-white text-base font-medium rounded-[10px] animate-gentle-pulse hover:bg-blue/90 transition-colors"
              >
                Start free trial
                <ArrowIcon />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-[10px] border border-gray-200 text-base font-medium text-foreground hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                See how it works
              </a>
            </div>
          </AnimateIn>
          <AnimateIn delay={300}>
            <span className="text-sm text-gray-400">
              Free for 7 days. No credit card required.
            </span>
          </AnimateIn>
        </div>

        {/* Hero screenshot */}
        <div className="px-5 md:px-10 lg:px-20 pt-12 md:pt-16 lg:pt-20 max-w-[1400px] mx-auto w-full">
          <AnimateIn delay={400}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none" />
              <img
                src="/screenshots/image-1.jpg"
                alt="Calibrato dashboard overview with project stats, tasks, and roadmap"
                className="hero-screenshot w-full"
                loading="eager"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Social proof stats ─── */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24">
              {[
                { value: "18+", label: "Platform features" },
                { value: "100%", label: "Auto-computed RICE" },
                { value: "0", label: "Per-seat charges" },
                { value: "< 1 min", label: "Setup time" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="flex flex-col px-5 md:px-10 lg:px-20 gap-10 md:gap-14 max-w-[1400px] mx-auto">
          <AnimateIn>
            <div className="flex flex-col gap-4 md:gap-5 max-w-[680px]">
              <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                The problem
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.15] tracking-[-0.03em]">
                Product prioritization is broken
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
              <AnimateIn key={item.num} delay={i * 100}>
                <div className="flex flex-col gap-4 p-7 md:p-9 bg-gray-50 rounded-2xl h-full border border-gray-100">
                  <span className="text-[32px] font-light text-gray-200 tracking-tight font-mono">
                    {item.num}
                  </span>
                  <span className="text-lg font-semibold text-foreground leading-6">
                    {item.title}
                  </span>
                  <span className="text-[15px] text-gray-500 leading-6">
                    {item.desc}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Product showcases ─── */}
      <section id="features" className="scroll-mt-20">
        {showcases.map((showcase, idx) => (
          <div
            key={showcase.label}
            className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
          >
            <div className="flex flex-col px-5 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 gap-12 md:gap-16 max-w-[1400px] mx-auto">
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Text side */}
                <div className="flex flex-col gap-5 lg:w-[42%] shrink-0">
                  <AnimateIn>
                    <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                      {showcase.label}
                    </span>
                  </AnimateIn>
                  <AnimateIn delay={100}>
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-foreground leading-[1.15] tracking-[-0.03em]">
                      {showcase.title}
                    </h2>
                  </AnimateIn>
                  <AnimateIn delay={150}>
                    <p className="text-base md:text-[17px] text-gray-500 leading-7">
                      {showcase.description}
                    </p>
                  </AnimateIn>
                  <AnimateIn delay={200}>
                    <ul className="flex flex-col gap-3 pt-2">
                      {showcase.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckIcon />
                          <span className="text-[15px] text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimateIn>
                </div>

                {/* Screenshot side */}
                <AnimateIn delay={200} className="lg:flex-1 w-full">
                  <img
                    src={showcase.image}
                    alt={showcase.alt}
                    className="screenshot-frame w-full"
                    loading="lazy"
                  />
                </AnimateIn>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─── All features grid ─── */}
      <div className="grid-bg">
        <section className="flex flex-col px-5 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 gap-12 md:gap-16 max-w-[1400px] mx-auto">
          <AnimateIn>
            <div className="flex flex-col items-center gap-4 md:gap-5 text-center">
              <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                Full feature set
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.15] tracking-[-0.03em] max-w-[700px]">
                Everything your product team needs
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7 max-w-[540px]">
                One tool for the entire lifecycle. From capturing a raw idea to celebrating a shipped feature.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {allFeatures.map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 50}>
                <div className="feature-card flex flex-col gap-2.5 p-6 md:p-7 bg-white rounded-xl border border-gray-100 h-full">
                  <span className="text-[16px] font-semibold text-foreground">
                    {feature.title}
                  </span>
                  <span className="text-[14px] text-gray-500 leading-[22px]">
                    {feature.description}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </div>

      {/* ─── How it works ─── */}
      <section id="how-it-works" className="scroll-mt-20 bg-gray-50/70">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 pt-16 md:pt-24 lg:pt-32 pb-8 gap-4 md:gap-5 max-w-[1400px] mx-auto w-full">
          <AnimateIn>
            <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
              How it works
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.15] tracking-[-0.03em] text-center max-w-[700px]">
              From raw signal to shipped feature
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-base md:text-lg text-gray-500 leading-7 text-center max-w-[540px]">
              Calibrato replaces the guesswork with a structured, signal-driven
              workflow.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 px-5 md:px-10 lg:px-20 pt-8 md:pt-12 pb-16 md:pb-24 lg:pb-32 max-w-[1400px] mx-auto w-full">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 100}>
              <div className="flex flex-col gap-5 p-7 md:p-8 bg-white rounded-2xl border border-gray-100 h-full">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue step-glow">
                  <span className="text-base font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <span className="text-lg font-semibold text-foreground tracking-tight">
                  {step.title}
                </span>
                <span className="text-[15px] text-gray-500 leading-6">
                  {step.description}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── Extra screenshots strip ─── */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 gap-12 md:gap-16 max-w-[1400px] mx-auto w-full">
          <AnimateIn>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                See it in action
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.15] tracking-[-0.03em] max-w-[600px]">
                Built for how product teams actually work
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            <AnimateIn delay={0}>
              <div className="flex flex-col gap-4">
                <img
                  src="/screenshots/image-7.jpg"
                  alt="Companies tracking with ARR tiers and weighted scoring"
                  className="screenshot-frame w-full"
                  loading="lazy"
                />
                <div className="px-1">
                  <span className="text-[15px] font-semibold text-foreground">Company & Tier Tracking</span>
                  <p className="text-sm text-gray-500 mt-1">Register customers with ARR tiers and weighted scoring. CSV import included.</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="flex flex-col gap-4">
                <img
                  src="/screenshots/image-9.jpg"
                  alt="Reporting projects table grouped by department"
                  className="screenshot-frame w-full"
                  loading="lazy"
                />
                <div className="px-1">
                  <span className="text-[15px] font-semibold text-foreground">Project Reporting</span>
                  <p className="text-sm text-gray-500 mt-1">Drill into projects by department with budget, progress, and task completion.</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="flex flex-col gap-4">
                <img
                  src="/screenshots/image-5.jpg"
                  alt="Bug tracking kanban board with severity levels"
                  className="screenshot-frame w-full"
                  loading="lazy"
                />
                <div className="px-1">
                  <span className="text-[15px] font-semibold text-foreground">Bug Tracking</span>
                  <p className="text-sm text-gray-500 mt-1">Report and track bugs with severity levels. Browser extension and widget included.</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="flex flex-col gap-4">
                <img
                  src="/screenshots/image-10.jpg"
                  alt="Notes editor with rich text, linked projects, and participants"
                  className="screenshot-frame w-full"
                  loading="lazy"
                />
                <div className="px-1">
                  <span className="text-[15px] font-semibold text-foreground">Rich Notes Editor</span>
                  <p className="text-sm text-gray-500 mt-1">Meeting notes, retrospectives, and customer interviews linked to your projects.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="scroll-mt-20 bg-gray-50/70">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 gap-12 md:gap-14 max-w-[1400px] mx-auto w-full">
          <AnimateIn>
            <div className="flex flex-col items-center gap-4 md:gap-5">
              <span className="text-[13px] font-semibold text-blue uppercase tracking-[0.08em]">
                Pricing
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.15] tracking-[-0.03em] text-center">
                Simple, transparent pricing
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7 text-center max-w-[480px]">
                One plan. All features. No per-seat charges. Pay per workspace.
              </p>
            </div>
          </AnimateIn>

          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full max-w-[820px]">
            <AnimateIn delay={0} className="flex-1">
              <div className="flex flex-col gap-6 p-7 md:p-10 bg-white border border-gray-200 rounded-2xl h-full">
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
                  className="flex items-center justify-center py-3.5 px-7 border border-gray-200 rounded-[10px] text-[15px] font-medium text-foreground hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Start free trial
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={100} className="flex-1">
              <div className="pricing-highlight flex flex-col gap-6 p-7 md:p-10 bg-white rounded-2xl h-full relative">
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
                  className="flex items-center justify-center py-3.5 px-7 bg-blue rounded-[10px] text-[15px] font-medium text-white animate-gentle-pulse hover:bg-blue/90 transition-colors"
                >
                  Start free trial
                </a>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn>
            <div className="flex flex-col gap-5 max-w-[820px] w-full">
              <span className="text-[15px] font-semibold text-foreground">
                Everything included. No feature tiers. No per-seat pricing.
              </span>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 gap-x-10">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">
                7-day free trial. No credit card required.
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="dark-gradient">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 py-20 md:py-28 lg:py-36 gap-6 md:gap-8 max-w-[1400px] mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.12] tracking-[-0.03em] text-center max-w-[650px]">
              Ready to build the right thing?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-base md:text-lg text-gray-400 leading-7 text-center max-w-[500px]">
              Whether you&apos;re a solo PM or a growing team, Calibrato gives you
              one place to capture, score, plan, and communicate.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="flex flex-col items-center gap-5">
              <a
                href="https://calibrato.app/sign-up"
                className="flex items-center px-8 py-4 bg-blue text-white text-base font-medium rounded-[10px] animate-gentle-pulse hover:bg-blue/90 transition-colors"
              >
                Start your free trial
                <ArrowIcon />
              </a>
              <span className="text-sm text-gray-500">
                No credit card required. 7-day free trial.
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-gray-100">
        <div className="flex flex-col gap-8 px-5 md:px-10 lg:px-20 py-10 md:py-14 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <Logo className="h-6 w-auto" />
                <span className="text-base font-semibold text-foreground">calibrato</span>
              </div>
              <p className="text-sm text-gray-400 max-w-[280px]">
                Product prioritization for B2B SaaS teams. Turn signals into shipped features.
              </p>
            </div>
            <div className="flex gap-12 md:gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</span>
                <a href="#features" className="text-sm text-gray-500 hover:text-foreground transition-colors">Features</a>
                <a href="#how-it-works" className="text-sm text-gray-500 hover:text-foreground transition-colors">How it works</a>
                <a href="#pricing" className="text-sm text-gray-500 hover:text-foreground transition-colors">Pricing</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Legal</span>
                <a href="https://calibrato.app/privacy" className="text-sm text-gray-500 hover:text-foreground transition-colors">Privacy</a>
                <a href="https://calibrato.app/terms" className="text-sm text-gray-500 hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <span className="text-[13px] text-gray-400">
              &copy; {new Date().getFullYear()} Calibrato
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
