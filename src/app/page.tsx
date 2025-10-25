import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Rocket,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const stats = [
  { label: "Average ROAS", value: "5.4x" },
  { label: "Campaigns Launched", value: "320+" },
  { label: "Client Retention", value: "92%" },
];

const services = [
  {
    title: "Demand Generation",
    description:
      "Pipeline-first strategies combining paid search, social, and intent data to capture in-market buyers fast.",
    icon: Rocket,
  },
  {
    title: "Search Visibility",
    description:
      "Technical SEO, content acceleration, and schema optimization built to outrank competitors and own keywords.",
    icon: Search,
  },
  {
    title: "Lifecycle Automation",
    description:
      "High-converting email, SMS, and onboarding flows to nurture leads and unlock expansion revenue.",
    icon: Users,
  },
  {
    title: "Brand Systems",
    description:
      "Narrative positioning, conversion design, and CRO playbooks that transform traffic into loyal customers.",
    icon: Sparkles,
  },
];

const caseStudies = [
  {
    industry: "Luxury Real Estate",
    result: "212% lead growth in 90 days",
    summary:
      "From stale listings to a dynamic omnichannel campaign, driving qualified buyers with data-backed storytelling.",
  },
  {
    industry: "SaaS Enablement",
    result: "5x pipeline velocity",
    summary:
      "Scaled paid search and partner co-marketing with attribution clarity, revealing the highest-converting paths.",
  },
  {
    industry: "Lifestyle DTC",
    result: "$1.8M incremental revenue",
    summary:
      "Rebuilt lifecycle automation and creative testing to unlock repeat buyers and decrease CAC by 34%.",
  },
];

const testimonials = [
  {
    quote:
      "Dream Finds rebuilt our entire acquisition engine. Their team plugged straight into our systems and delivered clarity we never had.",
    name: "Sasha Patel",
    role: "VP Growth, Northbrook Homes",
  },
  {
    quote:
      "From strategy to execution, they moved faster than any agency we’ve hired. Our board now expects Dream Finds insights in every report.",
    name: "Evan Wright",
    role: "Founder, RevLoop SaaS",
  },
];

const insights = [
  {
    title: "The 7 Signals That Predict Customer Lifetime Value",
    tag: "Thought Leadership",
  },
  {
    title: "How Luxury Brands Win Organic Search in 2024",
    tag: "SEO Playbook",
  },
  {
    title: "Creative Testing Sprints That Actually Ship Learnings",
    tag: "Growth Ops",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[540px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-[120px]" />
        <div className="absolute left-10 top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <header className="relative">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-900">
              DF
            </span>
            Dream Finds Company
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Case Studies
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-900 transition hover:bg-slate-200"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-20">
          <div className="grid gap-12 md:grid-cols-[1.25fr,1fr] md:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/80 px-4 py-1 text-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                From vision to verified revenue
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Digital marketing sprints engineered for ambitious teams ready
                to scale.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Dream Finds Company partners with category-defining brands to
                architect full-funnel growth systems—blending strategic clarity,
                performance creative, and relentless experimentation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Schedule a strategy call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500/80"
                >
                  Explore capabilities
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                  >
                    <div className="text-3xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-8 translate-x-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/80 via-indigo-500/40 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800/40 bg-slate-900/60 p-8 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="uppercase tracking-wide">Growth Dashboard</span>
                  <span className="inline-flex items-center gap-2 text-emerald-300">
                    <ArrowRight className="h-3 w-3" />
                    Live Sync
                  </span>
                </div>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Acquisition Efficiency",
                      value: "38% CAC reduction",
                    },
                    {
                      title: "High-Intent Pipeline",
                      value: "124 SQLs / month",
                    },
                    {
                      title: "Retention Momentum",
                      value: "68% repeat revenue",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-5"
                    >
                      <div className="text-sm font-medium text-slate-300">
                        {item.title}
                      </div>
                      <div className="mt-3 text-2xl font-semibold text-white">
                        {item.value}
                      </div>
                      <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-24 pb-32">
        <section id="services" className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Growth engines built to outperform.
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">
                Every engagement is designed around measurable impact—connecting
                insight, creativity, and automation into a single operating
                system.
              </p>
            </div>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              View methodology
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-3xl transition group-hover:bg-fuchsia-500/20" />
                <service.icon className="h-10 w-10 text-fuchsia-300" />
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-300">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-200">
                  Book a discovery session
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-20 shadow-[0_0_80px_-40px_rgba(45,212,191,0.5)]"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Case snapshots that redefine baselines.
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">
                Dream Finds builds bespoke playbooks for each vertical, pairing
                qualitative insight with predictive analytics to reveal demand
                you didn&apos;t know existed.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Target className="h-5 w-5 text-fuchsia-300" />
              Attribution clarity baked into every engagement.
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.industry}
                className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.industry}
                </div>
                <div className="mt-4 text-2xl font-semibold text-white">
                  {item.result}
                </div>
                <p className="mt-4 text-slate-300">{item.summary}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-200">
                  View full story
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-[1.1fr,0.9fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                A sprint-based partnership model.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Every month unlocks a new layer of insight. Transparent standups,
                co-piloted experimentation, and dashboards that put your team in
                control.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: BarChart3,
                    title: "Intelligence Layer",
                    description:
                      "Opportunity mapping, TAM analysis, and KPI alignment customized for your organization.",
                  },
                  {
                    icon: Megaphone,
                    title: "Activation Layer",
                    description:
                      "Creative systems, channel rollout, and media orchestration executed with rapid feedback cycles.",
                  },
                  {
                    icon: Users,
                    title: "Enablement Layer",
                    description:
                      "Marketing ops sprints that integrate attribution, CRM, and automation loops across teams.",
                  },
                  {
                    icon: Sparkles,
                    title: "Optimization Layer",
                    description:
                      "Conversion design and heuristic audits delivered alongside prioritized growth experiments.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6"
                  >
                    <item.icon className="h-8 w-8 text-fuchsia-300" />
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-10">
              <h3 className="text-xl font-semibold text-white">
                What partnering with Dream Finds feels like
              </h3>
              <ul className="mt-6 space-y-5 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                  Senior strategists embedded across marketing, revenue, and
                  product squads.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                  Weekly growth reviews with actionable dashboards and
                  prioritized experiments.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                  Transparent forecasting models aligning marketing investment
                  with board-level outcomes.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                  Creative and analytics partners operating as one integrated
                  Dream Finds squad.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.5rem] border border-slate-800/60 bg-slate-900/60 p-12 md:p-16">
            <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Voices from our partners.
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Dream Finds relationships are built on shared ownership and
                  measurable outcomes. Here’s how leaders describe the impact.
                </p>
                <div className="mt-10 space-y-8">
                  {testimonials.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-8"
                    >
                      <p className="text-lg text-slate-100">“{item.quote}”</p>
                      <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-400">
                        {item.name} — {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-800/50 bg-slate-950/50 p-10">
                <h3 className="text-xl font-semibold text-white">
                  Growth diagnostics & opportunity mapping
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  We start every engagement with a comprehensive diagnostic
                  across demand, lifecycle, and revenue influence. Within two
                  weeks, your leadership team receives a prioritized roadmap.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-fuchsia-300">
                      01
                    </span>
                    Deep dive discovery with key stakeholders
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-fuchsia-300">
                      02
                    </span>
                    Channel, creative, and data audit with attribution clarity
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-fuchsia-300">
                      03
                    </span>
                    Sprint roadmap + revenue projections delivered to your team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Insights from the Dream Finds signal lab.
              </h2>
              <p className="mt-2 max-w-2xl text-lg text-slate-300">
                Explore frameworks our strategists use to keep clients ahead of
                shifting algorithms, markets, and buyer expectations.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              Browse library
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-200">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition group-hover:text-white">
                  Read the playbook
                  <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-20"
        >
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Let’s design your next growth chapter.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Tell us about your goals, data stack, and marketing ambitions.
                Our strategists will review within 24 hours.
              </p>
              <div className="mt-10 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-fuchsia-300">
                    GT
                  </span>
                  <div>
                    <div className="font-semibold text-white">
                      Growth Team Hotline
                    </div>
                    <div className="text-slate-400">growth@dreamfinds.co</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-fuchsia-300">
                    HQ
                  </span>
                  <div>
                    <div className="font-semibold text-white">
                      Global HQ
                    </div>
                    <div className="text-slate-400">
                      845 Mission Street, San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6 rounded-3xl border border-slate-800/50 bg-slate-950/60 p-10">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/30"
                />
              </div>
              <div>
                <label
                  htmlFor="goal"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
                >
                  Primary Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/30"
                >
                  <option>Scale paid acquisition</option>
                  <option>Build lifecycle automation</option>
                  <option>Elevate brand storytelling</option>
                  <option>Re-architect analytics</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="context"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
                >
                  Context
                </label>
                <textarea
                  id="context"
                  name="context"
                  rows={4}
                  placeholder="Share launch timelines, revenue targets, and current marketing stack."
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Submit enquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="text-xs text-slate-500">
                We respond within one business day. No fluff, just signal.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-white">
              Dream Finds Company
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Digital marketing partners for teams chasing category leadership.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dream Finds Company. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
