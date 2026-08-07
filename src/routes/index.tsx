import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { DepthScene, FgFigure, SectionRail, useScrollParallax, useScrollReveal } from "@/components/site/scroll-effects";
import { Plate, SectionHead } from "@/components/site/sections";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({ component: Index });

const stats = [
  { value: "40+", label: "open-source projects" },
  { value: "AI", label: "agent engineering" },
  { value: "Web", label: "product & design" },
  { value: "Pay", label: "fintech & payments" },
  { value: "9+", label: "languages & tools" },
  { value: "∞", label: "curious about" },
];

const marqueeItems = ["AI AGENT ENGINEERING", "WEB DESIGN", "PRODUCT", "PAYMENTS", "OPEN SOURCE", "MOTION", "DEV TOOLING"];

const caps = [
  { src: "/assets/plates/p7-adam.png", title: "AI Agent Engineering", body: "Runtimes, MCP servers, skills and autonomous loops. Production-grade agents with real memory and tooling.", tag: "01" },
  { src: "/assets/plates/p4-woman.png", title: "Web & Product Design", body: "Interfaces that feel like frescoes, every layer deliberate, every detail earning its place.", tag: "02" },
  { src: "/assets/plates/p6-phone.png", title: "Payments & Fintech", body: "Merchant of record, stablecoin gateways and non-custodial rails built to move money anywhere.", tag: "03" },
  { src: "/assets/plates/p1-hermes.png", title: "Developer Tooling", body: "CLI factories, prompt testing, issue templates. The quiet tools that make agents better.", tag: "04" },
];

const featured = [
  { src: "/assets/plates/p4-woman.png", title: "Anomalithic", cat: "AI agent runtime", blurb: "Open-core, model-agnostic agent runtime: MCP, skills, hooks, multi-agent, cross-session memory.", stack: "TypeScript", url: "https://github.com/zanni098/Anomalithic" },
  { src: "/assets/plates/p8-muses.png", title: "NutriSnap", cat: "AI product", blurb: "Snap a meal photo and get calories, macros and a full breakdown via Gemini vision.", stack: "TypeScript · Gemini", url: "https://github.com/zanni098/nutrisnap" },
  { src: "/assets/plates/p1-hermes.png", title: "DuckTap", cat: "Developer tooling", blurb: "Tape any API to your agent in one command. CLI factory for Python CLIs, MCP servers and skills.", stack: "Python", url: "https://github.com/zanni098/DuckTap" },
  { src: "/assets/plates/p7-adam.png", title: "mcp-2099", cat: "Web / creative coding", blurb: "Retro-futuristic dev platform UI: React Three Fiber, GLSL shaders, GSAP, bento dashboard.", stack: "TypeScript · R3F", url: "https://github.com/zanni098/mcp-2099" },
  { src: "/assets/plates/p6-phone.png", title: "onramp", cat: "Payments", blurb: "Non-custodial stablecoin gateway. Accept USDC and USDT on Solana and Polygon.", stack: "TypeScript · Solana", url: "https://github.com/zanni098/onramp" },
  { src: "/assets/plates/p9-stylus.png", title: "markuce", cat: "Payments platform", blurb: "Global Merchant of Record platform. Accept payments from anywhere with Stripe Connect and Chainlink.", stack: "TypeScript · Stripe", url: "https://github.com/zanni098/markuce" },
];

const process = [
  { n: "01", title: "Discover", body: "We clarify the problem, the audience and the measure of success before a line is written." },
  { n: "02", title: "Design", body: "Aesthetic direction and systems grounded in the real content, not a generic template." },
  { n: "03", title: "Build", body: "Fast, rigorous engineering with clean architecture, tests and careful craft." },
  { n: "04", title: "Ship", body: "Launch, measure, iterate. The journey continues long after go-live." },
];

const railItems = [
  { id: "gallery", label: "Gallery" },
  { id: "craft", label: "Craft" },
  { id: "work", label: "Work" },
  { id: "muse", label: "Muse" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Index() {
  useScrollParallax();
  useScrollReveal();
  return (
    <main className="site">
      <SiteNav />
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <SectionRail items={railItems} />

      <DepthScene img="/assets/plates/p2-scholars.png" alt="Renaissance scholars at laptops" speed={0.18} zoom={0.08} foreground={<><FgFigure src="/assets/cutouts/c1-hermes-cut.png" alt="Hermes" side="left" width={40} speed={0.34} /><FgFigure src="/assets/cutouts/c3-scholar-cut.png" alt="Scholar" side="right" width={34} speed={0.42} /></>}>
        <h2 className="hero-panel__title">Classical craft, modern speed.</h2>
        <p className="hero-panel__body">Every piece a small world, built with the care of an old master and the speed of a modern stack. From agent runtimes to polished interfaces.</p>
        <div className="hero-panel__actions"><a className="cta cta--light" href="#work">See the work</a><Link className="cta cta--ghostlight" to="/about">About me</Link></div>
      </DepthScene>

      <div className="marquee" aria-hidden="true"><div className="marquee__track">{[0, 1].map((k) => <div className="marquee__group" key={k}>{marqueeItems.map((m) => <span className="marquee__item" key={m}>{m} <span className="marquee__star">✦</span></span>)}</div>)}</div></div>

      <section className="section stats" id="stats"><div className="stats__grid">{stats.map((s, i) => <div className="stat" data-reveal key={s.label} style={{ transitionDelay: `${i * 60}ms` }}><span className="stat__value">{s.value}</span><span className="stat__label">{s.label}</span></div>)}</div></section>

      <section className="section caps" id="craft">
        <div className="section__head"><SectionHead kicker="Capabilities" title="Old craft, new tools." lede="Four disciplines, one way of working: deliberate, rigorous, and always in service of the idea." /></div>
        <div className="caps__grid">{caps.map((c, i) => <article className="cap" data-reveal key={c.title} style={{ transitionDelay: `${i * 70}ms` }}><div className="cap__frame" data-parallax="0.05" data-zoom="0.04"><img className="cap__img" src={c.src} alt={c.title} loading="lazy" decoding="async" /><span className="cap__num">{c.tag}</span></div><h3 className="cap__title">{c.title}</h3><p className="cap__body">{c.body}</p></article>)}</div>
      </section>

      <DepthScene img="/assets/plates/p4-woman.png" alt="Renaissance woman typing" speed={0.16} zoom={0.07} foreground={<FgFigure src="/assets/cutouts/c7-hands-cut.png" alt="Hands" side="right" width={46} speed={0.32} />}>
        <h2 className="hero-panel__title">Every layer, deliberate.</h2>
        <p className="hero-panel__body">Design is composition, motion is pacing, and craft is the sum of a thousand small decisions made well.</p>
        <div className="hero-panel__actions"><Link className="cta cta--light" to="/work">Explore the work</Link></div>
      </DepthScene>

      <section className="section work-preview" id="work">
        <div className="section__head section__head--row"><SectionHead kicker="Selected work" title="From idea to system." lede="Open-source projects across AI, web, tooling and payments, each a careful blend of craft and code." /><a className="cta cta--ghost" href="https://github.com/zanni098" target="_blank" rel="noreferrer">All on GitHub</a></div>
        <div className="work-grid">{featured.map((w, i) => <a className="work-card" href={w.url} target="_blank" rel="noreferrer" key={w.title} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}><div className="work-card__frame" data-parallax="0.05" data-zoom="0.04"><img className="work-card__img" src={w.src} alt={w.title} loading="lazy" decoding="async" /></div><div className="work-card__meta"><span className="work-card__cat">{w.cat}</span><span className="work-card__title">{w.title}</span><span className="work-card__arrow" aria-hidden="true">→</span></div><p className="work-card__blurb">{w.blurb}</p><p className="work-card__stack">{w.stack}</p></a>)}</div>
      </section>

      <section className="section process" id="process"><div className="section__head"><SectionHead kicker="Process" title="How I work." lede="A calm, deliberate method in four movements. No chaos, just craft." /></div><div className="process__grid">{process.map((p, i) => <div className="step" data-reveal key={p.n} style={{ transitionDelay: `${i * 80}ms` }}><span className="step__num">{p.n}</span><h3 className="step__title">{p.title}</h3><p className="step__body">{p.body}</p></div>)}</div></section>

      <section className="section about-preview" id="about"><div className="about-preview__grid"><div data-parallax="0.1" data-zoom="0.05"><Plate ratio="portrait" src="/assets/plates/p3-scholar.png" alt="Scholar with laptop and cat" caption="The scholar's study, a quiet place to focus." /></div><div className="about-preview__copy" data-reveal><SectionHead title="A modern polymath." lede="AI agent engineer, designer and builder who treats technology like a fresco: every layer deliberate." /><div className="about-preview__cta"><Link className="cta cta--gold" to="/about">My story</Link><a className="cta cta--ghost" href="https://zucchhini.contra.com/" target="_blank" rel="noreferrer">Contra work</a></div></div></div></section>

      <section className="section quote" data-reveal><p className="quote__text">Execution is free. Judgment is everything.</p><p className="quote__cite">the working principle, every day</p></section>

      <DepthScene img="/assets/plates/p9-stylus.png" alt="Scholar drawing on laptop" speed={0.15} zoom={0.07} foreground={<FgFigure src="/assets/cutouts/c5-ruler-cut.png" alt="Ruler" side="right" width={38} speed={0.32} />}>
        <h2 className="hero-panel__title">Your project deserves a new Renaissance.</h2>
        <div className="hero-panel__actions"><Link className="cta cta--light" to="/contact">Get in touch</Link><a className="cta cta--ghostlight" href="mailto:zuhaibkhann098@gmail.com">Email me</a></div>
      </DepthScene>

      <SiteFooter />
    </main>
  );
}