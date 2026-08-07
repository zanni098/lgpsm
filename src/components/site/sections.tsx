import type { ReactNode } from "react";

export function SectionHead({ kicker, title, lede }: { kicker?: string; title: ReactNode; lede?: ReactNode; }) {
  return (
    <header className="section-head">
      {kicker ? <p className="section-head__kicker">{kicker}</p> : null}
      <h2 className="section-head__title">{title}</h2>
      {lede ? <p className="section-head__lede">{lede}</p> : null}
    </header>
  );
}

export function Plate({ src, alt, caption, ratio, tag }: { src: string; alt: string; caption?: string; ratio?: string; tag?: string; }) {
  return (
    <figure className="plate">
      <div className={`plate__frame${ratio ? ` plate__frame--${ratio}` : ""}`}>
        <img className="plate__img" src={src} alt={alt} loading="lazy" decoding="async" />
        {tag ? <span className="plate__tag">{tag}</span> : null}
      </div>
      {caption ? <figcaption className="plate__caption">{caption}</figcaption> : null}
    </figure>
  );
}