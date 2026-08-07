import { useEffect, useState, type ReactNode } from "react";

export function useScrollParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const ty = -center * speed;
        let scale = 1;
        if (el.dataset.zoom !== undefined) {
          const p = Math.max(-0.5, Math.min(0.5, center / vh));
          scale = 1 + Math.abs(p) * parseFloat(el.dataset.zoom || "0.06");
        }
        el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
}

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;
    if (reduced) { els.forEach((el) => el.classList.add("reveal--in")); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) { if (entry.isIntersecting) { entry.target.classList.add("reveal--in"); obs.unobserve(entry.target); } }
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function SceneOrnaments({ items }: { items?: "ring" | "coin" | "spark"[] }) {
  const set = items ?? ["ring", "coin", "spark"];
  return (
    <div className="scene-orn" aria-hidden="true">
      {set.includes("ring") && (<span className="orn orn--ring" data-parallax="0.5" data-zoom="0.04"><svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" /><circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="0.75" opacity="0.6" /></svg></span>)}
      {set.includes("coin") && (<span className="orn orn--coin" data-parallax="0.42" data-zoom="0.05"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" /><circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="0.7" opacity="0.7" /></svg></span>)}
      {set.includes("spark") && (<span className="orn orn--spark" data-parallax="0.55" data-zoom="0.05"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg></span>)}
    </div>
  );
}

export function FgFigure({ src, alt, side = "left", width = 40, speed = 0.34, zoom = 0.05 }: { src: string; alt: string; side?: "left" | "right"; width?: number; speed?: number; zoom?: number; }) {
  return (
    <div className={`fg-figure fg-figure--${side}`} data-parallax={String(speed)} data-zoom={String(zoom)} style={{ width: `${width}%` }}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export function DepthScene({ img, alt, zoom = 0.08, speed = 0.18, foreground, children }: { img: string; alt: string; zoom?: number; speed?: number; foreground?: ReactNode; children: ReactNode; }) {
  return (
    <section className="hero-panel">
      <img className="hero-panel__img" src={img} alt={alt} data-parallax={String(speed)} data-zoom={String(zoom)} />
      {foreground}
      <SceneOrnaments />
      <div className="hero-panel__inner">{children}</div>
    </section>
  );
}

export function SectionRail({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) { const idx = sections.indexOf(visible[0].target as HTMLElement); if (idx >= 0) setActive(idx); }
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);
  const go = (id: string) => { if (typeof window === "undefined") return; const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return (
    <nav className="section-rail" aria-label="Sections">
      {items.map((item, i) => (
        <button key={item.id} type="button" className={`section-rail__item${i === active ? " section-rail__item--active" : ""}`} onClick={() => go(item.id)} aria-current={i === active ? "true" : undefined}>
          <span className="section-rail__dot" aria-hidden="true" />
          <span className="section-rail__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}