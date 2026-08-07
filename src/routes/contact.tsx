import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { useScrollParallax } from "@/components/site/scroll-effects";
import { Plate, SectionHead } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "Contact | LGPSM" }] }), component: Contact });

const CONTACT_EMAIL = "zuhaibkhann098@gmail.com";

const channels = [
  { label: "Contra", href: "https://zucchhini.contra.com/", note: "Client work & requests" },
  { label: "GitHub", href: "https://github.com/zanni098", note: "Open-source code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asad-jehan-zeb-66b920276", note: "Connect" },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, note: CONTACT_EMAIL },
];

const payments = [
  { label: "Contra", href: "https://zucchhini.contra.com/", note: "Pay via my Contra profile" },
  { label: "Gumroad", href: "https://gumroad.com", note: "Digital products" },
  { label: "Polar", href: "https://polar.sh", note: "Open-source funding" },
];

function Contact() {
  useScrollParallax();
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}

From: ${name} (${from || "no email given"})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <main className="site">
      <SiteNav />
      <section className="page page--contact">
        <div className="contact-hero__grid">
          <div className="contact-hero__copy">
            <SectionHead kicker="Contact" title="Let's build your new Renaissance." lede="Have a product, a site, or an idea worth making beautiful? Send a note and I'll get back to you." />
            <form className="contact-form" onSubmit={submit}>
              <label className="contact-form__field"><span>Your name</span><input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" /></label>
              <label className="contact-form__field"><span>Your email</span><input type="email" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="you@example.com" /></label>
              <label className="contact-form__field"><span>Message</span><textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project..." /></label>
              <button className="cta cta--gold" type="submit">Send message</button>
              <p className="contact-form__hint">Opens your email app with your message ready to send to {CONTACT_EMAIL}.</p>
            </form>
            <div className="contact-channels">{channels.map((c) => <a key={c.href} className="channel" href={c.href} target="_blank" rel="noreferrer"><span className="channel__label">{c.label}</span><span className="channel__note">{c.note}</span><span className="channel__arrow" aria-hidden="true">→</span></a>)}</div>
          </div>
          <div data-parallax="0.1"><Plate ratio="portrait" src="/assets/plates/p6-phone.png" alt="Renaissance man holding a smartphone" caption="Even the old masters answered quickly." /></div>
        </div>
        <div className="contact-steps">
          <SectionHead title="What happens next." lede="Three simple steps from hello to launch." />
          <div className="contact-steps__grid">
            <div className="step" data-reveal><span className="step__num">01</span><h3 className="step__title">Say hello</h3><p className="step__body">Send a note with the shape of your project, your timeline and any constraints.</p></div>
            <div className="step" data-reveal><span className="step__num">02</span><h3 className="step__title">We talk & scope</h3><p className="step__body">A short call to clarify the goal, the audience and what success looks like.</p></div>
            <div className="step" data-reveal><span className="step__num">03</span><h3 className="step__title">We build & ship</h3><p className="step__body">Deliberate craft from first sketch to launch, with you in the loop throughout.</p></div>
          </div>
        </div>
        <div className="pay">
          <SectionHead title="Ways to pay or support." lede="Choose whatever works for you." />
          <div className="pay__grid">{payments.map((p) => <a key={p.label} className="channel" href={p.href} target="_blank" rel="noreferrer"><span className="channel__label">{p.label}</span><span className="channel__note">{p.note}</span><span className="channel__arrow" aria-hidden="true">→</span></a>)}</div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}