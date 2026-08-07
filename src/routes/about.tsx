import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { useScrollParallax, useScrollReveal } from "@/components/site/scroll-effects";
import { Plate, SectionHead } from "@/components/site/sections";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [{ title: "About | LGPSM" }] }), component: About });

const focus = [
  { title: "Agent runtimes", body: "Systems where AI agents work reliably, with memory, tools and auditability." },
  { title: "MCP & tooling", body: "Making any API speak to any agent, so tooling compounds instead of fragments." },
  { title: "Payments rails", body: "Merchant of record and stablecoin infrastructure built for a global internet." },
  { title: "Cinematic web", body: "Interfaces with depth and motion, where craft and code meet like old masters." },
];

const timeline = [
  { year: "Now", title: "AI agent engineer", body: "Building open-source runtimes, MCP servers, skills and autonomous loops. Working across the full stack of making agents useful." },
  { year: "Earlier", title: "Project manager", body: "Led product delivery and cross-functional teams, which still shapes how I scope and ship every project today." },
  { year: "Practice", title: "Portfolio & client work", body: "A running collection of projects and client work, kept live on my Contra profile with flexible payment options." },
  { year: "History", title: "Education & certificates", body: "My full work history, education and certificates live on LinkedIn, kept current and public." },
];

const skills = [
  { head: "AI & Agents", items: ["AI agent runtimes", "MCP servers & skills", "Multi-agent systems", "Prompt evaluation", "Autonomous loops"] },
  { head: "Engineering", items: ["TypeScript / React", "Python", "Node.js", "CLI tooling", "Testing & CI"] },
  { head: "Design", items: ["Interface design", "Motion & scroll", "Design systems", "Creative coding", "Typographic craft"] },
  { head: "Payments", items: ["Merchant of record", "Stablecoin gateways", "Stripe Connect", "Chainlink", "Non-custodial rails"] },
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asad-jehan-zeb-66b920276", note: "History & certificates" },
  { label: "Contra", href: "https://zucchhini.contra.com/", note: "Portfolio & client work" },
  { label: "GitHub", href: "https://github.com/zanni098", note: "Code & open source" },
  { label: "Email", href: "mailto:zuhaibkhann098@gmail.com", note: "zuhaibkhann098@gmail.com" },
];

function About() {
  useScrollParallax();
  useScrollReveal();
  return (
    <main className="site">
      <SiteNav />
      <section className="page">
        <div className="about-hero">
          <div data-parallax="0.1" data-zoom="0.05"><Plate ratio="portrait" src="/assets/plates/p3-scholar.png" alt="Renaissance scholar with laptop and cat" /></div>
          <div className="about-hero__copy" data-reveal>
            <SectionHead kicker="About" title="A modern polymath." lede="I'm Asad Jehan Zeb, an AI agent engineer, designer and builder working at the frontier of AI-assisted making. I treat technology like a fresco: every layer deliberate, every detail earning its place." />
            <p className="about-hero__text">The web is my canvas, and I believe it deserves a new Renaissance. That means building with the rigor of an old master and the speed of a modern stack: agent runtimes that actually work, interfaces that feel alive, and payment rails that move money anywhere it needs to go.</p>
            <div className="about-hero__links">{links.map((l) => <a key={l.href} className="cta cta--ghost cta--sm" href={l.href} target="_blank" rel="noreferrer">{l.label} · {l.note}</a>)}</div>
          </div>
        </div>
        <section className="focus" id="focus"><SectionHead title="What I'm building." lede="Four threads I'm pulling at the frontier of making." /><div className="focus__grid">{focus.map((f, i) => <div className="focus-card" data-reveal key={f.title} style={{ transitionDelay: `${i * 70}ms` }}><h3 className="focus-card__title">{f.title}</h3><p className="focus-card__body">{f.body}</p></div>)}</div></section>
        <section className="timeline" id="timeline"><SectionHead title="A short history." />{timeline.map((t) => <div className="timeline__item" data-reveal key={t.year}><span className="timeline__year">{t.year}</span><div className="timeline__body"><h3 className="timeline__title">{t.title}</h3><p className="timeline__text">{t.body}</p></div></div>)}</section>
        <section className="skills" id="skills"><SectionHead title="What I work with." /><div className="skills__grid">{skills.map((s, i) => <div className="skill-col" data-reveal key={s.head} style={{ transitionDelay: `${i * 70}ms` }}><h3 className="skill-col__head">{s.head}</h3><ul className="skill-col__list">{s.items.map((it) => <li key={it}>{it}</li>)}</ul></div>)}</div></section>
        <section className="quote" data-reveal><p className="quote__text">Execution is free. Judgment is everything.</p><p className="quote__cite">Asad Jehan Zeb</p></section>
        <section className="about-cta" data-reveal><h2 className="about-cta__title">Let's build something worth remembering.</h2><div className="about-cta__actions"><a className="cta cta--gold" href="https://zucchhini.contra.com/" target="_blank" rel="noreferrer">Request a partnership</a><a className="cta cta--ghost" href="mailto:zuhaibkhann098@gmail.com">Email me</a></div></section>
      </section>
      <SiteFooter />
    </main>
  );
}