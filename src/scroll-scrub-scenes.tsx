import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { Link } from "@tanstack/react-router";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D1A74E",
  background: "#17120D",
  ink: "#FAF4E8",
  muted: "#CFC4B0",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "hero",
    label: "Home",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    kicker: "Asad Jehan Zeb · AI Agent Engineer",
    title: "Make the web feel like a new Renaissance.",
    body: "I build expressive, rigorous digital products where classical craft meets modern technology, from agent runtimes to polished interfaces.",
    tags: ["AI Agent Engineering", "Web Design", "Payments"],
    align: "left",
    scroll: 2.2,
    actions: (
      <div className="hero-cta">
        <Link className="cta cta--light" to="/work">View the work</Link>
        <Link className="cta cta--ghostlight" to="/contact">Get in touch</Link>
      </div>
    ),
  },
];