import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { useScrollParallax, useScrollReveal } from "@/components/site/scroll-effects";
import { SectionHead } from "@/components/site/sections";

export const Route = createFileRoute("/work")({ head: () => ({ meta: [{ title: "Work | LGPSM" }] }), component: Work });

const plates = ["/assets/plates/p4-woman.png", "/assets/plates/p8-muses.png", "/assets/plates/p1-hermes.png", "/assets/plates/p7-adam.png", "/assets/plates/p2-scholars.png", "/assets/plates/p6-phone.png", "/assets/plates/p9-stylus.png", "/assets/plates/p3-scholar.png", "/assets/plates/p5-bust.png"];

type Project = { title: string; cat: string; blurb: string; stack: string; url: string; };

const categories: { title: string; lede: string; items: Project[] }[] = [
  {
    title: "AI & Agents",
    lede: "Runtimes, autonomous loops, MCP tooling and evaluation harnesses.",
    items: [
      { title: "Anomalithic", cat: "Agent runtime", blurb: "One open-core, model-agnostic AI agent runtime: MCP, skills, hooks, multi-agent and cross-session memory.", stack: "TypeScript · MCP", url: "https://github.com/zanni098/Anomalithic" },
      { title: "DuckTap", cat: "Dev tooling", blurb: "Tape any API to your agent in one command. A CLI factory that prints Python CLIs, MCP servers and skills.", stack: "Python · CLI", url: "https://github.com/zanni098/DuckTap" },
      { title: "BirdEye", cat: "Agent infrastructure", blurb: "Local-first mission control, collective memory and an MCP gateway for all your AI agent harnesses.", stack: "TypeScript", url: "https://github.com/zanni098/BirdEye" },
      { title: "startup-idea-validator", cat: "AI pipeline", blurb: "Startup validation pipeline for market critique, competitor mapping, risk scoring and experiment planning.", stack: "TypeScript · AI", url: "https://github.com/zanni098/startup-idea-validator" },
      { title: "ai-debate-arena", cat: "AI product", blurb: "Multi-agent debate simulator with Advocate, Skeptic, Judge, timed rounds and voteable transcripts.", stack: "TypeScript", url: "https://github.com/zanni098/ai-debate-arena" },
      { title: "prompt-ab-testing-platform", cat: "Evaluation", blurb: "Prompt evaluation harness with repeated comparisons, judge scoring, confidence intervals and cost estimates."", stack: "TypeScript", url: "https://github.com/zanni098/prompt-ab-testing-platform" },
    ],
  },
  {
    title: "Web & Creative",
    lede: "Interfaces, motion and creative coding with a cinematic hand.",
    items: [
      { title: "mcp-2099", cat: "Web / creative coding", blurb: "Retro-futuristic Year-2099 developer platform UI: React Three Fiber, custom GLSL shaders, GSAP and a bento dashboard.", stack: "TypeScript · R3F · GLSL", url: "https://github.com/zanni098/mcp-2099" },
      { title: "bumper-site", cat: "Landing page", blurb: "Landing page and sign-up for Bumper, free motion graphics for YouTube. Built for the Contra Flowstep Challenge.", stack: "TypeScript", url: "https://github.com/zanni098/bumper-site" },
      { title: "markuce-web", cat: "Marketing site", blurb: "Marketing site for the Markuce payment platform: Next.js 14, live crypto prices and a particle network.", stack: "Next.js · Motion", url: "https://github.com/zanni098/markuce-web" },
    ],
  },
  {
    title: "Payments & Fintech",
    lede: "Rails that move money anywhere, compliant and non-custodial.",
    items: [
      { title: "onramp", cat: "Payments", blurb: "Non-custodial stablecoin payment gateway. Accept USDC and USDT on Solana and Polygon with instant settlement.", stack: "TypeScript · Solana · Polygon", url: "https://github.com/zanni098/onramp" },
      { title: "markuce", cat: "Payments platform", blurb: "Global Merchant of Record payment platform. Accept payments from anywhere, powered by Stripe Connect and Chainlink.", stack: "TypeScript · Stripe · Chainlink", url: "https://github.com/zanni098/markuce" },
    ],
  },
  {
    title: "Open-source tools",
    lede: "Small, sharp utilities that make daily work faster for makers and agents alike.",
    items: [
      { title: "triagekit", cat: "GitHub tooling", blurb: "Generate polished GitHub issue templates in seconds, for bug reports, feature requests and support.", stack: "TypeScript", url: "https://github.com/zanni098/triagekit" },
      { title: "NutriSnap", cat: "AI product", blurb: "Snap a meal photo and get calories, macros and a full breakdown via Gemini vision.", stack: "TypeScript · Gemini", url: "https://github.com/zanni098/nutrisnap" },
      { title: "loop-engineering-skill", cat: "Agent skill", blurb: "A portable Agent Skill that teaches autonomous, self-verifying loops with maker-checker verification.", stack: "SKILL.md", url: "https://github.com/zanni098/loop-engineering-skill" },
    ],
  },
];

const stats = [
  { value: "30+", label: "public repositories" },
  { value: "4", label: "disciplines" },
  { value: "100%", label: "open source" },
  { value: "∞", label: "experiments a year" },
];

function Work() {
  useScrollParallax();
  useScrollReveal();
  let idx = 0;
  return (
    <main className="site">
      <SiteNav />
      <section className="page">
        <div className="page-hero">
          <SectionHead kicker="Selected work" title="From idea to system." lede="A long, open archive of projects across AI, web, payments and tooling. Every piece is open source. Full source on GitHub, client work on Contra." />
          <div className="page-hero__actions"><a className="cta cta--gold" href="https://github.com/zanni098" target="_blank" rel="noreferrer">View all on GitHub</a><a className="cta cta--ghost" href="https://zucchhini.contra.com/" target="_blank" rel="noreferrer">Client work on Contra</a></div>
        </div>
        <div className="work-stats">{stats.map((s, i) => <div className="stat" data-reveal key={s.label} style={{ transitionDelay: `${i * 60}ms` }}><span className="stat__value">{s.value}</span><span className="stat__label">{s.label}</span></div>)}</div>
        {categories.map((cat) => (
          <section className="work-cat" key={cat.title} data-reveal>
            <header className="work-cat__head"><h2 className="work-cat__title">{cat.title}</h2><p className="work-cat__lede">{cat.lede}</p></header>
            <div className="work-grid work-grid--page">{cat.items.map((p) => { const plate = plates[idx % plates.length]; idx += 1; return <a className="work-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}><div className="work-card__frame" data-parallax="0.05" data-zoom="0.04"><img className="work-card__img" src={plate} alt={p.title} loading="lazy" decoding="async" /></div><div className="work-card__meta"><span className="work-card__cat">{p.cat}</span><span className="work-card__title">{p.title}</span><span className="work-card__arrow" aria-hidden="true">→</span></div><p className="work-card__blurb">{p.blurb}</p><p className="work-card__stack">{p.stack}</p></a>; })}</div>
          </section>
        ))}
        <section className="work-cta" data-reveal>
          <h2 className="work-cta__title">Client work, on Contra.</h2>
          <p className="work-cta__body">Beyond open source, I take on client projects through my Contra profile, where you can request a partnership and pay however you like.</p>
          <div className="work-cta__actions"><a className="cta cta--light" href="https://zucchhini.contra.com/" target="_blank" rel="noreferrer">Browse my Contra</a><a className="cta cta--ghost" href="mailto:zuhaibkhann098@gmail.com">Or email me first</a></div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}